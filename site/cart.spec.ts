/**
 * Cart page visual regression - /cart
 *
 * Covers the three states of the checkout form (before PayPal): empty cart,
 * product in cart with blank billing form, and product with the form filled.
 * Desktop and Mobile widths. Does not proceed to payment.
 *
 * Baselines are generated on the CI platform (linux):
 *   npx playwright test --project=site cart --update-snapshots
 */
import type { Locator, Page } from '@playwright/test';
import { test, expect, siteUrl as url, acceptCookieBanner, compareScreenshot, selectCountry, screens } from '../helper';

const CART = '.v2-class---cart-page';

const viewports = [
  { name: 'desktop', size: screens['Desktop'] },
  { name: 'mobile', size: screens['Mobile'] },
] as const;

async function openEmptyCart(page: Page, viewport: { width: number, height: number }): Promise<void> {
  await page.setViewportSize(viewport);
  await page.goto(`${url}/cart`);
  await acceptCookieBanner(page);
  await expect(page.locator(CART)).toBeVisible();
  await expect(page.locator('.v2-class---empty-cart__title')).toBeVisible();
}

async function addProductFromPricing(page: Page, viewport: { width: number, height: number }): Promise<void> {
  await page.setViewportSize(viewport);
  await page.goto(`${url}/pricing`);
  await acceptCookieBanner(page);
  // Same product as payment.spec.ts (addToCart(4)). On mobile the pricing column is
  // off-screen, so call addToCart directly instead of clicking the hidden Buy Now.
  await page.waitForFunction(() => typeof (window as any).addToCart === 'function', undefined, { timeout: 60000 }); // eslint-disable-line @typescript-eslint/no-explicit-any
  await Promise.all([
    page.waitForURL(/\/cart/),
    page.evaluate(() => (window as any).addToCart(4)), // eslint-disable-line @typescript-eslint/no-explicit-any
  ]);
  await expect(page.locator('.v2-class---cart-item').first()).toBeVisible();
}

async function fillCartForm(page: Page): Promise<void> {
  await page.getByRole('combobox', { name: 'Qty' }).click();
  await page.getByRole('option', { name: '3', exact: true }).locator('div').click();
  await expect(page.getByRole('option', { name: '3', exact: true })).toHaveCount(0);

  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Tester Name');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('Email').fill('tester@surveyjs.io');
  await page.getByPlaceholder('Email').press('Tab');
  await selectCountry(page, 'Argentina');
  await page.getByPlaceholder('Company Name').fill('Tester Company');
  await page.getByPlaceholder('Postal Code').fill('123456');
  await page.getByPlaceholder('Address').fill('Test adress');
  await page.getByPlaceholder('Phone').fill('+34567890123');

  await page.locator('.v2-class---info-panel-cart .v2-class---checkbox__checkmark--in-panel').click();
}

/** Exp. Date is "today + 1 year" and would break baselines every day. */
function expDateMask(page: Page): Locator[] {
  return [page.locator('.v2-class---cart-item td').nth(3)];
}

async function shot(page: Page, name: string, mask?: Locator[]): Promise<void> {
  // Defocus inputs (caret / validation flash) without relying on blur() during scroll.
  await page.locator(`${CART} h1`).click({ force: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  const viewport = page.viewportSize();
  const box = await page.locator(CART).boundingBox();
  if (viewport && box) {
    // Grow the viewport so the element screenshot does not scroll; a sticky top bar
    // otherwise paints into the middle of the stitched capture.
    await page.setViewportSize({
      width: viewport.width,
      height: Math.max(viewport.height, Math.ceil(box.height) + 50)
    });
  }
  await page.addStyleTag({
    content: '.v2-class---top-bar { display: none !important; } * { caret-color: transparent !important; }'
  });
  await compareScreenshot(page, page.locator(CART), `cart-${name}.png`, 0, undefined, mask);
}

for (const { name, size } of viewports) {
  test(`Empty cart: ${name}`, async ({ page }) => {
    await openEmptyCart(page, size);
    await shot(page, `empty-${name}`);
  });

  test(`Cart with product, empty form: ${name}`, async ({ page }) => {
    await addProductFromPricing(page, size);
    await shot(page, `product-empty-form-${name}`, expDateMask(page));
  });

  test(`Cart with product, filled form: ${name}`, async ({ page }) => {
    await addProductFromPricing(page, size);
    await fillCartForm(page);
    await shot(page, `product-filled-form-${name}`, expDateMask(page));
  });
}

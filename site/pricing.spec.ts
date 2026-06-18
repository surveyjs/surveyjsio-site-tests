import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

test('Pricing buy test', async ({ page }) => {
  await page.goto(`${url}/Account/Login`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await acceptCookieBanner(page);

  const email = 'surveyjstest@gmail.com';
  const password = 'Surveyjstest1';

  const emailInput = page.locator('#Email');
  const passwordInput = page.locator('#Password');
  const loginButton = page.locator('main a').filter({ hasText: 'Log In', visible: true }).first();
  const acceptTermsCheckboxLogin = page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io', visible: true }).locator('.v2-class---checkbox__checkmark').first();

  await emailInput.first().fill(email);
  await passwordInput.first().fill(password);
  await acceptTermsCheckboxLogin.click();
  await loginButton.click();

  const pricingAccountLink = page.locator('.v2-class---top-menu-item a').filter({ hasText: 'Pricing', visible: true }).first();
  const buyButton = page.locator('a').filter({ hasText: 'Buy Now', visible: true }).first();

  await pricingAccountLink.click();
  // "Buy Now" calls the global addToCart, defined by a script that can still be loading
  // after a slow/cold page render; wait for it before clicking, otherwise the click
  // throws "addToCart is not defined" (caught by the page-error guard in helper.ts).
  await page.waitForFunction(() => typeof (window as any).addToCart === 'function', undefined, { timeout: 60000 }); // eslint-disable-line @typescript-eslint/no-explicit-any
  await buyButton.click();
});
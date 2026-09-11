import type { Locator, Page } from '@playwright/test';
import { expect, test as baseTest } from '@playwright/test';

export const examplesURL = 'https://surveyjstest.azurewebsites.net';
export const siteUrl = process.env.SITE_URL || 'https://surveyjsio-test.azurewebsites.net';
// export const examplesURL = 'http://localhost:62946';
// export const siteUrl = 'http://localhost:62946';

/**
 * Routes each suite exercises, consumed by the warmup projects. On a freshly
 * cold-started Azure slot the warmup pre-loads these serially so each page's
 * costly server-side first-hit compilation happens once, in warmup, instead of
 * 8x under the parallel test surge. When you add a test that visits a NEW page,
 * add its path here so the warmup covers it.
 */
export const siteWarmupPaths = [
  '/',
  '/pricing',
  '/cart',
  '/login',
  '/signup',
  '/manage',
  '/service',
  '/Account',
  '/form-library',
  '/Examples',
  '/faq',
  '/faq/licensing',
  '/documentation',
  '/stay-updated',
  '/find-surveyjs-guides-for-my-stack',
];

// Examples pages are parametrized (hundreds of ids), so we can't enumerate them all;
// one representative URL per route family is enough to compile each controller.
export const examplesWarmupPaths = [
  '/form-library/examples/order-form-template-free/reactjs',
  '/survey-creator/examples/survey-creator-interface-localization/knockoutjs',
  '/Examples/Pdf-Export?id=survey-pdf-export',
  '/Examples/Analytics?id=nps-direct&platform=Reactjs',
  '/Examples/Library?id=questiontype-text&platform=Knockoutjs&theme=default',
  '/Examples/Survey-Creator?id=options&theme=default&platform=Knockoutjs',
  '/Examples/Builder?id=customwidgets&platform=reactjs',
];

export const screens = {
  'Large-Desktop': { width: 1920, height: 1080 },
  'Desktop': { width: 1366, height: 768 },
  'Tablet': { width: 1024, height: 744 },
  'Vertical-Tablet': { width: 744, height: 1024 },
  'Mobile': { width: 375, height: 667 }
};

export async function compareScreenshot(page: Page, elementSelector: string | Locator | undefined, screenshotName: string, elementIndex = 0, maxDiffPixels?:number, mask?: Array<Locator>) {
  let currentElement = elementSelector;
  if (!!currentElement && typeof currentElement == 'string') {
    currentElement = page.locator(currentElement);
  }

  const options: {timeout: number, maxDiffPixels?: number, mask?: Array<Locator>} = {
    timeout: 10000
  };

  if (maxDiffPixels) options.maxDiffPixels = maxDiffPixels;
  if (mask) options.mask = mask;

  if (!!currentElement) {
    const element = (<any>currentElement).filter({ visible: true });
    await expect.soft(element.nth(elementIndex)).toBeVisible();
    await expect.soft(element.nth(elementIndex)).toHaveScreenshot(screenshotName, options);
  } else {
    await expect.soft(page).toHaveScreenshot(screenshotName, options);
  }
}

export async function acceptCookieBanner(page: Page): Promise<void> {
  const acceptAll = page.locator('a').filter({ hasText: 'Accept All' });
  const visible = acceptAll.filter({ visible: true }).first();
  // After accept the link stays in the DOM but hidden. A second click() then
  // waits the full actionTimeout for visibility — that's the CI failure after
  // home already dismissed the banner and login navigates.
  if (await acceptAll.count() > 0 && !(await visible.isVisible())) {
    return;
  }
  await visible.click();
}

/** Pre-seeded account on the test slot. Used by read-only /manage checks. */
export const surveyJsTestUser = {
  email: 'surveyjstest@gmail.com',
  password: 'Surveyjstest1',
};

export async function loginSurveyJsTestUser(page: Page): Promise<void> {
  await page.goto(`${siteUrl}/login`);
  await acceptCookieBanner(page);
  await page.locator('#Email').first().fill(surveyJsTestUser.email);
  await page.locator('#Password').first().fill(surveyJsTestUser.password);
  await page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io', visible: true }).locator('.v2-class---checkbox__checkmark').first().click();
  await page.locator('main a').filter({ hasText: 'Log In', visible: true }).first().click();
  await expect(page.locator('.v2-class---top-menu-item--drop-down-account').first()).toBeVisible({ timeout: 30000 });
}

/**
 * Selects a country in the cart's SurveyJS dropdown reliably. Going through the
 * type-to-filter path (instead of a raw option click from the full list) is what
 * fires the value-change the cart reacts to (e.g. VAT recompute), and filtering
 * makes the option unambiguous - a plain getByText also matches the filter-string
 * echo and trips strict mode. Works for both the first and subsequent selections.
 */
export async function selectCountry(page: Page, countryName: string): Promise<void> {
  const combo = page.getByRole('combobox', { name: 'Country' });
  await combo.scrollIntoViewIfNeeded();
  // Tabbing in (or a previous open) can leave aria-expanded=true with no list.
  // Escape back to closed, then click so the list actually mounts.
  await combo.focus();
  await combo.press('Escape');
  await combo.click();
  // Qty changes re-render the cart; the dropdown can open empty for a beat. Filter
  // against that empty list sticks on "No data to display" and never recovers.
  await expect(page.getByRole('option').first()).toBeVisible();
  await combo.fill(countryName);
  // The filtered item is focused, but on a short mobile viewport the list sits
  // below the fold in a fixed popup — Playwright's click then loops on
  // "element is outside of the viewport". Enter commits the focused option.
  await expect(page.getByRole('option', { name: countryName, exact: true })).toBeVisible();
  await combo.press('Enter');
  await expect(combo).toHaveValue(countryName);
}

export const test = baseTest.extend<{page: void, skipJSErrors: boolean}>({
  skipJSErrors: [false, { option: false }],
  page: async ({ page, skipJSErrors }, use) => {
    const errors: Array<Error> = [];
    page.addListener('pageerror', (error) => {
      errors.push(error);
    });
    await use(page);
    if (!skipJSErrors) {
      expect(errors).toHaveLength(0);
    }
  }
});
export { expect };
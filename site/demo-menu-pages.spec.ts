import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

// Entry pages of the "Demos" top-menu that are served by the site slot.
// Basic rendering of /themes/theme-adapters and /backend-integration/examples
// is covered by landing-pages.spec.ts.

test('All-in-One Demo loads the full creator and switches to Preview', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/create-free-survey`);
  await acceptCookieBanner(page);

  await expect(page.locator('.svc-creator').first()).toBeVisible({ timeout: 60000 });

  // First visit shows a guided tour whose dimmer intercepts clicks; dismiss it.
  const dimmer = page.locator('.v2-class---tour-dimmer').first();
  await dimmer.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
  if (await dimmer.isVisible()) {
    await page.locator('#site-tour [class*="close"]').first().click();
    await expect(dimmer).toBeHidden();
  }

  const tab = (name: string) => page
    .locator('.svc-tabbed-menu-item')
    .filter({ visible: true })
    .filter({ hasText: name })
    .first();
  await expect(tab('Designer')).toBeVisible();

  await tab('Preview').click();
  // The "--selected" modifier on the tab is the reliable signal that the
  // creator switched modes (the preview surface reuses designer classes).
  await expect(tab('Preview')).toHaveClass(/selected/);
});

test('Try Yourself page lists all four products with demo links', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/try`);
  await acceptCookieBanner(page);

  await expect(page.locator('h1').filter({ visible: true }).first()).toContainText(/Build JSON Forms and Surveys/);
  for (const product of ['SurveyJS Form Library', 'SurveyJS Survey Creator', 'SurveyJS Dashboard', 'SurveyJS PDF Generator']) {
    await expect(page.locator('h2').filter({ hasText: product }).first()).toBeAttached();
  }
  // Each product card links to its demos.
  for (const prefix of ['/form-library/examples/', '/survey-creator/examples/', '/dashboard/examples/', '/pdf-generator/examples/']) {
    await expect(page.locator(`main a[href^="${prefix}"], article a[href^="${prefix}"]`).first()).toBeAttached();
  }
});

test('Backend integration page offers the all-in-one demo CTA', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/backend-integration/examples`);
  await acceptCookieBanner(page);

  const demoCta = page.locator('main a, article a').filter({ hasText: 'View All-in-One Demo' }).first();
  await expect(demoCta).toBeAttached();
  await expect(page.locator('h2').filter({ hasText: 'Ready to Try?' }).first()).toBeAttached();
});

test('Theme adapters page links to the three adapter demos and resources', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/themes/theme-adapters`);
  await acceptCookieBanner(page);

  for (const host of ['bootstrap-theme-adapter.demos.surveyjs.io', 'mui-theme-adapter.demos.surveyjs.io', 'shadcn-theme-adapter.demos.surveyjs.io']) {
    await expect(page.locator(`main a[href*="${host}"], article a[href*="${host}"]`).first(), `${host} demo link`).toBeAttached();
  }
  await expect(page.locator('main a[href*="github.com/surveyjs/theme-adapter"], article a[href*="github.com/surveyjs/theme-adapter"]').first()).toBeAttached();
  await expect(page.locator('a[href="/documentation/design-tokens-css-customization"]').first()).toBeAttached();
});

import { test, expect, acceptCookieBanner, examplesURL as url } from '../../helper';

test('Check tabs 1', async ({ page }) => {
  test.setTimeout(1000000);

  await page.goto(`${url}/survey-creator/examples/survey-creator-interface-localization/knockoutjs`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('.svc-tabbed-menu-item__text').filter({ hasText: 'Test', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item__text').filter({ hasText: 'Logik', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item__text').filter({ hasText: 'JSON', visible: true }).first()).toBeVisible();

  const codeTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Code', visible: true }).first();
  const documentationTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Documentation', visible: true }).first();
  const demoTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Demo', visible: true }).first();

  await expect(codeTab).toBeVisible();

  await codeTab.click();

  await expect(page.locator('span').filter({ hasText: ' Override individual translations in an existing locale', visible: true }).first()).toBeVisible();

  const indexHtmlTab = page.locator('span').filter({ hasText: 'index.html', visible: true }).first();
  await indexHtmlTab.click();

  await expect(page.locator('pre').filter({ hasText: 'id="surveyCreatorContainer"', visible: true }).first()).toContainText('<div');

  await documentationTab.click();

  await expect(page.locator('a').filter({ hasText: 'dictionary files', visible: true }).first()).toHaveAttribute('href', 'https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization');
  await expect(page.locator('a').filter({ hasText: 'English dictionary', visible: true }).first()).toHaveAttribute('href', 'https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/src/localization/english.ts');

  await demoTab.click();

  await expect(page.locator('span').filter({ hasText: 'Wahrheitswert', visible: true }).first()).toBeVisible();
});
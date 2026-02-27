import { test, expect, acceptCookieBanner, examplesURL as url } from '../../helper';

test('Check custom widgets default tabs', async ({ page }) => {
  test.setTimeout(1000000);

  await page.goto(`${url}/Examples/Builder?id=customwidgets&platform=reactjs`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const codeTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Code', visible: true }).first();
  const demoTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Demo', visible: true }).first();
  const codeContent = page.locator('code').first();

  const indexHtmlTab = page.locator('span').filter({ hasText: 'index.html', visible: true }).first();
  const packageJsonTab = page.locator('span').filter({ hasText: 'package.json', visible: true }).first();

  const designerTab = page.locator('span.svc-tabbed-menu-item__text').filter({ hasText: 'Designer', visible: true }).first();
  const previewTab = page.locator('span.svc-tabbed-menu-item__text').filter({ hasText: 'Preview', visible: true }).first();
  const jsonEditorTab = page.locator('span.svc-tabbed-menu-item__text').filter({ hasText: 'JSON Editor', visible: true }).first();

  await codeTab.click();

  await expect(codeContent).toContainText('const creator = new SurveyCreator({ questionTypes: ["text", "checkbox", "radiogroup", "dropdown"] });');

  await indexHtmlTab.click();
  await expect(codeContent).toContainText('ckeditor.js');

  await packageJsonTab.click();
  await expect(codeContent).toContainText('nouislider');
  await expect(codeContent).toContainText('inputmask');
  await expect(codeContent).toContainText('jquery');
  await expect(codeContent).toContainText('jquery-bar-rating');
  await expect(codeContent).toContainText('surveyjs-widgets');

  await demoTab.click();

  await expect(designerTab).toBeVisible();
  await expect(previewTab).toBeVisible();
  await expect(jsonEditorTab).toBeVisible();
});
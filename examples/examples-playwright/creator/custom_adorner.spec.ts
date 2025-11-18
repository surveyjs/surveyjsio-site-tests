import { test, expect, acceptCookieBanner, url } from '../../../helper';

test('Adorner exists', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/create-custom-adorners/reactjs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const adornerSelector = page.locator('.svc-question__content span').filter({ hasText: 'Read-Only', visible: true }).first();
  const jsonEditorTab = page.locator('span').filter({ hasText: 'JSON Editor', visible: true }).first();
  const designerTab = page.locator('span').filter({ hasText: 'Designer', visible: true }).first();
  const singleLineInput = page.locator('span').filter({ hasText: 'Single-Line Input', visible: true }).first();
  const questionContent = page.locator('.svc-question__content').first();

  await questionContent.hover();
  await expect(adornerSelector).toBeVisible();

  await jsonEditorTab.click();

  await page.keyboard.press('Control+A');
  await page.keyboard.press('Delete');

  await designerTab.click();

  await page.waitForTimeout(1000);

  await expect(adornerSelector).toBeHidden();

  await singleLineInput.click();

  await page.waitForTimeout(1000);

  await questionContent.hover();

  await expect(adornerSelector).toBeVisible();
});
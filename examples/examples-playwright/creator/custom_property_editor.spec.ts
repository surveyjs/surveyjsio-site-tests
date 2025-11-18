import { test, expect } from '@playwright/test';
import { acceptCookieBanner, url } from '../../../helper';

test('Check shortname property', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/customize-property-editors/reactjs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const shortnameEditor = page.locator('.spg-question', {
    has: page.locator('.sv-string-viewer').filter({ hasText: 'Short name' })
  }).locator('input').first();

  await page.locator('.svc-add-new-question-action').first().click();

  await page.waitForTimeout(500);

  await shortnameEditor.fill('123456789101112131415');

  await expect(shortnameEditor).toHaveValue('123456789101112');
});
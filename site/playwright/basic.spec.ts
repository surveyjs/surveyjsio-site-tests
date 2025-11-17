import { test, expect } from '@playwright/test';
import { acceptCookieBanner, url } from '../../helper';


test('Logo Test', async ({ page }) => {
  test.setTimeout(480000); 
  await page.goto(`${url}`); 
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.locator('.v2-class---logo').first()).toBeVisible();
});
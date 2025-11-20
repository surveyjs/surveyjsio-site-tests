import { test, expect, acceptCookieBanner, url } from '../helper';

test('Logo Test', async ({ page }) => {
  await page.waitForLoadState('load');
  await page.goto(`${url}`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.locator('.v2-class---logo').first()).toBeVisible();
});
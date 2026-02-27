import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

test('Logo Test', async ({ page }) => {
  test.setTimeout(1000000);
  await page.goto(`${url}`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.locator('.v2-class---logo').first()).toBeVisible();
});
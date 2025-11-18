import { test, expect, acceptCookieBanner, url } from '../../helper';

test('Switch platform', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(url);
  await page.goto(`${url}/form-library`);
  await acceptCookieBanner(page);

  await expect(page.locator('.v2-class---code-panel div[data-platform=angular]')).toHaveClass(/v2-class---platform-selector-item--selected/);
  await expect(page.locator('.v2-class---features-list-item__front-end-item div[data-platform=angular]')).toHaveClass(/v2-class---platform-selector-item--selected/);
  await expect(page.locator('.v2-class---features-list-item__install-package')).toHaveText(/angular/);

  await page.locator('.v2-class---code-panel div[data-platform=react]').click();
  await expect(page.locator('.v2-class---code-panel div[data-platform=react]')).toHaveClass(/v2-class---platform-selector-item--selected/);
  await expect(page.locator('.v2-class---features-list-item__front-end-item div[data-platform=react]')).toHaveClass(/v2-class---platform-selector-item--selected/);
  await expect(page.locator('.v2-class---features-list-item__install-package')).toHaveText(/react/);

  await page.locator('.v2-class---features-list-item__front-end-item  div[data-platform=jquery]').click();
  await expect(page.locator('.v2-class---code-panel div[data-platform=jquery]')).toHaveClass(/v2-class---platform-selector-item--selected/);
  await expect(page.locator('.v2-class---features-list-item__front-end-item div[data-platform=jquery]')).toHaveClass(/v2-class---platform-selector-item--selected/);
  await expect(page.locator('.v2-class---features-list-item__install-package')).toHaveText(/jquery/);
});

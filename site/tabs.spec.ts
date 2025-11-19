import { test, expect, acceptCookieBanner, url } from '../helper';

test('Click example tabs', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/Examples/Library?id=questiontype-radiogroup&platform=jQuery&theme=default`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const activeTabLocator = page.locator('.v2-class---footer-toolbar-item--active').first();
  const codeTab = page.locator('span').filter({ hasText: 'Code', visible: true }).first();
  const demoTab = page.locator('span').filter({ hasText: 'Demo', visible: true }).first();

  await expect(activeTabLocator).toHaveClass(/v2-class---footer-toolbar-item--active/);

  await codeTab.click({ force: true });

  await expect(demoTab).not.toHaveClass(/v2-class---footer-toolbar-item--active/);
  await expect(activeTabLocator).toHaveClass(/v2-class---footer-toolbar-item--active/);
});

test('Click survey result tabs', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/Examples/Library?id=questiontype-radiogroup&platform=jQuery&theme=default`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const fordOption = page.locator('span').filter({ hasText: 'Ford', visible: true }).nth(1);
  const completeButton = page.locator('.sd-navigation__complete-btn').first();
  const jsonTab = page.locator('a').filter({ hasText: 'JSON', visible: true }).first();
  const pdfTab = page.locator('a').filter({ hasText: 'Export to PDF', visible: true }).first();

  await fordOption.click();
  await completeButton.click();

  await expect(jsonTab).toHaveClass(/v2-class---demo-tab-item--active/);

  await pdfTab.click();

  await expect(jsonTab).not.toHaveClass(/v2-class---demo-tab-item--active/);
  await expect(pdfTab).toHaveClass(/v2-class---demo-tab-item--active/);
});

test('Check survey result tabs', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/Examples/Library?id=questiontype-radiogroup&platform=jQuery&theme=default`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const fordOption = page.locator('span').filter({ hasText: 'Ford', visible: true }).nth(1);
  const completeButton = page.locator('.sd-navigation__complete-btn').first();
  const jsonTab = page.locator('a').filter({ hasText: 'JSON', visible: true }).first();
  const pdfTab = page.locator('a').filter({ hasText: 'Export to PDF', visible: true }).first();

  await fordOption.click();
  await completeButton.click();

  await expect(jsonTab).toBeVisible();
  await expect(jsonTab).toHaveClass(/v2-class---demo-tab-item--active/);

  await expect(pdfTab).toBeVisible();
  await expect(pdfTab).not.toHaveClass(/v2-class---demo-tab-item--active/);
});
import { test, expect, acceptCookieBanner, examplesURL as url } from '../../helper';

test('Survey Embeded & Creator Embeded', async ({ page }) => {
  test.setTimeout(1000000);

  const errors:any = [];
  page.on('pageerror', (error) => {
    errors.push(error);
  });

  await page.goto(`${url}/create-free-survey`);

  await acceptCookieBanner(page);
  await page.locator('#site-tour').getByText('Later').click();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.getByRole('tab', { name: 'Embed Survey' }).locator('span').click();
  await page.waitForTimeout(5000);
  await page.getByText('To add the survey to your').hover();
  await page.getByRole('tab', { name: 'Embed Creator' }).locator('span').click();
  await page.waitForTimeout(5000);
  await page.getByText('To add Survey Creator to your').hover();

  expect(errors).toHaveLength(0);
});

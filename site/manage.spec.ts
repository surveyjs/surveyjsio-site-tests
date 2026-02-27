import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

test('Remove the non-commercial usage text', async ({ page }) => {
  test.setTimeout(1000000);

  await page.goto(`${url}/login`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await acceptCookieBanner(page);

  const email = 'surveyjstest@gmail.com';
  const password = 'Surveyjstest1';

  const emailInput = page.locator('#Email');
  const passwordInput = page.locator('#Password');
  const loginButton = page.locator('main a').filter({ hasText: 'Log In', visible: true }).first();
  const acceptTermsCheckboxLogin = page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io', visible: true }).locator('.v2-class---checkbox__checkmark').first();

  await emailInput.first().fill(email);
  await passwordInput.first().fill(password);
  await acceptTermsCheckboxLogin.click();
  await loginButton.click();

  const removeNonCommercialTab = page.locator('.v2-class---paragraph-link').filter({ hasText: 'instructions', visible: true }).first();

  await page.goto(`${url}/manage`);
  await removeNonCommercialTab.click();
});
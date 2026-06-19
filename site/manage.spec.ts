import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

test('Remove the non-commercial usage text', async ({ page }) => {
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

  // Login is async and finishes with a client-side redirect; wait for the logged-in top
  // bar before navigating, otherwise the goto below races with that redirect
  // (net::ERR_ABORTED) and can also land on an unauthenticated page.
  await expect(page.locator('.v2-class---top-menu-item--drop-down-account').first()).toBeVisible({ timeout: 30000 });

  const removeNonCommercialTab = page.locator('.v2-class---paragraph-link').filter({ hasText: 'instructions', visible: true }).first();

  await page.goto(`${url}/manage`);
  await removeNonCommercialTab.click();
});
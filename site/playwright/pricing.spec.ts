import { test, expect } from '@playwright/test';
import { acceptCookieBanner, url } from '../../helper';

test('Pricing buy test', async ({ page }) => {
  test.setTimeout(480000); 

  await page.goto(`${url}/Account/Login`);
  
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

  const pricingAccountLink = page.locator('.v2-class---top-menu-item a').filter({ hasText: 'Pricing', visible: true }).first();
  const buyButton = page.locator('a').filter({ hasText: 'Buy Now', visible: true }).first();
  
  await pricingAccountLink.click();
  await buyButton.click();
});
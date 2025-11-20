import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

test('FormElements', async ({ page }) => {
  test.setTimeout(480000);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto(`${url}/login`);

  await acceptCookieBanner(page);

  const acceptTermsCheckbox = page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io', visible: true }).locator('.v2-class---checkbox__checkmark').first();
  const rememberMeCheckbox = page.locator('label').filter({ hasText: 'Remember me', visible: true }).locator('.v2-class---checkbox__checkmark').first();
  const signUpLinkMain = page.locator('main').locator('a').filter({ hasText: 'Sign Up', visible: true }).first();

  await expect(page.locator('#Email')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('#Password')).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Forgot your password?', visible: true }).first()).toBeVisible();
  await expect(acceptTermsCheckbox).toBeVisible();
  await expect(rememberMeCheckbox).toBeVisible();

  await expect(page.locator('#GitHub').locator('.v2-class---signup-page__social-link-panel-link-icon').first()).toBeVisible();
  await expect(page.locator('#Google').locator('.v2-class---signup-page__social-link-panel-link-icon').first()).toBeVisible();
  await expect(page.locator('#Facebook').locator('.v2-class---signup-page__social-link-panel-link-icon').first()).toBeVisible();
  await expect(page.locator('#Twitter').locator('.v2-class---signup-page__social-link-panel-link-icon').first()).toBeVisible();

  await expect(page.locator('a.v2-class---button').filter({ hasText: 'Log In', visible: true }).first()).toBeVisible();
  await expect(signUpLinkMain).toBeVisible();

  await signUpLinkMain.click();

  await expect(page.locator('#DisplayName')).toBeVisible();
  await expect(page.locator('#RegisterEmail')).toBeVisible();
  await expect(page.locator('#RegisterPassword')).toBeVisible();
  await expect(page.locator('#ConfirmPassword')).toBeVisible();

  await expect(page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io', visible: true }).first()).toBeVisible();

  await expect(page.locator('a.v2-class---button').filter({ hasText: 'Create Account', visible: true }).first()).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Log In', visible: true }).first()).toBeVisible();
});

test('RegisterRemove', async ({ page }) => {
  test.setTimeout(480000);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto(`${url}/login`);
  await acceptCookieBanner(page);

  const randomNumber1 = Math.round(Math.random() * 10000);
  const randomNumber2 = Math.round(Math.random() * 10000);
  const email = `${randomNumber1}test${randomNumber2}@tester.org`;
  const password = 'Test71';
  const displayName = 'Test71 Name';

  const emailInput = page.locator('#Email');
  const passwordInput = page.locator('#Password');
  const loginButton = page.locator('a.v2-class---button').filter({ hasText: 'Log In', visible: true }).first();
  const registerButton = page.locator('a.v2-class---button').filter({ hasText: 'Create Account', visible: true }).first();
  const acceptTermsCheckbox = page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io' }).locator('.v2-class---checkbox__checkmark').first();
  const menuAccountLink = page.locator('span').filter({ hasText: 'Account', visible: true }).first();
  const menuLogInLink = page.locator('a').filter({ hasText: 'Log In', visible: true }).first();
  const menuSignUpLink = page.locator('a').filter({ hasText: 'Sign Up', visible: true }).first();
  const invalidLoginAttemptMessage = page.locator('li').filter({ hasText: 'Invalid login attempt.', visible: true }).first();

  // #region invalid login attempt
  await emailInput.first().fill(email);
  await passwordInput.first().fill(password);
  await acceptTermsCheckbox.click();
  await loginButton.click();

  await expect(invalidLoginAttemptMessage).toBeVisible();
  // #endregion invalid login attempt

  // #region register user
  const goToRegisterLink = page.locator('a').filter({ hasText: 'Sign Up', visible: true }).first();
  await goToRegisterLink.click();

  const displayNameInput = page.locator("[name='DisplayName']");
  const registerEmailInput = page.locator("[name='RegisterEmail']");
  const registerPasswordInput = page.locator("[name='RegisterPassword']");
  const confirmPassword = page.locator("[name='ConfirmPassword']");

  await displayNameInput.first().fill(displayName);
  await registerEmailInput.first().fill(email);
  await registerPasswordInput.first().fill(password);
  await confirmPassword.first().fill(password);
  await acceptTermsCheckbox.click();
  await registerButton.click();

  await expect(menuAccountLink).toBeVisible();
  // #endregion register user

  // #region logoff and login again
  const menuLogOffLink = page.locator('span').filter({ hasText: 'Sign Out', visible: true }).first();

  await menuAccountLink.hover();
  await expect(menuLogOffLink).toBeVisible();
  await menuLogOffLink.click();

  await expect(menuLogInLink.or(menuSignUpLink)).toBeVisible();

  await page.goto(`${url}/login`);
  await emailInput.first().fill(email);
  await passwordInput.first().fill(password);
  await acceptTermsCheckbox.click();
  await loginButton.click();

  await expect(menuAccountLink).toBeVisible();
  // #endregion logoff and login again

  // #region remove user
  const menuManageLink = page.locator('span').filter({ hasText: 'Settings', visible: true }).first();
  const deleteAccountEmailInput = page.locator('input[placeholder="Email"]');
  const deleteUserButton = page.locator('.v2-class---button').filter({ hasText: 'Confirm', visible: true }).first();
  const goToDeletePageButton = page.locator('.v2-class---button').filter({ hasText: 'Delete', visible: true }).first();

  await menuAccountLink.hover();
  await menuManageLink.click();

  await page.locator('#delete-account-item').first().click();
  await goToDeletePageButton.click();

  page.once('dialog', dialog => {
    if (dialog.type() === 'confirm') {
      dialog.accept();
    } else {
      throw new Error(`An unexpected ${dialog.type()} dialog with the message "${dialog.message()}" appeared.`);
    }
  });

  await deleteAccountEmailInput.first().fill(email);
  await deleteUserButton.click();

  await expect(menuLogInLink.or(menuSignUpLink)).toBeVisible();

  await page.goto(`${url}/login`);
  await emailInput.first().fill(email);
  await passwordInput.first().fill(password);
  await acceptTermsCheckbox.click();
  await loginButton.click();

  await expect(invalidLoginAttemptMessage).toBeVisible();
  // #endregion remove user
});

test('ForgotPasswordForm', async ({ page }) => {
  test.setTimeout(480000);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto(`${url}/login`);
  await acceptCookieBanner(page);

  const forgotPasswordLink = page.locator('a').filter({ hasText: 'Forgot your password?', visible: true }).first();

  await expect(forgotPasswordLink).toBeVisible();

  await forgotPasswordLink.click();

  await expect(page.locator('h1').filter({ hasText: 'Reset Password', visible: true }).first()).toBeVisible();

  await page.locator('#Email').first().fill('test@tester.org');

  await page.locator('a').filter({ hasText: 'Reset', visible: true }).first().click();

  await expect(page.locator('h1').filter({ hasText: 'Please Check Your Email', visible: true }).first()).toBeVisible();
});
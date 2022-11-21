import { Selector, ClientFunction } from 'testcafe';
import { getIUnderstandButton } from '../helpers';

fixture`account`
    .page`https://surveyjstest.azurewebsites.net/Account/Login`.beforeEach(async t => {
        const cookiePopupAccept = Selector(".v2-class---cookies-popup__button-container a");
        if(await cookiePopupAccept.exists) {
            await t.click(cookiePopupAccept); // close cookie msg
        } 
    });

test('FormElements', async t => {
    const overrideConsoleErrorAndWarn = ClientFunction(() => {
        console.error = msg => {throw new Error(msg)};
        console.warn = msg => {throw new Error(msg)};
        console.log("surveyjs console.error and console.warn override");
    });

    await t
        .expect(overrideConsoleErrorAndWarn()).eql()
        .maximizeWindow()
        .click(getIUnderstandButton())
        .expect(Selector('#Email').visible).ok('Email input should be visible')
        .expect(Selector('#Password').visible).ok('Password input should be visible')
        .expect(Selector('a').withText('Forgot your password? Click here to restore').visible).ok('Forgot password link should be visible')
        .expect(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark').visible).ok('Agree with terms checkbox should be visible')
        .expect(Selector('label').withText('Remember me').find('.custom-checkbox__checkmark').visible).ok('Remember me input should be visible')
        .expect(Selector('#GitHub').find('.external-logins__image').visible).ok('Github login button should be visible')
        .expect(Selector('#Google').find('.external-logins__image').visible).ok('Google login button should be visible')
        .expect(Selector('#Facebook').find('.external-logins__image').visible).ok('Facebook login button should be visible')
        .expect(Selector('#Twitter').find('.external-logins__image').visible).ok('Twitter login button should be visible')
        .expect(Selector('input[value=\'LOG IN\']').visible).ok('Login button should be visible')
        .expect(Selector('.mod-mt-10.mod-ml-30').find('a').withText('Register').visible).ok('Register link should be visible')
        .click(Selector('.mod-mt-10.mod-ml-30').find('a').withText('Register'))
        .expect(Selector('#DisplayName').visible).ok('Display name should be visible')
        .expect(Selector('#RegisterEmail').visible).ok('Register email should be visible')
        .expect(Selector('#RegisterPassword').visible).ok('Register password should be visible')
        .expect(Selector('#ConfirmPassword').visible).ok('Confirm password should be visible')
        .expect(Selector('label').withText('I have read, understand and accept the surveyjs.io').visible).ok('Agree with terms checkbox should be visible')
        .expect(Selector('input[value=\'REGISTER\']').visible).ok('Register button should be visible')
        .expect(Selector('a').withText('Log in').visible).ok('Login instead (back to login) link should be visible');
});

test('RegisterRemove', async t => {
    await t.maximizeWindow();

    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const email = `${randomNumber1}test${randomNumber2}@tester.org`;
    const password = 'Test71';
    const displayName = 'Test71 Name';

    const emailInput = Selector('#Email');
    const passwordInput = Selector('#Password');
    const loginButton = Selector("[value='LOG IN']");
    const acceptTermsCheckboxLogin = Selector('.login-page__login label').withText('I have read, understand and accept the surveyjs.io')
        .find('.custom-checkbox__checkmark');
    const menuAccountLink = Selector('span').withText('Account');
    const menuLogInLink = Selector('a').withText('Sign Up');
    const invalidLoginAttemptMessage = Selector('li').withText('Invalid login attempt.');


    //#region invalid login attempt
    await t
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(acceptTermsCheckboxLogin)
        .click(loginButton)

        .expect(invalidLoginAttemptMessage.visible).ok('See invalid login message');
    //#endregion invalid login attempt

    //#region register user
    const goToRegisterLink = Selector("a").withExactText('Register');
    await t.click(goToRegisterLink);

    const displayNameInput = Selector("[name='DisplayName']");
    const registerEmailInput = Selector("[name='RegisterEmail']");
    const registerPasswordInput = Selector("[name='RegisterPassword']");
    const confirmPassword = Selector("[name='ConfirmPassword']");
    const acceptTermsCheckboxRegister = Selector('.login-page__register label').withText('I have read, understand and accept the surveyjs.io website')
    .find('.custom-checkbox__checkmark');
    const registerButton = Selector("input[value='REGISTER']");

    await t
        .typeText(displayNameInput, displayName)
        .typeText(registerEmailInput, email)
        .typeText(registerPasswordInput, password)
        .typeText(confirmPassword, password)
        .click(acceptTermsCheckboxRegister)
        .click(registerButton);

    await t.expect(menuAccountLink.visible).ok('Logged in and see Account');
    //#endregion register user

    //#region logoff and login again
    const menuLogOffLink = Selector('span').withText('Sign Out');

    await t
        .hover(menuAccountLink)
        .expect(menuLogOffLink.visible).ok('Logoff available')
        .click(menuLogOffLink)
        .expect(menuLogInLink.visible).ok('Logoff successful, login enabled')
        .click(menuLogInLink)
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(acceptTermsCheckboxLogin)
        .click(loginButton)
        .expect(menuAccountLink.visible).ok(`We've logged in, account available`)
    //#endregion logoff and login again

    //#region remove user
    const removeAccountTab = Selector('h3').withText('Delete your Account');
    const menuManageLink = Selector('span').withText('Manage');
    const deleteAccountEmailInput = Selector('[placeholder="Enter your email address to confirm"]');
    const deleteUserButton = Selector('[value="Delete Account"]');

    await t
        .hover(menuAccountLink)
        .click(menuManageLink)
        .click(removeAccountTab)
        .typeText(deleteAccountEmailInput, email)
        .setNativeDialogHandler((dialogType, message, url) => {
            if (dialogType === 'confirm')
                return true;

            throw Error(`An unexpected ${dialogType} dialog with the message "${message}" appeared on ${url}.`);
        })
        .click(deleteUserButton)
        .expect(menuLogInLink.visible).ok('Login link is visible')
        .click(menuLogInLink)
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(acceptTermsCheckboxLogin)
        .click(loginButton)
        .expect(invalidLoginAttemptMessage.visible).ok('See invalid login message - no such user');
    //#endregion remove user
});

test('ForgotPasswordForm', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('a').withText('Forgot your password? Click here to restore').visible).ok('Forgot password restore link available')
        .click(Selector('a').withText('Forgot your password? Click here to restore'))
        .expect(Selector('h2').withText('Forgot your password?').visible).ok('Password recovery form has been opened')
        .typeText('#Email', 'test@tester.org')
        .click('.rounded-button')
        .expect(Selector('h1').withText('Reset Forgotten Password').visible).ok('Recovery password link has been sent, redirected to confirmation form');
});
import { Selector, ClientFunction } from 'testcafe';

fixture `account`
    .page `https://surveyjstest.azurewebsites.net/Account/Login`;

test('FormElements', async t => {
    const overrideConsoleErrorAndWarn = ClientFunction(() => {
        console.error = msg => {throw new Error(msg)};
        console.warn = msg => {throw new Error(msg)};
        console.log("surveyjs console.error and console.warn override");
    });

    await t
        .expect(overrideConsoleErrorAndWarn()).eql()
        .maximizeWindow()
        .click(Selector('span').withText('I understand'))
        .expect(Selector('#Email').visible).ok('Email input should be visible')
        .expect(Selector('#Password').visible).ok('Password input should be visible')
        .expect(Selector('a').withText('Forgot your password? Click here to restore').visible).ok('Forgot password link should be visible')
        .expect(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark').visible).ok('Agree with terms checkbox should be visible')
        .expect(Selector('label').withText('Remember me').find('.custom-checkbox__checkmark').visible).ok('Remember me input should be visible')
        .expect(Selector('#GitHub').find('.external-logins__image').visible).ok('Github login button should be visible')
        .expect(Selector('#Google').find('.external-logins__image').visible).ok('Google login button should be visible')
        .expect(Selector('#Facebook').find('.external-logins__image').visible).ok('Facebook login button should be visible')
        .expect(Selector('#Twitter').find('.external-logins__image').visible).ok('Twitter login button should be visible')
        .expect(Selector('input[value=\'LOGIN\']').visible).ok('Login button should be visible')
        .expect(Selector('.mod-mt-10.mod-ml-30').find('a').withText('Register').visible).ok('Register link should be visible')
        .click(Selector('.mod-mt-10.mod-ml-30').find('a').withText('Register'))
        .expect(Selector('#DisplayName').visible).ok('Display name should be visible')
        .expect(Selector('#RegisterEmail').visible).ok('Register email should be visible')
        .expect(Selector('#RegisterPassword').visible).ok('Register password should be visible')
        .expect(Selector('#ConfirmPassword').visible).ok('Confirm password should be visible')
        .expect(Selector('label').withText('I have read, understand and accept the surveyjs.io').visible).ok('Agree with terms checkbox should be visible')
        .expect(Selector('input[value=\'REGISTER\']').visible).ok('Register button should be visible')
        .expect(Selector('a').withText('Login instead').visible).ok('Login instead (back to login) link should be visible');
});

test('RegisterRemove', async t => {
    await t
        .maximizeWindow()
        .typeText('#Email', 'test@tester.org')
        .typeText('#Password', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark'))
        .click(Selector('.mod-mt-120').find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('li').withText('Invalid login attempt.').visible).ok('See invalid login message')
        .click(Selector('.mod-mt-10.mod-ml-30').find('a').withText('Register'))
        .typeText('#DisplayName', 'Test71')
        .typeText('#RegisterEmail', 'test@tester.org')
        .typeText('#RegisterPassword', 'Test71')
        .typeText('#ConfirmPassword', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').nth(2).find('.custom-checkbox__checkmark'))
        .click(Selector('div').withText('Login instead').nth(2).find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('a').withText('Account').visible).ok('Logged in and see Account')
        .click(Selector('a').withText('Account'))
        .click(Selector('h3').withText('Remove Account'))
        .typeText('#Email', 'test@tester.org')
        .setNativeDialogHandler((dialogType, message, url) => {
            if (dialogType === 'confirm')
                return true;

            throw Error(`An unexpected ${dialogType} dialog with the message "${message}" appeared on ${url}.`);
        })
        .click('.rounded-button.rounded-button--danger')
        .expect(Selector('#loginLink').visible).ok('Login link is visible')
        .click('#loginLink')
        .typeText('#Email', 'test@tester.org')
        .typeText('#Password', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark'))
        .click(Selector('.mod-mt-120').find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('li').withText('Invalid login attempt.').visible).ok('See invalid login message - no such user');
});

test('RegisterLoginRemove', async t => {
    await t
        .maximizeWindow()
        .typeText('#Email', 'test@tester.org')
        .typeText('#Password', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark'))
        .click(Selector('.mod-mt-120').find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('li').withText('Invalid login attempt.').visible).ok('See invalid login message')
        .click(Selector('.mod-mt-10.mod-ml-30').find('a').withText('Register'))
        .typeText('#DisplayName', 'Test71')
        .typeText('#RegisterEmail', 'test@tester.org')
        .typeText('#RegisterPassword', 'Test71')
        .typeText('#ConfirmPassword', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').nth(2).find('.custom-checkbox__checkmark'))
        .click(Selector('div').withText('Login instead').nth(2).find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('a').withText('Account').visible).ok('Logged in and see Account')
        .expect(Selector('a').withText('Log off').visible).ok('Logoff available')
        .click(Selector('a').withText('Log off'))
        .expect(Selector('#loginLink').visible).ok('Logoff successful, login enabled')
        .click('#loginLink')
        .typeText('#Email', 'test@tester.org')
        .typeText('#Password', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark'))
        .click(Selector('.mod-mt-120').find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('a').withText('Account').visible).ok(`We've logged in, account available`)
        .click(Selector('a').withText('Account'))
        .click(Selector('h3').withText('Remove Account'))
        .typeText('#Email', 'test@tester.org')
        .setNativeDialogHandler((dialogType, message, url) => {
            if (dialogType === 'confirm')
                return true;

            throw Error(`An unexpected ${dialogType} dialog with the message "${message}" appeared on ${url}.`);
        })
        .click('.rounded-button.rounded-button--danger')
        .expect(Selector('#loginLink').visible).ok('Logout succeed, login enabled')
        .click('#loginLink')
        .typeText('#Email', 'test@tester.org')
        .typeText('#Password', 'Test71')
        .click(Selector('label').withText('I have read, understand and accept the surveyjs.io').find('.custom-checkbox__checkmark'))
        .click(Selector('.mod-mt-120').find('.rounded-button.rounded-button--auxiliary-color'))
        .expect(Selector('li').withText('Invalid login attempt.').visible).ok('Invalid login - no such user');
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
import { Selector , fixture, test } from 'testcafe';

//const domain = 'http://localhost:62946';
const domain = "https://surveyjstest.azurewebsites.net";

fixture`account`
    .page(domain + '/pricing').beforeEach(async t => {
        const cookiePopupAccept = Selector(".v2-class---banner-footer-actions .v2-class---button");
        if(await cookiePopupAccept.exists) {
            await t.click(cookiePopupAccept); // close cookie msg
        } 
    });;

test('Fill cart for unregistered user', async t => {
    await t.maximizeWindow();

    const basicRow = Selector(".v2-class---cart-item").withText("SurveyJS Basic");
    const proRow = Selector(".v2-class---cart-item").withText("SurveyJS Pro");

    await t.click(Selector('.v2-class---pricing-header--basic a').withText('Buy Now').filterVisible());
    await t.expect(basicRow.find("td").withText("SurveyJS Basic").exists).ok();
    await t.navigateTo('/pricing');
    await t.click(Selector('.v2-class---pricing-header--pro a').withText('Buy Now').filterVisible());

    await t.click(basicRow.find(".v2-class---editor-dropdown__control"));
    await t.click(Selector(".sv-popup .v2-class---drop-down-menu-item__link").withExactText("3").filterVisible());

    await t.expect(basicRow.find("td").nth(2).innerText).eql("€499.00");
    await t.expect(basicRow.find("td").nth(3).innerText).eql("-€198.00");
    await t.expect(basicRow.find("td").nth(4).innerText).eql("€1,299.00");

    await t.expect(proRow.find("td").nth(2).innerText).eql("€899.00");
    await t.expect(proRow.find("td").nth(3).innerText).eql("€0.00");
    await t.expect(proRow.find("td").nth(4).innerText).eql("€899.00");

    await t.expect(Selector(".v2-class---cart-subtotal-container__value").innerText).eql("€2,198.00");

    await t.expect(Selector("input[placeholder='Company VAT Number (EU companies only)']").visible).notOk("no vat", { timeout: 500 });

    await t.typeText(Selector("input[placeholder='Full Name']"), "Tester Name");
    await t.typeText(Selector("input[placeholder=Email]"), "tester@surveyjs.io");
    await t.typeText(Selector("input[placeholder='Country']"), "Argentina");
    await t.pressKey("Enter");
    await t.typeText(Selector("input[placeholder='Company Name']"), "Tester Company");
    await t.typeText(Selector("input[placeholder='Postal Code']"), "123456");
    await t.typeText(Selector("input[placeholder='Address']"), "Test address");
    await t.typeText(Selector("input[placeholder='Phone']"), "+34567890123");

    await t.click(Selector("button").withText("Proceed to Checkout"));
});

test('Fill cart for registered users', async t => {
    await t.maximizeWindow();
    await t.navigateTo('/signup');

    const randomNumber1 = Math.round(Math.random() * 10000);
    const randomNumber2 = Math.round(Math.random() * 10000);
    const email = `${randomNumber1}test${randomNumber2}@tester.org`;
    const password = 'Test71';
    const displayName = 'Test71 Name';

    const emailInput = Selector('#Email');
    const passwordInput = Selector('#Password');
    const loginButton = Selector("a.v2-class---button").withText("Log In");
    const registerButton = Selector("a.v2-class---button").withText("Create Account");
    const acceptTermsCheckbox = Selector('label').withText('I have read, understand and accept the surveyjs.io')
        .find('.v2-class---checkbox__checkmark');
    const menuAccountLink = Selector('span').withText('Account');
    const menuLogInLink = Selector('a').withText('Log In');
    const menuSignUpLink = Selector('a').withText('Sign Up');
    const invalidLoginAttemptMessage = Selector('li').withText('Invalid login attempt.');

    //#region register user
    const goToRegisterLink = Selector("a").withExactText('Sign Up');
    const goToLoginLink = Selector("a").withExactText('Log In');

    const displayNameInput = Selector("[name='DisplayName']");
    const registerEmailInput = Selector("[name='RegisterEmail']");
    const registerPasswordInput = Selector("[name='RegisterPassword']");
    const confirmPassword = Selector("[name='ConfirmPassword']");


    await t
        .typeText(displayNameInput, displayName)
        .typeText(registerEmailInput, email)
        .typeText(registerPasswordInput, password)
        .typeText(confirmPassword, password)
        .click(acceptTermsCheckbox)
        .click(registerButton);

    await t.expect(menuAccountLink.visible).ok('Logged in and see Account');
    //#endregion register user


    const basicRow = Selector(".v2-class---cart-item").withText("SurveyJS Basic");
    const proRow = Selector(".v2-class---cart-item").withText("SurveyJS Pro");

    await t.navigateTo('/pricing');
    await t.click(Selector('.v2-class---pricing-header--basic a').withText('Buy Now').filterVisible());
    await t.expect(basicRow.find("td").withText("SurveyJS Basic").exists).ok();
    await t.navigateTo('/pricing');
    await t.click(Selector('.v2-class---pricing-header--pro a').withText('Buy Now').filterVisible());

    await t.click(basicRow.find(".v2-class---editor-dropdown__control"));
    await t.click(Selector(".sv-popup .v2-class---drop-down-menu-item__link").withExactText("3").filterVisible());

    await t.expect(basicRow.find("td").nth(2).innerText).eql("€499.00");
    await t.expect(basicRow.find("td").nth(3).innerText).eql("-€198.00");
    await t.expect(basicRow.find("td").nth(4).innerText).eql("€1,299.00");

    await t.expect(proRow.find("td").nth(2).innerText).eql("€899.00");
    await t.expect(proRow.find("td").nth(3).innerText).eql("€0.00");
    await t.expect(proRow.find("td").nth(4).innerText).eql("€899.00");

    await t.expect(Selector(".v2-class---cart-subtotal-container__value").innerText).eql("€2,198.00");

    await t.expect(Selector("input[placeholder='Company VAT Number (EU companies only)']").visible).notOk("no vat", { timeout: 500 });

    await t.typeText(Selector("input[placeholder='Full Name']"), "Tester Name");
    await t.typeText(Selector("input[placeholder='Country']"), "Argentina");
    await t.pressKey("Enter");
    await t.typeText(Selector("input[placeholder='Company Name']"), "Tester Company");
    await t.typeText(Selector("input[placeholder='Postal Code']"), "123456");
    await t.typeText(Selector("input[placeholder='Address']"), "Test address");
    await t.typeText(Selector("input[placeholder='Phone']"), "+34567890123");

    await t.click(Selector("button").withText("Proceed to Checkout"));



    //#region remove user
    const removeAccountTab = Selector('h3').withText('Delete your Account');
    const menuManageLink = Selector('span').withText('Settings');
    const deleteAccountEmailInput = Selector('input[placeholder="Email"]');
    const deleteUserButton = Selector('.v2-class---button').withText('Confirm');;

    const goToDeletePageButton = Selector('.v2-class---button').withText('Delete');

    await t
        .hover(menuAccountLink)
        .click(menuManageLink);
    
    await t.click("#delete-account-item");
    await t.click(goToDeletePageButton);

       await t
        .typeText(deleteAccountEmailInput, email)
        .setNativeDialogHandler((dialogType, message, url) => {
            if (dialogType === 'confirm')
                return true;

            throw Error(`An unexpected ${dialogType} dialog with the message "${message}" appeared on ${url}.`);
        })
        .click(deleteUserButton)
        .expect(menuLogInLink.visible || menuSignUpLink.visible).ok('Login link is visible')
        //.click(menuLogInLink)
        //.click(goToLoginLink)
        .navigateTo('/login')
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(acceptTermsCheckbox)
        .click(loginButton)
        .expect(invalidLoginAttemptMessage.visible).ok('See invalid login message - no such user');
    //#endregion remove user
});
    
test.skip('Full buy cart cycle', async t => {
    await t.maximizeWindow();

    await t.click(Selector('.v2-class---pricing-header--basic a').withText('Buy Now').filterVisible());
    await t.navigateTo('/pricing');
    await t.click(Selector('.v2-class---pricing-header--pro a').withText('Buy Now').filterVisible());

    await t.navigateTo('/cart');

    const basicRow = Selector(".v2-class---cart-item").nth(0);
    const proRow = Selector(".v2-class---cart-item").nth(1);

    await t.click(basicRow.find(".v2-class---editor-dropdown__control"));
    await t.click(Selector(".sv-popup .v2-class---drop-down-menu-item__link").withExactText("3").filterVisible());

    await t.expect(basicRow.find("td").nth(2).innerText).eql("€499.00");
    await t.expect(basicRow.find("td").nth(3).innerText).eql("-€198.00");
    await t.expect(basicRow.find("td").nth(4).innerText).eql("€1,299.00");

    await t.expect(proRow.find("td").nth(2).innerText).eql("€899.00");
    await t.expect(proRow.find("td").nth(3).innerText).eql("€0.00");
    await t.expect(proRow.find("td").nth(4).innerText).eql("€899.00");

    await t.expect(Selector(".v2-class---cart-subtotal-container__value").innerText).eql("€2,198.00");

    await t.expect(Selector("input[aria-label='Company VAT Number (EU companies only)']").visible).notOk("no vat", { timeout: 500 });

    await t.typeText(Selector("input[aria-label='Full Name']"), "Tester Name");
    await t.typeText(Selector("input[aria-label=Email]"), "tester@surveyjs.io");
    await t.typeText(Selector("input[aria-label='Country']"), "Argentina");
    await t.pressKey("Enter");
    await t.typeText(Selector("input[aria-label='Company Name']"), "Tester Company");
    await t.typeText(Selector("input[aria-label='Postal Code']"), "123456");
    await t.typeText(Selector("input[aria-label='Address']"), "Test address");
    await t.typeText(Selector("input[aria-label='Phone']"), "+34567890123");

    

    await t.click(Selector("button").withText("Proceed to Checkout"));
    
    // Pay with PayPal

    // const iframeSelector = Selector('#sjs-pyapal-payment iframe');
    // await t.switchToIframe(iframeSelector, { timeout: 30000 });
    // await t.click(Selector("div.paypal-button[aria-label='PayPal']"));
    // await t.expect(Selector("div").withText("Have a PayPal account?").exists, { timeout: 30000 }).ok()
    // await t.click(Selector("button").withText("Log In"));
    // await t.typeText(Selector("#email"), "buyer@surveyjs.io");
    // await t.click(Selector("button").withText("Next"));
    // await t.typeText(Selector("#password"), "buyer@surveyjs.io");
    // await t.click(Selector("button").withText("Log In"));
    // await t.click(Selector("button").withText("Complete Purchase"));


    // Pay with Card
    
    const iframeSelector = Selector('#sjs-pyapal-payment iframe');
    await t.switchToIframe(iframeSelector, { timeout: 30000 });
    
    await t.click(Selector("div.paypal-button[aria-label='Debit or Credit Card']"));
    const iframeSelectorCard = Selector('#card-fields-container iframe',  { timeout: 30000 });
    await t.expect(iframeSelectorCard.exists, { timeout: 30000 }).ok();
    await t.switchToIframe(iframeSelectorCard, { timeout: 30000 });
    await t.expect(Selector("input[name=cardnumber]").exists, { timeout: 30000 }).ok();

    await t.typeText(Selector("input[name=cardnumber]"), "4005519200000004");
    await t.typeText(Selector("input[name='expiry-date']"), "0125");
    await t.typeText(Selector("input[name='credit-card-security']"), "123");

    await t.typeText(Selector("input[name=givenName]"), "Tester");
    await t.typeText(Selector("input[name=familyName]"), "Name");
    await t.typeText(Selector("input[name=line1]"), "Test address");
    await t.typeText(Selector("input[name=city]"), "Test city");
    await t.click(Selector("select[name=state]"));
    await t.click(Selector("select[name=state] option").withText('Alabama'));
    await t.typeText(Selector("input[name=postcode]"), "35004");
    await t.typeText(Selector("input[name=phone]"), "5555555555");
    await t.typeText(Selector("input[name=email]"), "tester@surveyjs.io");

    await t.click(Selector("button").withText("Pay Now"));
    await t.switchToMainWindow();

    await t.expect(Selector("body").innerText).eql("OK", "ok", {timeout: 30000});
});
import { Selector, ClientFunction } from 'testcafe';
import { getIUnderstandButton } from '../helpers';

fixture`account`
    .page`https://surveyjstest.azurewebsites.net/Account/Login`;

test('Pricing buy test', async t => {
    await t.maximizeWindow();

    const email = `surveyjstest@gmail.com`;
    const password = 'Surveyjstest1';

    // login
    const emailInput = Selector('#Email');
    const passwordInput = Selector('#Password');
    const loginButton = Selector("main a").withText("Log In");
    const acceptTermsCheckboxLogin = Selector('label').withText('I have read, understand and accept the surveyjs.io')
        .find('.v2-class---checkbox__checkmark');
    await t
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(acceptTermsCheckboxLogin)
        .click(loginButton);

    // test
    const pricingAccountLink = Selector('.v2-class---top-menu-item a').withText('Pricing');
    const buyButton = Selector('a').withText('Buy Now').filterVisible();
    await t
        .click(pricingAccountLink)
        .click(buyButton);
});
import { Selector, ClientFunction } from 'testcafe';
import { getIUnderstandButton } from '../helpers';

fixture`account`
    .page`https://surveyjstest.azurewebsites.net/Account/Login`;

test('Remove the non-commercial usage text', async t => {
    await t.maximizeWindow()
        .click(getIUnderstandButton());

    const email = `surveyjstest@gmail.com`;
    const password = 'Surveyjstest1';



    // login
    const emailInput = Selector('#Email');
    const passwordInput = Selector('#Password');
    const loginButton = Selector("[value='LOG IN']");
    const acceptTermsCheckboxLogin = Selector('.login-page__login label').withText('I have read, understand and accept the surveyjs.io')
        .find('.custom-checkbox__checkmark');
    await t
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(acceptTermsCheckboxLogin)
        .click(loginButton);


    // test
    const removeNonCommercialTab = Selector('h3').withText('Remove the non-commercial usage text');
    const menuAccountLink = Selector('span').withText('Account');
    const menuManageLink = Selector('span').withText('Manage');
    await t
        .hover(menuAccountLink, {speed: 0.5})
        .click(menuManageLink)
        .click(removeNonCommercialTab);
});
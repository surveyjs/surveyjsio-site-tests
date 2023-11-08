import { Selector, ClientFunction, fixture, test } from 'testcafe';
import { getIUnderstandButton } from '../helpers';

fixture`account`
  .page`https://surveyjstest.azurewebsites.net/login`;

test('Remove the non-commercial usage text', async t => {
  await t.maximizeWindow()
    .click(getIUnderstandButton());

  const email = 'surveyjstest@gmail.com';
  const password = 'Surveyjstest1';

  // login
  const emailInput = Selector('#Email');
  const passwordInput = Selector('#Password');
  const loginButton = Selector('main a').withText('Log In');
  const acceptTermsCheckboxLogin = Selector('label').withText('I have read, understand and accept the surveyjs.io')
    .find('.v2-class---checkbox__checkmark');
  await t
    .typeText(emailInput, email)
    .typeText(passwordInput, password)
    .click(acceptTermsCheckboxLogin)
    .click(loginButton);

  // test
  const removeNonCommercialTab = Selector('.v2-class---paragraph-link').withText('instructions');
  await t
    .navigateTo('https://surveyjstest.azurewebsites.net/manage')
    .click(removeNonCommercialTab);
});
import { Selector, fixture, test } from 'testcafe';
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/remove-alert-banner';

fixture`RemoveAlertBannerPage`.page`${url}${route}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 10000;
  test(`Remove-Alert-Banner-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    const email = 'surveyjstest@gmail.com';
    const password = 'Surveyjstest1';

    // login
    await t.navigateTo('/login');
    await explicitErrorHandler();
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
    //

    await t.navigateTo('/remove-alert-banner');
    await explicitErrorHandler();

    const Page = Selector('.v2-class---account-page').filterVisible();
    await checkElementScreenshot(`Remove-Alert-Banner-Page--${screenName}.png`, Page, t);
  });
}
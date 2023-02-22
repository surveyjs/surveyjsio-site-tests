import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

fixture`AccountManagePage`.page`${url}`.beforeEach(async t => {
    await explicitErrorHandler();
    await disableSmoothScroll();
    
    const cookiePopupAccept = Selector(".v2-class---cookies-popup__button-container a");
    if(await cookiePopupAccept.exists) {
      await t.click(cookiePopupAccept); // close cookie msg
    } 
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 10000;

  test(`Account-Manage-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const email = `surveyjstest@gmail.com`;
    const password = 'Surveyjstest1';

    // login
    await t.navigateTo('/login');
    await explicitErrorHandler();
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
    //

    await t.navigateTo('/manage');
    await explicitErrorHandler();
    const Page = Selector(".v2-class---account-page").filterVisible();
    await checkElementScreenshot(`Account-Manage-Page--${screenName}.png`, Page, t);
  });
}
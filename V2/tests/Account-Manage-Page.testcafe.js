import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll, signupWithNewUser } from "../helper";

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

  test.only(`Account-Manage-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    await signupWithNewUser(t, Selector);

    await t.navigateTo('/manage');
    const Page = Selector(".v2-class---account-page").filterVisible();
    await checkElementScreenshot(`Account-Manage-Page--${screenName}.png`, Page, t);
  });
}
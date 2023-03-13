import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/signup";

fixture`SignupPage`.page`${url}${route}`.beforeEach(async t => {
    await explicitErrorHandler();
    await disableSmoothScroll();
    
    const cookiePopupAccept = Selector(".v2-class---popup__button-container a");
    if(await cookiePopupAccept.exists) {
      await t.click(cookiePopupAccept); // close cookie msg
    } 
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 10000;
  test(`Signup-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const Page = Selector(".v2-class---signup-page").filterVisible();
    await checkElementScreenshot(`Signup-Page--${screenName}.png`, Page, t);
  });
}
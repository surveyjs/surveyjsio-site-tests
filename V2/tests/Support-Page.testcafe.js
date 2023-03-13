import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/support";

fixture`SupportPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`Support-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const Page = Selector(".v2-class---support-page").filterVisible();
    await checkElementScreenshot(`Support-Page--${screenName}.png`, Page, t);
  });
}
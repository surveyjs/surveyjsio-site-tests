import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/faq";

fixture`FAQPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`FAQ-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const TopBar = Selector(".v2-class---faq-page").filterVisible();
    await checkElementScreenshot(`FAQ-Page--${screenName}.png`, TopBar, t);
  });
}
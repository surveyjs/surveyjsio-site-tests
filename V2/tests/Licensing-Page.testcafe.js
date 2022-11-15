import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/licensing";

fixture`LicensingPage`.page`${url}${route}`.beforeEach(async t => {
    await explicitErrorHandler();
    await disableSmoothScroll();
    
    const cookiePopupAccept = Selector(".v2-class---cookies-popup__button-container a");
    if(await cookiePopupAccept.exists) {
      await t.click(cookiePopupAccept); // close cookie msg
    } 
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 5000;
  test(`Licensing-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const TopBar = Selector(".v2-class---licensing-page").filterVisible();
    await checkElementScreenshot(`Licensing-Page--${screenName}.png`, TopBar, t);
  });
}
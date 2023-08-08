import { Selector, ClientFunction } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll, removeNewItemsExcept5 } from "../helper";

const route = "/changelog?showAll=true";

fixture`Changelog-Page`.page`${url}${route}`.beforeEach(async t => {
    await explicitErrorHandler();
    await disableSmoothScroll();
    await removeNewItemsExcept5(".v2-class---changelog-page__version-content");
    await removeNewItemsExcept5(".v2-class---anchor-menu-item");
    
    const cookiePopupAccept = Selector(".v2-class---popup__button-container a");
    if(await cookiePopupAccept.exists) {
      await t.click(cookiePopupAccept); // close cookie msg
    } 
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 10000;

  test(`Changelog-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    const Page = Selector(".v2-class---changelog-page").filterVisible();
    await checkElementScreenshot(`Changelog-Page--${screenName}.png`, Page, t);
  });
}
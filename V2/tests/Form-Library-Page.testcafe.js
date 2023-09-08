import { ClientFunction, Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/form-library";

fixture`FormLibraryPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`Form-Library-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await ClientFunction(()=>{ document.getElementById("configure-web-forms").style.display = "none"})();
    const Page = Selector(".v2-class---form-library-page").filterVisible();
    await checkElementScreenshot(`Form-Library-Page--${screenName}.png`, Page, t);
  });
}
import { ClientFunction, Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/pdf-generator";

fixture`PDFGeneratorPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`PDF-Generator-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    const Page = Selector(".v2-class---pdf-generator-page").filterVisible();
    await checkElementScreenshot(`PDF-Generator-Page--${screenName}.png`, Page, t);
  });
}
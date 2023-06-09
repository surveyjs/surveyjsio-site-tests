import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/stay-updated/blog";

fixture`StayUpdatedBlog-Page`.page`${url}${route}`.beforeEach(async t => {
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
  test.only(`StayUpdatedBlog-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const Page = Selector(".v2-class---stay-updated-page").filterVisible();
    await checkElementScreenshot(`StayUpdatedBlog-Page--${screenName}.png`, Page, t);
  });
}
import { ClientFunction, Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

const route = "/survey-creator";

fixture`SurveyCreatorPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`Survey-Creator-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    const Page = Selector(".v2-class---survey-creator-page").filterVisible();
    await checkElementScreenshot(`Survey-Creator-Page--${screenName}.png`, Page, t);
  });
}
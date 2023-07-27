import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll, wrapVisualTest, takeElementScreenshot } from "../helper";

const route = "/form-library/examples/single-select-radio-button-group/reactjs";

fixture`ExamplesPage`.page`${url}${route}`.beforeEach(async t => {
    await explicitErrorHandler();
    await disableSmoothScroll();
    
    const cookiePopupAccept = Selector(".v2-class---popup__button-container a");
    if(await cookiePopupAccept.exists) {
      await t.click(cookiePopupAccept); // close cookie msg
    } 
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 900;
  test.only(`Examples-Page--${screenName}`, async (t) => {
      await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(screen.width, height);

      const Page = Selector(".v2-class---examples-page").filterVisible();
      await t.wait(500);
      await takeElementScreenshot(`Examples-Page--${screenName}.png`, Page, t, comparer);

      await t.wait(500);
      await t
      .click("#tool-theme")
      .wait(500);
      await takeElementScreenshot(`Examples-Page-Theme--${screenName}.png`, Page, t, comparer);
      await t.wait(500);
      await t
      .click("#tool-theme");
      await t.wait(500);
      
      await t
      .click("#tool-settings");
      await takeElementScreenshot(`Examples-Page-Settings--${screenName}.png`, Page, t, comparer);
      await t
      .click("#tool-settings");

      if(screenName == "Mobile" || screenName == "Vertical-Tablet") {
        await t
        .click("#button-sidebar");
        await takeElementScreenshot(`Examples-Page-Sidebar--${screenName}.png`, Page, t, comparer);
        await t
        .click("#button-sidebar");
      }
      if(screenName != "Mobile") {
        await t
        .hover(Selector(".v2-class---demo-header__toolbar .v2-class---header-toolbar-item-dropdown").nth(1))
        .expect(Selector(".v2-class---drop-down-menu-item__link").withText("React").visible).ok()
        .wait(500);

        await takeElementScreenshot(`Examples-Page-EditIn--${screenName}.png`, Page, t, comparer);

        await t
        .click("#tab-code");
        await takeElementScreenshot(`Examples-Page-Code--${screenName}.png`, Page, t, comparer);
  
        await t
        .click("#tab-docs");
        await takeElementScreenshot(`Examples-Page-Docs--${screenName}.png`, Page, t, comparer);
      }
    });
  });
}
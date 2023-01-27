import { Selector } from "testcafe";
import { url, takeElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll, wrapVisualTest } from "../helper";

const route = "/cart";

fixture`CartPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`Cart-Page--${screenName}`, async (t) => {
    await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(screen.width, height);

      while(await Selector("v2-class---cart-item__remove").visible) {
        await t.click(Selector("v2-class---cart-item__remove"));
        await t.wait(100);
      }
      const TopBar = Selector(".v2-class---cart-page").filterVisible();

      await t.expect(Selector(".v2-class---empty-cart__title").visible).ok();
      await takeElementScreenshot(`Cart-Page--Empty--${screenName}.png`, TopBar, t, comparer);
      
      await t.navigateTo('/pricing');
      await t.click(Selector('.v2-class---pricing-header--basic a').withText('Buy Now').filterVisible());
      await t.navigateTo('/pricing');
      await t.click(Selector('.v2-class---pricing-header--pro a').withText('Buy Now').filterVisible());
      await t.navigateTo('/cart');

      await t
            .typeText(Selector("input[aria-label='Full Name']"), "John", {replace: true})
            .pressKey("Enter");
      
      await takeElementScreenshot(`Cart-Page--${screenName}.png`, TopBar, t, comparer);

      await t.click(Selector(".v2-class---editor-dropdown div[aria-label=Qty]").nth(0))
            .expect(Selector(".v2-class---drop-down-menu--editor-quantity").filterVisible().visible).ok();

      await takeElementScreenshot(`Cart-Page--QtyDropdown--${screenName}.png`, TopBar, t, comparer);
      await t.click(Selector(".sv-popup"), {offsetX: 5, offsetY: 5});

      await t
            .click(Selector(".v2-class---text-edit__input div[aria-label=Country]").nth(0))
            .expect(Selector(".v2-class---drop-down-menu--editor").filterVisible().visible).ok();
      await takeElementScreenshot(`Cart-Page--CountryDropdown--${screenName}.png`, TopBar, t, comparer);
    });
  });
}
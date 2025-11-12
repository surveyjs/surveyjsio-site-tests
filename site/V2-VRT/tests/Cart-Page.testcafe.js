import { Selector, fixture, test } from 'testcafe';
import { url, takeElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll, wrapVisualTest } from '../helper';

const route = 'cart';

fixture`CartPage`.page`${url}${route}`.beforeEach(async t => {
  // await explicitErrorHandler();
  // await disableSmoothScroll();

  // const cookiePopupAccept = Selector(".v2-class---banner-footer-actions .v2-class---button");
  // if(await cookiePopupAccept.exists) {
  //   await t.click(cookiePopupAccept); // close cookie msg
  // }
});

test('Cart-Page', async (t) => {
  const height = 10000;
  await t.expect(true).ok();
  const Page = Selector('.v2-class---cart-page').filterVisible();

  await t.setCookies({ cartCookie: '%5b%7b%22UserID%22%3a%2200000000-0000-0000-0000-000000000000%22%2c%22Product%22%3a5%2c%22ProductTitle%22%3a%22SurveyJS+Basic+(Creator+only)%2c+1+Developer+License%22%2c%22Count%22%3a1%2c%22ExpirationDate%22%3a%220001-01-01T00%3a00%3a00%22%2c%22PersonalDiscount%22%3a0.0%2c%22HappenedAt%22%3a%220001-01-01T00%3a00%3a00%22%2c%22ItemPrice%22%3a499.0%2c%22ItemsPrice%22%3a499.0%2c%22Comment%22%3anull%2c%22Id%22%3a%22aa50359a-8ac1-48ac-877a-30aa7ecfcb5a%22%7d%2c%7b%22UserID%22%3a%2200000000-0000-0000-0000-000000000000%22%2c%22Product%22%3a4%2c%22ProductTitle%22%3a%22SurveyJS+Pro%2c+1+Developer+License%22%2c%22Count%22%3a1%2c%22ExpirationDate%22%3a%220001-01-01T00%3a00%3a00%22%2c%22PersonalDiscount%22%3a0.0%2c%22HappenedAt%22%3a%220001-01-01T00%3a00%3a00%22%2c%22ItemPrice%22%3a899.0%2c%22ItemsPrice%22%3a899.0%2c%22Comment%22%3anull%2c%22Id%22%3a%2218b9376c-2c1d-4751-a4ad-c96450cc37f7%22%7d%5d' });
  await wrapVisualTest(t, async (t, comparer) => {
    await t.expect(Selector('.v2-class---empty-cart__title').visible).ok();

    for (const screenName in screens) {
      await t.resizeWindow(screens[screenName].width, height);
      await takeElementScreenshot(`Cart-Page--Empty--${screenName}.png`, Page, t, comparer);
    }
    await t.navigateTo('/cart');

    await t
      .typeText(Selector("input[placeholder='Full Name']", { timeout: 5000 }), 'John', { replace: true })
      .pressKey('Enter');
    for (const screenName in screens) {
      await t.resizeWindow(screens[screenName].width, height);
      await takeElementScreenshot(`Cart-Page--${screenName}.png`, Page, t, comparer);

      await t.click(Selector('.v2-class---editor-dropdown div[aria-label=Qty]').nth(0))
        .expect(Selector('.v2-class---drop-down-menu--editor-quantity').filterVisible().visible).ok();
      await takeElementScreenshot(`Cart-Page--QtyDropdown--${screenName}.png`, Page, t, comparer);
      await t.pressKey('esc');

      await t
        .click(Selector('.v2-class---text-edit__input div[aria-label=Country]').nth(0))
        .expect(Selector('.v2-class---drop-down-menu--editor').filterVisible().visible).ok();
      await takeElementScreenshot(`Cart-Page--CountryDropdown--${screenName}.png`, Page, t, comparer);
      await t.click('main', { offsetX: 5, offsetY: 5 });
    }
  });
}).timeouts({
  pageLoadTimeout: 10000,
  pageRequestTimeout: 5000,
  ajaxRequestTimeout: 2000,
});

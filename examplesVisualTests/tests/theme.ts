import { Selector, fixture, test } from 'testcafe';
import { demoModule, disableSmoothScroll, explicitErrorHandler, takeElementScreenshot, wrapVisualTest } from '../helpers';

fixture`Themes`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/hotel-booking-form-template-free')('Hotel Booking Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 1100);
    await takeElementScreenshot('themes-hotel-booking-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__next-btn'));
    await takeElementScreenshot('themes-hotel-booking-form-2.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-hotel-booking-form-completed-page.png', demoModule, t, comparer);
  });
});
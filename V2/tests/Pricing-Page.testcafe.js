import { Selector, fixture, test } from 'testcafe';
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/pricing';

fixture`PricingPage`.page`${url}${route}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 5000;
  test(`Pricing-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const Page = Selector('.v2-class---pricing-page').filterVisible();
    await checkElementScreenshot(`Pricing-Page--${screenName}.png`, Page, t);
  });
}
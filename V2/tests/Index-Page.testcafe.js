import { Selector, ClientFunction, fixture, test } from 'testcafe';
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

fixture`IndexPage`.page`${url}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 10000;
  test(`Index-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    await ClientFunction(()=>{ document.querySelector('video').style.visibility = 'hidden'; })();

    const Page = Selector('.v2-class---index-page').filterVisible();
    await checkElementScreenshot(`Index-Page--${screenName}.png`, Page, t);
  });
}
import { ClientFunction, Selector, fixture, test } from 'testcafe';
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/dashboard';

fixture`DashboardPage`.page`${url}${route}`.beforeEach(async t => {
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
  test(`Dashboard-Page--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    const Page = Selector('.v2-class---dashboard-page').filterVisible();
    await checkElementScreenshot(`Dashboard-Page--${screenName}.png`, Page, t);
  });
}
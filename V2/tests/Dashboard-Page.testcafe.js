import { ClientFunction, Selector, fixture, test } from 'testcafe';
import { url, wrapVisualTest, takeElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

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

test(`Dashboard-Page`, async (t) => {  
  await wrapVisualTest(t, async (t, comparer) => {
    for (const screenName in screens) {
      const screen = screens[screenName];
      const height = 10000;
      await t.resizeWindow(screen.width, height);

      const sections = {
        "title": ".v2-class---title-section", 
        "features": ".v2-class---features-section",
        "primary-features": ".v2-class---features-section--primary",
        "gradient-features": ".v2-class---features-section--gradient",
        "info": ".v2-class---info-section",
        "ending": ".v2-class---ending-section",
      }
      for(const section in sections) {
        const Section = Selector(sections[section]).filterVisible();
        await takeElementScreenshot(`dashboard/${section}/Dashboard-Page-Page--${section}--${screenName}.png`, Section, t, comparer);
      }
    }
  })
});
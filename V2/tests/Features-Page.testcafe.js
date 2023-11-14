import { Selector, fixture, test } from 'testcafe';
import { url, wrapVisualTest, takeElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/features';

fixture`FeaturesPage`.page`${url}${route}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test(`Features-Page`, async (t) => {  
  await wrapVisualTest(t, async (t, comparer) => {
    for (const screenName in screens) {
      const screen = screens[screenName];
      const height = 10000;
      await t.resizeWindow(screen.width, height);

      const sections = {
        "title": ".v2-class---features-page__title-section", 
        "diagram": ".v2-class---features-page__diagram-section",
        "features": ".v2-class---features-page__features-section",
        "ending": ".v2-class---features-page__ending-section",
      }
      for(const section in sections) {
        const Section = Selector(sections[section]).filterVisible();
        await takeElementScreenshot(`Features-Page--${section}--${screenName}.png`, Section, t, comparer);
      }
    }
  })
});
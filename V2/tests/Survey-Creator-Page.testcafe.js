import { ClientFunction, Selector, fixture, test } from 'testcafe';
import { url, wrapVisualTest, takeElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/survey-creator';

fixture`SurveyCreatorPage`.page`${url}${route}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test(`Survey-Creator-Page`, async (t) => {  
  await wrapVisualTest(t, async (t, comparer) => {
    for (const screenName in screens) {
      const screen = screens[screenName];
      const height = 10000;
      await t.resizeWindow(screen.width, height);

      const sections = {
        "title": ".v2-class---title-section", 
        "title-video": ".v2-class---title-video-section",
        "features": ".v2-class---features-section",
        "creator-features": ".v2-class---survey-creator-page__features-section",
        "get-started": ".v2-class---survey-creator-page__get-started-section",
        "ending": ".v2-class---ending-section",
      }
      for(const section in sections) {
        const Section = Selector(sections[section]).filterVisible();
        await takeElementScreenshot(`survey-creator/${section}/Survey-Creator-Page--${section}--${screenName}.png`, Section, t, comparer);
      }
    }
  })
});
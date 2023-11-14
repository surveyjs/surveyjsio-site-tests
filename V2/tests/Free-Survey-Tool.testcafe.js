import { ClientFunction, Selector, fixture, test } from 'testcafe';
import { url, takeElementScreenshot, wrapVisualTest, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/free-survey-tool';

fixture`FreeSurveyToolPage`.page`${url}${route}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test(`Free-Survey-Tool-Page`, async (t) => {  
  await wrapVisualTest(t, async (t, comparer) => {
    for (const screenName in screens) {
      const screen = screens[screenName];
      const height = 10000;
      await t.resizeWindow(screen.width, height);

      const sections = {
        "title": ".v2-class---features-page__title-section", 
        "features": ".v2-class---features-section--secondary",
        "gradient-features": ".v2-class---features-section--medium-image",
        "primary-features": ".v2-class---features-section--primary",
        "info": ".v2-class---info-section",
        "ending": ".v2-class---ending-section",
      }
      for(const section in sections) {
        const Section = Selector(sections[section]).filterVisible();
        await takeElementScreenshot(`Free-Survey-Tool-Page--${section}--${screenName}.png`, Section, t, comparer);
      }
    }
  })
});
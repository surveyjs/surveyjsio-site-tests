import { Selector, ClientFunction, fixture, test } from 'testcafe';
import { url, takeElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll, wrapVisualTest } from '../helper';

fixture`IndexPage`.page`${url}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test('Index-Page', async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    for (const screenName in screens) {
      const screen = screens[screenName];
      const height = 10000;
      await t.resizeWindow(screen.width, height);

      await ClientFunction(()=>{ document.querySelector('video').style.visibility = 'hidden'; })();

      const sections = {
        'title': '.v2-class---title-section',
        'title-image': '.v2-class---title-image-section',
        'customers': '.v2-class---index-page__customers-section',
        'gallery': '.v2-class---index-page__gallery-section',
        'products': '.v2-class---index-page__products-section',
        'usecases': '.v2-class---index-page__use-cases-section',
        'testimonials': '.v2-class---index-page__testimonials-section',
        'faq': '.v2-class---index-page__faq-section',
        'ending': '.v2-class---ending-section'
      };
      for(const section in sections) {
        const Section = Selector(sections[section]).filterVisible();
        await takeElementScreenshot(`Index-Page--${section}--${screenName}.png`, Section, t, comparer);
      }
    }
  });
});
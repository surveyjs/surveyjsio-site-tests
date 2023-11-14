import { ClientFunction, Selector, fixture, test } from 'testcafe';
import { url, takeElementScreenshot, wrapVisualTest, screens, explicitErrorHandler, disableSmoothScroll } from '../helper';

const route = '/pdf-generator';

fixture`PDFGeneratorPage`.page`${url}${route}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test('PDF-Generator-Page', async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    for (const screenName in screens) {
      const screen = screens[screenName];
      const height = 10000;
      await t.resizeWindow(screen.width, height);

      const sections = {
        'title': '.v2-class---title-section',
        'features-a': '.v2-class---features-section:nth-child(2)',
        'features-b': '.v2-class---features-section:nth-child(3)',
        'features-c': '.v2-class---features-section:nth-child(4)',
        'features-d': '.v2-class---features-section:nth-child(5)',
        'features-e': '.v2-class---features-section:nth-child(6)',
        'info': '.v2-class---info-section',
        'ending': '.v2-class---ending-section',
      };
      for(const section in sections) {
        const Section = Selector(sections[section]).filterVisible();
        await takeElementScreenshot(`PDF-Generator-Page--${section}--${screenName}.png`, Section, t, comparer);
      }
    }
  });
});
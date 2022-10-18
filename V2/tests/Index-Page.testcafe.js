import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler } from "../helper";

fixture`IndexPage`.page`${url}`.beforeEach(async t => {
    await explicitErrorHandler();
    await t.click(Selector(".v2-class---cookies-popup__button-container a")); // close cookie msg
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 2000;

  test(`Title-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__title-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Title-Section--${screenName}.png`, Section, t);
  });

  test(`Title-Image-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__title-image-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Title-Image-Section--${screenName}.png`, Section, t);
  });

  test(`Customers-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__customers-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Customers-Section--${screenName}.png`, Section, t);
  });

  test(`Features-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);

    const Section = Selector(".v2-class---index-page__features-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Features-Section--${screenName}.png`, Section, t);
  });

  test(`Gallery-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__gallery-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Gallery-Section--${screenName}.png`, Section, t);
  });

  test(`Products-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__products-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Products-Section--${screenName}.png`, Section, t);
  });

  test(`Use-Cases-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__use-cases-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Use-Cases-Section--${screenName}.png`, Section, t);
  });

  test(`Testimonials-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__testimonials-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Testimonials-Section--${screenName}.png`, Section, t);
  });

  test(`Ending-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    const Section = Selector(".v2-class---index-page__ending-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Ending-Section--${screenName}.png`, Section, t);
  });
}
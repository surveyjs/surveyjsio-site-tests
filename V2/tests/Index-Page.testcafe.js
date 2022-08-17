import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens } from "../helper";

fixture`IndexPage`.page`${url}`;

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 2000;

  test.only(`Title-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---title-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Title-Section--${screenName}.png`, TopBar, t);
  });

  test.only(`Title-Image-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---title-image-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Title-Image-Section--${screenName}.png`, TopBar, t);
  });

  test.only(`Customers-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---customers-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Customers-Section--${screenName}.png`, TopBar, t);
  });

  test.only(`Features-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---features-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Features-Section--${screenName}.png`, TopBar, t);
  });

  test.only(`Gallery-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---gallery-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Gallery-Section--${screenName}.png`, TopBar, t);
  });

  test(`Products-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---index-page__products-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Products-Section--${screenName}.png`, TopBar, t);
  });

  test(`Use-Cases-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---index-page__use-cases-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Use-Cases-Section--${screenName}.png`, TopBar, t);
  });

  test(`Testimonials-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---index-page__testimonials-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Testimonials-Section--${screenName}.png`, TopBar, t);
  });

  test(`Ending-Section--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---index-page__ending-section").filterVisible();
    await checkElementScreenshot(`Index-Page-Ending-Section--${screenName}.png`, TopBar, t);
  });
}
import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens } from "../helper";

fixture`IndexPage`.page`${url}`;

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 2000;

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
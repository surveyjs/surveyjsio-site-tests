import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens } from "../helper";

fixture`Footer`.page`${url}`;

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 1000;

  test(`Footer--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg

    const TopBar = Selector(".v2-class---footer").filterVisible();
    await checkElementScreenshot(`Footer--${screenName}.png`, TopBar, t);
  });
}

test("Hovers", async (t) => {
  const srceen = screens["Desktop"];

  await t.resizeWindow(srceen.width, srceen.height);
  await t.click(Selector(".surveyjs-cookie-info__span")); // close cookie msg
  const TopBar = Selector(".v2-class---footer").filterVisible();

  const Link = TopBar.find(".v2-class---footer__link-group-item__link");
  const SocialLink = TopBar.find(".v2-class---footer__social-link");

  await t.hover(Link);
  await checkElementScreenshot(`Footer--Link-Hover.png`, Link, t);

  await t.hover(SocialLink);
  await checkElementScreenshot(`Footer--SocialLink-Hover.png`, SocialLink, t);
});
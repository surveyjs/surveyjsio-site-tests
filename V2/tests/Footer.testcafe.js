import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler } from "../helper";

fixture`Footer`.page`${url}`.beforeEach(async t => {
    await explicitErrorHandler();
    await t.click(Selector(".v2-class---cookies-popup__button-container a")); // close cookie msg
});

for (const screenName in screens) {
  const screen = screens[screenName];
  const height = 1000;

  test(`Footer--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, height);
    
    await t.debug();

    const Footer = Selector(".v2-class---footer").filterVisible();
    await checkElementScreenshot(`Footer--${screenName}.png`, Footer, t);
  });
}

test("Hovers", async (t) => {
  const srceen = screens["Desktop"];

  await t.resizeWindow(srceen.width, srceen.height);

  const Footer = Selector(".v2-class---footer").filterVisible();

  const Link = Footer.find(".v2-class---footer__link-group-item__link");
  const SocialLink = Footer.find(".v2-class---footer__social-link");

  await t.hover(Link);
  await checkElementScreenshot(`Footer--Link-Hover.png`, Link, t);

  await t.hover(SocialLink);
  await checkElementScreenshot(`Footer--SocialLink-Hover.png`, SocialLink, t);
});
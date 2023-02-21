import { ClientFunction, Selector } from "testcafe";
import { url, checkElementScreenshot, screens, explicitErrorHandler, disableSmoothScroll } from "../helper";

fixture`TopBar`.page`${url}`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();


  const cookiePopupAccept = Selector(".v2-class---cookies-popup__button-container a");
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  } 
});

for (const screenName in screens) {
  const screen = screens[screenName];

  test(`Usual--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, screen.height);
    const TopBar = Selector(".v2-class---top-bar").filterVisible();
    await checkElementScreenshot(`TopBar--${screenName}.png`, TopBar, t);
  });

  test(`Fixed--${screenName}`, async (t) => {
    await t.resizeWindow(screen.width, screen.height);
    await t.scrollBy(0, 500);

    const TopBar = Selector(".v2-class---top-bar--fixed-shown");
    await checkElementScreenshot(`TopBar--Fixed--${screenName}.png`, TopBar, t);
  });

  test(`Doc-Usual--${screenName}`, async (t) => {
    await t.navigateTo("/documentation");
    await t.resizeWindow(screen.width, screen.height);
    const TopBar = Selector(".v2-class---top-bar").filterVisible();
    await checkElementScreenshot(`TopBar--Doc--${screenName}.png`, TopBar, t);
  });
  
  test(`Doc-Fixed--${screenName}`, async (t) => {
    await t.navigateTo("/documentation");
    await t.resizeWindow(screen.width, screen.height);
    await t.scrollBy(0, 500);
    await ClientFunction(() => { document.querySelector("main").style.visibility = "hidden"})();
    const TopBar = Selector(".v2-class---top-bar--fixed-shown");
    await checkElementScreenshot(`TopBar--Doc-Fixed--${screenName}.png`, TopBar, t);
  });
}

test("Hovers", async (t) => {
  const srceen = screens["Desktop"];

  await t.resizeWindow(srceen.width, srceen.height);
  const TopBar = Selector(".v2-class---top-bar").filterVisible();

  const ItemText = TopBar.find(".v2-class---top-menu-item--text");
  const ItemIconWithText = TopBar.find(".v2-class---top-menu-item--icon-with-text");

  await t.hover(ItemText);
  await checkElementScreenshot(`TopBar--ItemText-Hover.png`, ItemText, t);

  await t.hover(ItemIconWithText);
  await checkElementScreenshot(`TopBar--ItemIconWithText-Hover.png`, ItemIconWithText, t);
});

test("DropDown Menus", async (t) => {
  const srceen = screens["Desktop"];

  await t.resizeWindow(srceen.width, srceen.height);
  const TopBar = Selector(".v2-class---top-bar").filterVisible();

  const TopBarMenuItemProducts = TopBar.find(".v2-class---top-menu-item--drop-down").withText("Products");
  const MenuProducts = TopBarMenuItemProducts.find(".v2-class---drop-down-menu");
  await t.hover(TopBarMenuItemProducts);
  await checkElementScreenshot(`TopBar--MenuProducts.png`, MenuProducts, t);


  const TopBarMenuItemDevelopers = TopBar.find(".v2-class---top-menu-item--drop-down").withText("Developers");
  const MenuDevelopers = TopBarMenuItemDevelopers.find(".v2-class---drop-down-menu");
  await t.hover(TopBarMenuItemDevelopers);
  await checkElementScreenshot(`TopBar--MenuDevelopers.png`, MenuDevelopers, t);
});

test("Mobile Menu", async (t) => {
  const height = 1500;

  const TopBar = Selector(".v2-class---top-bar").filterVisible();
  const TopBarMenuItemMenu = TopBar.find(".v2-class---top-menu-item--menu");
  const MobileMenu = Selector(".v2-class---mobile-menu");
  const MobileMenuOpened = Selector(".v2-class---mobile-menu--opened .v2-class---drop-down-menu--mobile-menu");

  // Vertical-Tablet
  let srceen = screens["Vertical-Tablet"];
  await t.resizeWindow(srceen.width, height);
  await t.click(TopBarMenuItemMenu);
  await checkElementScreenshot(`TopBar--MobileMenuTablet.png`, MobileMenuOpened, t);
  const overlay = Selector(".v2-class---mobile-menu-overlay");
  await t.click(overlay);
  await await t.expect(MobileMenu.visible).notOk("Mobile Menu closed by overlay");

  // Mobile
  srceen = screens["Mobile"];
  await t.resizeWindow(srceen.width, height);
  await t.click(TopBarMenuItemMenu);
  await checkElementScreenshot(`TopBar--MobileMenu.png`, MobileMenuOpened, t);
  const closeButton = Selector(".v2-class---mobile-menu--opened .v2-class---drop-down-menu__group-header--mobile").filterVisible();
  await t.click(closeButton);
  await await t.expect(MobileMenu.visible).notOk("Mobile Menu closed by cross icon");
});
import { Selector } from "testcafe";
import { url, checkElementScreenshot, screens } from "../helper";

fixture`TopBar`.page`${url}`;

for (const screenName in screens) {
  const screen = screens[screenName];

  test("Usual", async (t) => {
    await t.resizeWindow(screen.width, screen.height);
    const TopBar = Selector(".v2-class---top-bar").filterVisible();
    await checkElementScreenshot(`TopBar--${screenName}.png`, TopBar, t);
  });

  test("Fixed", async (t) => {
    await t.resizeWindow(screen.width, screen.height);
    await t.scrollBy(0, 500);

    const TopBar = Selector(".v2-class---top-bar--fixed-shown");
    await checkElementScreenshot(`TopBar--Fixed--${screenName}.png`, TopBar, t);
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
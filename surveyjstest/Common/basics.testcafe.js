import { Selector } from "testcafe";

fixture`Basics`.page`http://surveyjstest.azurewebsites.net`;

test("Menu Examples test", async (t) => {
  await t.maximizeWindow();

  const menuItems = Selector(".page-menu-bar:not(.page-menu-bar--sticky) .popup-menu__item.popup-menu__item--active");
  const visiblePopup = Selector(".page-menu-bar:not(.page-menu-bar--sticky) .popup-menu--expanded .popup-menu-content").filterVisible();
  const visiblePopupItems = Selector(".page-menu-bar:not(.page-menu-bar--sticky) .popup-menu--expanded .popup-menu-content .popup-menu__item").filterVisible();

  await t
    .expect(menuItems.count).eql(3)
    .expect(visiblePopup.count).eql(0)
    .expect(visiblePopupItems.count).eql(0)

    .hover(menuItems.nth(0), { speed: 0.5, offsetX: 30, offsetY: 30 })
    .expect(visiblePopup.count).eql(1)
    .expect(visiblePopupItems.count).eql(5)

    .hover(menuItems.nth(1), { speed: 0.5, offsetX: 30, offsetY: 30 })
    .expect(visiblePopup.count).eql(1)
    .expect(visiblePopupItems.count).eql(6)

    .hover(menuItems.nth(2), { speed: 0.5, offsetX: 30, offsetY: 30 })
    .expect(visiblePopup.count).eql(1)
    .expect(visiblePopupItems.count).eql(7);
});

test("Logo Test", async (t) => {
  await t
    .maximizeWindow()
    .expect(Selector("h3").withText("Survey Creation").exists).ok();
});

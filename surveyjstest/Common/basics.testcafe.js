import { Selector, fixture, test } from 'testcafe';

fixture`Basics`.page`http://surveyjsio-test.azurewebsites.net`;

// test("Menu Examples test", async (t) => {
//   await t.maximizeWindow();

//   const menuItems = Selector(".v2-class---top-bar:not(.v2-class---top-bar--fixed) .v2-class---top-menu-item");
//   const visiblePopup = Selector(".v2-class---top-bar:not(.v2-class---top-bar--fixed) .v2-class---drop-down-menu--popup-menu.v2-class---top-menu-item--drop-down-hovered");
//   const visiblePopupItems = Selector(".v2-class---top-bar:not(.v2-class---top-bar--fixed) .v2-class---drop-down-menu--popup-menu.v2-class---top-menu-item--drop-down-hovered .v2-class---drop-down-menu-item");

//   await t
//     .expect(menuItems.count).eql(9)
//     .expect(visiblePopup.count).eql(0)
//     .expect(visiblePopupItems.count).eql(0)

//     .hover(menuItems.nth(0), { speed: 0.5, offsetX: 30, offsetY: 30 })
//     .expect(visiblePopup.count).eql(1)
//     .expect(visiblePopupItems.count).eql(5)

//     .hover(menuItems.nth(1), { speed: 0.5, offsetX: 30, offsetY: 30 })
//     .expect(visiblePopup.count).eql(1)
//     .expect(visiblePopupItems.count).eql(6)

//     .hover(menuItems.nth(2), { speed: 0.5, offsetX: 30, offsetY: 30 })
//     .expect(visiblePopup.count).eql(1)
//     .expect(visiblePopupItems.count).eql(7);
// });

test('Logo Test', async (t) => {
  await t
    .maximizeWindow()
    .expect(Selector('.v2-class---logo').exists).ok();
});

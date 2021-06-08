import { Selector, ClientFunction } from "testcafe";

fixture`Basics`.page`http://surveyjstest.azurewebsites.net`;

test("Menu Examples test", async (t) => {
  await t.maximizeWindow();

  const ProductsMenuLibrary = Selector("a").withText("LIBRARY");
  const ProductsMenuLibraryExamples = Selector("a")
    .withText("Examples")
    .filterVisible();
  const LibraryExamplesMenuItem = Selector(
    ".product-menu__item-text--active"
  ).withText("Examples");

  await t.hover(ProductsMenuLibrary, { speed: 0.5, offsetX: 30, offsetY: 30 });
  await t.hover(ProductsMenuLibraryExamples, {
    speed: 0.5,
    offsetX: 30,
    offsetY: 30,
  });
  await t.click(ProductsMenuLibraryExamples, {
    speed: 0.5,
    offsetX: 30,
    offsetY: 30,
  });
  await t.hover(LibraryExamplesMenuItem, { speed: 0.5 });
});

test("Logo Test", async (t) => {
  await t
    .maximizeWindow()
    .expect(Selector("h3").withText("Survey Creator").innerText)
    .eql("Survey Creator");
});

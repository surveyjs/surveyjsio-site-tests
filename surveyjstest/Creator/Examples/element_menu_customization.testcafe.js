import { Selector } from "testcafe";

fixture`element_menu_customization`
  .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=elementmenu&platform=Knockoutjs&theme=default`;

test("Check default tabs", async (t) => {
  await t
    .maximizeWindow()
    .expect(Selector("span.nav-link").withText("Survey Designer").textContent)
    .eql("Survey Designer")
    .expect(
      Selector("#creatorElement span.nav-link").withText("Test Survey")
        .textContent
    )
    .eql("Test Survey")
    .expect(Selector("span.nav-link").withText("JSON Editor").textContent).eql("JSON Editor")
    .click(Selector(".tabs a").withExactText("Code"))
    .expect(Selector("span").withText("SurveyCreator").visible).ok()
    .click(Selector('span').withText('index.html'))
    .expect(Selector("span").withText("<!doctype html>").visible).ok()
    .click(Selector('span').withText('index.css'))
    .expect(Selector(".source-code.language-css").visible).ok()
});

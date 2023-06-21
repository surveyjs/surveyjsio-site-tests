import { Selector } from "testcafe";
import { acceptCookie, getExampleTabSelector } from '../../helpers';

fixture`element_menu_customization`
  .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=elementmenu&platform=Knockoutjs&theme=default`.beforeEach(async t => {
    await acceptCookie(t);
});;;

test("Check default tabs", async (t) => {
  await t
    .maximizeWindow()
    .expect(Selector("span.nav-link").withText("Survey Designer").textContent)
    .eql("Survey Designer")
    .expect(
      Selector("span.nav-link").withText("Test Survey")
        .textContent
    )
    .eql("Test Survey")
    .expect(Selector("span.nav-link").withText("JSON Editor").textContent).eql("JSON Editor")
    .click(getExampleTabSelector("Code"))
    .expect(Selector("span").withText("SurveyCreator").visible).ok()
    .click(Selector('span').withText('index.html'))
    .expect(Selector("span").withText("<div id=\"surveyCreatorContainer").visible).ok()
    .click(Selector('span').withText('index.css'))
    .expect(Selector("code.language-css").visible).ok()
});

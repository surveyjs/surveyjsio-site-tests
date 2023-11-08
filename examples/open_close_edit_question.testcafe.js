import { Selector } from "testcafe";

fixture`open_close_edit_question`
  .page`https://surveyjstest.azurewebsites.net/Examples/CreatorSinglePage?id=options&platform=Knockoutjs&theme=default`;

test("Open close check question title", async (t) => {
  await t
    .maximizeWindow()
    .click(Selector(".svd_toolbox").find("div").withText("Single Input"))
    .click(Selector("span").withText("question1"))
    .pressKey("enter")
    .hover(Selector("span").withText("question1"));
});

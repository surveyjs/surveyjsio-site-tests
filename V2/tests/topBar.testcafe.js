import { Selector } from "testcafe";
import {url, checkElementScreenshot} from "../helper";

fixture`TopBar`.page`${url}`;

test("Sizes", async (t) => {
  await t.resizeWindow(1920, 1400);

  const TopBar = Selector(".v2-class---top-bar");

  await checkElementScreenshot("Top-Bar--Large-Desktop.png", TopBar, t);
});

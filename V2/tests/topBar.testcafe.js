import { Selector } from "testcafe";
import {url, checkElementScreenshot, screens} from "../helper";

fixture`TopBar`.page`${url}`;

screens.forEach((screen)=> {
  test("Usual", async (t) => {
    await t.resizeWindow(screen.width, screen.height);

    const TopBar = Selector(".v2-class---top-bar");
  
    await checkElementScreenshot(`TopBar--${screen.name}.png`, TopBar, t);
  });

  // test("Fixed", async (t) => {
  //   await t.resizeWindow(screen.width, screen.height);

  //   await t.scrollBy(0, 500);

  //   const TopBar = Selector(".v2-class---top-bar");
  
  //   await checkElementScreenshot(`TopBar--Fixed--${screen.name}.png`, TopBar, t);
  // });
});
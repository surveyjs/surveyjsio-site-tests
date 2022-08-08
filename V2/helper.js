import { createScreenshotsComparer } from "devextreme-screenshot-comparer";

export const url = "https://localhost:44388/";
//export const url = "http://surveyjstest.azurewebsites.net";

export async function checkElementScreenshot(screenshotName, element, t) {
    const comparer = createScreenshotsComparer(t);
    await t
      .wait(1000)
      .expect(element.visible).ok("element is invisible for " + screenshotName);
    await comparer.takeScreenshot(screenshotName, element, screenshotComparerOptions);
    // await t
    //   .expect(comparer.compareResults.isValid())
    //   .ok(comparer.compareResults.errorMessages());
  }
  
  //devextreme-screenshot-comparer options
  export const screenshotComparerOptions = {
    path: "./tests",
    screenshotsRelativePath: "../V2/screenshots",
    destinationRelativePath: "../V2/artifacts",
    enableTextMask: true,
    textMaskRadius: 5,
    textDiffTreshold: 0.5,
    maskRadius: 5,
    attempts: 2,
    attemptTimeout: 500,
    looksSameComparisonOptions: {
      strict: false,
      tolerance: 8,
      ignoreAntialiasing: true,
      antialiasingTolerance: 8,
      ignoreCaret: true,
    },
    textComparisonOptions: {
      strict: false,
      ignoreAntialiasing: true,
      ignoreCaret: true,
    },
    generatePatch: false,
    highlightColor: { r: 0xff, g: 0, b: 0xff },
  };

  export const screens = [
    {
        name: "Large-Desktop",
        width: 1920,
        height: 1080
    },
    {
        name: "Desktop",
        width: 1366,
        height: 768
    },
    {
        name: "Tablet",
        width: 1024,
        height: 744
    },
    {
        name: "Vertical-Tablet",
        width: 744,
        height: 1024
    },
    {
        name: "Mobile",
        width: 375,
        height: 667
    }
]
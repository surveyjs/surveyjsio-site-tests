import { ClientFunction } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';

// eslint-disable-next-line no-undef
const minimist = require('minimist');

// eslint-disable-next-line no-undef
const args = minimist(process.argv.slice(2));
const envDev = args['env-dev'];
const envNew = args['env-new'];

const productionURL = 'https://surveyjstest.azurewebsites.net/';
export const url = envDev ? 'https://localhost:44388/' : productionURL;

export async function checkElementScreenshot(screenshotName, element, t) {
  const comparer = createScreenshotsComparer(t);
  await t
    .wait(1000)
    .expect(element.visible).ok('element is invisible for ' + screenshotName);
  await comparer.takeScreenshot(screenshotName, element, screenshotComparerOptions);
  if (!envNew) {
    await t
      .expect(comparer.compareResults.isValid())
      .ok(comparer.compareResults.errorMessages());
  }
}

//devextreme-screenshot-comparer options
export const screenshotComparerOptions = {
  path: './tests',
  screenshotsRelativePath: '../V2/screenshots',
  destinationRelativePath: '../V2/artifacts',
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
  ignoreSizeDifference: true,
};

export const screens = {
  'Large-Desktop': { width: 1920, height: 1080 },
  'Desktop': { width: 1366, height: 768 },
  'Tablet': { width: 1024, height: 744 },
  'Vertical-Tablet': { width: 744, height: 1024 },
  'Mobile': { width: 375, height: 667 }
};

export async function wrapVisualTest(t, fn) {
  const comparer = createScreenshotsComparer(t);

  await fn(t, comparer);

  await t
    .expect(comparer.compareResults.isValid())
    .ok(comparer.compareResults.errorMessages());
}
export async function takeElementScreenshot(screenshotName, element, t, comparer) {
  await t
    .expect(element.visible).ok('element is invisible for ' + screenshotName);
  await comparer.takeScreenshot(screenshotName, element, screenshotComparerOptions);
}

export const explicitErrorHandler = ClientFunction(() => {
  window.addEventListener('error', e => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.' ||
      e.message === 'ResizeObserver loop limit exceeded') {
      e.stopImmediatePropagation();
    }
  });
});

export const disableSmoothScroll = ClientFunction(() => {
  document.querySelector('html').style.scrollBehavior = 'initial';
});

export const removeNewItemsExcept5 = ClientFunction((selector) => {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index)=>{
    if (index < items.length - 5) item.remove();
  });
});
import type { Locator, Page } from '@playwright/test';
import { expect, test as baseTest } from '@playwright/test';

export const examplesURL = 'https://surveyjstest.azurewebsites.net';
export const siteUrl = 'https://surveyjsio-test.azurewebsites.net';
// export const examplesURL = 'http://localhost:62946';
// export const siteUrl = 'http://localhost:62946';

export const screens = {
  'Large-Desktop': { width: 1920, height: 1080 },
  'Desktop': { width: 1366, height: 768 },
  'Tablet': { width: 1024, height: 744 },
  'Vertical-Tablet': { width: 744, height: 1024 },
  'Mobile': { width: 375, height: 667 }
};

export async function compareScreenshot(page: Page, elementSelector: string | Locator | undefined, screenshotName: string, elementIndex = 0, maxDiffPixels?:number, mask?: Array<Locator>) {
  let currentElement = elementSelector;
  if (!!currentElement && typeof currentElement == 'string') {
    currentElement = page.locator(currentElement);
  }

  const options: {timeout: number, maxDiffPixels?: number, mask?: Array<Locator>} = {
    timeout: 10000
  };

  if (maxDiffPixels) options.maxDiffPixels = maxDiffPixels;
  if (mask) options.mask = mask;

  if (!!currentElement) {
    const element = (<any>currentElement).filter({ visible: true });
    await expect.soft(element.nth(elementIndex)).toBeVisible();
    await expect.soft(element.nth(elementIndex)).toHaveScreenshot(screenshotName, options);
  } else {
    await expect.soft(page).toHaveScreenshot(screenshotName, options);
  }
}

export async function acceptCookieBanner(page: Page):Promise<void> {
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
}

export const test = baseTest.extend<{page: void, skipJSErrors: boolean}>({
  skipJSErrors: [false, { option: false }],
  page: async ({ page, skipJSErrors }, use) => {
    const errors: Array<Error> = [];
    page.addListener('pageerror', (error) => {
      errors.push(error);
    });
    await use(page);
    if (!skipJSErrors) {
      expect(errors).toHaveLength(0);
    }
  }
});
export { expect };
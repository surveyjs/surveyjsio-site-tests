import type { Locator, Page } from '@playwright/test';
import { expect, test as baseTest } from '@playwright/test';

export async function compareScreenshot(page: Page, elementSelector: string | Locator | undefined, screenshotName: string, elementIndex = 0, maxDiffPixels?:number) {
  let currentElement = elementSelector;
  if (!!currentElement && typeof currentElement == 'string') {
    currentElement = page.locator(currentElement);
  }

  const options: {timeout: number, maxDiffPixels?: number} = {
    timeout: 10000
  };

  if (maxDiffPixels) options.maxDiffPixels = maxDiffPixels;

  if (!!currentElement) {
    const element = (<any>currentElement).filter({ visible: true });
    await expect.soft(element.nth(elementIndex)).toBeVisible();
    await expect.soft(element.nth(elementIndex)).toHaveScreenshot(screenshotName, options);
  } else {
    await expect.soft(page).toHaveScreenshot(screenshotName, options);
  }
}
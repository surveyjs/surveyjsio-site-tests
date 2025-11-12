// import { test, expect } from '@playwright/test';

// const url = "https://surveyjsio-test.azurewebsites.net/";

// test('SurveyJS Site Index Page', async ({ page }) => {
//   const height = 10000;
//   const width = 1920;
//   await page.goto(url);
//   page.setViewportSize({ width, height });

//   await expect(page).toHaveScreenshot();
// });

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

import { test, expect } from '@playwright/test';
import { compareScreenshot } from './helper';

const domain = 'https://surveyjsio-test.azurewebsites.net';
// const domain = "http://localhost:62946";

test('Hotel Booking Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/hotel-booking-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1920, height: 1080 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const nextBtn = page.locator('.sd-navigation__next-btn').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();
  const checkIn = page.getByPlaceholder('Check-in');
  const checkOut = page.getByPlaceholder('Check-out');

  await compareScreenshot(page, demoModule, 'themes-hotel-booking-form-1.png', undefined, undefined, [checkIn, checkOut]);

  await nextBtn.click();
  await compareScreenshot(page, demoModule, 'themes-hotel-booking-form-2.png', undefined, undefined, [checkIn, checkOut]);

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-hotel-booking-form-completed-page.png', undefined, undefined, [checkIn, checkOut]);
});

test('Order Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/order-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 1500 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const nextBtn = page.locator('.sd-navigation__next-btn').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-order-form-1.png');

  await nextBtn.click();
  await compareScreenshot(page, demoModule, 'themes-order-form-2.png');

  await nextBtn.click();
  await compareScreenshot(page, demoModule, 'themes-order-form-3.png');

  await nextBtn.click();
  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-order-form-completed-page.png');
});

test('Online Check-In Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/online-check-in-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 2200 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-online-check-in-form-1.png');

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-online-check-in-form-completed-page.png');
});

test('Patient Registration Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/patient-registration-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 2700 });

  await page.evaluate(() => {
    (window as any).survey.getQuestionByName('photo').setPropertyValue('currentMode', 'file');
  });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-patient-registration-form-1.png');

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-patient-registration-form-completed-page.png');
});

test('Pet Hotel Reservation Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/pet-hotel-reservation-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 1100 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const nextBtn = page.locator('.sd-navigation__next-btn').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-pet-hotel-reservation-form-1.png');

  await nextBtn.click();
  await compareScreenshot(page, demoModule, 'themes-pet-hotel-reservation-form-2.png');

  await nextBtn.click();
  await compareScreenshot(page, demoModule, 'themes-pet-hotel-reservation-form-3.png');

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-pet-hotel-reservation-form-completed-page.png');
});

test('Car Rental Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/car-rental-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 3200 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();

  await compareScreenshot(page, demoModule, 'themes-car-rental-form-1.png');
});

test('Issue Report', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/issue-report-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 1700 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-issue-report-1.png');

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-issue-report-completed-page.png');
});

test('Sales Contract Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/sales-contract-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1500, height: 1100 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();
  const date = page.getByPlaceholder('date');

  await compareScreenshot(page, demoModule, 'themes-sales-contract-form-1.png', undefined, undefined, [date]);

  await page.setViewportSize({ width: 1920, height: 2500 });
  await compareScreenshot(page, demoModule, 'themes-sales-contract-form-2.png', undefined, undefined, [date]);

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-sales-contract-form-completed-page.png');
});

test('Conference Registration Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/conference-registration-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 2500 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-conference-registration-form-1.png');

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-conference-registration-form-completed-page.png');
});

test('Feedback Form', async ({ page }) => {
  test.setTimeout(480000);
  const url = domain + '/form-library/examples/feedback-form-template-free/reactjs';
  await page.goto(url);
  await page.locator('a').filter({ hasText: 'Accept All' }).click();
  await page.setViewportSize({ width: 1280, height: 2200 });

  const demoModule = page.locator('.v2-class---examples-page__demo-module .sd-root-modern').first();
  const completeBtn = page.locator('.sd-navigation__complete-btn').first();

  await compareScreenshot(page, demoModule, 'themes-feedback-form-1.png');

  await completeBtn.click();
  await compareScreenshot(page, demoModule, 'themes-feedback-form-completed-page.png');
});
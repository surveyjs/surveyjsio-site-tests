import { test, expect } from '@playwright/test';

test('PayPal', async ({ page }) => {
  await page.goto('https://surveyjstest.azurewebsites.net/pricing');
  await page.locator('a').filter({ hasText: 'I Understand' }).click();
  await page.locator('div:nth-child(4) > .v2-class---pricing-header__content > div:nth-child(2) > .v2-class---button').first().click();
  await page.getByRole('combobox', { name: 'Qty' }).click();
  await page.getByRole('option', { name: '3', exact: true }).locator('div').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Tester Name');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('Email').fill('tester@surveyjs.io');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Country').click();
  await page.getByText('Argentina').click();
  await page.getByRole('heading', { name: 'Company Name' }).click();
  await page.getByPlaceholder('Company Name').fill('Tester Company');
  await page.getByRole('heading', { name: 'Postal Code' }).click();
  await page.getByPlaceholder('Postal Code').fill('123456');
  await page.getByPlaceholder('Postal Code').press('Tab');
  await page.getByPlaceholder('Address').fill('Test adress');
  await page.getByPlaceholder('Address').press('Tab');
  await page.getByPlaceholder('Phone').fill('+34567890123');

  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  const frameLocator0 = await page.frameLocator("#sjs-pyapal-payment iframe").nth(0);

  frameLocator0.getByLabel('Card number').click();
  frameLocator0.getByLabel('Card number').fill('4005519200000004');

  frameLocator0.getByLabel('Expires').click();
  frameLocator0.getByPlaceholder('MM/YY').fill('01 / 25');

  frameLocator0.getByLabel('CSC').click();
  frameLocator0.getByPlaceholder('CSC').fill('123');
  
  frameLocator0.locator('input[name="givenName"]').click();
  frameLocator0.locator('input[name="givenName"]').fill("Tester");

  frameLocator0.locator('input[name="familyName"]').click();
  frameLocator0.locator('input[name="familyName"]').fill("Name");

  frameLocator0.locator('input[name="line1"]').click();
  frameLocator0.locator('input[name="line1"]').fill("Test address");
  
  frameLocator0.locator('input[name="city"]').click();
  frameLocator0.locator('input[name="city"]').fill("Test city");

  frameLocator0.locator('select[name="state"]').selectOption('AL');

  frameLocator0.getByLabel('ZIP code').click();
  frameLocator0.getByPlaceholder('ZIP code').fill('35004');
  
  frameLocator0.locator('input[name="phone"]').click();
  frameLocator0.locator('input[name="phone"]').fill("5555555555");

  frameLocator0.locator('input[name="email"]').click();
  frameLocator0.locator('input[name="email"]').fill("tester@surveyjs.io");
  
  frameLocator0.getByRole('button', { name: 'Pay Now' }).click();

  await page.getByRole('heading', { name: 'Thank you for choosing SurveyJS!' }).click();
});


import { test, expect } from '@playwright/test';

test('PayPal: failed test payment', async ({ page }) => {
  test.setTimeout(480000);
  
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
  await page.locator('[placeholder="Company Name"]').click();
  await page.getByPlaceholder('Company Name').fill('Tester Company');
  await page.locator('[placeholder="Postal Code"]').click();
  await page.getByPlaceholder('Postal Code').fill('123456');
  await page.getByPlaceholder('Postal Code').press('Tab');
  await page.getByPlaceholder('Address').fill('Test adress');
  await page.getByPlaceholder('Address').press('Tab');
  await page.getByPlaceholder('Phone').fill('+34567890123');

  await page.locator('.v2-class---checkbox__checkmark--in-panel').click();

  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  await page.waitForTimeout(10000); 
  const frameLocator0 = await page.frameLocator("#sjs-pyapal-payment iframe").first();

  const link = await frameLocator0.getByText('Debit or Credit Card');

  await link.click();

  await page.waitForTimeout(10000); 
  const frameLocatorNested = await frameLocator0.frameLocator("[title='paypal_card_form']").first();

  await frameLocatorNested.getByLabel('Card number').click();
  await frameLocatorNested.getByLabel('Card number').fill('4005519200000004');

  await frameLocatorNested.getByLabel('Expires').click();
  await frameLocatorNested.getByPlaceholder('MM/YY').fill('01 / 25');

  await frameLocatorNested.getByLabel('CSC').click();
  await frameLocatorNested.getByPlaceholder('CSC').fill('123');
  
  await frameLocatorNested.locator('input[name="givenName"]').click();
  await frameLocatorNested.locator('input[name="givenName"]').fill("Tester");

  await frameLocatorNested.locator('input[name="familyName"]').click();
  await frameLocatorNested.locator('input[name="familyName"]').fill("Name");

  await frameLocatorNested.locator('input[name="line1"]').click();
  await frameLocatorNested.locator('input[name="line1"]').fill("Test address");
  
  await frameLocatorNested.locator('input[name="city"]').click();
  await frameLocatorNested.locator('input[name="city"]').fill("Test city");

  await frameLocatorNested.locator('select[name="state"]').selectOption('AL');

  await frameLocatorNested.locator('input[name="postcode"]').click();
  await frameLocatorNested.locator('input[name="postcode"]').fill('35004');
  
  await frameLocatorNested.locator('input[name="phone"]').click();
  await frameLocatorNested.locator('input[name="phone"]').fill("5555555555");

  await frameLocatorNested.locator('input[name="email"]').click();
  await frameLocatorNested.locator('input[name="email"]').fill("tester@surveyjs.io");
  
  const payNow = await frameLocatorNested.getByRole('button', { name: 'Pay Now' });

  await payNow.click();

  await page.waitForTimeout(10000);

  const thankYouText = await page.getByText('Sorry, your payment failed.');
  await thankYouText.click();
});


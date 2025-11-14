import { test, expect } from '@playwright/test';
import { acceptCookieBanner } from '../../helper';

const url = "https://surveyjsio-test.azurewebsites.net";
// const url = "http://localhost:62946";

test('Cart: vat number field', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/pricing`);
  await acceptCookieBanner(page);
  await page.locator('div:nth-child(4) > .v2-class---pricing-header__content > div:nth-child(2) > .v2-class---button').first().click();

  await page.waitForTimeout(5000);

  await expect(page.locator("[data-name=companyVATNumber]")).toBeVisible();
  await expect(page.locator("[data-name=companyVATNumber] .v2-class---text-edit__title-required")).toBeHidden();
  await page.getByPlaceholder('Country').click();
  await page.getByPlaceholder('Country').type("A");
  await page.getByText('Austria').click();

  await expect(page.locator("[data-name=companyVATNumber]")).toBeVisible();
  await expect(page.locator("[data-name=companyVATNumber] .v2-class---text-edit__title-required")).toBeVisible();

  await page.getByPlaceholder('Company Name').click();
  await page.getByPlaceholder('Company Name').fill("Comp inc.");

  await expect(page.locator("[data-name=companyVATNumber]")).toBeVisible();
  await expect(page.locator("[data-name=companyVATNumber] .v2-class---text-edit__title-required")).toBeVisible();

  await page.locator("[data-name=country]").click();
  await page.getByText('Australia').click();

  await expect(page.locator("[data-name=companyVATNumber]")).toBeVisible();
  await expect(page.locator("[data-name=companyVATNumber] .v2-class---text-edit__title-required")).toBeHidden();
});


test('PayPal: test payment', async ({ page }) => {
  test.setTimeout(480000);
  
  await page.goto(`${url}/pricing`);
  await acceptCookieBanner(page);
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

  await page.locator('.v2-class---info-panel-cart .v2-class---checkbox__checkmark--in-panel').click();

  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  await page.waitForTimeout(10000); 
  const frameLocator0 = await page.frameLocator("#sjs-pyapal-payment iframe").first();

  const link = await frameLocator0.getByText('Debit or Credit Card');

  await link.click();

  await page.waitForTimeout(10000); 
  const frameLocatorNested = await frameLocator0.frameLocator("[title='paypal_card_form']").first();

  await frameLocatorNested.getByLabel('Card number').click();
  await frameLocatorNested.getByLabel('Card number').fill('4032039884454820');

  await frameLocatorNested.getByLabel('Expires').click();
  await frameLocatorNested.getByPlaceholder('MM/YY').fill('01 / 28');

  await frameLocatorNested.getByLabel('CSC').click();
  await frameLocatorNested.getByPlaceholder('CSC').fill('464');
  
  await page.waitForTimeout(5000);

  await frameLocatorNested.locator('input[name="givenName"]').click();
  await frameLocatorNested.locator('input[name="givenName"]').fill("Tester");

  await frameLocatorNested.locator('input[name="familyName"]').click();
  await frameLocatorNested.locator('input[name="familyName"]').fill("Name");

  if(await frameLocatorNested.locator('input[name="line1"]').isVisible()) {
    await frameLocatorNested.locator('input[name="line1"]').click();
    await frameLocatorNested.locator('input[name="line1"]').fill("Test address");
  }
  
  if(await frameLocatorNested.locator('input[name="city"]').isVisible()) {
    await frameLocatorNested.locator('input[name="city"]').click();
    await frameLocatorNested.locator('input[name="city"]').fill("Test city");
  }

  if(await frameLocatorNested.locator('select[name="state"]').isVisible()) {
    await frameLocatorNested.locator('select[name="state"]').selectOption('AL');
  }

  await frameLocatorNested.locator('input[name="postcode"]').click();
  await frameLocatorNested.locator('input[name="postcode"]').fill('35004');
  
  await frameLocatorNested.locator('input[name="phone"]').click();
  await frameLocatorNested.locator('input[name="phone"]').fill("5555555555");

  await frameLocatorNested.locator('input[name="email"]').click();
  await frameLocatorNested.locator('input[name="email"]').fill("tester@surveyjs.io");
  
  const payNow = await frameLocatorNested.locator('#submit-button');

  await payNow.click();

  await page.waitForTimeout(10000);

  const thankYouText = await page.getByText('Thank you for choosing SurveyJS!');
  await thankYouText.click();
});


test('Fill cart for unregistered user', async ({ page }) => {
  // TestCafe .maximizeWindow() обычно заменяется на установку
  // большого фиксированного размера в Playwright для консистентности.
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Задаем базовый URL (для соответствия правилу `${url}/path`)
  const url = 'https://surveyjsio-test.azurewebsites.net'; // Или 'http://localhost:62946'
  
  await page.goto(`${url}/pricing`); 

  // Используем вашу специальную функцию
  await acceptCookieBanner(page);

  // Локаторы для строк корзины
  const basicRow = page.locator('.v2-class---cart-item').filter({ hasText: 'SurveyJS Basic' });
  const proRow = page.locator('.v2-class---cart-item').filter({ hasText: 'SurveyJS Pro' });

  // Добавлен .first() для клика
  await page.locator('.v2-class---pricing-header--basic a').filter({ hasText: 'Buy Now', visible: true }).first().click();
  await page.waitForTimeout(5000);
  
  // Убедимся, что basicRow видна (эквивалент .exists.ok())
  await expect(basicRow.locator('td').filter({ hasText: 'SurveyJS Basic' })).toBeVisible();
  
  await page.goto(`${url}/pricing`); // Эквивалент t.navigateTo с использованием переменной url
  await page.waitForTimeout(5000);
  // Добавлен .first() для клика
  await page.locator('.v2-class---pricing-header--pro a').filter({ hasText: 'Buy Now', visible: true }).first().click();
  await page.waitForTimeout(5000);

  await basicRow.locator('.v2-class---editor-dropdown__control').first().click();
  
  // Добавлены hasText, visible: true и .first()
  await page.locator('.sv-popup .v2-class---drop-down-menu-item__link').filter({ hasText: '3', visible: true }).first().click();

  // Проверки текста
  await expect(basicRow.locator('td').nth(2)).toHaveText('€499.00');
  await expect(basicRow.locator('td').nth(4)).toHaveText('-€198.00');
  await expect(basicRow.locator('td').nth(5)).toHaveText('€1,299.00');

  await expect(proRow.locator('td').nth(2)).toHaveText('€899.00');
  await expect(proRow.locator('td').nth(4)).toHaveText('€0.00');
  await expect(proRow.locator('td').nth(5)).toHaveText('€899.00');

  await expect(page.locator('.v2-class---cart-subtotal-container [data-name=subtotal] .v2-class---cart-subtotal-container__value')).toHaveText('€2,198.00');

  // .visible.notOk -> .toBeHidden()
  await expect(page.locator("input[placeholder='Company VAT Number (EU companies only)']")).toBeHidden({ timeout: 500 });

  // .typeText -> .fill(). Добавлен .first() для однозначности
  await page.locator("input[placeholder='Full Name']").first().fill('Tester Name');
  await page.locator('input[placeholder=Email]').first().fill('tester@surveyjs.io');
  await page.locator("input[placeholder='Country']").first().fill('Argentina');
  
  // .pressKey('Enter') -> page.keyboard.press('Enter')
  await page.keyboard.press('Enter');
  
  await page.locator("input[placeholder='Company Name']").first().fill('Tester Company');
  await page.locator("input[placeholder='Postal Code']").first().fill('123456');
  await page.locator("input[placeholder='Address']").first().fill('Test address');
  await page.locator("input[placeholder='Phone']").first().fill('+34567890123');

  // Добавлен .first() для клика
  await page.locator('button').filter({ hasText: 'Proceed to Checkout' }).first().click();
});
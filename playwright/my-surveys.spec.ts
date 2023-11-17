import { test, expect } from '@playwright/test';

test("remember organization", async ({ page, browser }) => {
  test.setTimeout(480000);

  const testerEmail = "Sych-Test1@gmail.com";
  const testerPass = "Sych-Test1@gmail.com";
  const url = "https://surveyjstest.azurewebsites.net/";
  // const url = "http://localhost:62946/";
  const personalSurveys = "Personal Surveys";
  const organizationSurveys = "55";

  const isOrganizationCookieExists = async ()=>{
    return await page.evaluate(() => {
      return document.cookie.indexOf("organizationId=") !== -1;
    });
  }

  // none notifications
  await page.goto(`${url}/login`);
  await expect(await isOrganizationCookieExists()).toBeFalsy();
  await page.locator('a').filter({ hasText: 'Accept All' }).click(); // hide cookie banner
  await page.getByPlaceholder('Email').fill(testerEmail);
  await page.getByPlaceholder('Password').fill(testerPass);
  await page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io website Terms of Use and Priv' }).click();
  await page.locator('.v2-class---signup-page__actions-footer-button-container--login').click();

  await page.goto(`${url}/service/mysurveys`);

  await expect(await isOrganizationCookieExists()).toBeFalsy();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button-text').filter({ hasText: personalSurveys })).toBeVisible();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button-text').filter({ hasText: organizationSurveys })).toBeHidden();

  await page.locator('.v2-class---my-surveys-page__drop-down-button.v2-class---my-surveys-page__choose-organization').click();
  await expect(page.getByRole('link', { name: personalSurveys })).toBeVisible();
  await expect(page.getByRole('link', { name: organizationSurveys })).toBeVisible();

  await page.getByRole('link', { name: organizationSurveys }).click();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button-text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button .v2-class---drop-down-menu-item__text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button .v2-class---drop-down-menu-item__text').filter({ hasText: organizationSurveys })).toBeVisible();
  await expect(await isOrganizationCookieExists()).toBeTruthy();

  await page.goto(`${url}/service/mysurveys`);
  await expect(await isOrganizationCookieExists()).toBeTruthy();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button-text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button .v2-class---drop-down-menu-item__text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---my-surveys-page__choose-organization-button .v2-class---drop-down-menu-item__text').filter({ hasText: organizationSurveys })).toBeVisible();
});


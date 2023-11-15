import { test, expect } from '@playwright/test';

test("licences expired notifications", async ({ page, browser }) => {
  const testerEmail = "Sych-Test1@gmail.com";
  const testerPass = "Sych-Test1@gmail.com";
  const url = "https://surveyjstest.azurewebsites.net";
  //const url = "http://localhost:62946/";
  const apiUrl = "api/ManageUser/getLicensesExpirationPopupType?expiresSoonNotificationDateTime=null&expiredNotificationDateTime=null";
  const bannerExpiredTitle = "Your renewal subscription has expired.";
  const bannerExpiresSoonTitle = "Your renewal subscription expires soon.";
  const topBarIconTwinklingClass = ".v2-class---top-menu-item__icon--twinkling";
  const topBarAccountClass = ".v2-class---top-menu-item--drop-down-account";
  const topBarAccountSettingsWarningClass = ".v2-class---drop-down-menu-item--manage-warning";

  let apiRequestCount = 0;

  const mockPopupType = async (popupType)=>{
    // Mock the api call before navigating
    await page.route(`*/**/${apiUrl}`, async route => {
      /*
        PopupType could be "none", "expired", "expiresSoon", "warningOnly"
      */
      apiRequestCount++;
      const json = { popupType };
      await route.fulfill({ json });
    });
  }
  const removeExpirationCookie = async ()=>{
    await page.evaluate(() => {
      document.cookie = "expirationCookie" + "=; Max-Age=0";
    });
  }
  const isExpirationCookieExists = async ()=>{
    return await page.evaluate(() => {
      return document.cookie.indexOf("expirationCookie=") !== -1;
    });
  }

  test.setTimeout(480000);
  await mockPopupType("none");

  // none notifications
  await page.goto(`${url}/login`);
  await expect(await isExpirationCookieExists()).toBeFalsy();
  await page.locator('a').filter({ hasText: 'Accept All' }).click(); // hide cookie banner
  await page.getByPlaceholder('Email').fill(testerEmail);
  await page.getByPlaceholder('Password').fill(testerPass);
  await page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io website Terms of Use and Priv' }).click();
  await page.locator('.v2-class---signup-page__actions-footer-button-container--login').click();
  await expect(page.getByText(bannerExpiredTitle)).toBeHidden();
  await expect(page.getByText(bannerExpiresSoonTitle)).toBeHidden();
  await expect(page.locator(topBarIconTwinklingClass).first()).toBeHidden();
  await page.locator(topBarAccountClass).first().click();
  await expect(await page.locator(topBarAccountSettingsWarningClass).count()).toEqual(0);
  await expect(apiRequestCount).toEqual(1);

  // expired notifications
  await removeExpirationCookie();
  await expect(await isExpirationCookieExists()).toBeFalsy();
  await mockPopupType("expired");
  await page.goto(`${url}`);
  await expect(page.getByText(bannerExpiredTitle)).toBeVisible();
  await expect(page.getByText(bannerExpiresSoonTitle)).toBeHidden();
  await expect(page.locator(topBarIconTwinklingClass).first()).toBeVisible();
  await page.locator(topBarAccountClass).first().click();
  await expect(page.locator(topBarAccountSettingsWarningClass).first()).toBeVisible();
  await expect(apiRequestCount).toEqual(2);
  await expect(await isExpirationCookieExists()).toBeTruthy();

  // expiresSoon notifications
  await removeExpirationCookie();
  await expect(await isExpirationCookieExists()).toBeFalsy();
  await mockPopupType("expiresSoon");
  await page.goto(`${url}`);
  await expect(page.getByText(bannerExpiredTitle)).toBeHidden();
  await expect(page.getByText(bannerExpiresSoonTitle)).toBeVisible();
  await expect(page.locator(topBarIconTwinklingClass).first()).toBeVisible();
  await page.locator(topBarAccountClass).first().click();
  await expect(page.locator(topBarAccountSettingsWarningClass).first()).toBeVisible();
  await expect(apiRequestCount).toEqual(3);
  await expect(await isExpirationCookieExists()).toBeTruthy();

  // warningOnly notifications
  await removeExpirationCookie();
  await expect(await isExpirationCookieExists()).toBeFalsy();
  await mockPopupType("warningOnly");
  await page.goto(`${url}`);
  await expect(page.getByText(bannerExpiredTitle)).toBeHidden();
  await expect(page.getByText(bannerExpiresSoonTitle)).toBeHidden();
  await expect(page.locator(topBarIconTwinklingClass).first()).toBeHidden();
  await page.locator(topBarAccountClass).first().click();
  await expect(page.locator(topBarAccountSettingsWarningClass).first()).toBeVisible();
  await expect(apiRequestCount).toEqual(4);
  await expect(await isExpirationCookieExists()).toBeTruthy();

  // close banner after visit Account Page
  await removeExpirationCookie();
  await expect(await isExpirationCookieExists()).toBeFalsy();
  await mockPopupType("expired");
  await page.goto(`${url}`);
  await expect(page.getByText(bannerExpiredTitle)).toBeVisible();
  await page.goto(`${url}/manage`);
  await expect(page.getByText(bannerExpiredTitle)).toBeHidden();
  await page.goto(`${url}`);
  await expect(page.getByText(bannerExpiredTitle)).toBeHidden();
  await expect(apiRequestCount).toEqual(5);
  await expect(await isExpirationCookieExists()).toBeTruthy();
});


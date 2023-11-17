import { test, expect } from '@playwright/test';

const domain = "https://surveyjstest.azurewebsites.net";
// const domain = "http://localhost:62946";

const url = domain + "/form-library";

test('Switch platform', async ({ page }) => {
   test.setTimeout(480000);
   
   await page.goto(url);
   await page.locator('a').filter({ hasText: 'Accept All' }).click();
   
   await expect(page.locator(".v2-class---code-panel div[data-platform=angular]")).toHaveClass(/v2-class---platform-selector-item--selected/);
   await expect(page.locator(".v2-class---features-list-item__front-end-item div[data-platform=angular]")).toHaveClass(/v2-class---platform-selector-item--selected/);
   await expect(page.locator(".v2-class---features-list-item__install-package")).toHaveText(/angular/);

   await page.locator(".v2-class---code-panel div[data-platform=react]").click();
   await expect(page.locator(".v2-class---code-panel div[data-platform=react]")).toHaveClass(/v2-class---platform-selector-item--selected/);
   await expect(page.locator(".v2-class---features-list-item__front-end-item div[data-platform=react]")).toHaveClass(/v2-class---platform-selector-item--selected/);
   await expect(page.locator(".v2-class---features-list-item__install-package")).toHaveText(/react/);

   await page.locator(".v2-class---features-list-item__front-end-item  div[data-platform=jquery]").click();
   await expect(page.locator(".v2-class---code-panel div[data-platform=jquery]")).toHaveClass(/v2-class---platform-selector-item--selected/);
   await expect(page.locator(".v2-class---features-list-item__front-end-item div[data-platform=jquery]")).toHaveClass(/v2-class---platform-selector-item--selected/);
   await expect(page.locator(".v2-class---features-list-item__install-package")).toHaveText(/jquery/);
});

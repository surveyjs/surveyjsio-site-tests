import { test, expect, acceptCookieBanner, url } from '../../helper';

// --- Tests from question_types (codesandbox) ---

test('codesandbox', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/form-library/examples/text-entry-question/reactjs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const codesandboxDropdown = page.locator('.v2-class---header-toolbar-item-dropdown').filter({ hasText: 'CodeSandbox', visible: true }).first();
  await codesandboxDropdown.hover();

  await codesandboxDropdown.locator('li').filter({ hasText: 'React', visible: true }).first().click();
});

// --- Tests from question_types (text, signaturepad) ---

test('text', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/Examples/Library`);

  // Custom cookie handling from TestCafe fixture translated to Playwright
  const cookiePopupAccept = page.locator('.v2-class---banner-footer-actions .v2-class---button').first();
  if (await cookiePopupAccept.isVisible()) {
    await cookiePopupAccept.click(); // close cookie msg
  }

  await page.setViewportSize({ width: 1920, height: 1080 });

  const sideBarGroupItemSimple = page.locator('.v2-class---drop-down-menu-item__link--level-1').filter({ hasText: 'Simple Questions', visible: true }).first();
  const sideBarItemTextEntry = page.locator('.v2-class---drop-down-menu-item__link--level-2').filter({ hasText: 'Text Entry', visible: true }).first();

  await sideBarGroupItemSimple.click();
  await sideBarItemTextEntry.click();

  // Text inputs: TestCafe uses nth(0), nth(2), nth(1)
  const textInput0 = page.locator('input.sd-text').nth(0);
  const textInput1 = page.locator('input.sd-text').nth(1);
  const textInput2 = page.locator('input.sd-text').nth(2);

  await textInput0.fill('Test'); // CaretPos handling is implicit in Playwright fill()
  await textInput2.fill('01012001');
  await textInput1.fill('test@test.org');

  await page.locator('.sd-navigation__complete-btn').click();

  await expect(page.locator('#content-result-json-code').first()).toBeVisible();
});

test('signaturepad', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto('https://surveyjstest.azurewebsites.net/form-library/examples/signature-pad-widget-javascript');

  await page.setViewportSize({ width: 1920, height: 1080 });

  const canvas = page.locator('.sd-signaturepad').locator('canvas').first();
  await expect(canvas).toBeVisible();

  const canvasScrollWidth = await canvas.evaluate(el => el.scrollWidth);
  const canvasClientHeight = await canvas.evaluate(el => el.clientHeight);

  await expect(canvasScrollWidth).toBeGreaterThan(0);
  await expect(canvasClientHeight).toBeGreaterThan(0);
});

// --- Tests from survey (title_logo) ---

test('title_logo', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/Examples/Library`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const sideBarGroupItemSurvey = page.locator('.v2-class---drop-down-menu-item__link--level-1').filter({ hasText: 'Survey', visible: true }).first();
  const sideBarItemBrandedHeader = page.locator('.v2-class---drop-down-menu-item__link--level-2').filter({ hasText: 'Branded Survey Header', visible: true }).first();

  await sideBarGroupItemSurvey.click();
  await sideBarItemBrandedHeader.click();

  await expect(page.locator('.sd-logo__image').first()).toBeVisible();

  const surveyTitle = page.locator('#surveyElement span').filter({ hasText: 'NPS Survey Question', visible: true }).first();
  const surveyDescription = page.locator('#surveyElement span').filter({ hasText: 'NPS (net promoter score) is a metric used to evaluate customer loyalty and business growth', visible: true }).first();
  const logoLeft = page.locator('.sd-logo.sv-logo--left').first();
  const logoRight = page.locator('.sd-logo.sv-logo--right').first();

  await expect(surveyTitle).toBeVisible();
  await expect(surveyDescription).toBeVisible();

  await expect(logoLeft).toBeVisible();
  await expect(logoRight).toBeHidden();

  await page.locator('#tool-settings').first().click({ force: true });
});
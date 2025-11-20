import { test, expect, acceptCookieBanner, url } from '../../helper';

// --- custom_widgets_single_page tests ---

test('Check date picker in creator', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/BuilderSinglePage?id=customwidgets&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });
});

test('Check microphone in creator', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/BuilderSinglePage?id=customwidgets&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.locator('span').filter({ hasText: 'Microphone', visible: true }).first().click();
  await page.locator('span.nav-link').filter({ hasText: 'Test Survey', visible: true }).first().click();

  await expect(page.locator('button[title="Record"]').filter({ visible: true }).first()).toBeVisible();
  await expect(page.locator('audio').filter({ visible: true }).first()).toBeVisible();
});

test('Check bootstrap datepicker', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/BuilderSinglePage?id=customwidgets&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });
});

// --- depends_on_properties tests ---

test('Check default tabs 1', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/Builder?id=dependsonproperties&platform=Knockoutjs&theme=default`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Designer', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Preview', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'JSON Editor', visible: true }).first()).toBeVisible();

  const codeTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Code', visible: true }).first();
  const codeContent = page.locator('code').first();
  const indexHtmlTab = page.locator('span').filter({ hasText: 'index.html', visible: true }).first();

  await codeTab.click();
  await expect(codeContent).toContainText('Populate countries depending on the selected region');

  await indexHtmlTab.click();
  await expect(codeContent).toContainText('id="surveyCreatorContainer"');
});

// --- Editor Options tests ---

test('Show default tabs', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/Builder?id=options&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Survey Templates', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Designer', visible: true }).first()).toHaveText('Designer');
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Preview', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Logic', visible: true }).first()).toBeVisible();
});

// --- element_menu_customization tests ---

test('Check default tabs 2', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/Builder?id=elementmenu&platform=Knockoutjs&theme=default`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const codeTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Code', visible: true }).first();
  const indexHtmlTab = page.locator('span').filter({ hasText: 'index.html', visible: true }).first();
  const indexCssTab = page.locator('span').filter({ hasText: 'index.css', visible: true }).first();
  const codeContent = page.locator('code').first();

  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Designer', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Preview', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'JSON Editor', visible: true }).first()).toBeVisible();

  await codeTab.click();
  await expect(page.locator('span').filter({ hasText: 'SurveyCreator', visible: true }).first()).toBeVisible();

  await indexHtmlTab.click();
  await expect(page.locator('span').filter({ hasText: '<div id="surveyCreatorContainer', visible: true }).first()).toBeVisible();

  await indexCssTab.click();
  await expect(page.locator('code.language-css').first()).toBeVisible();
});

// --- load_survey_from_service tests ---

test('Load survey from service', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/Builder?id=loadfromservice&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const jsonEditorTab = page.locator('.svc-tabbed-menu-item').filter({ hasText: 'JSON Editor', visible: true }).first();
  await jsonEditorTab.click();

  await expect(page.locator('.svc-json-editor-tab__content .ace_content')).toContainText(/frameworkUsing.*mvvmUsing/);
});

// --- localization_single_page tests ---

test.skip('Check tab names with deutsch', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/CreatorSinglePage?id=localization&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const navTabsText = await page.locator('.nav-tabs.svd-tabs').first().innerText();
  await expect(navTabsText).toBe('Umfrage entwerfen Umfrage testen JSON');

  await expect(page.locator('.svd-tab-text').filter({ hasText: 'Umfrage entwerfen', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svd-tab-text').filter({ hasText: 'Umfrage testen', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svd-tab-text').filter({ hasText: 'JSON', visible: true }).first()).toBeVisible();

  await expect(page.locator('.svd-empty-message').first()).toHaveText('Frage bitte hier platzieren.');

  const toolbarDropdownText = await page.locator('.svd-toolbar-dropdown__select').filter({ visible: true }).nth(0).innerText();
  await expect(toolbarDropdownText).toContain('Seite1Neue Seite hinzufügen'); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
});

test('Check toolbox names with deutsch', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/CreatorSinglePage?id=localization&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('.svd_toolbox span').filter({ hasText: 'Auswahl', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svd_toolbox span').filter({ hasText: 'Kommentar', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svd_toolbox span').filter({ hasText: 'Panel (dynamisch)', visible: true }).first()).toBeVisible();
});

test.skip('Check property names with deutsch', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/CreatorSinglePage?id=localization&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.locator('.svd-accordion-tab-header').filter({ hasText: 'Allgemein', visible: true }).first().click();
  await page.locator('.svd-accordion-tab-header').filter({ hasText: 'Abschluss', visible: true }).first().click();

  await expect(page.locator('.svd-control-label').filter({ hasText: 'Weiterleitung (URL)', visible: true }).first()).toBeVisible();

  await page.locator('.svd-accordion-tab-header').filter({ hasText: 'Fragen', visible: true }).first().click();
  await expect(page.locator('.svd-control-label').filter({ hasText: 'Fragennummern anzeigen', visible: true }).first()).toBeVisible();

  const optionsLocator = page.locator('.svd-control-label').filter({ hasText: 'Fragennummern anzeigen' }).locator('+ .form-group').locator('.svd-toolbar-dropdown__select');
  const optionsText = await optionsLocator.innerText();

  const normalizedOptions = optionsText.replace(/\n/g, '_');
  await expect(normalizedOptions).toBe('an_an (unabhängig für jede Seite)_aus'); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
});

// --- open_close_edit_question tests ---

test('Open close check question title', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/CreatorSinglePage?id=options&platform=Knockoutjs&theme=default`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.locator('.svd_toolbox div').filter({ hasText: 'Single Input', visible: true }).first().click();

  const questionTitle = page.locator('span').filter({ hasText: 'question1', visible: true }).first();
  await questionTitle.click();
  await page.keyboard.press('Enter');

  await questionTitle.hover();
});

// --- survey_title tests ---

test.skip('title_adorners', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/Survey-Creator?id=titleadorner&platform=Knockoutjs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const pageTitlePlaceholder = page.locator('span').filter({ hasText: 'Input page title here', visible: true }).nth(2);
  const pageDescriptionPlaceholder = page.locator('span').filter({ hasText: 'Enter a page description', visible: true }).nth(2);

  const surveyTitlePlaceholder = page.locator('#scrollableDiv span').filter({ hasText: 'Input survey title here' }).nth(2);
  const surveyDescriptionPlaceholder = page.locator('span').filter({ hasText: 'Enter a survey description' }).nth(2);
  const addLogoPlaceholder = page.locator('span').filter({ hasText: 'Add logo...' }).nth(2);

  const showHideSurveyTitleButton = page.locator('.svd-primary-icon.svda-title-action__show-hide svg').first();
  const allowShowPageEmptyTitle = page.locator('span').filter({ hasText: 'Allow show page empty title', visible: true }).first();
  const allowUserToChangeSurveyTitleVisibility = page.locator('span').filter({ hasText: 'Allow user to change survey title visibility', visible: true }).first();

  await expect(pageTitlePlaceholder).toBeVisible();
  await expect(pageDescriptionPlaceholder).toBeVisible();

  await expect(surveyTitlePlaceholder).toBeHidden();
  await expect(surveyDescriptionPlaceholder).toBeHidden();

  await showHideSurveyTitleButton.click();

  await expect(surveyTitlePlaceholder).toBeVisible();
  await expect(surveyDescriptionPlaceholder).toBeVisible();
  await expect(addLogoPlaceholder).toBeVisible();

  await allowShowPageEmptyTitle.click();
  await expect(pageTitlePlaceholder).toBeHidden();
  await expect(pageDescriptionPlaceholder).toBeHidden();

  await allowUserToChangeSurveyTitleVisibility.click();
  await expect(showHideSurveyTitleButton).toBeHidden();
});

// --- toolbox_customization tests ---

test('Check tabs 2', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto(`${url}/Examples/Builder?id=toolboxcustomization&platform=Knockoutjs&theme=default`);
  await acceptCookieBanner(page);

  await page.setViewportSize({ width: 1920, height: 1080 });

  const codeTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Code', visible: true }).first();
  const demoTab = page.locator('.v2-class---footer-toolbar-item').filter({ hasText: 'Demo', visible: true }).first();
  const indexHtmlTab = page.locator('span').filter({ hasText: 'index.html', visible: true }).first();
  const codeContent = page.locator('code').first();

  await codeTab.click();

  await expect(codeContent).toContainText('const creator = new SurveyCreator({ questionTypes: [ "text", "checkbox", "radiogroup", "dropdown" ] });');

  await indexHtmlTab.click();
  await expect(codeContent).toContainText('id="surveyCreatorContainer"');

  await expect(codeTab).toHaveClass(/v2-class---footer-toolbar-item--active/);

  await demoTab.click();

  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Designer', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'Preview', visible: true }).first()).toBeVisible();
  await expect(page.locator('.svc-tabbed-menu-item').filter({ hasText: 'JSON Editor', visible: true }).first()).toBeVisible();
});
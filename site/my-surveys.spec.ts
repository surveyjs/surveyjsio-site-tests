/**
 * My Surveys - /service/mysurveys
 *
 * The page belongs to a shared test account, so nothing here changes server
 * state: the actions that would mutate (rename, archive, move to another
 * project) are mocked or cancelled, and checked against a fresh page load.
 */
import type { Locator, Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, authField, siteUrl as url } from '../helper';

const MY_SURVEYS_PAGE = '.v2-class---my-surveys-page';
const LIST_ITEM = '.v2-class---my-surveys-page__list-item';
const CONTEXT_MENU_BUTTON = '.v2-class---my-surveys-page__survey-context-menu-button';
const MENU_ITEM = '.v2-class---drop-down-menu-item__text';
const PROJECT_BUTTON = '.v2-class---drop-down-button.v2-class---drop-down-button__selected-item';

const tester = {
  email: 'Sych-Test1@gmail.com',
  password: 'Sych-Test1@gmail.com',
};
const PERSONAL_PROJECT = 'Personal Surveys';
const ORGANIZATION_PROJECT = '55';

/** The account's licence has expired: the renewal banner covers the list and eats clicks. */
async function silenceExpirationPopup(page: Page): Promise<void> {
  await page.route(/getLicensesExpirationPopupType/, async (route) => {
    await route.fulfill({ json: { popupType: 'none' } });
  });
}

async function login(page: Page): Promise<void> {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await silenceExpirationPopup(page);
  await page.goto(`${url}/login`);
  await acceptCookieBanner(page);
  await authField(page, 'Email').fill(tester.email);
  await authField(page, 'Password').fill(tester.password);
  await page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io website Terms of Use and Priv' }).click();
  await page.locator('.v2-class---signup-page__actions-footer-button-container--login').click();
  // Login is async and finishes with a client-side redirect; wait for the logged-in top
  // bar before navigating, otherwise the goto races with that redirect (net::ERR_ABORTED).
  await expect(page.locator('.v2-class---top-menu-item--drop-down-account').first()).toBeVisible({ timeout: 30000 });
}

async function openMySurveys(page: Page): Promise<Locator> {
  await login(page);
  await page.goto(`${url}/service/mysurveys`);
  // On the netcore stand login happens on a separate auth host, so the consent
  // given there does not dismiss the banner once we are back on the site.
  await acceptCookieBanner(page);
  await expect(page.locator(MY_SURVEYS_PAGE)).toBeVisible();
  const items = page.locator(LIST_ITEM);
  await expect(items.first()).toBeVisible();
  return items;
}

/** The popup is cloned into the row's button on first open, so scope to the row. */
async function openSurveyMenu(item: Locator): Promise<Locator> {
  const button = item.locator(CONTEXT_MENU_BUTTON);
  await button.click();
  await expect(button).toHaveClass(/v2-class---drop-down-button--open/);
  const menu = button.locator('.v2-class---drop-down-menu').first();
  await expect(menu).toBeVisible();
  return menu;
}

test('remember organization', async ({ page, browser }) => {
  const testerEmail = 'Sych-Test1@gmail.com';
  const testerPass = 'Sych-Test1@gmail.com';
  const personalSurveys = 'Personal Surveys';
  const organizationSurveys = '55';

  const isOrganizationCookieExists = async ()=>{
    return await page.evaluate(() => {
      return document.cookie.indexOf('organizationId=') !== -1;
    });
  };

  // none notifications
  await page.goto(`${url}/login`);
  await expect(await isOrganizationCookieExists()).toBeFalsy();
  await acceptCookieBanner(page);
  await page.getByPlaceholder('Email').fill(testerEmail);
  await page.getByPlaceholder('Password').fill(testerPass);
  await page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io website Terms of Use and Priv' }).click();
  await page.locator('.v2-class---signup-page__actions-footer-button-container--login').click();

  // Login is async and finishes with a client-side redirect; wait for the logged-in top
  // bar before navigating, otherwise the goto races with that redirect (net::ERR_ABORTED).
  await expect(page.locator('.v2-class---top-menu-item--drop-down-account').first()).toBeVisible({ timeout: 30000 });

  await page.goto(`${url}/service/mysurveys`);

  await expect(await isOrganizationCookieExists()).toBeFalsy();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button-text').filter({ hasText: personalSurveys })).toBeVisible();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button-text').filter({ hasText: organizationSurveys })).toBeHidden();

  await page.locator('.v2-class---drop-down-button.v2-class---drop-down-button__selected-item').click();
  await expect(page.getByRole('link', { name: personalSurveys })).toBeVisible();
  await expect(page.getByRole('link', { name: organizationSurveys })).toBeVisible();

  await page.getByRole('link', { name: organizationSurveys }).click();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button-text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button .v2-class---drop-down-button__selected-item-button-text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button .v2-class---drop-down-button__selected-item-button-text').filter({ hasText: organizationSurveys })).toBeVisible();
  await expect(await isOrganizationCookieExists()).toBeTruthy();

  await page.goto(`${url}/service/mysurveys`);
  await expect(await isOrganizationCookieExists()).toBeTruthy();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button-text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button .v2-class---drop-down-button__selected-item-button-text').filter({ hasText: personalSurveys })).toBeHidden();
  await expect(page.locator('.v2-class---drop-down-button__selected-item-button .v2-class---drop-down-button__selected-item-button-text').filter({ hasText: organizationSurveys })).toBeVisible();
});

test('My Surveys sends an anonymous visitor to the login page', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/service/mysurveys`);

  // The netcore stand hands the visitor to a separate OIDC auth host, so the page
  // it lands on is not necessarily on siteUrl and the return target is carried in
  // the OIDC state rather than a ReturnUrl query parameter.
  await expect(page).toHaveURL(/\/login(\?|$)/i);
  await expect(authField(page, 'Email')).toBeVisible();
  await expect(authField(page, 'Password')).toBeVisible();
});

test('My Surveys renders the survey list with its actions', async ({ page }) => {
  const items = await openMySurveys(page);

  await expect(page.locator(`${MY_SURVEYS_PAGE} h1`)).toHaveText('My Surveys');
  await expect(page).toHaveTitle(/User Form Repository/);
  expect(await items.count()).toBeGreaterThan(0);

  await expect(page.locator('a').filter({ hasText: 'Create a Survey', visible: true }).first()).toBeVisible();
  await expect(page.locator('form#create-survey')).toHaveAttribute('action', /^\/Service\/Create\//);

  const first = items.first();
  await expect(first.locator('.v2-class---my-surveys-page__survey-name')).not.toBeEmpty();
  await expect(first.locator('[title="Created on"] .v2-class---my-surveys-page__survey-date-item-text')).toContainText(/\d+\/\d+\/\d{4}/);
  await expect(first.locator('[title="Updated on"] .v2-class---my-surveys-page__survey-date-item-text')).toContainText(/\d+\/\d+\/\d{4}/);
  await expect(first.locator(CONTEXT_MENU_BUTTON)).toBeVisible();
});

test('My Surveys project drop-down lists the personal and organization projects', async ({ page }) => {
  await openMySurveys(page);

  const button = page.locator(PROJECT_BUTTON);
  await expect(button).toContainText(PERSONAL_PROJECT);
  await button.click();

  const personal = page.getByRole('link', { name: PERSONAL_PROJECT });
  const organization = page.getByRole('link', { name: ORGANIZATION_PROJECT });
  await expect(personal).toHaveAttribute('href', '/Service/MySurveys/personal');
  await expect(organization).toHaveAttribute('href', /^\/Service\/MySurveys\/[0-9a-f-]{36}$/);
  await expect(personal).toHaveClass(/drop-down-menu-item__link--selected/);
  await expect(organization).not.toHaveClass(/drop-down-menu-item__link--selected/);
});

test('My Surveys context menu offers every survey action', async ({ page }) => {
  const items = await openMySurveys(page);
  const first = items.first();
  const surveyId = await first.locator(CONTEXT_MENU_BUTTON).getAttribute('data-surveyid');
  expect(surveyId).toBeTruthy();

  const menu = await openSurveyMenu(first);
  await expect(menu.locator(MENU_ITEM).filter({ visible: true })).toHaveText([
    'Run',
    'Edit',
    'Clone',
    'Unpublish',
    'Survey IDs',
    'View Results',
    'View History',
    'Move to Project',
    'Archive',
  ], { useInnerText: true });

  await expect(menu.locator('.survey-run-a')).toHaveAttribute('href', `/published?id=${surveyId}`);
  await expect(menu.locator('.survey-run-a')).toHaveAttribute('target', '_blank');
  await expect(menu.locator('.survey-edit-a')).toHaveAttribute('href', `/Service/EditSurvey/${surveyId}`);
  await expect(menu.locator('.survey-results-a')).toHaveAttribute('href', `/Service/SurveyResults/${surveyId}`);
  await expect(menu.locator('.survey-history-a')).toHaveAttribute('href', `/Service/History/${surveyId}`);
});

test('My Surveys opens the survey creator when a row is clicked', async ({ page }) => {
  const items = await openMySurveys(page);
  const first = items.first();
  const surveyId = await first.locator(CONTEXT_MENU_BUTTON).getAttribute('data-surveyid');

  await first.locator('.v2-class---my-surveys-page__survey-name').click();
  // The server serves the route lower-cased, whatever casing the link used.
  await expect(page).toHaveURL(new RegExp(`/service/editsurvey/${surveyId}$`, 'i'));
  await expect(page).toHaveTitle(/^Edit Survey: /);
  await expect(page.locator('.svc-creator').first()).toBeVisible({ timeout: 60000 });
});

test('My Surveys name editor can be cancelled without saving', async ({ page }) => {
  const items = await openMySurveys(page);
  const first = items.first();
  const name = (await first.locator('.v2-class---my-surveys-page__survey-name').innerText()).trim();

  // Shared account: a rename must never reach the server, so fail the PUT outright.
  let renameRequested = false;
  await page.route(/changeName/, async (route) => {
    renameRequested = true;
    await route.abort();
  });

  // The pencil only appears while the row is hovered.
  await first.hover();
  await first.locator('.v2-class---my-surveys-page__edit-icon').click();
  const editor = first.locator('.v2-class---my-surveys-page__edit-survey-name-container');
  await expect(editor).toBeVisible();
  await expect(editor.locator('input')).toHaveValue(name);

  await editor.locator('input').fill('Renamed by e2e');
  await editor.locator('a').filter({ hasText: 'Cancel' }).click();

  await expect(editor).toBeHidden();
  await expect(first.locator('.v2-class---my-surveys-page__survey-name')).toHaveText(name);
  expect(renameRequested).toBeFalsy();
});

test('My Surveys name editor saves through the changeName endpoint', async ({ page }) => {
  const items = await openMySurveys(page);
  const first = items.first();
  const surveyId = await first.locator(CONTEXT_MENU_BUTTON).getAttribute('data-surveyid');
  const name = (await first.locator('.v2-class---my-surveys-page__survey-name').innerText()).trim();
  const newName = `e2e rename ${Date.now()}`;

  let renameUrl: string | undefined;
  await page.route(/changeName/, async (route) => {
    renameUrl = route.request().url();
    // The script only restores the old caption on a non-200, so answer 200.
    await route.fulfill({ status: 200, body: '' });
  });

  await first.hover();
  await first.locator('.v2-class---my-surveys-page__edit-icon').click();
  await first.locator('.v2-class---my-surveys-page__edit-survey-name-container input').fill(newName);
  await Promise.all([
    page.waitForRequest(/changeName/),
    first.locator('a').filter({ hasText: 'Save' }).click(),
  ]);

  expect(renameUrl).toContain(`id=${surveyId}`);
  expect(renameUrl).toContain(encodeURIComponent(newName));
  await expect(first.locator('.v2-class---my-surveys-page__survey-name')).toHaveText(newName);

  // The PUT was mocked, so a fresh load must still show the old name.
  await page.goto(`${url}/service/mysurveys`);
  await expect(page.locator(LIST_ITEM).first().locator('.v2-class---my-surveys-page__survey-name')).toHaveText(name);
});

test('My Surveys copies the survey, result and post ids to the clipboard', async ({ page }) => {
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  const items = await openMySurveys(page);
  const first = items.first();
  const button = first.locator(CONTEXT_MENU_BUTTON);
  const ids = {
    'Copy ID': await button.getAttribute('data-surveyid'),
    'Copy Result ID': await button.getAttribute('data-resultid'),
    'Copy Post ID': await button.getAttribute('data-postid'),
  };

  for (const [caption, id] of Object.entries(ids)) {
    const menu = await openSurveyMenu(first);
    await menu.locator('.v2-class---my-surveys-page__move-to-project-menu-button').filter({ hasText: 'Survey IDs' }).hover();
    await menu.locator('a').filter({ hasText: caption }).click();
    expect(await page.evaluate(() => window.navigator.clipboard.readText()), caption).toBe(id);
  }
});

test('My Surveys asks before moving a survey to another project', async ({ page }) => {
  const items = await openMySurveys(page);
  const first = items.first();

  let moveRequested = false;
  await page.route(/changeorganizationsurvey/i, async (route) => {
    moveRequested = true;
    await route.abort();
  });

  let dialogMessage = '';
  page.on('dialog', async (dialog) => {
    dialogMessage = dialog.message();
    await dialog.dismiss();
  });

  const menu = await openSurveyMenu(first);
  await menu.locator('.v2-class---my-surveys-page__move-to-project-menu-button').filter({ hasText: 'Move to Project' }).hover();
  await menu.locator('a').filter({ hasText: ORGANIZATION_PROJECT, visible: true }).first().click();

  await expect.poll(() => dialogMessage).toContain('move this survey to another organization');
  expect(moveRequested).toBeFalsy();
  await expect(page).toHaveURL(`${url}/service/mysurveys`);
});

test('My Surveys archives through the archive action of the current project', async ({ page }) => {
  const items = await openMySurveys(page);
  const first = items.first();
  const surveyId = await first.locator(CONTEXT_MENU_BUTTON).getAttribute('data-surveyid');

  // Shared account: stop the navigation at the request instead of archiving for real.
  let archiveUrl: string | undefined;
  await page.route(/\/service\/archivesurvey\//i, async (route) => {
    archiveUrl = route.request().url();
    await route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>archive intercepted</body></html>' });
  });

  const menu = await openSurveyMenu(first);
  await Promise.all([
    page.waitForRequest(/\/service\/archivesurvey\//i),
    menu.locator('a').filter({ hasText: 'Archive' }).click(),
  ]);

  expect(archiveUrl).toContain(`/service/archivesurvey/${surveyId}`);
  expect(archiveUrl).toContain('organization=personal');
  expect(archiveUrl).toContain('type=list');
});

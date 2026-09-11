import type { Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

// Left-sidebar navigation on the markdown-content sections (Documentation, FAQ,
// Stay Updated). Static rendering of these sidebars is covered by
// markdown-content.spec.ts; these tests exercise the navigation itself.

const sidebar = (page: Page) => page.locator('.v2-class---sidebar').first();
// The site marks the sidebar entry of the currently open page with the
// "--selected" modifier; it's the signal that navigation actually happened.
const activeItem = (page: Page) => sidebar(page).locator('a.v2-class---drop-down-menu-item__link--selected').first();

test.describe('Documentation sidebar', () => {
  test('sidebar link opens the article and becomes active', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/documentation`);
    await acceptCookieBanner(page);

    await sidebar(page).locator('a[href="/documentation/surveyjs-architecture"]').first().click();
    await expect(page).toHaveURL(/\/documentation\/surveyjs-architecture$/);
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('SurveyJS Architecture');
    await expect(activeItem(page)).toContainText('SurveyJS Architecture');
  });

  test('collapsed category expands and its nested link navigates', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/documentation`);
    await acceptCookieBanner(page);

    const nestedLink = sidebar(page).locator('a[href="/form-library/documentation/overview"]').first();
    await expect(nestedLink).toBeHidden();

    await sidebar(page).locator('a').filter({ hasText: 'Form Library' }).first().click();
    await expect(nestedLink).toBeVisible();

    await nestedLink.click();
    await expect(page).toHaveURL(/\/form-library\/documentation\/overview$/);
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('Form Library Overview');
  });

  test('sidebar marks the current article when the page is opened directly', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/documentation/backend-integration`);
    await acceptCookieBanner(page);
    await expect(activeItem(page)).toContainText('Integration with Backend');
  });
});

test.describe('FAQ sidebar', () => {
  test('sidebar link opens the section and becomes active', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/faq`);
    await acceptCookieBanner(page);

    await sidebar(page).locator('a[href="/faq/support"]').first().click();
    await expect(page).toHaveURL(/\/faq\/support$/);
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('Support');
    await expect(activeItem(page)).toContainText('Support');
  });

  test('navigating between sections via the sidebar updates the article', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/faq/licensing`);
    await acceptCookieBanner(page);
    await expect(activeItem(page)).toContainText('Licensing');

    await sidebar(page).locator('a[href="/faq/data-storage"]').first().click();
    await expect(page).toHaveURL(/\/faq\/data-storage$/);
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('Data Storage');
    await expect(activeItem(page)).toContainText('Data Storage and Security');
  });
});

test.describe('Stay Updated sidebar', () => {
  test('sidebar link opens Release Notes', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/stay-updated`);
    await acceptCookieBanner(page);

    await sidebar(page).locator('a[href="/stay-updated/release-notes"]').first().click();
    await expect(page).toHaveURL(/\/stay-updated\/release-notes$/);
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('Release Notes');
    await expect(activeItem(page)).toContainText('Release Notes');
  });

  test('Major Updates group expands and a year page opens', async ({ page }) => {
    await page.setViewportSize({ width: 1599, height: 768 });
    await page.goto(`${url}/stay-updated`);
    await acceptCookieBanner(page);

    const yearLink = sidebar(page).locator('a[href="/stay-updated/major-updates/2024"]').first();
    await expect(yearLink).toBeHidden();

    await sidebar(page).locator('a').filter({ hasText: 'Major Updates' }).first().click();
    await expect(yearLink).toBeVisible();

    await yearLink.click();
    await expect(page).toHaveURL(/\/stay-updated\/major-updates\/2024$/);
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('Major Updates 2024');
  });
});

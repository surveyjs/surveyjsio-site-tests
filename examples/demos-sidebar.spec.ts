import type { Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, examplesURL as url } from '../helper';

// Left-sidebar navigation on the demos (examples) pages.

const sidebar = (page: Page) => page.locator('.v2-class---sidebar').first();

test('sidebar group expands and opens a demo with a live survey', async ({ page }) => {
  await page.goto(`${url}/form-library/examples/overview`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  const demoLink = sidebar(page).locator('a[href*="order-form-template-free"]').first();
  // Sidebar groups are collapsed by default; the demo link must be hidden
  // before the group is expanded and visible after.
  await expect(demoLink).toBeHidden();

  await sidebar(page).locator('.v2-class---drop-down-menu-item__link--level-1')
    .filter({ hasText: 'Featured Demos' }).first().click();
  await expect(demoLink).toBeVisible();

  await demoLink.click();
  await expect(page).toHaveURL(/\/form-library\/examples\/order-form-template-free\//);
  await expect(page.locator('h1').filter({ visible: true }).first()).toContainText('Order Form');
  // The demo actually renders a survey, not just the page shell.
  await expect(page.locator('.sd-root-modern').first()).toBeVisible({ timeout: 60000 });
});

test('sidebar filter narrows the list to matching demos', async ({ page }) => {
  await page.goto(`${url}/form-library/examples/overview`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  const filter = page.locator('.v2-class---sidebar-search-input').first();
  await expect(filter).toBeVisible();
  await filter.fill('Hotel Booking');

  const match = sidebar(page).locator('a[href*="hotel-booking-form"]').first();
  await expect(match).toBeVisible();
  // Exactly 2 visible links remain: the matching demo and its group header.
  await expect(sidebar(page).locator('a').filter({ visible: true })).toHaveCount(2);

  // Clearing the filter restores the full list (Overview is its first entry).
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // Prefix match: some deployments platform-suffix the href (…/overview/reactjs).
  await filter.fill('');
  await expect(sidebar(page).locator('a[href^="/form-library/examples/overview"]').first()).toBeVisible();
});

test('sidebar marks the current demo when its page is opened directly', async ({ page }) => {
  await page.goto(`${url}/form-library/examples/order-form-template-free/reactjs`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  // The "--selected" modifier marks the sidebar entry matching the current URL.
  const active = sidebar(page).locator('a.v2-class---drop-down-menu-item__link--selected').first();
  await expect(active).toContainText('Order Form');
});

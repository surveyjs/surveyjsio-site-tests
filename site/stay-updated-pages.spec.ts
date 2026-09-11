import type { Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

// Pages of the "Stay Updated" top-menu. Content on these pages changes with
// every release/post, so assertions target time-independent structure only:
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// article cards, dates, status labels, anchor menus — never specific texts.

const M = '.v2-class---markdown-content-page';

async function open(page: Page, path: string) {
  await page.setViewportSize({ width: 1599, height: 768 });
  await page.goto(`${url}${path}`);
  await acceptCookieBanner(page);
}

test('Blog lists dated article cards and opens a post', async ({ page }) => {
  await open(page, '/stay-updated');

  await expect(page.locator(`${M}__pinned-article`).first()).toBeVisible();

  const items = page.locator(`${M}__articles-list-item`);
  await expect(items.first()).toBeVisible();
  // Loose lower bound: the archive only grows, exact counts change per post.
  expect(await items.count()).toBeGreaterThanOrEqual(10);

  // Every card carries a title, description, and date.
  const firstItem = items.first();
  await expect(firstItem.locator(`${M}__article-title`).first()).toBeVisible();
  await expect(firstItem.locator(`${M}__article-description`).first()).toBeVisible();
  await expect(firstItem.locator(`${M}__article-date`).first()).toBeVisible();

  // Cards are anchors; the first one opens a full post.
  await firstItem.click();
  await expect(page).toHaveURL(/\/stay-updated\/blog\/.+/);
  await expect(page.locator(`${M}__article-content`).first()).toBeVisible();
  await expect(page.locator('.v2-class---anchor-menu').first()).toBeVisible();
});

test('Release Notes group dated entries into columns', async ({ page }) => {
  await open(page, '/stay-updated/release-notes');

  const items = page.locator(`${M}__articles-list-item`);
  await expect(items.first()).toBeVisible();
  expect(await items.count()).toBeGreaterThanOrEqual(10);

  expect(await page.locator(`${M}__articles-list-column`).count()).toBeGreaterThanOrEqual(2);
  await expect(page.locator(`${M}__articles-list-column-header`).first()).toBeVisible();
  await expect(items.first().locator(`${M}__article-date`).first()).toBeVisible();
});

test('Breaking Changes renders an article with an anchor menu and bottom navigation', async ({ page }) => {
  await open(page, '/stay-updated/breaking-changes');

  await expect(page.locator(`${M}__article-content`).first()).toBeVisible();
  // The anchor menu fills in asynchronously - use a polling assertion.
  await expect(page.locator('.v2-class---anchor-menu a').first()).toBeVisible();
  await expect(page.locator(`${M}__navigation`).first()).toBeAttached();
});

test('Roadmap shows status labels and the feedback survey', async ({ page }) => {
  await open(page, '/stay-updated/roadmap');

  await expect(page.locator(`${M}__article-content`).first()).toBeVisible();
  // Roadmap entries are always tagged with a status badge of some kind.
  const labels = page.locator(`${M}__implemented-label, ${M}__in-progress-label`);
  expect(await labels.count()).toBeGreaterThan(0);
  await expect(page.locator(`${M}__survey`).first()).toBeAttached();
});

// Card-list sections: cards must carry a title and a description; some sections
// also pin a highlighted article, add cover images, or show dates.
const listSections: Array<{ path: string, pinned: boolean, images: boolean, dates: boolean }> = [
  { path: '/stay-updated/case-studies', pinned: true, images: true, dates: true },
  { path: '/stay-updated/tutorials', pinned: true, images: true, dates: true },
  // White papers and migration guides render their date containers empty.
  { path: '/stay-updated/white-papers', pinned: false, images: false, dates: false },
  { path: '/stay-updated/migration-guides', pinned: false, images: false, dates: false },
];

for (const { path, pinned, images, dates } of listSections) {
  test(`Article cards are structured: ${path}`, async ({ page }) => {
    await open(page, path);

    if (pinned) {
      await expect(page.locator(`${M}__pinned-article`).first()).toBeVisible();
    }
    const items = page.locator(`${M}__articles-list-item`);
    await expect(items.first()).toBeVisible();

    const firstItem = items.first();
    await expect(firstItem.locator(`${M}__article-title`).first()).toBeVisible();
    await expect(firstItem.locator(`${M}__article-description`).first()).toBeVisible();
    if (dates) {
      await expect(firstItem.locator(`${M}__article-date`).first()).toBeVisible();
    }
    if (images) {
      await expect(firstItem.locator(`${M}__article-image-container`).first()).toBeVisible();
    }
  });
}

test('Latest Major Updates page opens from the sidebar regardless of year', async ({ page }) => {
  await open(page, '/stay-updated');

  const sidebar = page.locator('.v2-class---sidebar').first();
  await sidebar.locator('a').filter({ hasText: 'Major Updates' }).first().click();
  // Year links change over time; take whatever is listed first.
  const yearLink = sidebar.locator('a[href^="/stay-updated/major-updates/"]').first();
  await expect(yearLink).toBeVisible();
  await yearLink.click();

  await expect(page).toHaveURL(/\/stay-updated\/major-updates\/.+/);
  await expect(page.locator(`${M}__article-content`).first()).toBeVisible();
  // The anchor menu fills in asynchronously - use a polling assertion.
  await expect(page.locator('.v2-class---anchor-menu a').first()).toBeVisible();
});

import { test, expect, acceptCookieBanner, siteUrl as url, compareScreenshot, screens } from '../helper';

test.beforeAll('Setup', async () => {
  console.log('Before tests');
});

test('FAQ Overview', async ({ page }) => {
  await page.setViewportSize({ width: 1599, height: 768 });
  await page.goto(`${url}/faq`);
  await acceptCookieBanner(page);
  await page.waitForTimeout(1000);

  await expect(page.locator('.s-search')).toBeVisible();
  await expect(page.locator('.s-search__search-button').first()).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .s-search__search-button')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search in FAQ...' })).toBeVisible();

  const leftSidebar = page.locator('.v2-class---sidebar').first();
  await compareScreenshot(page, leftSidebar, 'markdown-content-faq-vnav-1.png');

  const rightSidebar = page.locator('.v2-class---anchor-menu').first();
  await compareScreenshot(page, rightSidebar, 'markdown-content-faq-anchor-menu-1.png');

  const unorderedList = page.locator('.v2-class---list-doc--unordered').first();
  await compareScreenshot(page, unorderedList, 'markdown-content-faq-unordered-list.png');

  await page.locator('.s-search__search-button').first().click();
  await expect(leftSidebar).toBeHidden();

  await page.locator('div:nth-child(3) > .s-search__search-button').click();
  await expect(rightSidebar).toBeHidden();

  await page.locator('.s-search__search-button').first().click();
  await expect(leftSidebar).toBeVisible();

  await page.locator('div:nth-child(3) > .s-search__search-button').click();
  await expect(rightSidebar).toBeVisible();
});

test('FAQ Licensing', async ({ page }) => {
  await page.setViewportSize({ width: 1599, height: 768 });
  await page.goto(`${url}/faq/licensing`);
  await acceptCookieBanner(page);
  await page.waitForTimeout(1000);

  await expect(page.locator('.s-search')).toBeVisible();
  await expect(page.locator('.s-search__search-button').first()).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .s-search__search-button')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search in FAQ...' })).toBeVisible();

  const leftSidebar = page.locator('.v2-class---sidebar').first();
  await compareScreenshot(page, leftSidebar, 'markdown-content-faq-vnav-2.png');

  const rightSidebar = page.locator('.v2-class---anchor-menu').first();
  await compareScreenshot(page, rightSidebar, 'markdown-content-faq-anchor-menu-2.png');

  await page.locator('.s-search__search-button').first().click();
  await expect(leftSidebar).toBeHidden();

  await page.locator('div:nth-child(3) > .s-search__search-button').click();
  await expect(rightSidebar).toBeHidden();

  await page.locator('.s-search__search-button').first().click();
  await expect(leftSidebar).toBeVisible();

  await page.locator('div:nth-child(3) > .s-search__search-button').click();
  await expect(rightSidebar).toBeVisible();

  const article = page.locator('.v2-class---faq-page__article-section').first();
  await compareScreenshot(page, article, 'markdown-content-faq-article.png');

  const articleTitle = page.locator('.v2-class---header--level-2').first();
  await compareScreenshot(page, articleTitle, 'markdown-content-faq-article-title.png');

  const tags = page.locator('.v2-class---markdown-content-page__tags').first();
  await compareScreenshot(page, tags, 'markdown-content-faq-tags.png');

  const pointsList = page.locator('.v2-class---list-doc--unordered').first();
  await compareScreenshot(page, pointsList, 'markdown-content-faq-points-list.png');

  const bottomNav = page.locator('.v2-class---faq-page__nav').first();
  await compareScreenshot(page, bottomNav, 'markdown-content-faq-bottom-nav.png');
});

test('Documentation Overview', async ({ page }) => {
  await page.setViewportSize({ width: 1599, height: 768 });
  await page.goto(`${url}/documentation`);
  await acceptCookieBanner(page);
  await page.waitForTimeout(1000);

  await expect(page.locator('.s-search')).toBeVisible();
  await expect(page.locator('.s-search__search-button').first()).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .s-search__search-button')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search in documentation...' })).toBeVisible();

  const leftSidebar = page.locator('.v2-class---sidebar').first();
  await compareScreenshot(page, leftSidebar, 'markdown-content-doc-vnav-1.png');

  const rightSidebar = page.locator('.v2-class---anchor-menu').first();
  await compareScreenshot(page, rightSidebar, 'markdown-content-doc-anchor-menu-1.png');

  const unorderedList = page.locator('.v2-class---list-doc--unordered').first();
  await compareScreenshot(page, unorderedList, 'markdown-content-doc-unordered-list.png');

  await page.locator('.s-search__search-button').first().click();
  await expect(leftSidebar).toBeHidden();

  await page.locator('div:nth-child(3) > .s-search__search-button').click();
  await expect(rightSidebar).toBeHidden();

  await page.locator('.s-search__search-button').first().click();
  await expect(leftSidebar).toBeVisible();

  await page.locator('div:nth-child(3) > .s-search__search-button').click();
  await expect(rightSidebar).toBeVisible();

  const articleTitle = page.locator('.v2-class---header--level-1').first();
  await compareScreenshot(page, articleTitle, 'markdown-content-doc-article-title.png');

  const articleParagraph = page.locator('.v2-class---paragraph').first();
  await compareScreenshot(page, articleParagraph, 'markdown-content-doc-article-paragraph.png');
});

test('Stay Updated Overview', async ({ page }) => {
  await page.setViewportSize({ width: 1599, height: 768 });
  await page.goto(`${url}/stay-updated`);
  await acceptCookieBanner(page);
  await page.waitForTimeout(1000);

  await expect(page.locator('.s-search')).toBeVisible();
  await expect(page.locator('.s-search__search-button').first()).toBeVisible();
  await expect(page.locator('div:nth-child(3) > .s-search__search-button')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search in blog & updates...' })).toBeVisible();

  // Blog content changes with every post, so no screenshots here -
  // assert only the time-independent page structure.

  // Left sidebar renders with at least one navigation link.
  const leftSidebar = page.locator('.v2-class---sidebar').first();
  await expect(leftSidebar).toBeVisible();
  expect(await leftSidebar.locator('a').count()).toBeGreaterThan(0);

  // Anchor menu fills in asynchronously; polling assertion covers that.
  const rightSidebar = page.locator('.v2-class---anchor-menu').first();
  await expect(rightSidebar).toBeVisible();
  await expect(rightSidebar.locator('a').first()).toBeVisible();

  // A pinned (highlighted) article with a title always tops the list.
  const pinnedArticle = page.locator('.v2-class---markdown-content-page__pinned-article').first();
  await expect(pinnedArticle).toBeVisible();
  await expect(pinnedArticle.locator('.v2-class---markdown-content-page__article-title').first()).toBeVisible();

  // Every article card carries a title, description, and date.
  const articleItem = page.locator('.v2-class---markdown-content-page__articles-list-item').first();
  await expect(articleItem).toBeVisible();
  await expect(articleItem.locator('.v2-class---markdown-content-page__article-title').first()).toBeVisible();
  await expect(articleItem.locator('.v2-class---markdown-content-page__article-description').first()).toBeVisible();
  await expect(articleItem.locator('.v2-class---markdown-content-page__article-date').first()).toBeVisible();
});

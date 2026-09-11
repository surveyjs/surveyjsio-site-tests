import type { Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

// Product pages from the "Products" top-menu. Basic rendering (200/h1/chrome)
// is covered by landing-pages.spec.ts; these tests verify each page's own
// CTAs and key content blocks. The /form-library platform switcher is covered
// by form-library-page.spec.ts.

// CTA links live in the page body; header/footer repeat some hrefs (e.g. /pricing).
const cta = (page: Page, href: string) => page
  .locator(`main a[href="${href}"], article a[href="${href}"]`)
  .filter({ visible: true })
  .first();

const productPages: Array<{ path: string, ctas: Array<{ name: string, href: string }> }> = [
  {
    path: '/form-library',
    ctas: [
      { name: 'Guides', href: '/form-library/documentation' },
      { name: 'View Demos', href: '/form-library/examples' },
    ],
  },
  {
    path: '/open-source',
    ctas: [
      { name: 'Guides', href: '/survey-creator/documentation/overview' },
      { name: 'Source Code', href: 'https://github.com/surveyjs/survey-creator' },
      { name: 'Full-Featured Demo', href: '/create-free-survey' },
    ],
  },
  {
    path: '/dashboard',
    ctas: [
      { name: 'Learn More', href: '/dashboard/documentation' },
      { name: 'View Demos', href: '/dashboard/examples' },
      { name: 'See Plans', href: '/pricing' },
    ],
  },
  {
    path: '/pdf-generator',
    ctas: [
      { name: 'Learn More', href: '/pdf-generator/documentation' },
      { name: 'View Demos', href: '/pdf-generator/examples' },
      { name: 'Get Started', href: '/pdf-generator/documentation/get-started' },
    ],
  },
  {
    path: '/features',
    ctas: [
      { name: 'Backend Integration', href: '/backend-integration/examples' },
      { name: 'All-in-One Demo', href: '/create-free-survey' },
      { name: 'Licensing', href: '/licensing' },
      { name: 'Pricing Plans', href: '/pricing' },
    ],
  },
  {
    path: '/free-survey-tool',
    ctas: [
      { name: 'Guide', href: '/documentation/end-user-guide' },
      { name: 'Create a Survey', href: '/create-free-survey' },
      { name: 'See Plans', href: '/pricing' },
    ],
  },
];

for (const { path, ctas } of productPages) {
  test(`Product page CTAs: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${url}${path}`);
    await acceptCookieBanner(page);
    for (const { name, href } of ctas) {
      const link = cta(page, href);
      // toBeAttached, not toBeVisible: most CTAs sit below the fold, and
      // existence with the right caption is what these checks are after.
      await expect(link, `"${name}" CTA (${href})`).toBeAttached();
      await expect(link, `"${name}" CTA (${href})`).toContainText(name);
    }
  });
}

test('Form Library page renders a live embedded survey with a code panel', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/form-library`);
  await acceptCookieBanner(page);

  // .sd-root-modern/.sd-body only exist when the embedded survey widget has
  // actually initialized (attached, since it renders below the fold).
  await expect(page.locator('.sd-root-modern, .sd-body').first()).toBeAttached();
  const codePanel = page.locator('.v2-class---code-panel').first();
  await codePanel.scrollIntoViewIfNeeded();
  await expect(codePanel).toBeVisible();
  await expect(codePanel.locator('div[data-platform]').first()).toBeVisible();
});

test('Survey Creator page renders a live embedded demo with a platform selector', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/open-source`);
  await acceptCookieBanner(page);

  await expect(page.locator('.sd-root-modern, .sd-body').first()).toBeAttached();
  const platformSelector = page.locator('div[data-platform]').first();
  await platformSelector.scrollIntoViewIfNeeded();
  await expect(platformSelector).toBeVisible();
});

test('Partner Solutions page shows partner cards and the application form', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}/partner-solutions`);
  await acceptCookieBanner(page);

  const getFeatured = page.locator('main a[href="#apply"], article a[href="#apply"]')
    .filter({ visible: true })
    .filter({ hasText: 'Get Featured' })
    .first();
  await expect(getFeatured).toBeVisible();
  // Partner cards change over time; only check that some content section
  // (an h2 beyond the hero) is rendered rather than naming partners.
  await expect(page.locator('h2').filter({ visible: true }).nth(1)).toBeVisible();
  await getFeatured.click();
  // The page has two id="apply" elements (section + heading); target the form section.
  const applySection = page.locator('section#apply').first();
  await expect(applySection).toBeVisible();
  await expect(applySection.getByText('Full name')).toBeVisible();
  await expect(applySection.getByText('Work email')).toBeVisible();
});

import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

// Smoke checks for the marketing/content pages reachable from the top menu:
// the page responds with 200, renders its H1, and throws no JS errors
// (enforced by the page fixture in helper.ts).
const pages: Array<{ path: string, heading: RegExp }> = [
  // Products
  { path: '/open-source', heading: /Open-Source Form Builder/i },
  { path: '/dashboard', heading: /survey results into powerful dashboards/i },
  { path: '/pdf-generator', heading: /Convert your web forms/i },
  { path: '/features', heading: /Automate Form Management/i },
  { path: '/partner-solutions', heading: /SurveyJS partner/i },
  { path: '/free-survey-tool', heading: /Secure surveying/i },
  // Demos entry points
  { path: '/themes/theme-adapters', heading: /Look Like Part of Your Application/i },
  { path: '/backend-integration/examples', heading: /Form Management System/i },
  // Developers
  { path: '/licensing', heading: /SurveyJS Licensing/i },
  { path: '/support', heading: /Help Desk/i },
  // Industries
  { path: '/healthcare', heading: /patients/i },
  { path: '/human-resources', heading: /HR Form/i },
  { path: '/education', heading: /Academic\s+Survey Software/i },
  { path: '/market-research', heading: /Market Research/i },
  // Stay Updated
  { path: '/stay-updated/roadmap', heading: /roadmap/i },
  { path: '/stay-updated/breaking-changes', heading: /breaking changes/i },
  { path: '/stay-updated/case-studies', heading: /Case Studies/i },
  { path: '/stay-updated/tutorials', heading: /Tutorials/i },
  { path: '/stay-updated/white-papers', heading: /White Papers/i },
  { path: '/stay-updated/migration-guides', heading: /Migration Guides/i },
];

for (const { path, heading } of pages) {
  test(`Page renders: ${path}`, async ({ page }) => {
    const response = await page.goto(`${url}${path}`);
    expect(response?.status()).toBe(200);
    await acceptCookieBanner(page);
    // Some pages carry several h1 elements (e.g. /licensing, roadmap), and
    // duplicates can be hidden responsive clones - assert the first visible one.
    await expect(page.locator('h1').filter({ visible: true }).first()).toContainText(heading);
    // Shared page chrome: header logo, top menu, and footer.
    await expect(page.locator('.v2-class---logo').filter({ visible: true }).first()).toBeVisible();
    await expect(page.locator('li.v2-class---top-menu-item').filter({ visible: true }).first()).toBeVisible();
    await expect(page.locator('footer.v2-class---footer').first()).toBeVisible();
  });
}

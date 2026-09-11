import type { Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

// Industry pages from the "Industries" top-menu. Basic rendering (200/h1/chrome)
// is covered by landing-pages.spec.ts; these tests verify each page's own CTAs
// and distinctive content sections.

// CTA links live in the page body; header/footer repeat some hrefs (e.g. /pricing),
// and inline paragraph links can share an href with a CTA button, so match by
// href + text together.
const cta = (page: Page, href: string, name: string) => page
  .locator(`main a[href="${href}"], article a[href="${href}"]`)
  .filter({ hasText: name })
  .first();

const industryPages: Array<{
  path: string,
  ctas: Array<{ name: string, href: string }>,
  sections: RegExp[],
}> = [
  {
    path: '/healthcare',
    ctas: [
      { name: 'Try out a free form builder demo', href: '/create-free-survey' },
      { name: 'Schedule a Call', href: '/contact-us#call' },
      { name: 'View More Medical Form Templates', href: '/form-library/examples/healthcare/medical-form-templates' },
      { name: 'Find Your Pricing Plan', href: '/pricing' },
    ],
    sections: [/HIPAA Compliant/, /Ready-to-Use Medical Form Templates/],
  },
  {
    path: '/human-resources',
    ctas: [
      { name: 'Try Out Free All-in-One Demo', href: '/create-free-survey' },
      { name: 'Schedule a Call', href: '/contact-us#call' },
      { name: 'View More HR Form Templates', href: '/form-library/examples/hr/employee-form-templates' },
      { name: 'Find Your Plan', href: '/pricing' },
    ],
    sections: [/power of SurveyJS\s+for your HR team/, /Ready-to-Use HR Form Templates/],
  },
  {
    path: '/education',
    ctas: [
      { name: 'Try Out Free All-in-One Demo', href: '/create-free-survey' },
      { name: 'View Demo', href: '/form-library/examples/create-a-scored-quiz' },
      { name: 'View More Academic Forms', href: '/form-library/examples/education/academic-form-templates' },
    ],
    sections: [/The Forms You Need, All in One Place/, /Ready-to-Use Templates/],
  },
  {
    path: '/market-research',
    ctas: [
      { name: 'Get Started', href: '/survey-creator/documentation/overview#get-started' },
      { name: 'Learn more about Backend Integration', href: '/documentation/backend-integration' },
      { name: 'View Demo', href: '/create-free-survey' },
    ],
    sections: [/Core SurveyJS Features for Market Research/, /Over 20 Accessible Input Types/],
  },
];

for (const { path, ctas, sections } of industryPages) {
  test(`Industry page CTAs and sections: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${url}${path}`);
    await acceptCookieBanner(page);

    for (const { name, href } of ctas) {
      // toBeAttached, not toBeVisible: CTAs sit below the fold; matching by
      // href + caption together already proves the right link exists.
      await expect(cta(page, href, name), `"${name}" CTA (${href})`).toBeAttached();
    }

    // Section h2s are page-structure names (not article content), so they are
    // stable enough to assert on marketing pages.
    for (const section of sections) {
      await expect(
        page.locator('h2').filter({ hasText: section }).first(),
        `section heading ${section}`
      ).toBeAttached();
    }
  });
}

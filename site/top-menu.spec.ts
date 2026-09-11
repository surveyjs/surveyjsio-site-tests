import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

type MenuLink = { name: string, href: string | RegExp };

// Expected drop-down contents of the top menu. The "Major Updates" and some
// Demos entry URLs change per release, so those are matched by prefix.
const dropDownMenus: { [title: string]: MenuLink[] } = {
  'Products': [
    { name: 'Form Library', href: '/form-library' },
    { name: 'Survey Creator', href: '/open-source' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'PDF Generator', href: '/pdf-generator' },
    { name: 'WordPress Plugin', href: 'https://wordpress.org/plugins/surveyjs/' },
    { name: 'Partner Solutions', href: '/partner-solutions' },
    { name: 'All-In-One Demo', href: '/free-survey-tool' },
    { name: 'Features', href: '/features' },
  ],
  'Demos': [
    { name: 'Form Library', href: '/form-library/examples/overview' },
    { name: 'Survey Creator', href: /^\/survey-creator\/examples\// },
    { name: 'Dashboard', href: /^\/dashboard\/examples\// },
    { name: 'PDF Generator', href: /^\/pdf-generator\/examples\// },
    { name: 'All-in-One Demo', href: '/create-free-survey' },
    { name: 'NodeJS / ASP.NET / PHP Servers', href: '/backend-integration/examples' },
    { name: 'Bootstrap / Material UI / shadcn/ui', href: '/themes/theme-adapters' },
    { name: 'Try Yourself', href: '/try' },
  ],
  'Developers': [
    { name: 'Documentation', href: '/documentation' },
    { name: 'Setup Guides for My Stack', href: '/find-surveyjs-guides-for-my-stack' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
    { name: 'Source Code on GitHub', href: 'https://github.com/surveyjs' },
    { name: 'Changelog', href: '/stay-updated/release-notes' },
    { name: 'Licensing', href: '/licensing' },
  ],
  'Industries': [
    { name: 'Healthcare', href: '/healthcare' },
    { name: 'Human Resources', href: '/human-resources' },
    { name: 'Education', href: '/education' },
    { name: 'Market Research', href: '/market-research' },
  ],
  'Stay Updated': [
    { name: 'Blog', href: '/stay-updated' },
    { name: 'Release Notes', href: '/stay-updated/release-notes' },
    { name: 'Breaking Changes', href: '/stay-updated/breaking-changes' },
    { name: 'Major Updates', href: /^\/stay-updated\/major-updates\// },
    { name: 'Roadmap', href: '/stay-updated/roadmap' },
    { name: 'Case Studies', href: '/stay-updated/case-studies' },
    { name: 'Tutorials', href: '/stay-updated/tutorials' },
    { name: 'White Papers', href: '/stay-updated/white-papers' },
    { name: 'Migration Guides', href: '/stay-updated/migration-guides' },
  ],
};

test.describe('Top menu (desktop)', () => {
  for (const [title, links] of Object.entries(dropDownMenus)) {
    test(`${title} drop-down lists the expected links`, async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(`${url}`);
      await acceptCookieBanner(page);

      // The header is duplicated in the DOM (sticky clone), so scope to the visible one.
      const menuItem = page.locator('li.v2-class---top-menu-item--drop-down')
        .filter({ visible: true })
        .filter({ hasText: title })
        .first();
      // Submenu links are always in the DOM but only shown on hover, so the
      // visibility assertions below verify the drop-down actually opens.
      await menuItem.hover();

      for (const link of links) {
        const anchor = menuItem.locator('a').filter({ hasText: link.name }).first();
        await expect(anchor, `"${title} > ${link.name}"`).toBeVisible();
        await expect(anchor, `"${title} > ${link.name}" href`).toHaveAttribute('href', link.href);
      }
    });
  }

  test('static header links point to the expected routes', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${url}`);
    await acceptCookieBanner(page);

    const headerLink = (text: string) => page
      .locator('li.v2-class---top-menu-item a')
      .filter({ visible: true })
      .filter({ hasText: text })
      .first();

    await expect(headerLink('Pricing')).toHaveAttribute('href', '/pricing');
    await expect(headerLink('Cart')).toHaveAttribute('href', '/cart');
    await expect(headerLink('Log In')).toHaveAttribute('href', '/login');
    await expect(headerLink('View Demo')).toHaveAttribute('href', '/create-free-survey');
    // The GitHub link's text is the live star count, so locate it by href.
    await expect(
      page.locator('li.v2-class---top-menu-item a[href="https://github.com/surveyjs/survey-library"]')
        .filter({ visible: true }).first()
    ).toBeVisible();
  });
});

test.describe('Top menu (mobile)', () => {
  test('hamburger opens the full menu with all sections', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${url}`);
    await acceptCookieBanner(page);

    // Drop-downs are collapsed behind the hamburger on a narrow viewport.
    await expect(page.locator('li.v2-class---top-menu-item--drop-down').filter({ visible: true })).toHaveCount(0);

    await page.locator('li.v2-class---top-menu-item--menu').filter({ visible: true }).first().click();
    await expect(page.locator('body')).toHaveClass(/mobile-menu-opened/);

    // One representative link per menu section.
    const sampleHrefs = ['/features', '/try', '/documentation', '/healthcare', '/stay-updated', '/pricing'];
    for (const href of sampleHrefs) {
      await expect(
        page.locator(`a[href="${href}"]`).filter({ visible: true }).first(),
        `mobile menu link ${href}`
      ).toBeVisible();
    }
  });
});

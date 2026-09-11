import { test, expect, acceptCookieBanner, examplesURL as url } from '../helper';

// Entry pages of the "Demos" top-menu that are served by the examples slot.
// The Form Library demos entry (/form-library/examples/overview) is covered
// by demos-sidebar.spec.ts.

test('Survey Creator demo renders the creator with a toolbox and design surface', async ({ page }) => {
  await page.goto(`${url}/survey-creator/examples/free-nps-survey-template/reactjs`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('h1').first()).toContainText('NPS Survey Question');
  const creator = page.locator('.svc-creator').first();
  await expect(creator).toBeVisible({ timeout: 60000 });
  // "Rating Scale" is a built-in toolbox item name (stable across releases);
  // its presence plus the sd- design surface prove the creator fully booted.
  await expect(creator.getByText('Rating Scale').first()).toBeVisible();
  await expect(creator.locator('.sd-root-modern').first()).toBeVisible();
});

test('Dashboard demo renders charts and dashboard sections', async ({ page }) => {
  await page.goto(`${url}/dashboard/examples/interactive-survey-data-dashboard`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('h1').first()).toContainText('Interactive Survey Data Dashboard');
  for (const section of ['Net Promoter Score', 'Customer Segmentation', 'Frameworks and Devices']) {
    await expect(page.getByRole('button', { name: section }).first()).toBeVisible({ timeout: 60000 });
  }
  // Charts actually render on canvases.
  await expect(page.locator('canvas').first()).toBeVisible({ timeout: 60000 });
});

test('PDF Generator demo renders the form with PDF actions', async ({ page }) => {
  await page.goto(`${url}/pdf-generator/examples/save-completed-forms-as-pdf-files/reactjs`);
  await acceptCookieBanner(page);
  await page.setViewportSize({ width: 1920, height: 1080 });

  await expect(page.locator('h1').first()).toContainText('Save Completed Forms to PDF');
  await expect(page.locator('.sd-root-modern').first()).toBeVisible({ timeout: 60000 });
  // "Preview PDF" is not asserted: the demo hides it in headless Chromium,
  // which has no built-in PDF viewer (navigator.pdfViewerEnabled is false).
  await expect(page.locator('button').filter({ hasText: 'Download PDF' }).first()).toBeVisible();
});

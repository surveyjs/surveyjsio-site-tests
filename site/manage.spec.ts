/**
 * Account management - /manage
 *
 * The existing instructions-link check is kept. Read-only tests walk every
 * /manage section without changing account data. Mutation tests click Renew,
 * Assign, and Revoke but mock the server APIs so the slot state stays intact.
 */
import type { Locator, Page } from '@playwright/test';
import { test, expect, loginSurveyJsTestUser, siteUrl as url, acceptCookieBanner } from '../helper';

test.describe.configure({ mode: 'serial' }); // Shared account: a missed mock would mutate slot data under parallel read-only tests.

const ACCOUNT_PAGE = '.v2-class---account-page';
const LICENSE_KEY = 'MTFlZmJlYTctNmEzYy00MmY4LWE5MGMtNmVjNDUxMWVjYzU2OzE9MjAyNS0wNC0wMywyPTIwMjUtMDQtMDMsND0yMDI1LTA0LTAzLDg9MjAyNS0wNC0wMw==';
const OWNER_EMAIL = 'surveyjstest@gmail.com';
const ASSIGNED_DEV_EMAIL = 'surveyjstestdev@gmail.com';
const PRO_LICENSE_ID = '9da9738c-c8c4-4707-94e0-14180804d090';
const PRO_ASSIGN_FORM = '#assign-license-form-license-assign-9da9738c-c8c4-4707-94e0-14180804d090';
const RENEWAL_PRODUCT_CODE = 104;

const manageSections = [
  { id: 'license-manager', title: 'License Manager' },
  { id: 'details', title: 'Details' },
  { id: 'billing', title: 'Billing' },
  { id: 'renewals-and-upgrades', title: 'Renewals and Upgrades' },
  { id: 'manage-mysurveys', title: 'Manage MySurveys' },
  { id: 'external-logins', title: 'External Logins' },
  { id: 'delete-account', title: 'Delete Account' },
] as const;

async function openManage(page: Page): Promise<void> {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}`);
  await acceptCookieBanner(page);
  await loginSurveyJsTestUser(page);
  await page.goto(`${url}/manage`);
  await expect(page.locator(ACCOUNT_PAGE)).toBeVisible();
  await expect(page).toHaveTitle('Account Management');
}

async function openSection(page: Page, sectionId: string): Promise<Locator> {
  const nav = page.locator(`#${sectionId}-item`);
  await nav.click();
  await expect(nav).toHaveClass(/drop-down-menu-item__link--selected/);
  const panel = page.locator(`div.v2-class---account-page__section-container#${sectionId}`);
  await expect(panel).toBeVisible();
  return panel;
}

function proLicenseRow(panel: Locator): Locator {
  return panel.locator('tr.v2-class---license-manager-license').filter({ hasText: 'PRO' }).first();
}

async function expandProLicense(panel: Locator): Promise<Locator> {
  const proRow = proLicenseRow(panel);
  await proRow.locator('.v2-class---license-manager-license__expand-collapse-button').click();
  const assignments = panel.locator('.v2-class---license-manager-license__hidden-content--has-assignments').filter({ visible: true });
  await expect(assignments).toBeVisible();
  return assignments;
}

test('Remove the non-commercial usage text', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${url}`);
  await acceptCookieBanner(page);
  await loginSurveyJsTestUser(page);

  const removeNonCommercialTab = page.locator('.v2-class---paragraph-link').filter({ hasText: 'instructions', visible: true }).first();

  await page.goto(`${url}/manage`);
  await removeNonCommercialTab.click();
});

test.describe('Account management (read-only)', () => {
  test('sidebar lists every section', async ({ page }) => {
    await openManage(page);
    for (const section of manageSections) {
      await expect(page.locator(`#${section.id}-item`)).toHaveText(section.title);
    }
    await expect(page.locator('#license-manager-item')).toHaveClass(/drop-down-menu-item__link--selected/);
  });

  test('License Manager shows the PRO license with one free seat', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'license-manager');
    await expect(panel.locator('h3').first()).toHaveText('License Manager');
    await expect(panel.getByText('Your product maintenance subscription has expired.')).toBeVisible();
    const proRow = proLicenseRow(panel);
    await expect(proRow.getByText('PRO', { exact: true })).toBeVisible();
    await expect(proRow.getByText('UNPAID')).toHaveCount(0);
    await expect(proRow.getByText('2 / 1').first()).toBeVisible();
    await expect(proRow.getByText('2025').first()).toBeVisible();
    await expect(panel.getByText(LICENSE_KEY).first()).toBeVisible();
    await expect(proRow.getByRole('link', { name: 'Assign', exact: true })).toBeVisible();
    await expect(proRow.getByRole('link', { name: 'Renew', exact: true })).toBeVisible();
  });

  test('expanding the PRO license shows the assigned developer', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'license-manager');
    const assignments = await expandProLicense(panel);
    await expect(assignments.getByText(OWNER_EMAIL)).toBeVisible();
    await expect(assignments.getByText('Owner')).toBeVisible();
    await expect(assignments.getByText(ASSIGNED_DEV_EMAIL)).toBeVisible();
    await expect(assignments.locator('.v2-class---license-assignment').filter({ hasNotText: 'Owner' })).toHaveCount(1);
    await expect(assignments.getByText('Revoke')).toBeVisible();
  });

  test('Details shows the test user name and email', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'details');
    await expect(panel.locator('h3').first()).toHaveText('Details');
    await expect(panel).toContainText(OWNER_EMAIL);
    await expect(panel.locator('a.v2-class---paragraph-link').filter({ hasText: /^Edit$/ })).toBeVisible();
    await expect(panel.locator('a.v2-class---paragraph-link').filter({ hasText: /^Change Email$/ })).toBeVisible();
    await expect(panel.locator('a.v2-class---paragraph-link').filter({ hasText: /^Change Password$/ })).toBeVisible();
    await expect(panel.getByText('I want to receive marketing emails.')).toBeVisible();
    await expect(page.locator('#AllowMarketingEmails')).toBeChecked();
  });

  test('Billing lists the paid purchase and renewal invoices', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'billing');
    await expect(panel.locator('h3').first()).toHaveText('Billing');
    await expect(panel.getByText('Invoices')).toBeVisible();
    const invoices = panel.locator('table.v2-class---doc-table-container__table tbody tr');
    await expect(invoices).toHaveCount(2);

    const purchase = invoices.filter({ hasText: 'Invoice #2213' });
    await expect(purchase).toContainText('2023');
    await expect(purchase).toContainText('1619');
    await expect(purchase).toContainText('Paid');
    await expect(purchase.getByText('Get Invoice')).toBeVisible();

    const renewal = invoices.filter({ hasText: 'Invoice #2214' });
    await expect(renewal).toContainText('2024');
    await expect(renewal).toContainText('649');
    await expect(renewal).toContainText('Paid');
    await expect(renewal.getByText('Get Invoice')).toBeVisible();
  });

  test('Renewals and Upgrades shows the calculator for the PRO plan', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'renewals-and-upgrades');
    await expect(panel.locator('h3').first()).toHaveText('Renewals and Upgrades');
    await expect(panel.getByText('Calculator')).toBeVisible();
    await expect(panel.locator('input').nth(0)).toHaveValue('Renewal');
    await expect(panel.locator('input').nth(1)).toHaveValue('PRO 04/03/2025');
    await expect(panel.getByRole('link', { name: 'Calculate' })).toBeVisible();
    await expect(panel.getByText('Terms')).toBeVisible();
  });

  test('Manage MySurveys shows the empty projects state', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'manage-mysurveys');
    await expect(panel.locator('h3').first()).toHaveText('Manage MySurveys');
    await expect(panel.getByText('Create a Project')).toBeVisible();
    await expect(panel.getByRole('link', { name: 'the Free Survey Tool' })).toHaveAttribute('href', '/service/mysurveys');
  });

  test('External Logins lists social providers', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'external-logins');
    await expect(panel.locator('h3').first()).toHaveText('External Logins');
    await expect(panel.locator('#GitHub')).toBeVisible();
    await expect(panel.locator('#Google')).toBeVisible();
    await expect(panel.locator('#Facebook')).toBeVisible();
    await expect(panel.locator('#Twitter')).toBeVisible();
  });

  test('Delete Account shows the warning and does not submit', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'delete-account');
    await expect(panel.locator('h3').first()).toHaveText('Delete Account');
    await expect(panel.getByText(/permanently remove your account/)).toBeVisible();
    await expect(panel.getByRole('link', { name: 'Delete', exact: true })).toHaveAttribute('href', '/delete-account');
  });
});

test.describe('Account management (mocked mutations)', () => {
  test('Renew on PRO posts a cart add for the renewal product', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'license-manager');
    const proRow = proLicenseRow(panel);

    let cartAddBody: { Items?: Array<{ Product?: string, Count?: number, LicenseIdToRenew?: string }>, Currency?: string } | undefined;
    await page.route(/\/api\/Cart\/add/, async (route) => {
      cartAddBody = route.request().postDataJSON();
      // addToCart compares Items[].Product === productCode with ===, so Product must be the number 104.
      // RenewalTransformType 0 keeps the redirect on /cart with no query string.
      await route.fulfill({
        json: {
          Items: [{ Product: RENEWAL_PRODUCT_CODE, Price: 649 }],
          RenewalTransformType: 0,
        },
      });
    });

    // /cart is server-rendered from session; the mocked add never lands in the real cart.
    await Promise.all([
      page.waitForURL(/\/cart/),
      proRow.getByRole('link', { name: 'Renew', exact: true }).first().click(),
    ]);

    expect(cartAddBody).toEqual({
      Items: [{
        Product: String(RENEWAL_PRODUCT_CODE),
        Count: 2,
        LicenseIdToRenew: PRO_LICENSE_ID,
      }],
      Currency: 'EUR',
    });
  });

  test('Assign posts a new developer email and does not change the server', async ({ page }) => {
    await openManage(page);
    const panel = await openSection(page, 'license-manager');
    const assignments = await expandProLicense(panel);

    let assignBody: {
      ParentLicenseId?: string,
      Product?: string,
      OwnerName?: string,
      OwnerId?: string,
      Count?: string,
      TargetUserEmail?: string,
    } | undefined;
    await page.route(/\/api\/ManageUser\/AssignUserLicense/, async (route) => {
      assignBody = route.request().postDataJSON();
      // Success handler ignores the JSON body and calls location.reload().
      await route.fulfill({ json: {} });
    });

    await assignments.getByText('Assign a License').click();
    const email = `e2e-assign-${Date.now()}@tester.org`;
    const form = page.locator(PRO_ASSIGN_FORM);
    await expect(form.locator('#TargetUserEmail')).toBeVisible();
    await form.locator('#TargetUserEmail').fill(email);

    // Reload is a live GET /manage (the POST was mocked), so the new email must not appear.
    await Promise.all([
      page.waitForEvent('load'),
      page.waitForResponse((response) => /AssignUserLicense/.test(response.url()) && response.status() === 200),
      form.getByRole('link', { name: 'Assign', exact: true }).click(),
    ]);

    expect(assignBody).toEqual({
      ParentLicenseId: PRO_LICENSE_ID,
      Product: 'SurveyJSPro',
      OwnerName: ` (${OWNER_EMAIL})`,
      OwnerId: '00000000-0000-0000-0000-000000000000',
      Count: '1',
      TargetUserEmail: email,
    });

    const after = page.locator('div.v2-class---account-page__section-container#license-manager');
    await expect(after).toBeVisible();
    const assignmentsAfter = await expandProLicense(after);
    await expect(assignmentsAfter.getByText(email)).toHaveCount(0);
    await expect(assignmentsAfter.getByText(ASSIGNED_DEV_EMAIL)).toBeVisible();
    await expect(proLicenseRow(after).getByText('2 / 1').first()).toBeVisible();
  });

  test('Revoke asks for confirmation and does not change the server', async ({ page }) => {
    // Unhandled confirm is auto-dismissed as Cancel, so the mocked POST would never fire.
    page.on('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('Are you sure?');
      await dialog.accept();
    });

    await openManage(page);
    const panel = await openSection(page, 'license-manager');
    const assignments = await expandProLicense(panel);
    const assignedRow = assignments.locator('.v2-class---license-assignment').filter({ hasText: ASSIGNED_DEV_EMAIL });
    const revokeOnclick = await assignedRow.getByText('Revoke').getAttribute('onclick');
    const revokeId = /revokeLicense\('([^']+)'\)/.exec(revokeOnclick || '')?.[1];
    expect(revokeId).toBeTruthy();

    let revokeUrl: string | undefined;
    await page.route(/\/api\/ManageUser\/RevokeUserLicense/, async (route) => {
      revokeUrl = route.request().url();
      // Same as Assign: 200 JSON is enough; the page only reloads.
      await route.fulfill({ json: {} });
    });

    // Reload GET is live, so surveyjstestdev must still be assigned afterwards.
    await Promise.all([
      page.waitForEvent('load'),
      page.waitForResponse((response) => /RevokeUserLicense/.test(response.url()) && response.status() === 200),
      assignedRow.getByText('Revoke').click(),
    ]);

    expect(revokeUrl).toContain(`id=${revokeId}`);

    const after = page.locator('div.v2-class---account-page__section-container#license-manager');
    await expect(after).toBeVisible();
    const assignmentsAfter = await expandProLicense(after);
    await expect(assignmentsAfter.getByText(ASSIGNED_DEV_EMAIL)).toBeVisible();
    await expect(proLicenseRow(after).getByText('2 / 1').first()).toBeVisible();
  });
});

/**
 * Pricing page - /pricing
 *
 * The plan blocks are rendered five times (short table, long table, one
 * container per plan for mobile), so every locator is scoped to one table and
 * filtered by visibility. /api/Cart/add is mocked so a run leaves no cart behind.
 */
import type { Locator, Page } from '@playwright/test';
import { test, expect, acceptCookieBanner, siteUrl as url } from '../helper';

const PRICING_PAGE = '.v2-class---pricing-page';
const SHORT_TABLE = '.v2-class---pricing-page__pricing-table--short';
const LONG_TABLE = '.v2-class---pricing-page__pricing-table--long';
const CURRENCY_SWITCHER = '#pricing-page-currency-switcher label.v2-class---switcher';
const CURRENCY_STORAGE_KEY = 'surveyjsioCurrentCurrency';
// Escaped so the source stays ASCII (i18n lint rule).
const EURO_SIGN = '\u20AC';

// Product codes >= 100 are renewals: addToCart routes them through /login.
const BASIC_LICENSE = 5;
const PRO_LICENSE = 4;
const PRO_RENEWAL = 104;

const ICON_INCLUDED = '#19B394';
const ICON_EXCLUDED = '#E60A3E';

// Left to right; every boolean array below is indexed by this order.
const planColumns = ['Essential', 'Basic', 'PRO', 'Enterprise'] as const;
type Plan = 'essential' | 'basic' | 'pro' | 'enterprise';
const planKeys: Plan[] = ['essential', 'basic', 'pro', 'enterprise'];

const featureMatrix: Array<{ row: string, name: RegExp, includedIn: boolean[] }> = [
  { row: 'form-library', name: /^Form Library/, includedIn: [true, true, true, true] },
  { row: 'survey-creator', name: /^Survey Creator/, includedIn: [false, true, true, true] },
  { row: 'dashboard', name: /^Dashboard/, includedIn: [false, false, true, true] },
  { row: 'pdf-generator', name: /^PDF Generator/, includedIn: [false, false, true, true] },
  { row: 'ui-preset-editor', name: /^UI Preset Editor/, includedIn: [false, false, true, true] },
  { row: 'support', name: /^Support/, includedIn: [false, true, true, true] },
];

const enterpriseServices = [
  'Technical Account Manager',
  'Priority Bug Fixes',
  'Best Practices Sessions',
  'Integration Sessions',
  'Code Review Sessions',
  'On-demand releases',
  'Add-on Feature Development',
  'Prioritized Implementation of High Demand Roadmap Tasks',
];

const longTableRowOrder = [
  'header',
  ...featureMatrix.slice(0, 5).flatMap(({ row }) => [row, `${row}-details`]),
  'support',
  ...enterpriseServices.map(() => 'enterprise'),
  '', // the closing row of call-to-action buttons carries no modifier class
];

const includedPacks: RegExp[][] = [
  [/^Form Library$/],
  [/^Everything in Essential, plus/, /^Survey Creator$/],
  [/^Everything in Basic, plus/, /^UI Preset Editor/, /^Dashboard$/, /^PDF Generator$/],
  [/^Developer licenses, plus/, /^Opportunity to request/],
];

const desktop = { width: 1920, height: 1080 };
const mobile = { width: 375, height: 667 };

async function openPricing(page: Page, viewport = desktop, hash = ''): Promise<void> {
  await page.setViewportSize(viewport);
  await page.goto(`${url}/pricing${hash}`);
  await acceptCookieBanner(page);
  await expect(page.locator(PRICING_PAGE)).toBeVisible();
}

function planHeader(page: Page, plan: Plan): Locator {
  return page.locator(`${SHORT_TABLE} .v2-class---pricing-header--${plan}`).filter({ visible: true }).first();
}

function price(header: Locator, kind: 'license' | 'renewal'): Locator {
  return header.locator(`[data-price-${kind}] .v2-class---price__value`).filter({ visible: true }).first();
}

function buyNow(header: Locator, kind: 'license' | 'renewal'): Locator {
  return header.locator(`.v2-class---pricing-header__action-button[data-price-${kind}] a`).filter({ visible: true }).first();
}

/** Switchers hide the real checkbox behind a styled label, so click the label. */
function renewalSwitcher(header: Locator): Locator {
  return header.locator('label.v2-class---switcher').first();
}

/** First cell holds the feature name, the next four are the plan columns. */
async function planIcons(row: Locator): Promise<Array<string | null>> {
  const cells = row.locator('> div');
  const icons: Array<string | null> = [];
  for (let column = 1; column <= planColumns.length; column++) {
    icons.push(await cells.nth(column).locator('svg path').first().getAttribute('fill'));
  }
  return icons;
}

function expectedIcons(includedIn: boolean[]): Array<string> {
  return includedIn.map((included) => included ? ICON_INCLUDED : ICON_EXCLUDED);
}

/** Product must be the numeric code: the load handler looks it up in productDescriptions. */
async function mockCartAdd(page: Page, productCode: number): Promise<() => Record<string, unknown> | undefined> {
  let body: Record<string, unknown> | undefined;
  await page.route(/\/api\/Cart\/add/, async (route) => {
    body = route.request().postDataJSON();
    await route.fulfill({ json: { Items: [{ Product: productCode, Price: 1 }], RenewalTransformType: 0 } });
  });
  return () => body;
}

test('Pricing buy test', async ({ page }) => {
  await page.goto(`${url}/Account/Login`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await acceptCookieBanner(page);

  const email = 'surveyjstest@gmail.com';
  const password = 'Surveyjstest1';

  const emailInput = page.locator('#Email');
  const passwordInput = page.locator('#Password');
  const loginButton = page.locator('main a').filter({ hasText: 'Log In', visible: true }).first();
  const acceptTermsCheckboxLogin = page.locator('label').filter({ hasText: 'I have read, understand and accept the surveyjs.io', visible: true }).locator('.v2-class---checkbox__checkmark').first();

  await emailInput.first().fill(email);
  await passwordInput.first().fill(password);
  await acceptTermsCheckboxLogin.click();
  await loginButton.click();

  const pricingAccountLink = page.locator('.v2-class---top-menu-item a').filter({ hasText: 'Pricing', visible: true }).first();
  const buyButton = page.locator('a').filter({ hasText: 'Buy Now', visible: true }).first();

  await pricingAccountLink.click();
  // "Buy Now" calls the global addToCart, defined by a script that can still be loading
  // after a slow/cold page render; wait for it before clicking, otherwise the click
  // throws "addToCart is not defined" (caught by the page-error guard in helper.ts).
  await page.waitForFunction(() => typeof (window as any).addToCart === 'function', undefined, { timeout: 60000 }); // eslint-disable-line @typescript-eslint/no-explicit-any
  await buyButton.click();
});

test('Pricing page renders the four plans and the page chrome', async ({ page }) => {
  await page.setViewportSize(desktop);
  const response = await page.goto(`${url}/pricing`);
  expect(response?.status()).toBe(200);
  await acceptCookieBanner(page);

  await expect(page.locator('h1').filter({ visible: true }).first()).toContainText(/Buy and Use with Confidence/i);
  await expect(page.locator('h2').filter({ hasText: 'Choose your plan', visible: true }).first()).toBeVisible();

  const names = page.locator(`${SHORT_TABLE} .v2-class---pricing-header__name`).filter({ visible: true });
  await expect(names).toHaveText(['Essential', 'Basic', 'PRO', 'Enterprise']);

  await expect(page.locator('#pricing-page-currency-switcher')).toBeVisible();
  await expect(page.locator(`${LONG_TABLE}`)).toBeVisible();
  await expect(page.locator('footer.v2-class---footer').first()).toBeVisible();
});

test('Pricing currency switcher swaps EUR for USD and remembers the choice', async ({ page }) => {
  await openPricing(page);

  // A first-time visitor has no stored currency, and the page then defaults to EUR.
  await expect(price(planHeader(page, 'basic'), 'license')).toContainText(EURO_SIGN);
  await expect(price(planHeader(page, 'pro'), 'license')).toContainText(EURO_SIGN);
  await expect(page.locator('#pricing-page-currency-switcher-hint')).toBeHidden();

  await page.locator(CURRENCY_SWITCHER).click();

  await expect(price(planHeader(page, 'basic'), 'license')).toContainText('$');
  await expect(price(planHeader(page, 'pro'), 'license')).toContainText('$');
  await expect(page.locator('#pricing-page-currency-switcher-hint')).toContainText(/1 EUR = [\d.]+ USD/);
  expect(await page.evaluate((key) => window.localStorage.getItem(key), CURRENCY_STORAGE_KEY)).toBe('USD');

  await page.reload();
  await expect(price(planHeader(page, 'basic'), 'license')).toContainText('$');
});

test('Pricing plans expose the expected call to action', async ({ page }) => {
  await openPricing(page);

  const essential = planHeader(page, 'essential');
  await expect(essential.locator('.v2-class---price__value')).toHaveText(/Free/);
  await expect(essential.locator('a').first()).toHaveAttribute('href', '/form-library/documentation/overview');

  await expect(buyNow(planHeader(page, 'basic'), 'license')).toHaveAttribute('onclick', new RegExp(`addToCart\\(${BASIC_LICENSE}\\)`));
  await expect(buyNow(planHeader(page, 'pro'), 'license')).toHaveAttribute('onclick', new RegExp(`addToCart\\(${PRO_LICENSE}\\)`));

  const enterprise = planHeader(page, 'enterprise');
  await expect(price(enterprise, 'license')).toContainText(/Starts at/);
  await expect(page.locator(`${SHORT_TABLE} a[href="/contact-us#contact"]`).filter({ visible: true }).first()).toContainText('Contact Us');
});

test('Pricing renewal switcher swaps the PRO price and the cart product', async ({ page }) => {
  await openPricing(page);
  const pro = planHeader(page, 'pro');

  await expect(price(pro, 'license')).toBeVisible();
  await expect(pro.locator('[data-price-renewal] .v2-class---price__value').first()).toBeHidden();

  await renewalSwitcher(pro).click();

  await expect(page).toHaveURL(/#surveyjs-updates$/);
  await expect(price(pro, 'renewal')).toBeVisible();
  await expect(pro.locator('[data-price-license] .v2-class---price__value').first()).toBeHidden();
  await expect(buyNow(pro, 'renewal')).toHaveAttribute('onclick', new RegExp(`addToCart\\(${PRO_RENEWAL}\\)`));
});

test('Pricing page opened at #surveyjs-updates preselects renewals for every paid plan', async ({ page }) => {
  await openPricing(page, desktop, '#surveyjs-updates');

  for (const plan of ['basic', 'pro', 'enterprise'] as const) {
    const header = planHeader(page, plan);
    await expect(price(header, 'renewal'), `${plan} renewal price`).toBeVisible();
    await expect(header.locator('[data-price-license] .v2-class---price__value').first(), `${plan} license price`).toBeHidden();
    await expect(renewalSwitcher(header).locator('[data-switcher-text-right]'), `${plan} switcher`)
      .toHaveClass(/v2-class---switcher__text--active/);
  }
});

test('Pricing Buy Now posts the license product to the cart', async ({ page }) => {
  await openPricing(page);
  const cartAddBody = await mockCartAdd(page, BASIC_LICENSE);

  await page.waitForFunction(() => typeof (window as any).addToCart === 'function', undefined, { timeout: 60000 }); // eslint-disable-line @typescript-eslint/no-explicit-any
  await Promise.all([
    page.waitForURL(/\/cart/),
    buyNow(planHeader(page, 'basic'), 'license').click(),
  ]);

  expect(cartAddBody()).toEqual({
    Items: [{ Product: String(BASIC_LICENSE), Count: 1 }],
    Currency: 'EUR',
  });
});

test('Pricing renewal Buy Now sends an anonymous visitor to log in first', async ({ page }) => {
  await openPricing(page, desktop, '#surveyjs-updates');
  // addToCart fires the cart request and, for a renewal, redirects to /login in the
  // same tick - which cancels that request in flight. Aborting reproduces exactly
  // that, and keeps the load handler (it would redirect to /cart) out of the race.
  await page.route(/\/api\/Cart\/add/, (route) => route.abort());

  await page.waitForFunction(() => typeof (window as any).addToCart === 'function', undefined, { timeout: 60000 }); // eslint-disable-line @typescript-eslint/no-explicit-any
  await Promise.all([
    page.waitForURL(/\/login/),
    buyNow(planHeader(page, 'pro'), 'renewal').click(),
  ]);

  expect(page.url()).toContain('ReturnUrl=%2Fcart');
  expect(page.url()).toContain(`renewal-product-code%3D${PRO_RENEWAL}`);
  expect(page.url()).toContain('currency%3DEUR');
  await expect(page.locator('#Email')).toBeVisible();
});

test('Pricing Complete Feature List collapses and expands all product rows', async ({ page }) => {
  await openPricing(page);

  const detailRows = page.locator(`${LONG_TABLE} .v2-class---pricing-page__pricing-table-row--form-library-details`);
  const firstDetails = detailRows.first();
  await expect(firstDetails).toHaveClass(/--expanded/);

  await page.locator('#collapse-expand-all-features').click();
  await expect(firstDetails).toHaveClass(/--collapsed/);
  const expandable = page.locator(`${LONG_TABLE} [data-expandable]`);
  await expect(expandable.first()).toHaveClass(/--collapsed-main/);
  await expect(expandable.last()).toHaveClass(/--collapsed-main/);

  await page.locator('#collapse-expand-all-features').click();
  await expect(firstDetails).toHaveClass(/--expanded/);
});

test('Pricing feature rows collapse one at a time', async ({ page }) => {
  await openPricing(page);

  const row = page.locator(`${LONG_TABLE} .v2-class---pricing-page__pricing-table-row--survey-creator`).first();
  const details = page.locator(`${LONG_TABLE} .v2-class---pricing-page__pricing-table-row--survey-creator-details`).first();
  const otherDetails = page.locator(`${LONG_TABLE} .v2-class---pricing-page__pricing-table-row--dashboard-details`).first();

  await row.scrollIntoViewIfNeeded();
  await row.click();
  await expect(details).toHaveClass(/--collapsed/);
  await expect(otherDetails).toHaveClass(/--expanded/);

  await row.click();
  await expect(details).toHaveClass(/--expanded/);
});

test('Pricing FAQ answers expand on click', async ({ page }) => {
  await openPricing(page);

  const questions = page.locator('.v2-class---pricing-page__faq-section details');
  expect(await questions.count()).toBeGreaterThan(1);

  const first = questions.first();
  await expect(first.locator('.v2-class---faq-question__answer')).toBeHidden();

  await first.locator('summary').click();
  await expect(first.locator('.v2-class---faq-question__answer')).toBeVisible();
  await expect(questions.nth(1).locator('.v2-class---faq-question__answer')).toBeHidden();
});

test('Pricing mobile navigator shows one plan table at a time', async ({ page }) => {
  await openPricing(page, mobile);

  await expect(page.locator(SHORT_TABLE)).toBeHidden();
  const navigatorItems = page.locator('.v2-class---pricing-page__mobile-navigator-item');
  await expect(navigatorItems).toHaveCount(4);

  const proTable = page.locator('.v2-class---pricing-page__table-container--pro-plan');
  const basicTable = page.locator('.v2-class---pricing-page__table-container--basic-plan');
  const navigatorItem = (plan: string) => navigatorItems.filter({ has: page.locator(`.v2-class---pricing-header--${plan}`) });

  await navigatorItem('pro').click();
  await expect(proTable).toBeVisible();
  await expect(basicTable).toBeHidden();

  await navigatorItem('basic').click();
  await expect(basicTable).toBeVisible();
  await expect(proTable).toBeHidden();
});

test('Pricing Complete Feature List keeps the products and plan columns in order', async ({ page }) => {
  await openPricing(page);
  const long = page.locator(LONG_TABLE);

  // Column order first: the checks below read ticks by column index, so a swapped
  // header would silently turn every one of them into the wrong assertion.
  await expect(long.locator('.v2-class---pricing-header__name').filter({ visible: true })).toHaveText([...planColumns]);

  const rowOrder = await long.locator('.v2-class---pricing-page__pricing-table-row').evaluateAll((rows) =>
    rows.map((row) => [...row.classList]
      .map((name) => name.replace('v2-class---pricing-page__pricing-table-row--', ''))
      .filter((name) => !name.startsWith('v2-class---') && name !== 'expanded' && name !== 'collapsed')
      .join(''))
  );
  expect(rowOrder).toEqual(longTableRowOrder);

  for (const { row, name } of featureMatrix) {
    const line = long.locator(`.v2-class---pricing-page__pricing-table-row--${row}`).first();
    const nameCell = line.locator('> div').first();
    // useInnerText: the markup keeps the tooltip note on its own line and a regex
    // is matched against the text as-is.
    await expect(nameCell.locator('.v2-class---pricing-page__pricing-table-product-name'), row).toContainText(name, { useInnerText: true });
    await expect(nameCell.locator('.v2-class---pricing-page__pricing-table-product-description'), row).not.toBeEmpty();
  }
});

test('Pricing feature matrix marks each product in the right plan column', async ({ page }) => {
  await openPricing(page);
  const long = page.locator(LONG_TABLE);

  for (const { row, includedIn } of featureMatrix) {
    const line = long.locator(`.v2-class---pricing-page__pricing-table-row--${row}`).first();
    expect(await planIcons(line), `${row} availability`).toEqual(expectedIcons(includedIn));

    const details = long.locator(`.v2-class---pricing-page__pricing-table-row--${row}-details`);
    if (await details.count() > 0) {
      expect(await planIcons(details.first()), `${row} details availability`).toEqual(expectedIcons(includedIn));
    }
  }
});

test('Pricing offers the enterprise-only services in the Enterprise column only', async ({ page }) => {
  await openPricing(page);
  const rows = page.locator(`${LONG_TABLE} .v2-class---pricing-page__pricing-table-row--enterprise`);

  await expect(rows.locator('.v2-class---pricing-page__pricing-table-product-name')).toHaveText(enterpriseServices);
  for (let index = 0; index < enterpriseServices.length; index++) {
    expect(await planIcons(rows.nth(index)), enterpriseServices[index])
      .toEqual(expectedIcons([false, false, false, true]));
  }
});

test('Pricing plan cards list the products each plan includes', async ({ page }) => {
  await openPricing(page);
  const packs = page.locator(`${SHORT_TABLE} .v2-class---pricing-pack-details`);
  await expect(packs).toHaveCount(includedPacks.length);

  for (let index = 0; index < includedPacks.length; index++) {
    const products = packs.nth(index).locator('.v2-class---pricing-pack-details__product-name');
    await expect(products, `${planColumns[index]} pack`).toHaveText(includedPacks[index], { useInnerText: true });
  }

  await expect(page.locator(`${SHORT_TABLE} .v2-class---pricing-page__pricing-table-best-value`)).toHaveCount(1);
  await expect(page.locator(`${SHORT_TABLE} .v2-class---pricing-header--pro .v2-class---pricing-page__pricing-table-best-value`)).toHaveCount(1);
});

test('Pricing mobile plan view lists exactly the products of the selected plan', async ({ page }) => {
  await openPricing(page, mobile);
  const navigatorItems = page.locator('.v2-class---pricing-page__mobile-navigator-item');

  for (let column = 0; column < planKeys.length; column++) {
    const plan = planKeys[column];
    // Derived from the same matrix as the desktop table: the narrow view must not
    // promise a product the wide one marks as excluded.
    const expected = featureMatrix.filter(({ includedIn }) => includedIn[column]).map(({ name }) => name);
    if (plan === 'enterprise') expected.push(...enterpriseServices.map((service) => new RegExp(`^${service}`)));

    await navigatorItems.filter({ has: page.locator(`.v2-class---pricing-header--${plan}`) }).click();
    const container = page.locator(`.v2-class---pricing-page__table-container--${plan}-plan`);
    await expect(container).toBeVisible();
    await expect(container.locator('.v2-class---pricing-header__name').filter({ visible: true }), plan)
      .toHaveText([planColumns[column]]);
    await expect(container.locator('.v2-class---pricing-page__pricing-table-product-name').filter({ visible: true }), plan)
      .toHaveText(expected, { useInnerText: true });
  }
});

/**
 * "Find your SurveyJS setup" tool - /find-surveyjs-guides-for-my-stack
 *
 * The page is a client-side React app (Scripts/find-your-setup-tool) driven by the
 * JSON configs in App_Data/surveyjs-site-data/SetupTool: a 4-page SurveyJS model on
 * the left, a live "personalized guide" panel on the right.
 *
 * Approach: a few chains of UI steps, each ending in ONE screenshot of the page
 * content (the article element, i.e. everything except the top bar - the footer is
 * already off on this page). Texts, links, product names and pricing copy come from
 * the data service and are deliberately NOT asserted one by one: the screenshot
 * covers them wholesale, and a copy edit should update a baseline, not break a dozen
 * expectations.
 *
 * Two functional tests carry the answer -> result logic (guide blocks per category,
 * and the recommended plan on the last page), because those are rules rather than
 * appearance and a plan name is easier to read as text than as a picture.
 *
 * The only stabilization on top of the plain repo style: openTool() gates on the
 * mounted app (survey-core is loaded from the CDN, so the markup appears late), and
 * pick() confirms the click actually registered an answer - without it a missed click
 * shows up as an unreadable image diff instead of "the click did not land".
 *
 * Content-heavy states are captured in the STACKED layout on purpose: on desktop the
 * result panel is 100dvh tall with its own scroll, so a long guide physically cannot
 * fit into one frame. Desktop frames cover the two-column sticky layout itself.
 *
 * Baselines are generated once, on the CI platform:
 *   npx playwright test --project=site find-your-setup-tool --update-snapshots
 * and committed under site/find-your-setup-tool.spec.ts-snapshots. If a tall stacked
 * frame turns out to be noisy, compareScreenshot() takes a maxDiffPixels argument.
 */
import type { Page } from '@playwright/test';
import { test, expect, siteUrl as url, acceptCookieBanner, compareScreenshot, screens } from '../helper';

const PATH = '/find-surveyjs-guides-for-my-stack';
const P = '.v2-class---find-your-setup-tool-page';

const SEL = {
  content: P,
  layout: `${P}__layout`,
  surveyPanel: `${P}__survey-panel`,
  tabsTrack: `${P}__tabs-track`,
  tab: `${P}__tab`,
  resultScroll: `${P}__result-scroll`,
  placeholder: `${P}__placeholder-intro`,
  planName: `${P}__pl-plan-link`,
};

const TAB = {
  js: 'JS Frameworks',
  css: 'CSS Frameworks',
  server: 'Server & Database',
  products: 'Products & Licensing',
};

const FULL_SETUP_QUERY = '?js-framework=angular&css-framework=mui&backend=php'
  + '&change-frequency=regularly&who-edits=nondev&creator-collab=yes'
  + '&response-needs=pdf,analytics&step=general';

// ---------------------------------------------------------------- page helpers

type OpenOptions = { query?: string, viewport?: { width: number, height: number } };

async function openTool(page: Page, options: OpenOptions = {}): Promise<void> {
  await page.setViewportSize(options.viewport || screens['Desktop']);
  await page.goto(`${url}${PATH}${options.query || ''}`);
  await acceptCookieBanner(page);
  await waitForTool(page);
}

/**
 * Re-opens the tool on the bare URL within the same test. Unlike openTool() it does
 * not touch the cookie banner: it was already accepted on the first navigation, so
 * the link is still in the DOM but hidden, and clicking it would just time out.
 */
async function reopenTool(page: Page): Promise<void> {
  await page.goto(`${url}${PATH}`);
  await waitForTool(page);
}

async function waitForTool(page: Page): Promise<void> {
  // The whole tool is rendered client-side from a CDN bundle: wait for the mounted
  // app, not just for the document.
  await expect(page.locator(SEL.layout)).toBeVisible();
  await expect(page.locator(SEL.tab).first()).toBeVisible();
  await expect(page.locator(`${SEL.surveyPanel} .sd-question`).first()).toBeVisible();
}

function question(page: Page, name: string) {
  return page.locator(`${SEL.surveyPanel} [data-name="${name}"]`);
}

/** Picks a radiogroup / checkbox choice by its config value. */
async function pick(page: Page, name: string, value: string): Promise<void> {
  const q = question(page, name);
  await q.locator(`label:has(input[value="${value}"])`).first().click();
  await expect(q.locator(`input[value="${value}"]`)).toBeChecked();
}

/**
 * Sets a boolean (switch) question. Clicking a side label sets that exact value,
 * while clicking the switch itself only toggles. The labels are addressed by
 * position - false first, true second - because survey-core adds the --false/--true
 * modifiers only once the question already has a value.
 */
async function pickBoolean(page: Page, name: string, value: boolean): Promise<void> {
  const q = question(page, name);
  await q.locator('.sd-boolean__label').nth(value ? 1 : 0).click();
  await expect(q.locator('input[type="checkbox"]')).toBeChecked({ checked: value });
}

/** Switches the survey page through the top tabs. */
async function openTab(page: Page, name: string): Promise<void> {
  const tab = page.locator(SEL.tabsTrack).getByRole('tab', { name, exact: true });
  await tab.click();
  await expect(tab).toHaveAttribute('aria-selected', 'true');
}

function nextStep(page: Page) {
  return page.locator(`${SEL.surveyPanel} .sd-navigation__next-btn`);
}

/** Guide blocks rendered in the result panel, one per answered category. */
function guideBlocks(page: Page) {
  return page.locator(`${SEL.resultScroll} [data-fyst-key]`);
}

/** The plan name inside "Recommended pricing plan - <plan>, includes:". */
function expectPlan(page: Page, plan: string) {
  return expect(page.locator(SEL.planName)).toHaveText(plan);
}

/** Compares the page content, i.e. everything except the top bar. */
function shot(page: Page, name: string): Promise<void> {
  return compareScreenshot(page, page.locator(SEL.content), `find-your-setup-tool-${name}.png`);
}

// ------------------------------------------------------- functional: the result

test('Answering the stack adds one guide block per category', async ({ page }) => {
  await openTool(page);
  await expect(page.locator(SEL.placeholder)).toBeVisible();
  await expect(guideBlocks(page)).toHaveCount(0);

  await pick(page, 'jsFramework', 'react');
  await expect(guideBlocks(page)).toHaveCount(1);

  await nextStep(page).click();
  await pick(page, 'cssFramework', 'bootstrap');
  await expect(guideBlocks(page)).toHaveCount(2);

  await nextStep(page).click();
  await pick(page, 'backend', 'node');
  await expect(guideBlocks(page)).toHaveCount(3);

  await expect(page.locator(SEL.placeholder)).toHaveCount(0);
  // Blocks always follow the survey question order, whatever order they were answered in.
  const keys = await guideBlocks(page).evaluateAll((els) => els.map((el) => el.getAttribute('data-fyst-key')));
  expect(keys).toEqual(['jsFramework', 'cssFramework', 'backend']);
});

test('The recommended plan follows the answers on the last page', async ({ page }) => {
  await openTool(page);

  // Any stack will do for the plan - take the first option on each of the three pages.
  await pick(page, 'jsFramework', 'react');
  await nextStep(page).click();
  await pick(page, 'cssFramework', 'bootstrap');
  await nextStep(page).click();
  await pick(page, 'backend', 'node');
  await nextStep(page).click();

  await pick(page, 'changeFrequency', 'fixed');
  await expectPlan(page, 'Essential');

  // Paper forms are served by an MIT-licensed tool, so they are not a paid need.
  await pick(page, 'responseNeeds', 'paper');
  await expectPlan(page, 'Essential');

  await pick(page, 'responseNeeds', 'pdf');
  await expectPlan(page, 'Pro');

  await pick(page, 'responseNeeds', 'none');
  await expectPlan(page, 'Essential');

  await pick(page, 'changeFrequency', 'regularly');
  await expectPlan(page, 'Basic');

  // Occasional changes now show a plan even without the author answer.
  await pick(page, 'changeFrequency', 'occasionally');
  await expect(page.locator(SEL.planName)).toHaveCount(1);

  await pick(page, 'whoEdits', 'dev');
  await expectPlan(page, 'Essential');

  await pick(page, 'whoEdits', 'nondev');
  await expectPlan(page, 'Basic');

  await pickBoolean(page, 'creatorCollab', true);
  await expectPlan(page, 'Enterprise');

  // Simultaneous editing outranks any response need.
  await pick(page, 'responseNeeds', 'analytics');
  await expectPlan(page, 'Enterprise');

  // ...and a response need outranks the author type.
  await pickBoolean(page, 'creatorCollab', false);
  await expectPlan(page, 'Pro');

  // Going back to fixed forms clears the author answers but keeps the response need.
  await pick(page, 'changeFrequency', 'fixed');
  await expectPlan(page, 'Pro');
});

// --------------------------------------------------------------------- desktop

test('Desktop: two-column layout with the placeholder guide', async ({ page }) => {
  await openTool(page);

  await shot(page, 'desktop-initial');
});

test('Desktop: the result panel scrolls itself to the section that changed', async ({ page }) => {
  await openTool(page);

  await pick(page, 'jsFramework', 'react');
  await nextStep(page).click();
  await pick(page, 'cssFramework', 'tailwind');
  await nextStep(page).click();
  await pick(page, 'backend', 'node');
  // Re-answering the backend scrolls the (now overflowing) panel to that section.
  await pick(page, 'backend', 'python');

  await shot(page, 'desktop-guide-scrolled-to-backend');
});

// --------------------------------------------------------------------- stacked

test('Stacked: the full guide and the maximal recommendation', async ({ page }) => {
  await openTool(page, { viewport: screens['Vertical-Tablet'] });

  await pick(page, 'jsFramework', 'react');
  await openTab(page, TAB.css);
  await pick(page, 'cssFramework', 'tailwind');
  await openTab(page, TAB.server);
  await pick(page, 'backend', 'node');
  await openTab(page, TAB.products);
  await pick(page, 'changeFrequency', 'regularly');
  await pick(page, 'whoEdits', 'nondev');
  await pickBoolean(page, 'creatorCollab', true);
  await pick(page, 'responseNeeds', 'pdf');
  await pick(page, 'responseNeeds', 'populatePdf');
  await pick(page, 'responseNeeds', 'analytics');
  await pick(page, 'responseNeeds', 'paper');

  await shot(page, 'stacked-full-guide');
});

test('Stacked: hiding answers resets the recommendation', async ({ page }) => {
  await openTool(page, { viewport: screens['Vertical-Tablet'] });

  await pick(page, 'jsFramework', 'react');
  await openTab(page, TAB.products);
  await pick(page, 'changeFrequency', 'regularly');
  await pick(page, 'whoEdits', 'nondev');
  await pickBoolean(page, 'creatorCollab', true);
  // clearInvisibleValues: "onHidden" - both follow-up answers are dropped again.
  await pick(page, 'changeFrequency', 'fixed');

  await shot(page, 'stacked-recommendation-reset');
});

// ---------------------------------------------------------------------- mobile

test('Mobile: stacked layout and the tab carousel', async ({ page }) => {
  await openTool(page, { viewport: screens['Mobile'] });

  await pick(page, 'jsFramework', 'react');

  await shot(page, 'mobile-guide');
});

// ------------------------------------------------------------- shareable state

test('A shared setup is restored from the link and from storage', async ({ page }) => {
  await openTool(page, { query: FULL_SETUP_QUERY, viewport: screens['Vertical-Tablet'] });

  // Switching the step re-writes the state, which is what persists it locally.
  await openTab(page, TAB.js);

  // Re-opening the bare URL has to bring the whole setup back.
  await reopenTool(page);

  await shot(page, 'restored-setup');
});

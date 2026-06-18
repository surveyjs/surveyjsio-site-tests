import { test, expect, siteUrl as url } from '../helper';

/*
 * Warmup gate for the `site` project (Azure test slot at surveyjsio-test).
 *
 * The Azure App Service slot idles out and cold-starts the whole worker process
 * (JIT, DI container, DB pool) - the main source of the "10 min vs 1 hour"
 * variance. Cold start is instance-level, so warming the base URL wakes the
 * entire app regardless of which routes the tests later hit. This spec runs
 * first (the site project depends on it) and polls the slot until it responds.
 * If the slot is genuinely down, THIS fails and the site tests are skipped,
 * making an infra problem obvious instead of a heap of confusing timeouts.
 */

// JS errors on the warmed page are irrelevant here; we only care the server responds.
test.use({ skipJSErrors: true });

test('warmup: site is up and responsive', async ({ page }) => {
  // Warmup is the ONLY patient step; a cold start can take a couple of minutes.
  test.setTimeout(240000);

  // Poll the base URL until the slot responds OK, giving it time to wake up.
  await expect(async () => {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    expect(response?.ok()).toBeTruthy();
  }).toPass({ timeout: 180000, intervals: [3000, 5000, 10000, 15000] });
});

import { test, expect, siteUrl as url, siteWarmupPaths as paths } from '../helper';

/*
 * Warmup gate for the `site` project (Azure test slot at surveyjsio-test).
 *
 * The Azure App Service slot idles out and cold-starts the whole worker process
 * (JIT, DI container, DB pool) - the main source of the "10 min vs 1 hour"
 * variance. This spec runs first (the site project depends on it). It waits for
 * the slot to wake, and - only if the slot was actually cold - pre-loads every
 * route the suite uses so each page's costly first-hit server-side compilation
 * happens once here, serially, instead of 8x under the parallel test surge.
 * If the slot is genuinely down, THIS fails and the site tests are skipped.
 */

// JS errors on the warmed pages are irrelevant here; we only care the server responds.
test.use({ skipJSErrors: true });

test('warmup: site is up and responsive', async ({ page }) => {
  // Warmup is the ONLY patient step; a cold start + warming every route takes a while.
  test.setTimeout(420000);

  // Gate: poll the base URL until the slot wakes up.
  const start = Date.now();
  await expect(async () => {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    expect(response?.ok()).toBeTruthy();
  }).toPass({ timeout: 180000, intervals: [3000, 5000, 10000, 15000] });

  // If the base URL responded quickly the slot is warm and per-route first-hits are
  // cheap, so skip the loop to keep warmup fast. If it took a while, the slot was cold:
  // pre-load each route now, while we're the only client.
  if (Date.now() - start > 15000) {
    for (const path of paths) {
      try {
        await page.goto(`${url}${path}`, { waitUntil: 'domcontentloaded', timeout: 90000 });
      } catch {
        // A single slow/failing route must not sink the warmup; the real test surfaces it.
      }
    }
  }
});

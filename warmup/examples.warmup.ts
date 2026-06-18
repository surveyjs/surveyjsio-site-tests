import { test, expect, examplesURL as url, examplesWarmupPaths as paths } from '../helper';

/*
 * Warmup gate for the `examples` project (Azure test slot at surveyjstest).
 *
 * Same idle/cold-start problem as the site slot. This spec runs first (the examples
 * project depends on it). It waits for the slot to wake, and - only if the slot was
 * actually cold - pre-loads one representative URL per route family so each
 * controller's first-hit compilation happens once here instead of under the parallel
 * test surge. If the slot is down, THIS fails and the examples tests are skipped.
 */

// JS errors on the warmed pages are irrelevant here; we only care the server responds.
test.use({ skipJSErrors: true });

test('warmup: examples site is up and responsive', async ({ page }) => {
  // Warmup is the ONLY patient step; a cold start + warming each family takes a while.
  test.setTimeout(420000);

  // Gate: poll the base URL until the slot wakes up.
  const start = Date.now();
  await expect(async () => {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    expect(response?.ok()).toBeTruthy();
  }).toPass({ timeout: 180000, intervals: [3000, 5000, 10000, 15000] });

  // Warm slot -> per-route first-hits are cheap, skip to stay fast. Cold slot -> pre-load
  // one URL per route family now, while we're the only client.
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

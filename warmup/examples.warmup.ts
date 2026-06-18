import { test, expect, examplesURL as url } from '../helper';

/*
 * Warmup gate for the `examples` project (Azure test slot at surveyjstest).
 *
 * Same idle/cold-start problem as the site slot, and cold start is instance-level
 * - warming the base URL wakes the whole process regardless of which routes the
 * tests later hit. This spec runs first (the examples project depends on it) and
 * polls the slot until it responds. If the slot is down, THIS fails and the
 * examples tests are skipped instead of timing out one by one.
 */

// JS errors on the warmed page are irrelevant here; we only care the server responds.
test.use({ skipJSErrors: true });

test('warmup: examples site is up and responsive', async ({ page }) => {
  // Warmup is the ONLY patient step; a cold start can take a couple of minutes.
  test.setTimeout(240000);

  // Poll the base URL until the slot responds OK, giving it time to wake up.
  await expect(async () => {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    expect(response?.ok()).toBeTruthy();
  }).toPass({ timeout: 180000, intervals: [3000, 5000, 10000, 15000] });
});

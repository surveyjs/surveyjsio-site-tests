import { defineConfig, devices } from '@playwright/test';

const shardIndex = process.env.PLAYWRIGHT_SHARD_INDEX || 'default';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* One retry as a cheap safety net for residual flake on an already-warm slot
     (client-side JS load races, transient hiccups). Now that the action/navigation
     timeouts are bounded, a retry is fast and no longer risks the old multi-minute
     hangs. The payment suite overrides this to 2 (the PayPal sandbox is flakier).
     NOTE: the instance-level Azure cold start (2-3 min, longer than navigationTimeout)
     is handled by the warmup gate, NOT by retries - one retry can't outwait it. */
  retries: 1,
  /* Abort the run after 5 hard failures (retries exhausted) so a genuinely broken
     slot fails fast instead of grinding through the entire suite. */
  maxFailures: 5,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : undefined,
  /* Backstop per-test budget. The real fast-fail comes from the per-action and
     per-navigation timeouts on the site project below; this only bounds a test
     that gets genuinely stuck. */
  timeout: 180000,
  expect: {
    // Assertions poll for up to this long. Kept generous because the shared Azure
    // slot is slow under the parallel load, so state (cart totals, post-auth UI)
    // can take a bit to settle; auth round-trips override this with a larger value.
    timeout: 15000,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    /* Warmup projects gate the real suites: they wake the (idle-prone) Azure
       slots and touch the routes under test, so a cold start fails HERE
       (and the dependent suite is skipped) instead of producing a pile of
       mysterious timeouts in the actual tests. Each suite warms its own host. */
    {
      name: 'warmup-site',
      testDir: './warmup',
      testMatch: /site\.warmup\.ts$/,
    },
    {
      name: 'warmup-examples',
      testDir: './warmup',
      testMatch: /examples\.warmup\.ts$/,
    },
    {
      name: 'site',
      testDir: './site',
      use: {
        ...devices['Desktop Chrome'],
        /* Generous ceilings, not fixed waits: a warm page still finishes in seconds,
           but a freshly cold-started Azure slot (e.g. right after a CI restart, when
           8 workers hit not-yet-JIT-compiled routes at once) needs this headroom so
           legitimate first-hits don't false-fail. A truly dead slot is caught by the
           warmup gate, not here. */
        actionTimeout: 60000,
        navigationTimeout: 120000,
      },
      dependencies: ['warmup-site'],
    },
    {
      name: 'examples',
      testDir: './examples',
      use: {
        ...devices['Desktop Chrome'],
        // The examples slot serves many heavy, parametrized demo pages that the warmup
        // can't all pre-warm, so cold first-hits after a site update run slower than the
        // site slot - give navigation extra headroom.
        actionTimeout: 60000,
        navigationTimeout: 180000,
      },
      dependencies: ['warmup-examples'],
    },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  reporter: [
    ['list'],
    ['junit', { outputFile: `./test-results/results-shard-${shardIndex}.xml` }]
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

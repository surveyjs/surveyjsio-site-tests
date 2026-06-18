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
  /* No retries: flaky e2e should be fixed in the test itself, and infra slowness
     (Azure cold start) is surfaced by the warmup project instead of being masked
     by expensive re-runs. */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : undefined,
  /* Backstop per-test budget. The real fast-fail comes from the per-action and
     per-navigation timeouts on the site project below; this only bounds a test
     that gets genuinely stuck. */
  timeout: 180000,
  expect: {
    timeout: 10000,
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
        /* Fail fast on a hung Azure response instead of consuming the whole test budget. */
        actionTimeout: 30000,
        navigationTimeout: 60000,
      },
      dependencies: ['warmup-site'],
    },
    {
      name: 'examples',
      testDir: './examples',
      use: {
        ...devices['Desktop Chrome'],
        actionTimeout: 30000,
        navigationTimeout: 60000,
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

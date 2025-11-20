import { test, expect, acceptCookieBanner, examplesURL as url } from '../../helper';

test('Required property', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('checkbox', { name: '!foo' });
    // eslint-disable-next-line no-undef
    creator.JSON = '';
  });

  await page.locator('.svc-toolbox div').filter({ hasText: 'Checkbox', visible: true }).first().click();
  await page.locator('.svc-tabbed-menu-item').filter({ hasText: 'JSON Editor', visible: true }).first().click();

  await expect(page.locator('.ace_gutter-cell.ace_error').first()).toBeVisible();
});

test('Property with default value', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo', default: 'bar' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  });

  await page.locator('div[title="Others"]').first().click();

  await expect(page.locator('[data-name=foo] input').first()).toHaveValue('bar');
});

test('Check boolean property', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:boolean' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  });

  await page.locator('div[title="Others"]').first().click();

  await expect(page.locator('label').filter({ hasText: 'Foo', visible: true }).first()).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Foo', visible: true }).locator('input').first()).toBeVisible();
});

test('Check text property', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:text' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  });

  await page.locator('div[title="Others"]').first().click();

  const fooTextarea = page.locator('div').filter({ hasText: 'Foo', visible: true }).locator('textarea').first();

  await fooTextarea.click();
  await fooTextarea.fill('Bar');

  await expect(fooTextarea).toHaveValue('Bar');
});

test('Check html property', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:html' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  });

  await page.locator('div[title="Others"]').first().click();

  const fooTextarea = page.locator('div').filter({ hasText: 'Foo', visible: true }).locator('textarea').first();

  await fooTextarea.click();
  await fooTextarea.fill('Bar');

  await expect(fooTextarea).toHaveValue('Bar');
});

test('Check itemvalues property', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto(`${url}/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`);

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:itemvalues' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  });

  await page.locator('div[title="Others"]').first().click();

  const addButton = page.locator('button[title="Add New"]').first();
  await addButton.click();
  await addButton.click();

  const rowCountLocator = page.locator('div').filter({ hasText: 'Foo', visible: true }).locator('table tbody tr');
  await expect(rowCountLocator).toHaveCount(2);
});
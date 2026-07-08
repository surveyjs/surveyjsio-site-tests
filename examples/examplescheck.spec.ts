import { test, expect, acceptCookieBanner, examplesURL as url } from '../helper';

// Bulk JS-error smoke test: visits many pages sequentially, so it legitimately
// needs a far larger budget than the global timeout.
test.describe.configure({ timeout: 480000 });

test('Pdf-Export', async ({ page }) => {
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-export', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-customstylization', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-integrationwithcreator', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-header', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-customfont', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-adorners', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-customwidgets', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-saveoptions', { waitUntil: 'domcontentloaded' });
});

test('Analytics', async ({ page }) => {
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-direct&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=multilanguage&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=plain-data&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-custom&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=custom-vis&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=analytics-nps&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-tabulator&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=panel-state&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=table-state&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=text-chart&platform=Knockoutjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-direct&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=multilanguage&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=plain-data&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-custom&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=custom-vis&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=analytics-nps&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-tabulator&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=panel-state&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=table-state&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=text-chart&platform=Reactjs', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-direct&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=multilanguage&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=plain-data&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-custom&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=custom-vis&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=analytics-nps&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-tabulator&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=panel-state&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=table-state&platform=Vue', { waitUntil: 'domcontentloaded' });
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=text-chart&platform=Vue', { waitUntil: 'domcontentloaded' });
});

import { test, expect, acceptCookieBanner, examplesURL as url } from '../helper';

test('Pdf-Export', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-export');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-customstylization');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-integrationwithcreator');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-header');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-customfont');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-adorners');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-customwidgets');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Pdf-Export?id=survey-pdf-saveoptions');
});

test('Analytics', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-direct&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=multilanguage&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=plain-data&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-custom&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=custom-vis&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=analytics-nps&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-tabulator&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=panel-state&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=table-state&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=text-chart&platform=Knockoutjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-direct&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=multilanguage&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=plain-data&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-custom&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=custom-vis&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=analytics-nps&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-tabulator&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=panel-state&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=table-state&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=text-chart&platform=Reactjs');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-direct&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=multilanguage&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=plain-data&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-custom&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=custom-vis&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=analytics-nps&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=nps-tabulator&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=panel-state&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=table-state&platform=Vue');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Analytics?id=text-chart&platform=Vue');
});

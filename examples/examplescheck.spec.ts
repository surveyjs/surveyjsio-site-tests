import { test, expect, acceptCookieBanner, examplesURL as url } from '../helper';

const normalizePlatform = (platform: string): string => {
  const p = platform.toLowerCase();
  if (p === 'knockoutjs' || p === 'knockout') return 'reactjs';
  if (p === 'vue') return 'vuejs';
  return p;
};

const mapLibraryId = (id: string): string => {
  if (id === 'questiontype-text') return 'text-entry-question';
  return id;
};

const libraryUrl = (id: string, platform: string): string =>
  `${url}/form-library/examples/${mapLibraryId(id)}/${normalizePlatform(platform)}`;

const surveyCreatorUrl = (id: string, platform: string): string =>
  `${url}/survey-creator/examples/${id}/${normalizePlatform(platform)}`;

const pdfExportUrl = (id: string): string =>
  `${url}/pdf-generator/examples/${id}`;

const analyticsUrl = (id: string, platform: string): string =>
  `${url}/dashboard/examples/${id}/${normalizePlatform(platform)}`;

test('Library-1', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(libraryUrl('questiontype-text', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-radiogroup', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-dropdown', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-dropdownrestfull', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-checkbox', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-imagepicker', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-boolean', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-signaturepad', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrix', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrix-rubric', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdropdown', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic-vertical', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic-totals', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdropdown-multiplecolumns', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrix-customcelltypes', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-multipletext', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-rating', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-comment', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-image', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-html', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-file', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-panel', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-paneldynamic', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-expression', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-expression-async', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-logo', 'Knockoutjs'));

  await page.goto(libraryUrl('survey-cookie', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-startwithnewline', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-quiz', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-options', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-data', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-shareddata', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-editprevious', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-displaymode', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-showpreview', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-window', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-afterrender', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-quiz-results', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-customnavigation', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-autonextpage', 'Knockoutjs'));
  await page.goto(libraryUrl('file-custom-preview', 'Knockoutjs'));
  await page.goto(libraryUrl('file-delayed-upload', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-lazy', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-select2-tagbox', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-datepicker', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-bootstrapdatepicker', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-select2', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-barrating', 'Knockoutjs'));

  await page.goto(libraryUrl('custom-widget-sortablejs', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-nouislider', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-inputmask', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-ckeditor', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-autocomplete', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-bootstrapslider', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-emotionsratings', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-animation', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-customcss', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-cssclasses', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-theme', 'Knockoutjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Knockoutjs&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Knockoutjs&theme=default')
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Knockoutjs&theme=default');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Knockoutjs&theme=default');

});

test('Library-2', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(libraryUrl('survey-markdown-matrix', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-markdown-radiogroup', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-markdown-radiogroup-marked', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-localization', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-multilanguages', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-standard', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-expression', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-async-expression', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-server', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-custom', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-event', 'Knockoutjs'));
  await page.goto(libraryUrl('service-load', 'Knockoutjs'));
  await page.goto(libraryUrl('service-send', 'Knockoutjs'));
  await page.goto(libraryUrl('service-result', 'Knockoutjs'));
  await page.goto(libraryUrl('service-oneperuser', 'Knockoutjs'));
  await page.goto(libraryUrl('file-upload-service', 'Knockoutjs'));

  await page.goto(libraryUrl('real-nps', 'Knockoutjs'));
  await page.goto(libraryUrl('real-covid-19', 'Knockoutjs'));
  await page.goto(libraryUrl('real-product-fit-market', 'Knockoutjs'));
  await page.goto(libraryUrl('real-cancellation', 'Knockoutjs'));
  await page.goto(libraryUrl('real-productfeedback', 'Knockoutjs'));
  await page.goto(libraryUrl('real-patient-history', 'Knockoutjs'));
  await page.goto(libraryUrl('real-income', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-text', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-radiogroup', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-dropdown', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-dropdownrestfull', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-checkbox', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-imagepicker', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-boolean', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-signaturepad', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrix', 'Knockoutjs'));

  await page.goto(libraryUrl('questiontype-matrix-rubric', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdropdown', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic-vertical', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic-totals', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrixdropdown-multiplecolumns', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-matrix-customcelltypes', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-multipletext', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-rating', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-comment', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-image', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-html', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-file', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-panel', 'Knockoutjs'));

  await page.goto(libraryUrl('questiontype-paneldynamic', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-expression', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-expression-async', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-logo', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-cookie', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-startwithnewline', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-quiz', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-options', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-data', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-shareddata', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-editprevious', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-displaymode', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-showpreview', 'Knockoutjs'));

  await page.goto(libraryUrl('survey-window', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-afterrender', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-quiz-results', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-customnavigation', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-autonextpage', 'Knockoutjs'));
  await page.goto(libraryUrl('file-custom-preview', 'Knockoutjs'));
  await page.goto(libraryUrl('file-delayed-upload', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-lazy', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-select2-tagbox', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-datepicker', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-bootstrapdatepicker', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-select2', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-barrating', 'Knockoutjs'));

  await page.goto(libraryUrl('custom-widget-sortablejs', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-nouislider', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-inputmask', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-ckeditor', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-autocomplete', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-bootstrapslider', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-widget-emotionsratings', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-animation', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-customcss', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-cssclasses', 'Knockoutjs'));
  await page.goto(libraryUrl('custom-theme', 'Knockoutjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Knockoutjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Knockoutjs&theme=modern')
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Knockoutjs&theme=modern');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Knockoutjs&theme=modern');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Knockoutjs&theme=modern');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Knockoutjs&theme=bootstrap');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Knockoutjs&theme=bootstrap');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Knockoutjs&theme=bootstrap');

});

test('Library-3', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(libraryUrl('custom-theme', 'Knockoutjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Knockoutjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Knockoutjs&theme=bootstrap')
  await page.goto(libraryUrl('condition-kids', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-cascade', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-complexquestions', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-customfunctions', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-dynamic', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-choicesVisibleIf', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-itemValueVisibleIf', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-matrixVisibleIf', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-matrixDropdownVisibleIf', 'Knockoutjs'));
  await page.goto(libraryUrl('condition-enable-kids', 'Knockoutjs'));
  await page.goto(libraryUrl('trigger-complete', 'Knockoutjs'));
  await page.goto(libraryUrl('trigger-copyvalue', 'Knockoutjs'));
  await page.goto(libraryUrl('trigger-setvalue', 'Knockoutjs'));
  await page.goto(libraryUrl('trigger-runexpression', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-processtext', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-calculatedvalues', 'Knockoutjs'));
  await page.goto(libraryUrl('textprocessing-choices', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-markdown-matrix', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-markdown-radiogroup', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-markdown-radiogroup-marked', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-localization', 'Knockoutjs'));
  await page.goto(libraryUrl('survey-multilanguages', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-standard', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-expression', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-async-expression', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-server', 'Knockoutjs'));
  await page.goto(libraryUrl('validators-custom', 'Knockoutjs'));

  await page.goto(libraryUrl('validators-event', 'Knockoutjs'));
  await page.goto(libraryUrl('service-load', 'Knockoutjs'));
  await page.goto(libraryUrl('service-send', 'Knockoutjs'));
  await page.goto(libraryUrl('service-result', 'Knockoutjs'));
  await page.goto(libraryUrl('service-oneperuser', 'Knockoutjs'));
  await page.goto(libraryUrl('file-upload-service', 'Knockoutjs'));
  await page.goto(libraryUrl('real-nps', 'Knockoutjs'));
  await page.goto(libraryUrl('real-covid-19', 'Knockoutjs'));
  await page.goto(libraryUrl('real-product-fit-market', 'Knockoutjs'));
  await page.goto(libraryUrl('real-cancellation', 'Knockoutjs'));
  await page.goto(libraryUrl('real-productfeedback', 'Knockoutjs'));
  await page.goto(libraryUrl('real-patient-history', 'Knockoutjs'));
  await page.goto(libraryUrl('real-income', 'Knockoutjs'));
  await page.goto(libraryUrl('questiontype-text', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-radiogroup', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-dropdown', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-dropdownrestfull', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-checkbox', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-imagepicker', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-boolean', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-signaturepad', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrix', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrix-rubric', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrixdropdown', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic-vertical', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrixdynamic-totals', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrixdropdown-multiplecolumns', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-matrix-customcelltypes', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-multipletext', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-rating', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-comment', 'Reactjs'));

  await page.goto(libraryUrl('questiontype-image', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-html', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-file', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-panel', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-paneldynamic', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-expression', 'Reactjs'));
  await page.goto(libraryUrl('questiontype-expression-async', 'Reactjs'));
  await page.goto(libraryUrl('survey-logo', 'Reactjs'));
  await page.goto(libraryUrl('survey-cookie', 'Reactjs'));
  await page.goto(libraryUrl('survey-startwithnewline', 'Reactjs'));
  await page.goto(libraryUrl('survey-quiz', 'Reactjs'));
  await page.goto(libraryUrl('survey-options', 'Reactjs'));
  await page.goto(libraryUrl('survey-data', 'Reactjs'));
  await page.goto(libraryUrl('survey-shareddata', 'Reactjs'));
  await page.goto(libraryUrl('survey-editprevious', 'Reactjs'));
  await page.goto(libraryUrl('survey-displaymode', 'Reactjs'));
  await page.goto(libraryUrl('survey-showpreview', 'Reactjs'));
  await page.goto(libraryUrl('survey-window', 'Reactjs'));
  await page.goto(libraryUrl('survey-afterrender', 'Reactjs'));
  await page.goto(libraryUrl('survey-quiz-results', 'Reactjs'));
  await page.goto(libraryUrl('survey-customnavigation', 'Reactjs'));
  await page.goto(libraryUrl('survey-autonextpage', 'Reactjs'));
  await page.goto(libraryUrl('file-custom-preview', 'Reactjs'));
  await page.goto(libraryUrl('file-delayed-upload', 'Reactjs'));
  await page.goto(libraryUrl('survey-lazy', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-select2-tagbox', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-datepicker', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-bootstrapdatepicker', 'Reactjs'));

  await page.goto(libraryUrl('custom-widget-select2', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-barrating', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-sortablejs', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-nouislider', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-inputmask', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-ckeditor', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-autocomplete', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-bootstrapslider', 'Reactjs'));
  await page.goto(libraryUrl('custom-widget-emotionsratings', 'Reactjs'));
  await page.goto(libraryUrl('survey-animation', 'Reactjs'));
  await page.goto(libraryUrl('survey-customcss', 'Reactjs'));
  await page.goto(libraryUrl('survey-cssclasses', 'Reactjs'));
  await page.goto(libraryUrl('custom-theme', 'Reactjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Reactjs&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Reactjs&theme=default')
  await page.goto(libraryUrl('condition-kids', 'Reactjs'));
  await page.goto(libraryUrl('condition-cascade', 'Reactjs'));
  await page.goto(libraryUrl('condition-complexquestions', 'Reactjs'));
  await page.goto(libraryUrl('condition-customfunctions', 'Reactjs'));
  await page.goto(libraryUrl('condition-dynamic', 'Reactjs'));
  await page.goto(libraryUrl('condition-choicesVisibleIf', 'Reactjs'));
  await page.goto(libraryUrl('condition-itemValueVisibleIf', 'Reactjs'));
  await page.goto(libraryUrl('condition-matrixVisibleIf', 'Reactjs'));
  await page.goto(libraryUrl('condition-matrixDropdownVisibleIf', 'Reactjs'));
  await page.goto(libraryUrl('condition-enable-kids', 'Reactjs'));
  await page.goto(libraryUrl('trigger-complete', 'Reactjs'));
  await page.goto(libraryUrl('trigger-copyvalue', 'Reactjs'));
  await page.goto(libraryUrl('trigger-setvalue', 'Reactjs'));
  await page.goto(libraryUrl('trigger-runexpression', 'Reactjs'));
  await page.goto(libraryUrl('survey-processtext', 'Reactjs'));

  await page.goto(libraryUrl('survey-calculatedvalues', 'Reactjs'));
  await page.goto(libraryUrl('textprocessing-choices', 'Reactjs'));
  await page.goto(libraryUrl('survey-markdown-matrix', 'Reactjs'));
  await page.goto(libraryUrl('survey-markdown-radiogroup', 'Reactjs'));
  await page.goto(libraryUrl('survey-markdown-radiogroup-marked', 'Reactjs'));
  await page.goto(libraryUrl('survey-localization', 'Reactjs'));
  await page.goto(libraryUrl('survey-multilanguages', 'Reactjs'));
  await page.goto(libraryUrl('validators-standard', 'Reactjs'));
  await page.goto(libraryUrl('validators-expression', 'Reactjs'));
  await page.goto(libraryUrl('validators-async-expression', 'Reactjs'));
  await page.goto(libraryUrl('validators-server', 'Reactjs'));
  await page.goto(libraryUrl('validators-custom', 'Reactjs'));
  await page.goto(libraryUrl('validators-event', 'Reactjs'));
  await page.goto(libraryUrl('service-load', 'Reactjs'));
  await page.goto(libraryUrl('service-send', 'Reactjs'));
  await page.goto(libraryUrl('service-result', 'Reactjs'));
  await page.goto(libraryUrl('service-oneperuser', 'Reactjs'));
  await page.goto(libraryUrl('file-upload-service', 'Reactjs'));
  await page.goto(libraryUrl('real-nps', 'Reactjs'));
  await page.goto(libraryUrl('real-covid-19', 'Reactjs'));
  await page.goto(libraryUrl('real-product-fit-market', 'Reactjs'));
  await page.goto(libraryUrl('real-cancellation', 'Reactjs'));
  await page.goto(libraryUrl('real-productfeedback', 'Reactjs'));
  await page.goto(libraryUrl('real-patient-history', 'Reactjs'));
  await page.goto(libraryUrl('real-income', 'Reactjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Reactjs&theme=modern');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Reactjs&theme=modern');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Reactjs&theme=modern')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Reactjs&theme=modern');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Reactjs&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Reactjs&theme=bootstrap');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Reactjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Reactjs&theme=bootstrap');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Reactjs&theme=bootstrap')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Vue&theme=default');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Vue&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Vue&theme=default');
  //
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Vue&theme=default')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Vue&theme=modern')
  //   await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Vue&theme=modern');
  //
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Vue&theme=modern');
  //
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Vue&theme=modern')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Vue&theme=bootstrap');
  //
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Vue&theme=bootstrap')
  //     await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Vue&theme=bootstrap');
  //
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Vue&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Vue&theme=bootstrap');
});

test('Survey-Creator-1', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(surveyCreatorUrl('options', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('singlepage', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('localization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('multiplelanguages', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolboxcustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolboxcategories', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('addproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('removeproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('dependsonproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('questioneditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('oncreatequestion', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolbarcustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('tabscustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('elementmenu', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('custompropertyeditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('customadorner', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('titleadorner', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('modifysurveys', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-ordertable', 'Knockoutjs'));
  //await page.goto('https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=component-ordergrid&theme=default&platform=Knockoutjs')
  await page.goto(surveyCreatorUrl('component-country', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-fullname', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-shippingaddress', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('customwidgets', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('ckeditorpropertyeditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('matrixcustomcelltypes', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('setsurvey', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('loadfromservice', 'Knockoutjs'));
  //await page.goto('https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=editor-custom-theme&theme=default&platform=Knockoutjs')

});

test('Survey-Creator-2', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(surveyCreatorUrl('options', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('singlepage', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('localization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('multiplelanguages', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolboxcustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolboxcategories', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('addproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('removeproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('dependsonproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('questioneditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('oncreatequestion', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolbarcustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('tabscustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('elementmenu', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('custompropertyeditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('customadorner', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('titleadorner', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('modifysurveys', 'Knockoutjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=component-ordertable&theme=modern&platform=Knockoutjs')
  await page.goto('https://surveyjstest.azurewebsites.net/survey-creator/examples/order-form-template');
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=component-ordergrid&theme=modern&platform=Knockoutjs')
  await page.goto(surveyCreatorUrl('component-country', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-fullname', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-shippingaddress', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('customwidgets', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('ckeditorpropertyeditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('matrixcustomcelltypes', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('setsurvey', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('loadfromservice', 'Knockoutjs'));
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=editor-custom-theme&theme=modern&platform=Knockoutjs')

  await page.goto(surveyCreatorUrl('options', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('singlepage', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('localization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('multiplelanguages', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolboxcustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolboxcategories', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('addproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('removeproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('dependsonproperties', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('questioneditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('oncreatequestion', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('toolbarcustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('tabscustomization', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('elementmenu', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('custompropertyeditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('customadorner', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('titleadorner', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('modifysurveys', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-ordertable', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-ordergrid', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-country', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-fullname', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('component-shippingaddress', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('customwidgets', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('ckeditorpropertyeditor', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('matrixcustomcelltypes', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('setsurvey', 'Knockoutjs'));
  await page.goto(surveyCreatorUrl('loadfromservice', 'Knockoutjs'));
  //await page.goto('https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=editor-custom-theme&theme=bootstrap&platform=Knockoutjs');
});

test('Pdf-Export', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(pdfExportUrl('survey-pdf-export'));
  await page.goto(pdfExportUrl('survey-pdf-customstylization'));
  await page.goto(pdfExportUrl('survey-pdf-integrationwithcreator'));
  await page.goto(pdfExportUrl('survey-pdf-header'));
  await page.goto(pdfExportUrl('survey-pdf-customfont'));
  await page.goto(pdfExportUrl('survey-pdf-adorners'));
  await page.goto(pdfExportUrl('survey-pdf-customwidgets'));
  await page.goto(pdfExportUrl('survey-pdf-saveoptions'));
});

test('Analytics', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto(analyticsUrl('nps-direct', 'Knockoutjs'));
  await page.goto(analyticsUrl('multilanguage', 'Knockoutjs'));
  await page.goto(analyticsUrl('plain-data', 'Knockoutjs'));
  await page.goto(analyticsUrl('nps-custom', 'Knockoutjs'));
  await page.goto(analyticsUrl('custom-vis', 'Knockoutjs'));
  await page.goto(analyticsUrl('analytics-nps', 'Knockoutjs'));
  await page.goto(analyticsUrl('nps-tabulator', 'Knockoutjs'));
  await page.goto(analyticsUrl('panel-state', 'Knockoutjs'));
  await page.goto(analyticsUrl('table-state', 'Knockoutjs'));
  await page.goto(analyticsUrl('text-chart', 'Knockoutjs'));
  await page.goto(analyticsUrl('nps-direct', 'Reactjs'));
  await page.goto(analyticsUrl('multilanguage', 'Reactjs'));
  await page.goto(analyticsUrl('plain-data', 'Reactjs'));
  await page.goto(analyticsUrl('nps-custom', 'Reactjs'));
  await page.goto(analyticsUrl('custom-vis', 'Reactjs'));
  await page.goto(analyticsUrl('analytics-nps', 'Reactjs'));
  await page.goto(analyticsUrl('nps-tabulator', 'Reactjs'));
  await page.goto(analyticsUrl('panel-state', 'Reactjs'));
  await page.goto(analyticsUrl('table-state', 'Reactjs'));
  await page.goto(analyticsUrl('text-chart', 'Reactjs'));
  await page.goto(analyticsUrl('nps-direct', 'Vue'));
  await page.goto(analyticsUrl('multilanguage', 'Vue'));
  await page.goto(analyticsUrl('plain-data', 'Vue'));
  await page.goto(analyticsUrl('nps-custom', 'Vue'));
  await page.goto(analyticsUrl('custom-vis', 'Vue'));
  await page.goto(analyticsUrl('analytics-nps', 'Vue'));
  await page.goto(analyticsUrl('nps-tabulator', 'Vue'));
  await page.goto(analyticsUrl('panel-state', 'Vue'));
  await page.goto(analyticsUrl('table-state', 'Vue'));
  await page.goto(analyticsUrl('text-chart', 'Vue'));
});

import { test, expect, acceptCookieBanner, examplesURL as url } from '../../helper';

test('Library-1-1', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Knockoutjs&theme=default');
});

test('Library-1-2', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Knockoutjs&theme=default');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Knockoutjs&theme=default');
});

test('Library-1-3', async ({ page }) => {
  test.setTimeout(480000);

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Knockoutjs&theme=default');
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

test('Library-2-1', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Knockoutjs&theme=default');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Knockoutjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Knockoutjs&theme=modern');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Knockoutjs&theme=modern');
});

test('Library-2-2', async ({ page }) => {
  test.setTimeout(480000);
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Knockoutjs&theme=modern');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Knockoutjs&theme=modern');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Knockoutjs&theme=modern');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Knockoutjs&theme=modern');
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

});

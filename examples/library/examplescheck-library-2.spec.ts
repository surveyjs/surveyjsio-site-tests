import { test, expect, acceptCookieBanner, examplesURL as url } from '../../helper';

test('Library-2-3', async ({ page }) => {
  test.setTimeout(480000);
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
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Knockoutjs&theme=bootstrap');
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Knockoutjs&theme=bootstrap')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Knockoutjs&theme=bootstrap')
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Knockoutjs&theme=bootstrap');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Knockoutjs&theme=bootstrap');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-text&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdown&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-dropdownrestfull&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-checkbox&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-imagepicker&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-boolean&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-signaturepad&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-rubric&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-vertical&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdynamic-totals&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrixdropdown-multiplecolumns&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-matrix-customcelltypes&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-multipletext&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-rating&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-comment&platform=Reactjs&theme=default');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-image&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-html&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-file&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-panel&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-paneldynamic&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-expression-async&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-logo&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cookie&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-startwithnewline&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-options&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-data&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-shareddata&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-editprevious&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-displaymode&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-showpreview&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-window&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-afterrender&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-quiz-results&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customnavigation&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-autonextpage&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-custom-preview&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-delayed-upload&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-lazy&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2-tagbox&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-datepicker&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapdatepicker&platform=Reactjs&theme=default');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-select2&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-barrating&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-sortablejs&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-nouislider&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-inputmask&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-ckeditor&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-autocomplete&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-bootstrapslider&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-widget-emotionsratings&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-animation&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-customcss&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-cssclasses&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=custom-theme&platform=Reactjs&theme=default');
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=bootstrap-material-theme&platform=Reactjs&theme=default')
  // await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=floating-labels&platform=Reactjs&theme=default')
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-kids&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-cascade&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-complexquestions&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-customfunctions&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-dynamic&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-choicesVisibleIf&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-itemValueVisibleIf&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixVisibleIf&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-matrixDropdownVisibleIf&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=condition-enable-kids&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-complete&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-copyvalue&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-setvalue&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=trigger-runexpression&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-processtext&platform=Reactjs&theme=default');

  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-calculatedvalues&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=textprocessing-choices&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-matrix&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-markdown-radiogroup-marked&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-localization&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=survey-multilanguages&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-standard&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-expression&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-async-expression&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-server&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-custom&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=validators-event&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-load&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-send&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-result&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=service-oneperuser&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=file-upload-service&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-nps&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-covid-19&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-product-fit-market&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-cancellation&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-productfeedback&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-patient-history&platform=Reactjs&theme=default');
  await page.goto('https://surveyjstest.azurewebsites.net/Examples/Library?id=real-income&platform=Reactjs&theme=default');
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

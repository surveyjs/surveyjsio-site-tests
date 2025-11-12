import { Selector, fixture, test } from 'testcafe';

fixture `load_survey_from_service`
  .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=loadfromservice&platform=Knockoutjs&theme=default`;

test('Load survey from service', async t => {
  await t
    .maximizeWindow()
    .click(Selector('.svc-tabbed-menu-item').withText('JSON Editor'))
  //.expect(Selector('.svd-json-editor-area').value).contains('frameworkUsing'); // if ACE not loaded
    .expect(Selector('.svc-json-editor-tab__content').find('.ace_content').textContent).match(/frameworkUsing.*\s*.*mvvmUsing/); // if ACE loaded
});
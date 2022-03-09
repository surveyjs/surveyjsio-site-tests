import { Selector } from 'testcafe';

fixture `load_survey_from_service`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=loadfromservice&platform=Knockoutjs&theme=default`;

test('Load survey from service', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .expect(Selector('.svd-json-editor').find('.ace_content').textContent).match(/frameworkUsing.*\s*.*mvvmUsing/);
});
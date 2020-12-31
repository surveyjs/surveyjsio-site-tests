import { Selector } from 'testcafe';

fixture `element_menu_customization`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=elementmenu&theme=default`;

test('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('#creatorElement span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor")
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText('SurveyCreator').visible).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('code').withText('DOCTYPE html').visible).eql(true)
        .click(Selector('a').withText('CSS'))
        .expect(Selector('.source-code.language-css').visible).eql(true);
});
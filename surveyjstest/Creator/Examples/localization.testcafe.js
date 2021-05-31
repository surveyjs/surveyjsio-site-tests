import { Selector } from 'testcafe';

fixture `localization`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=localization&theme=default`;

test('Check tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('span.nav-link').withText('Éditer JSON').textContent).eql("Éditer JSON")
        .switchToMainWindow()
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText('Create your translation').exists).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains("survey-creator.js")
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('a').withText('Editor Localization Files').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator/src/localization")
        .expect(Selector('a').withText('english').getAttribute('href')).eql("https://github.com/surveyjs/editor/blob/master/src/localization/english.ts")
        .expect(Selector('a').withText('here').getAttribute('href')).eql("/Examples/Library/survey-localization")
        .click(Selector('a').withText('Result'))
        .expect(Selector('span.nav-link').withText('Éditeur de questionnaire').textContent).eql("Éditeur de questionnaire");
});

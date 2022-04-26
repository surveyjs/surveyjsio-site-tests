import { Selector } from 'testcafe';

fixture `localization`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=localization&platform=Knockoutjs&theme=default`;

test('Check tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector(".nav-tabs.svd-tabs ").innerText).eql("Mein Designer Umfrage testen Umfragelogik JSON-Editor")
        .expect(Selector('span.nav-link').withText('JSON-Editor').visible).ok()
        .switchToMainWindow()
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText('You can modify the default translation').visible).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains("survey-creator")
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('a').withText('Editor Localization Files').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator/src/localization")
        .expect(Selector('a').withText('english').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator/src/localization/english.ts")
        .expect(Selector('a').withText('here').getAttribute('href')).eql("/Examples/Library/survey-localization")
        .click(Selector('a').withText('Result'))
        .expect(Selector('span.nav-link').withText('Mein Designer').visible).ok();
});

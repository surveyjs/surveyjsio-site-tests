import { Selector } from 'testcafe';

fixture `localization`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=localization&platform=Knockoutjs&theme=default`;

test('Check tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector(".nav-tabs.svd-tabs ").innerText).eql("Umfrage entwerfen Umfrage testen Umfragelogik JSON")
        .expect(Selector('span.nav-link').withText('JSON').visible).ok()
        .switchToMainWindow()

        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText(' Override individual translations in an existing locale').visible).ok()
        
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains("survey-creator")
        
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('a').withText('dictionary files').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization")
        .expect(Selector('a').withText('English dictionary').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/src/localization/english.ts")
        
        .click(Selector('a').withText('Result'))
        .expect(Selector('span.nav-link').withText('Umfrage entwerfen').visible).ok();
});

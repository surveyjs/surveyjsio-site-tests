import { Selector } from 'testcafe';

fixture `localization`
    .page `https://surveyjstest.azurewebsites.net/survey-creator/examples/survey-creator-interface-localization/knockoutjs  `;

test('Check tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('span').withText('Wahrheitswert').visible).ok()
        .expect(Selector('span').withText('JSON').visible).ok()
        .expect(Selector('span').withText('Logik').visible).ok()
        .switchToMainWindow()

        .expect(Selector('.example-tab').withText('Code').visible).ok()
        .click(Selector('.example-tab').withText('Code'))
        .expect(Selector('span').withText(' Override individual translations in an existing locale').visible).ok()
        
        .click(Selector('span').withText('index.html'))
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains("survey-creator")
        
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('a').withText('dictionary files').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization")
        .expect(Selector('a').withText('English dictionary').getAttribute('href')).eql("https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/src/localization/english.ts")
        
        .click(Selector('a').withText('Result'))
        .expect(Selector('span').withText('Wahrheitswert').visible).ok();
});

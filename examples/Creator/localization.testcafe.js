import { Selector, fixture, test } from 'testcafe';
import { acceptCookie, explicitErrorHandler, getExampleTabSelector } from '../helpers';

fixture `localization`
  .page `https://surveyjstest.azurewebsites.net/survey-creator/examples/survey-creator-interface-localization/knockoutjs`
  .clientScripts({
    content: `(${explicitErrorHandler.toString()})()`
  })
  .beforeEach(async t => {
    await acceptCookie(t);
  });

test('Check tabs', async t => {
  await t
    .maximizeWindow()
  // .expect(Selector('.svc-tabbed-menu-item__text').withText('Wahrheitswert').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item__text').withText('Test').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item__text').withText('Logik').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item__text').withText('JSON').visible).ok()
    .switchToMainWindow()
    .expect(getExampleTabSelector('Code').visible).ok()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('span').withText(' Override individual translations in an existing locale').visible).ok()

    .click(Selector('span').withText('index.html'))
    .expect(Selector('pre').withText('id="surveyCreatorContainer"').textContent).contains('<div')

    .click(getExampleTabSelector('Documentation'))
    .expect(Selector('a').withText('dictionary files').getAttribute('href')).eql('https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization')
    .expect(Selector('a').withText('English dictionary').getAttribute('href')).eql('https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/src/localization/english.ts')

    .click(getExampleTabSelector('Demo'))
    .expect(Selector('span').withText('Wahrheitswert').visible).ok();
});

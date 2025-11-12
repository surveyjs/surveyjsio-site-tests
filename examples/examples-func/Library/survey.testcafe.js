import { Selector, fixture, test } from 'testcafe';
import { getSideBarGroupItem, getSideBarItem, explicitErrorHandler, acceptCookie } from '../helpers';

fixture`survey`
  .page`https://surveyjstest.azurewebsites.net/Examples/Library`.clientScripts({
  content: `(${explicitErrorHandler.toString()})()`
}).beforeEach(async t => {
  await acceptCookie(t);
});

test('title_logo', async t => {
  await t
    .maximizeWindow()
    .click(getSideBarGroupItem('Survey'))
    .click(getSideBarItem('Branded Survey Header'))
    .expect(Selector('.sd-logo__image').getAttribute('src')).ok('Logo is visible')
    .expect(Selector('#surveyElement').find('span').withText('NPS Survey Question').visible).ok('Title is visible')
    .expect(Selector('#surveyElement').find('span').withText('NPS (net promoter score) is a metric used to evaluate customer loyalty and business growth').visible).ok('Description is visible')
    .expect(Selector('.sd-logo.sv-logo--left').exists).eql(true)
    .expect(Selector('.sd-logo.sv-logo--right').exists).eql(false)
    .click('#tool-settings');
  // .click('#logoPosition')
  // .click(Selector('#logoPosition').find('option').withText('right'))
  // .expect(Selector('.sd-logo.sv-logo--left').exists).eql(false)
  // .expect(Selector('.sd-logo.sv-logo--right').exists).eql(true);
});
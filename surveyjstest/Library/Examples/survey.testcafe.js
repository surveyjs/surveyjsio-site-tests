import { Selector } from 'testcafe';
import { getSideBarGroupItem, getSideBarItem, explicitErrorHandler, acceptCookie } from '../../helpers';

fixture`survey`
    .page`https://surveyjstest.azurewebsites.net/Examples/Library`.clientScripts({
        content: `(${explicitErrorHandler.toString()})()`
    }).beforeEach(async t => {
        await acceptCookie(t);
    });

test('title_logo', async t => {
    await t
        .resizeWindow(1600, 2000)
        .click(getSideBarGroupItem('Survey'))
        .click(getSideBarItem('Title and Logo'))
        .expect(Selector('.sd-logo__image').getAttribute('src')).ok('Logo is visible')
        .expect(Selector('#surveyElement').find('span').withText('Survey Title&Logo demo').visible).ok('Title is visible')
        .expect(Selector('#surveyElement').find('span').withText('Please take look at the survey title and logo. Tes').visible).ok('Description is visible')
        .expect(Selector('.sd-logo.sv-logo--left').exists).eql(true)
        .expect(Selector('.sd-logo.sv-logo--right').exists).eql(false)
        .click('#selColCount')
        .click(Selector('#selColCount').find('option').withText('right'))
        .expect(Selector('.sd-logo.sv-logo--left').exists).eql(false)
        .expect(Selector('.sd-logo.sv-logo--right').exists).eql(true);
});
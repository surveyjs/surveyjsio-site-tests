import { Selector } from 'testcafe';
import { getSideBarGroupItem, getSideBarItem } from '../../helpers';

fixture `survey`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library`;

test('title_logo', async t => {
    await t
        .maximizeWindow()
        .click('#category-survey')
        .click(getSideBarGroupItem('Survey'))
        .click(getSideBarItem('Title and Logo'))
        .expect(Selector('.sv-logo__image').getAttribute('src')).ok('Logo is visible')
        .expect(Selector('#surveyElement').find('span').withText('Survey Title&Logo demo').visible).ok('Title is visible')
        .expect(Selector('#surveyElement').find('span').withText('Please take look at the survey title and logo. Tes').visible).ok('Description is visible')
        .expect(Selector('.sv-logo.sv-logo--left').exists).eql(true)
        .expect(Selector('.sv-logo.sv-logo--right').exists).eql(false)
        .click('.select2-selection__rendered[title="left"]')
        .click(Selector('#select2-selColCount-results').find('li').withText('right'))
        .expect(Selector('.sv-logo.sv-logo--left').exists).eql(false)
        .expect(Selector('.sv-logo.sv-logo--right').exists).eql(true);
});
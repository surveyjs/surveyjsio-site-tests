import { Selector } from 'testcafe';

fixture `multiple_languages`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=multiplelanguages&theme=default`;

test.skip('Translate matrix', async t => {
    await t
        .maximizeWindow()
        .click(Selector('a').withText('Test Survey'))
        .expect(Selector('#sq_135').find('span').withText('Moonlight').innerText).eql('Moonlight')
        .expect(Selector('#sq_135').find('span').withText('Zootopia').innerText).eql('Zootopia')
        .click('.form-control[data-bind^="options: koLanguages, value: koActiveLanguage, opt"]')
        .click(Selector('#testSurveyLocale').find('option').withText('deutsch'))
        .expect(Selector('#sq_135').find('span').withText('Moonlight').innerText).eql('Moonlight')
        .expect(Selector('span').withText('Zoomania').innerText).eql('Zoomania')
        .click(Selector('a').withText('Translation'))
        .click(Selector('.icon-toolbox-arrow').find('.svd-svg-icon'))
        .click(Selector('#creatorElement').find('span').withText('favoriteMovie'))
        .click(Selector('.svd-toolbox-category-header[data-bind^="click: function(){ group.koExpanded(!group.koExpan"]').nth(4).find('span').withText('rows'))
        .click(Selector('[data-bind^="visible: $data.koVisible, style: {width: $data.koV"]').nth(9).find('.form-control[data-bind^="visible: $data.koVisible, value:item.koValue($data"]'))
        .typeText(Selector('[data-bind^="visible: $data.koVisible, style: {width: $data.koV"]').nth(9).find('.form-control[data-bind^="visible: $data.koVisible, value:item.koValue($data"]'), 'Mondlicht')
        .click(Selector('.svd-toolbox-category-header[data-bind^="click: function(){ group.koExpanded(!group.koExpan"]').nth(4).find('span').withText('rows'))
        .click(Selector('a').withText('Test Survey'))
        .click('.form-control[data-bind^="options: koLanguages, value: koActiveLanguage, opt"]')
        .click(Selector('option').withText('deutsch'))
        .expect(Selector('span').withText('Mondlicht').innerText).eql('Mondlicht');
});
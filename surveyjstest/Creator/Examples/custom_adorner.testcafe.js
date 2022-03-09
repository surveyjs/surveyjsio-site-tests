import { Selector } from 'testcafe';

fixture `Custom Adorner`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=customadorner&platform=Knockoutjs&theme=default`;

test('Adorner exists', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Single Input'))
        .click('[data-bind="value: selection"]')
        .click(Selector('option').withText('Place On The Same Line'));
});

test.skip('Adorner works', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Single Input'))
        .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
        .expect(Selector('div').withText('Is start with new line').nth(25).find('.checkmark.svd-main-background-color[data-bind^="css: { \\\'svd-main-background-color\\\': koValue, \\\'svd-"]').getStyleProperty('background-color')).eql("rgb(26, 179, 148)")
        .click('.btn.btn-primary[data-bind^="click: onResetClick, value: $root.getLocString(\'pe"]')
        .click('[data-bind="value: selection"]')
        .click(Selector('option').withText('Place On The Same Line'))
        .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
        .expect(Selector('div').withText('Is start with new line').nth(25).find('.checkmark.svd-light-background-color[data-bind^="css: { \\\'svd-main-background-color\\\': koValue, \\\'svd-"]').getStyleProperty('background-color')).eql("rgb(231, 234, 236)");
});
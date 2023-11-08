import { Selector } from 'testcafe';

fixture `custom_property_editor`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=custompropertyeditor&theme=default`;

test.skip('Check shortname property', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Single-Line Input'))
        .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
        .expect(Selector('#editor_tab_id_general').find('label').withText('Shortname').innerText).eql('Shortname')
        .click(Selector('div').withText('Shortname').nth(19).find('.form-control.svd_editor_control'))
        .typeText(Selector('div').withText('Shortname').nth(19).find('.form-control.svd_editor_control'), '123456789')
        .expect(Selector('div').withText('Shortname').nth(19).find('.form-control.svd_editor_control').value).eql('12345');
});
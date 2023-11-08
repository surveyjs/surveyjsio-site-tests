import { Selector, fixture, test } from 'testcafe';

fixture `question_editor`
  .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=questioneditor&theme=default`;

test.skip('Add, hide propery to editor modal, change tabs order', async t => {
  await t
    .maximizeWindow()
    .click(Selector('.svd_toolbox').find('div').withText('Single-Line Input'))
    .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
    .expect(Selector('div').withText('Is start with new line').nth(14).find('.sjs-cb-wrapper').exists).eql(false)
    .expect(Selector('.form-group').nth(50).find('div').withText('Tag').exists).eql(true)
    .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]')
    .click(Selector('div').withText('Matrix (single choice)').nth(7).find('.svd_toolbox_item_text.hidden-sm.hidden-xs[data-bind=\"text:title\"]'))
    .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').nth(1).find('span').withText('Edit'))
    .expect(Selector('#surveyquestioneditorwindow').find('.modal-body.svd_notopbottompaddings').innerText).match(/Visible.If.*\s+.*Columns/);
});
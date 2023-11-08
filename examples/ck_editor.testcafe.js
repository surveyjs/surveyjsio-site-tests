import { Selector, fixture, test } from 'testcafe';
import { getIUnderstandButton } from '../surveyjstest/helpers';

fixture `ck_editor`
  .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=ckeditorpropertyeditor&theme=default`;

test.skip('CK editor', async t => {
  await t
    .maximizeWindow()
    .click(Selector('.svd_toolbox').find('div').withText('Single-Line Input'))
    .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
    .click(Selector('.modal-body.svd_notopbottompaddings').nth(9).find('div').withText('Title').nth(1))
    .expect(Selector('#cke_modalEditorCustomWidget12').id).contains('cke')
    .click(Selector('#cke_669').find('.cke_button_icon.cke_button__bold_icon'))
    .switchToIframe('.cke_wysiwyg_frame.cke_reset[title="Rich Text Editor, modalEditorCustomWidget12"]')
    .click(Selector('body').find('p'))
    .typeText(Selector('body').find('p'), 'hello')
    .switchToMainWindow()
    .click(getIUnderstandButton())
    .switchToIframe('.cke_wysiwyg_frame.cke_reset[title="Rich Text Editor, modalEditorCustomWidget12"]')
    .expect(Selector('strong').withText('hello').textContent).eql('​hello')
    .switchToMainWindow()
    .switchToIframe('.cke_wysiwyg_frame.cke_reset[title="Rich Text Editor, modalEditorCustomWidget12"]')
    .expect(Selector('strong').withText('hello').tagName).eql('strong');
});
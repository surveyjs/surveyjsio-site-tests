import { Selector, ClientFunction } from 'testcafe';

fixture `modify_new_question_single_page`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=oncreatequestion&theme=default`;

test.skip('Check question properties', async t => {
    await t
        .maximizeWindow();

    const guid = ClientFunction(() => {
        window.guid = function (){
            return window.questionCounter;
        }   
        return 'dummy'
    });

    await t
        .expect(guid()).eql('dummy')
        .click(Selector('#creatorElement').find('div').withText('Single-Line Input').nth(5))
        .expect(Selector('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').nth(0).value).eql("QuestionText1")
        .expect(Selector('[data-bind=\"event: { keydown: $data.editor.keyDownHandler }\"]').nth(17).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]').value).eql("1")
        .click(Selector('span').withText('Checkbox'))
        .expect(Selector('[data-bind=\"event: { keydown: $data.editor.keyDownHandler }\"]').nth(19).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]').value).eql("QuestionCheckbox2")
        .expect(Selector('[data-bind=\"event: { keydown: $data.editor.keyDownHandler }\"]').nth(30).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]').value).eql("2")
        .click(Selector('[class^="col-lg-2 col-md-2 col-sm-1 col-xs-1 svd_toolbox sv"]').find('div').withText('Matrix').nth(0))
        .expect(Selector('[data-bind=\"event: { keydown: $data.editor.keyDownHandler }\"]').nth(11).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]').value).eql("QuestionMatrix3")
        .expect(Selector('[data-bind=\"event: { keydown: $data.editor.keyDownHandler }\"]').nth(11).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]').getAttribute('disabled')).eql("")
        .expect(Selector('[data-bind=\"event: { keydown: $data.editor.keyDownHandler }\"]').nth(21).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]').getAttribute('disabled')).eql("");
});
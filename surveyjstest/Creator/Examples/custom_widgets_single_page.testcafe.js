import { Selector } from 'testcafe';

fixture `custom_widgets_single_page`
    .page `https://surveyjstest.azurewebsites.net//Examples/BuilderSinglePage?id=customwidgets&theme=default`;

test.skip('Check bar rating in creator', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.svd_toolbox').find('div').withText('Bar rating'))
        .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span'))
        .click(Selector('.modal-body.svd_notopbottompaddings').nth(13).find('div').withText('Choices').nth(1))
        .pressKey('backspace')
        .typeText(Selector('.form-group').nth(79).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]'), 'first')
        .selectText(Selector('.form-group').nth(88).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]'), 1, 0)
        .typeText(Selector('.form-group').nth(88).find('.form-control.svd_editor_control[data-bind^=\"value: koValue, disable: readOnly, attr: {placehol\"]'), 'last', {
            caretPos: 0
        })
        .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]')
        .expect(Selector('.item_editable.item_draggable').find('[data-bind="text: text"]').textContent).eql("first")
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('[data-rating-value="last"][data-rating-text="last"]').nth(1))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('td').withText('last').textContent).eql('last')
        .expect(Selector('.svd-dark-border-color[data-bind="text: getString(displayValue)"]').textContent).eql('last')
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('fontawesome').nth(0))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('.br-widget').nth(1).find('[data-rating-value="last"][data-rating-text="last"]'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('td').withText('last').textContent).eql("last")
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('bars').nth(0))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('.br-widget').nth(1).find('[data-rating-value="3"][data-rating-text="3"]'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("3")
        .click('.panel.card.svd_content.svd-dark-bg-color')
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('bars').nth(1))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('#sq_115').find('[data-rating-value="4"][data-rating-text="4"]'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .doubleClick(Selector('span.nav-link').withText('JSON Editor'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click('#sq_118')
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('bars').nth(2))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('#sq_123').find('[data-rating-value="3"][data-rating-text="3"]'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("3")
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('#sq_125').find('[data-rating-value="3"][data-rating-text="3"]'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("3")
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('bars').nth(3))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('.br-widget').nth(1).find('[data-rating-value="first"][data-rating-text="first"]'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("first")
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click(Selector('div').withText('fontawesome').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('fontawesome').nth(1))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('[data-rating-value="last"][data-rating-text="last"]').nth(1))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('td').withText('last').textContent).eql("last")
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .expect(Selector('#surveyjsJSONEditor').find('.ace_content').textContent).contains('fontawesome-stars-o');
});

test('Check date picker in creator', async t => {
    await t
        .maximizeWindow();
});

test.skip('Check nouislider in creator', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.svd_toolbox').find('div').withText('noUiSlider'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .wait(1000)
        .click(Selector('#sq_106').find('.noUi-connect'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("25.00");
});

test.skip('Check tagbox in creator', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.svd_toolbox').find('div').withText('Tag box'))
        .click(Selector('a').withText('Items').find('[data-bind="text: koText"]'))
        .selectText(Selector('.form-group').nth(4).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'), 6, 0)
        .typeText(Selector('.form-group').nth(4).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'), '1', {
            caretPos: 0
        })
        .click(Selector('.form-group').nth(5).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'))
        .typeText(Selector('.form-group').nth(5).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'), 'First')
        .click(Selector('.modal-footer').find('.btn.btn-primary[data-bind^="visible: $data.koShowApplyButton, disable: readOnl"]'))
        .click(Selector('.modal-footer').find('.btn.btn-default.btn-secondary[data-bind^="click: $data.onOkClick, disable: readOnly, value: "]'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .click(Selector('#sq_107').find('.select2-selection__rendered'))
        .click(Selector('li').withText('First'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('td').withText('First').textContent).eql("First")
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("[\"1\"]");
});

test.skip('Check sortable list in creator', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.svd_toolbox').find('div').withText('Sortable list'))
        .click(Selector('a').withText('Items').find('[data-bind="text: koText"]'))
        .pressKey('left')
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .click(Selector('.form-group').nth(5).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'))
        .typeText(Selector('.form-group').nth(5).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'), 'first')
        .click(Selector('.modal-footer').find('.btn.btn-primary[data-bind^="visible: $data.koShowApplyButton, disable: readOnl"]'))
        .click(Selector('.modal-footer').find('.btn.btn-default.btn-secondary[data-bind^="click: $data.onOkClick, disable: readOnly, value: "]'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .drag(Selector('[data-value="1"]').nth(1).find('div').withText('first'), 3, -56, {
            offsetX: 102,
            offsetY: 19
        })
        .wait(1000)
        .click('[data-bind="css: css.body"].sv_body')
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('.survey-result-value[data-bind="text: getString(value)"]').textContent).eql("[\"1\"]")
        .expect(Selector('td').withText('first').textContent).eql("first");
});

test.skip('Check custrom editor as widget in creator ', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Editor'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .switchToIframe(Selector('.cke_wysiwyg_frame.cke_reset').nth(1))
        .typeText(Selector('body').find('p'), 'hello')
        .switchToMainWindow()
        .click('.sv_complete_btn')
        .expect(Selector('div').withText('<p><br /> hello</p>').nth(8).exists).eql(true);
});

test('Check microphone in creator', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Microphone'))
        .click(Selector('span.nav-link').withText('Test Survey'))
        .expect(Selector('button[title=\"Record\"]').exists).eql(true)
        .expect(Selector('audio').exists).eql(true);
});

test('Check bootstrap datepicker', async t => {});
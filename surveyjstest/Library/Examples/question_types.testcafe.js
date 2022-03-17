import { Selector } from 'testcafe';
import { getSideBarGroupItem, getSideBarItem } from '../../helpers';

fixture `question_types`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library`;

test('text', async t => {
    await t
        .maximizeWindow()
        .click(getSideBarGroupItem('Simple Questions'))
        .click(getSideBarItem('Text'))
        .typeText('#sq_100i', 'Test', {
            caretPos: 0
        })
        .typeText('#sq_101i', '01012001')
        .typeText('#sq_103i', 'test@test.org')
        .click('.sd-navigation__complete-btn')
        .expect(Selector('#content-result-json-code').innerText).ok();
});

// TODO CORS PROBLEMS NEED THE INVESTIGATION
// test('imagepicker', async t => {
//     await t
//         .maximizeWindow()
//         .click(getSideBarGroupItem('Simple Questions'))
//         .click(getSideBarItem('Image picker'))
//         .click('input[value="giraffe"]+div')
//         .click('.sv-btn.sv-footer__complete-btn')
//         .expect(Selector('#content-result-json-code').textContent).ok();
// });

// test('image', async t => {
//     await t
//         .maximizeWindow()
//         .click(getSideBarGroupItem('Simple Questions'))
//         .click(Selector('#item-questions div').withExactText('Image'))
//         .expect(Selector('.sv_image_image').getAttribute('src')).ok('Image added and has default image');
// });


test('signaturepad', async t => {
    await t
        .maximizeWindow()
        .click(getSideBarGroupItem('Simple Questions'))
        .click(getSideBarItem('Signature pad'))
        .expect(Selector('.sd-signaturepad').find('div').find('canvas').visible).ok()
        //.expect(Selector('[title="Clear"]').visible).ok()
        .click(Selector('.form-element').find('.form-element__input.form-element--inverse'))
        .pressKey('ctrl+a')
        .typeText(Selector('.form-element').find('.form-element__input.form-element--inverse'), '600', {
            caretPos: 0
        })
        .click(Selector('div').withText('Height: (default is empty)').nth(7).find('.form-element__input.form-element--inverse'))
        .pressKey('ctrl+a')
        .typeText(Selector('div').withText('Height: (default is empty)').nth(7).find('.form-element__input.form-element--inverse'), '700', {
            caretPos: 0
        })
        .expect(Selector('.sd-signaturepad').find('div').find('canvas').scrollWidth).ok()
        .expect(Selector('.sd-signaturepad').find('div').find('canvas').clientHeight).ok();
});
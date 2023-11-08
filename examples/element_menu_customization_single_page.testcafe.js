import { Selector } from 'testcafe';

fixture `element_menu_customization_single_page`
    .page `https://surveyjstest.azurewebsites.net//Examples/Builder?id=elementmenu&theme=default`;

test.skip('Check complex example', async t => {
    await t
        .maximizeWindow()
        .click(Selector('#toolboxCustomization').nth(1).find('span').withText('Toolbox Customization'))
        .click('#comment')
        .click('.modal__button.modal__button--default[data-dismiss="modal"]')
        .expect(Selector('[class^="col-lg-2 col-md-2 col-sm-1 col-xs-1 svd_toolbox sv"]').find('div').withText('Comment').exists).eql(false)
        .click(Selector('span').withText('Boolean'))
        .click(Selector('.svd-primary-icon.icon-actionaddtosharedrepo[data-bind="css: $parent.getStyle($data)"]').find('.svd-svg-icon'))
        .click(Selector('#toolboxCustomization').nth(1).find('span').withText('Toolbox Customization'))
        .expect(Selector('div').withText('Custom Elements').nth(16).find('.panel__body').exists).eql(true)
        .expect(Selector('#toobaritem_question1').find('label').withText('question1').textContent).eql("question1")
        .click('#question1')
        .click('.modal__button.modal__button--default[data-dismiss="modal"]')
        .expect(Selector('.svd_toolbox').find('div').withText('question1').innerText).eql(" question1")
        .click(Selector('div').withText('question1').nth(27).find('.svd_toolbox_item_text.hidden-sm.hidden-xs[data-bind="text:title"]'))
        .expect(Selector('[class^="col-lg-2 col-md-2 col-sm-1 col-xs-1 svd_toolbox sv"]').find('div').withText('question1').textContent).contains('question1')
        .click(Selector('#toolboxCustomization').nth(1).find('span').withText('Toolbox Customization'))
        .click(Selector('button').withText('Remove'))
        .click('.modal__button.modal__button--default[data-dismiss="modal"]')
        .expect(Selector('[class^="col-lg-2 col-md-2 col-sm-1 col-xs-1 svd_toolbox sv"]').find('div').withText('question1').exists).eql(false);
});
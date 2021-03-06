import { Selector } from 'testcafe';

fixture `Mobile Menu`
    .page `https://surveyjstest.azurewebsites.net`;

test('Index', async t => {
    await t
        .resizeWindow(850, 800)
        .click(Selector('span').withText('I understand'))
        .click('.mobile-menu__button')
        .click(Selector('.mobile-menu__product-title').withText('LIBRARY').nextSibling(0).find('a').withText('Overview'))
        .click('.mobile-menu__button')
        .click('.mobile-menu__button.mobile-menu__button--opened');
});
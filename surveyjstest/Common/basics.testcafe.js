import { Selector, ClientFunction } from 'testcafe';

fixture `Basics`
    .page `http://surveyjstest.azurewebsites.net`;

test('Menu Examples test', async t => {
    await t
        .maximizeWindow();

    const expandMenu = ClientFunction(() => {
        window.i = 2;
        $('div.products-menu__item-library.popup-menu.popup-menu--collapsed').addClass('popup-menu--expanded').removeClass('popup-menu--collapsed');
        return 'dummy';
    });

    await t
        .expect(expandMenu()).eql('dummy')
        .click(Selector('[class^="products-menu__item-library popup-menu popup-menu-"]').find('a').withText('Examples'))
        .expect(Selector('[class^="product-menu__item-text product-menu__item-text--a"]').textContent).eql("Examples");
});

test('Logo Test', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('h3').withText('Survey Creator').innerText).eql('Survey Creator');
});
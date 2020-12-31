import { Selector } from 'testcafe';

fixture `docs`
    .page `https://surveyjstest.azurewebsites.net/Documentation/Library`;

test('Article', async t => {
    await t
        .resizeWindow(850, 800)
        .click(Selector('span').withText('I understand'))
        .click(Selector('span').withText('Add Survey into your Web Page').nth(1))
        .hover(Selector('span').withText('Add Survey into your Web Page'));
});

test('API', async t => {
    await t
        .resizeWindow(850, 800)
        .click(Selector('span').withText('I understand'))
        .click(Selector('div').withText('Radiogroup').nth(2))
        .click(Selector('span').withText('colCount'))
        .hover(Selector('p').withText('The number of columns for radiogroup and checkbox'));
});
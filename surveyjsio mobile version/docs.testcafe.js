import { Selector , fixture, test } from 'testcafe';
import { getIUnderstandButton } from './helpers';

fixture `docs`
    .page `https://surveyjsio-test.azurewebsites.net/Documentation/Library`;

test('Article', async t => {
    await t
        .resizeWindow(850, 800)
        .click(getIUnderstandButton())
        .click(Selector('span').withText('Add Survey into your Web Page').nth(1))
        .hover(Selector('span').withText('Add Survey into your Web Page'));
});

test('API', async t => {
    await t
        .resizeWindow(850, 800)
        .click(getIUnderstandButton())
        .click(Selector('div').withText('Radiogroup').nth(2))
        .click(Selector('span').withText('colCount'))
        .hover(Selector('p').withText('The number of columns for radiogroup and checkbox'));
});
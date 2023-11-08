import { Selector , fixture, test } from 'testcafe';
import { getIUnderstandButton } from './helpers';

fixture `Index Page`
    .page `https://surveyjsio-stage.azurewebsites.net/`;

test('Index', async t => {
    await t
        .resizeWindow(850, 800)
        .click(getIUnderstandButton())
        .click(Selector('span').withText('LIBRARY'))
        .navigateTo('https://surveyjsio-stage.azurewebsites.net/')
        .click(Selector('span').withText('CREATOR'))
        .navigateTo('https://surveyjsio-stage.azurewebsites.net/')
        .click(Selector('span').withText('SERVICE'))
        .navigateTo('https://surveyjsio-stage.azurewebsites.net/')
        .click(Selector('span').withText('PDF EXPORT'))
        .navigateTo('https://surveyjsio-stage.azurewebsites.net/')
        .click(Selector('span').withText('ANALYTICS PACK'));
});
import { Selector } from 'testcafe';
import { getIUnderstandButton } from './helpers';

fixture `examples`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library`;

test('Index', async t => {
    await t
        .resizeWindow(850, 800)
        .click(getIUnderstandButton())
        .click(Selector('li').withText('Simple Questions'))
        .click(Selector('div').withText('Radio group').nth(4))
        .click(Selector('span').withText('Mercedes-Benz'))
        .click('.sd-navigation__complete-btn')
        .hover(Selector('h3').withText('Thank you for completing the survey!'));
});
import { Selector } from 'testcafe';

fixture `question_types`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library`;

test('text', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Edit in...'))
        .click(Selector('li').withText('CodeSandbox (Reactjs)'));
});
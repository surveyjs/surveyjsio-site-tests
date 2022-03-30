import { Selector } from 'testcafe';
import { explicitErrorHandler } from '../../helpers';

fixture `question_types`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library`.clientScripts({
        content: `(${explicitErrorHandler.toString()})()`
    });

test('text', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Edit in...'))
        .click(Selector('li').withText('CodeSandbox (Reactjs)'));
});
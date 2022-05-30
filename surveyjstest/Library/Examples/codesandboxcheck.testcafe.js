import { Selector } from 'testcafe';
import { explicitErrorHandler } from '../../helpers';

fixture`question_types`
    .page`https://surveyjstest.azurewebsites.net/Examples/Library`.clientScripts({
        content: `(${explicitErrorHandler.toString()})()`
    });

test('text', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.edit-in__buttons button').withText('Edit in CodeSandbox'));
});
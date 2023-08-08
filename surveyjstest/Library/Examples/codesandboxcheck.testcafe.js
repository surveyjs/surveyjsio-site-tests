import { Selector } from 'testcafe';
import { explicitErrorHandler } from '../../helpers';

fixture`question_types`
    .page`https://surveyjstest.azurewebsites.net/Examples/Library`.clientScripts({
        content: `(${explicitErrorHandler.toString()})()`
    });

test('text', async t => {
    await t
        .maximizeWindow()
        .hover(Selector('.v2-class---header-toolbar-item-dropdown').withText('Edit In Codesandbox'))
        .click(Selector('.v2-class---header-toolbar-item-dropdown').withText('Edit In Codesandbox').find("li").withText("React"));
});
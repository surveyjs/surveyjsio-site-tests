import { Selector } from 'testcafe';
import { explicitErrorHandler } from '../../helpers';

fixture`question_types`
    .page`https://surveyjstest.azurewebsites.net/form-library/examples/text-entry-question/reactjs`.clientScripts({
        content: `(${explicitErrorHandler.toString()})()`
    });

test.only('codesandbox', async t => {
    await t
        .maximizeWindow()
        .hover(Selector('.v2-class---header-toolbar-item-dropdown').withText('CodeSandbox'))
        .click(Selector('.v2-class---header-toolbar-item-dropdown').withText('CodeSandbox').find("li").withText("React"));
});
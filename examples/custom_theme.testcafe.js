import { Selector } from 'testcafe';

fixture `custom_theme`
    .page `https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=editor-custom-theme&theme=default`;

test.skip('Survey Creator default theme customization', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('button').withText('Survey Settings').getStyleProperty('background-color')).eql("rgb(127, 240, 127)")
        .expect(Selector('span.nav-link').withText('Survey Designer').getStyleProperty('color')).eql("rgb(127, 240, 127)")
        .expect(Selector('button').withText('Redo').getStyleProperty('background-color')).eql("rgb(127, 240, 127)");
});
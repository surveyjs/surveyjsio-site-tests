import { Selector } from 'testcafe';

fixture `toolbox_customization`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=toolboxcustomization&platform=Knockoutjs&theme=default`;

test('Check tabs', async t => {
    await t
        .maximizeWindow()
        .switchToMainWindow()
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('[name="content-js"][class^="tabs__tab-panel example-tab fade codesnippet tabs_"]').find('pre').withText('const options').exists).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').exists).eql(true)
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('[name="content-docs"][class^="tabs__tab-panel example-tab tabs__tab-panel--activ"]').exists).eql(true)
        .click(Selector('a').withText('Result'))
        .expect(Selector('span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('#creatorElement span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor");
});
import { Selector } from 'testcafe';

fixture `modify_new_question`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=oncreatequestion&platform=Knockoutjs&theme=default`;

test('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('#creatorElement span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText('Add a tag property').exists).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').exists).eql(true)
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('[name="content-docs"][class^="tabs__tab-panel example-tab tabs__tab-panel--activ"]').exists).eql(true)
        .click(Selector('span').withText('I understand'));
});
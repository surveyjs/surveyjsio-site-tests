import { Selector } from 'testcafe';

fixture `depends_on_properties`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=dependsonproperties&theme=default`;

test('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('#creatorElement span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('#creatorElement span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor")
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText('This property is depends on date format property o').exists).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').exists).eql(true);
});
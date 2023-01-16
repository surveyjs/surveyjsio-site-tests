import { Selector } from 'testcafe';
import { getExampleTabSelector } from '../../helpers';

fixture `depends_on_properties`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=dependsonproperties&platform=Knockoutjs&theme=default`;

test('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('  span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor")
        .click(getExampleTabSelector('Code'))
        .expect(Selector('pre').withText('Populate countries depending on the selected region').exists).eql(true)
        .click(Selector('span').withText('index.html'))
        .expect(Selector('pre').withText('id="surveyCreatorContainer"').exists).eql(true);
});
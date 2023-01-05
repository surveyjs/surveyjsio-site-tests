import { Selector } from 'testcafe';
import { getExampleTabSelector } from '../../helpers';

fixture`toolbox_customization`
    .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=toolboxcustomization&platform=Knockoutjs&theme=default`;

test('Check tabs', async t => {
    await t
        .maximizeWindow()
        .switchToMainWindow()
        .click(getExampleTabSelector('Code'))
        .expect(Selector('pre').withText('const creator = new SurveyCreator("surveyCreatorContainer", options);').exists).eql(true)
        .click(Selector('span').withText('index.html'))
        .expect(Selector('pre').withText('id="surveyCreatorContainer"').exists).eql(true)
        .click(getExampleTabSelector('Documentation'))
        .expect(getExampleTabSelector('Documentation').classNames).contains('tabs__tab--active')
        .click(getExampleTabSelector('Result'))
        .expect(Selector('span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor");
});
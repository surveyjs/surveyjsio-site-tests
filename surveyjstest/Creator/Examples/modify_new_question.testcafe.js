import { Selector } from 'testcafe';
import { getIUnderstandButton, getExampleTabSelector } from '../../helpers';

fixture`modify_new_question`
    .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=oncreatequestion&platform=Knockoutjs&theme=default`
;

test('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .click(getExampleTabSelector('Code'))
        .expect(Selector('pre').withText('Add a tag property').exists).eql(true)
        .click(Selector('span').withText('index.html'))
        .wait(2000)
        .expect(Selector('pre').withText('surveyCreatorContainer').exists).eql(true)
        .click(getExampleTabSelector('Documentation'));
        //.expect(getExampleTabSelector('Documentation').filterVisible().classNames).contains('tabs__tab--active');
});
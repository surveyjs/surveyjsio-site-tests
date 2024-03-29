import { Selector, fixture, test } from 'testcafe';
import { acceptCookie, getExampleTabSelector } from '../helpers';

fixture`modify_new_question`
  .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=oncreatequestion&platform=Knockoutjs&theme=default`.beforeEach(async t => {
  await acceptCookie(t);
});

test('Check default tabs', async t => {
  await t
    .maximizeWindow()
    .expect(Selector('span.nav-link').withText('Test Survey').visible).ok()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('code').textContent).contains('Add a tag property', { timeout: 5000 })
    .click(Selector('span').withText('index.html'))
    .wait(2000)
    .expect(Selector('code').textContent).contains('surveyCreatorContainer')
    .click(getExampleTabSelector('Documentation'));
  //.expect(getExampleTabSelector('Documentation').filterVisible().classNames).contains('tabs__tab--active');
});
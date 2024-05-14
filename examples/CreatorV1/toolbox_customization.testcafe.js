import { Selector, fixture, test } from 'testcafe';
import { acceptCookie, getExampleTabSelector } from '../helpers';

fixture`toolbox_customization`
  .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=toolboxcustomization&platform=Knockoutjs&theme=default`.beforeEach(async t => {
  await acceptCookie(t);
});

test('Check tabs', async t => {
  await t
    .maximizeWindow()
    .switchToMainWindow()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('code').textContent).contains('const creator = new SurveyCreator.SurveyCreator("surveyCreatorContainer", options);')
    .click(Selector('span').withText('index.html'))
    .expect(Selector('code').textContent).contains('id="surveyCreatorContainer"')
    .expect(getExampleTabSelector('Code').classNames).contains('v2-class---footer-toolbar-item--active')
    .click(getExampleTabSelector('Result'))
    .expect(Selector('span.nav-link').withText('Survey Designer').visible).ok()
    .expect(Selector('span.nav-link').withText('Test Survey').visible).ok()
    .expect(Selector('span.nav-link').withText('JSON Editor').visible).ok();
});
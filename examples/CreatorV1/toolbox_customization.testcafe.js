import { Selector, fixture, test } from 'testcafe';
import { acceptCookie, getExampleTabSelector } from '../helpers';

fixture`toolbox_customization`
  .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=toolboxcustomization&platform=Knockoutjs&theme=default`.beforeEach(async t => {
  await acceptCookie(t);
});

test('Check tabs 2', async t => {
  await t
    .maximizeWindow()
    .switchToMainWindow()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('code').textContent).contains('const creator = new SurveyCreator({ questionTypes: [ "text", "checkbox", "radiogroup", "dropdown" ] });')
    .click(Selector('span').withText('index.html'))
    .expect(Selector('code').textContent).contains('id="surveyCreatorContainer"')
    .expect(getExampleTabSelector('Code').classNames).contains('v2-class---footer-toolbar-item--active')
    .click(getExampleTabSelector('Demo'))
    .expect(Selector('.svc-tabbed-menu-item').withText('Designer').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item').withText('Preview').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item').withText('JSON Editor').visible).ok();
});
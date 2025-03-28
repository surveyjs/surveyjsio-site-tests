import { Selector, fixture, test } from 'testcafe';
import { getExampleTabSelector, acceptCookie } from '../helpers';

fixture `depends_on_properties`
  .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=dependsonproperties&platform=Knockoutjs&theme=default`.beforeEach(async t => {
  await acceptCookie(t);
});

test('Check default tabs 1', async t => {
  await t
    .maximizeWindow()
    .expect(Selector('.svc-tabbed-menu-item').withText('Designer').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item').withText('Preview').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item').withText('JSON Editor').visible).ok()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('code').textContent).contains('Populate countries depending on the selected region')
    .click(Selector('span').withText('index.html'))
    .expect(Selector('code').textContent).contains('id="surveyCreatorContainer"');
});
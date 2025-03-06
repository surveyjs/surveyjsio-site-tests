import { Selector, fixture, test } from 'testcafe';
import { getExampleTabSelector, acceptCookie } from '../helpers';

fixture `depends_on_properties`
  .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=dependsonproperties&platform=Knockoutjs&theme=default`.beforeEach(async t => {
  await acceptCookie(t);
});

test('Check default tabs', async t => {
  await t
    .maximizeWindow()
    .expect(Selector('span.nav-link').withText('Designer').visible).ok()
    .expect(Selector('span.nav-link').withText('Preview').visible).ok()
    .expect(Selector('span.nav-link').withText('JSON Editor').visible).ok()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('code').textContent).contains('Populate countries depending on the selected region')
    .click(Selector('span').withText('index.html'))
    .expect(Selector('code').textContent).contains('id="surveyCreatorContainer"');
});
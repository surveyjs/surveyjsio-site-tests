import { Selector, fixture, test } from 'testcafe';
import { acceptCookie, getExampleTabSelector } from '../helpers';

fixture`element_menu_customization`
  .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=elementmenu&platform=Knockoutjs&theme=default`.beforeEach(async t => {
  await acceptCookie(t);
});

test('Check default tabs 2', async (t) => {
  await t
    .maximizeWindow()
    .expect(Selector('.svc-tabbed-menu-item').withText('Designer').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item').withText('Preview').visible).ok()
    .expect(Selector('.svc-tabbed-menu-item').withText('JSON Editor').visible).ok()
    .click(getExampleTabSelector('Code'))
    .expect(Selector('span').withText('SurveyCreator').visible).ok()
    .click(Selector('span').withText('index.html'))
    .expect(Selector('span').withText('<div id="surveyCreatorContainer').visible).ok()
    .click(Selector('span').withText('index.css'))
    .expect(Selector('code.language-css').visible).ok();
});

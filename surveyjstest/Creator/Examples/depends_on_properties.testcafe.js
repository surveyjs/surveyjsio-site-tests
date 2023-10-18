import { Selector } from 'testcafe';
import { getExampleTabSelector, acceptCookie } from '../../helpers';

fixture `depends_on_properties`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=dependsonproperties&platform=Knockoutjs&theme=default`.beforeEach(async t => {
        await acceptCookie(t);
    });

test('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.svc-tabbed-menu-item__text').withText('Designer').visible).ok()
        .expect(Selector('.svc-tabbed-menu-item__text').withText('Preview').visible).ok()
        .expect(Selector('.svc-tabbed-menu-item__text').withText('JSON Editor').visible).ok()
        .click(Selector(".v2-class---button__text").withText('I Understand'))
        .click(getExampleTabSelector('Code'))
        .expect(Selector('code').textContent).contains('Populate countries depending on the selected region')
        .click(Selector('span').withText('index.html'))
        .expect(Selector('code').textContent).contains('id="surveyCreatorContainer"');
});
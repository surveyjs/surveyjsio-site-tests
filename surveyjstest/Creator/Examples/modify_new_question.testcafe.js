import { Selector } from 'testcafe';
import { getIUnderstandButton, getExampleTabSelector } from '../../helpers';

fixture`modify_new_question`
    .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=oncreatequestion&platform=Knockoutjs&theme=default`
    .beforeEach(async t => {
        const cookiePopupAccept = Selector(".v2-class---cookies-popup__button-container a");
        if(await cookiePopupAccept.exists) {
            await t.click(cookiePopupAccept); // close cookie msg
        } 
    });

test.only('Check default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('#creatorElement span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .click(getExampleTabSelector('Code'))
        .expect(Selector('pre').withText('Add a tag property').exists).eql(true)
        .click(Selector('span').withText('index.html'))
        .expect(Selector('pre').withText('DOCTYPE html').exists).eql(true)
        .click(getExampleTabSelector('Documentation'))
        .expect(getExampleTabSelector('Documentation').classNames).contains('tabs__tab--active')
        .click(getIUnderstandButton());
});
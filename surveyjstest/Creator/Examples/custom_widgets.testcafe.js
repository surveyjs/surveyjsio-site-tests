import { Selector } from 'testcafe';
import { acceptCookie, getExampleTabSelector } from '../../helpers';

fixture`custom_widgets`
    .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=customwidgets&platform=reactjs`.beforeEach(async t => {
        await acceptCookie(t);
    });

test('Check custom widgets default tabs', async t => {
    await t
        .maximizeWindow()
        .click(getExampleTabSelector('Code'))
        .expect(Selector('pre').withText('const options').exists).eql(true)
        .click(Selector('span').withText('index.html'))
        .expect(Selector('code').textContent).contains('ckeditor.js')
        .click(Selector('span').withText('package.json'))
        .expect(Selector('code').textContent).contains('nouislider')
        .expect(Selector('code').textContent).contains('inputmask')
        .expect(Selector('code').textContent).contains('jquery')
        .expect(Selector('code').textContent).contains('jquery-bar-rating')
        .expect(Selector('code').textContent).contains('surveyjs-widgets')
        .click(getExampleTabSelector('Documentation'))
        .expect(getExampleTabSelector('Documentation').classNames).contains('v2-class---footer-toolbar-item--active')
        .expect(Selector('a').withText('this repo to find out more').getAttribute('href')).eql('https://github.com/surveyjs/widgets')
        .expect(Selector('a').withText('create a new issue').getAttribute('href')).eql('https://github.com/surveyjs/widgets/issues')
        .click(getExampleTabSelector('Result'));
    await t
        .expect(Selector('span.svc-tabbed-menu-item__text').withText('Designer').textContent).eql("Designer")
        .expect(Selector('span.svc-tabbed-menu-item__text').withText('Preview').textContent).eql("Preview")
        .expect(Selector('span.svc-tabbed-menu-item__text').withText('JSON Editor').textContent).eql("JSON Editor");
});
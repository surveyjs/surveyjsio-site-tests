import { Selector } from 'testcafe';
import { getExampleTabSelector } from '../../helpers';

fixture`custom_widgets`
    .page`https://surveyjstest.azurewebsites.net/Examples/Builder?id=customwidgets&platform=Knockoutjs&theme=default`;

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
        .expect(getExampleTabSelector('Documentation').classNames).contains('tabs__tab--active')
        .expect(Selector('a').withText('this repo to find out more').getAttribute('href')).eql('https://github.com/surveyjs/widgets')
        .expect(Selector('a').withText('create a new issue').getAttribute('href')).eql('https://github.com/surveyjs/widgets/issues')
        .click(getExampleTabSelector('Result'));
    await t
        .expect(Selector('span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor");
});
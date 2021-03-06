import { Selector } from 'testcafe';

fixture `custom_widgets`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=customwidgets&theme=default`;

test('Check custom widgets default tabs ', async t => {
    await t
        .maximizeWindow()
        .click(Selector('a').withText('JavaScript'))
        .expect(Selector('pre').withText('var creatorOptions').exists).eql(true)
        .click(Selector('a').withText('HTML'))
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains('Sortable.js')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('select2')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('signature_pad')
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains('nouislider')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('inputmask')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('ckeditor')
        .expect(Selector('pre').withText('DOCTYPE html').textContent).contains('jquery-bar-rating')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('bars-pill.css')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('bootstrap-datepicker')
        .expect(Selector('code').withText('DOCTYPE html').textContent).contains('surveyjs-widgets')
        .click(Selector('a').withText('Documentation'))
        .expect(Selector('[name="content-docs"][class^="tabs__tab-panel example-tab tabs__tab-panel--activ"]').exists).eql(true)
        .expect(Selector('a').withText('this repo to find out more').getAttribute('href')).eql('https://github.com/surveyjs/widgets')
        .expect(Selector('a').withText('create a new issue').getAttribute('href')).eql('https://github.com/surveyjs/widgets/issues')
        .click(Selector('a').withText('Result'));
    const iFrameSelector = Selector('[name="content-result"][class^="tabs__tab-panel example-tab tabs__tab-panel--activ"] > iframe', { timeout: 15000 });
    await t
        .switchToIframe(iFrameSelector)
        .expect(Selector('span.nav-link').withText('Survey Designer').textContent).eql("Survey Designer")
        .expect(Selector('span.nav-link').withText('Test Survey').textContent).eql("Test Survey")
        .expect(Selector('span.nav-link').withText('JSON Editor').textContent).eql("JSON Editor");
});
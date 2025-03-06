import { Selector, fixture, test } from 'testcafe';

fixture `custom_widgets_single_page`
  .page `https://surveyjstest.azurewebsites.net//Examples/BuilderSinglePage?id=customwidgets&platform=Knockoutjs&theme=default`;

test('Check date picker in creator', async t => {
  await t
    .maximizeWindow();
});

test('Check microphone in creator', async t => {
  await t
    .maximizeWindow()
    .click(Selector('span').withText('Microphone'))
    .click(Selector('span.nav-link').withText('Preview'))
    .expect(Selector('button[title=\"Record\"]').exists).eql(true)
    .expect(Selector('audio').exists).eql(true);
});

test('Check bootstrap datepicker', async t => {});
import { Selector, ClientFunction, fixture, test } from 'testcafe';

fixture`localization_single_page`
  .page`https://surveyjstest.azurewebsites.net/Examples/CreatorSinglePage?id=localization&platform=Knockoutjs&theme=default`;

test('Check tab names with deutsch', async t => {
  await t
    .maximizeWindow()
    .expect(Selector('.nav-tabs.svd-tabs ').innerText).eql('Umfrage entwerfen Umfrage testen JSON')
    .expect(Selector('.svd-tab-text').withText('Umfrage entwerfen').visible).ok()
    .expect(Selector('.svd-tab-text').withText('Umfrage testen').visible).ok()
    // .expect(Selector('.svd-tab-text').withText('Logik').visible).ok()
    .expect(Selector('.svd-tab-text').withText('JSON').visible).ok()
    .expect(Selector('.svd-empty-message').textContent).eql('Frage bitte hier platzieren.')
    .expect(Selector('.svd-toolbar-dropdown__select').filterVisible().nth(0).textContent).contains('Seite1Neue Seite hinzufügen');
});

test('Check toolbox names with deutsch', async t => {
  await t
    .maximizeWindow()
    .expect(Selector('.svd_toolbox span').withText('Auswahl').visible).ok()
    .expect(Selector('.svd_toolbox span').withText('Kommentar').visible).ok()
    .expect(Selector('.svd_toolbox span').withText('Panel (dynamisch)').visible).ok();
});

test('Check property names with deutsch', async t => {
  await t
    .maximizeWindow()

    .click(Selector('.svd-accordion-tab-header').withText('Allgemein'))
    .click(Selector('.svd-accordion-tab-header').withText('Abschluss'))
    .expect(Selector('.svd-control-label').withText('Weiterleitung (URL)').visible).ok()

    .click(Selector('.svd-accordion-tab-header').withText('Fragen'))
    .expect(Selector('.svd-control-label').withText('Fragennummern anzeigen').visible).ok();

  const options = await Selector('.svd-control-label').withText('Fragennummern anzeigen').parent('.form-group').find('.svd-toolbar-dropdown__select').innerText;
  await t.expect(options.replace(/\n/g, '_')).eql('an_an (unabhängig für jede Seite)_aus');
});


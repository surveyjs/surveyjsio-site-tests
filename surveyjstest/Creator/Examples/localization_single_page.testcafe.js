import { Selector, ClientFunction } from 'testcafe';

fixture`localization_single_page`
    .page`https://surveyjstest.azurewebsites.net/Examples/CreatorSinglePage?id=localization&platform=Knockoutjs&theme=default`;

test('Check tab names with deutsch', async t => {
    await t
        .maximizeWindow()
        .expect(Selector(".nav-tabs.svd-tabs ").innerText).eql("Mein Designer Umfrage testen Umfragelogik JSON-Editor")
        .expect(Selector('.svd-tab-text').withText('Mein Designer').visible).ok()
        .expect(Selector('.svd-tab-text').withText('Umfrage testen').visible).ok()
        .expect(Selector('.svd-tab-text').withText('Umfragelogik').visible).ok()
        .expect(Selector('.svd-tab-text').withText('JSON-Editor').visible).ok()
        .expect(Selector('.svd-empty-message').textContent).eql("Frage bitte hier platzieren.")
        .expect(Selector(".svd-toolbar-dropdown__select").filterVisible().nth(0).textContent).contains("Seite1Neue Seite hinzufügen");
});

test('Check toolbox names with deutsch', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.svd_toolbox span').withText('Auswahl').visible).ok()
        .expect(Selector('.svd_toolbox span').withText('Kommentar').visible).ok()
        .expect(Selector('.svd_toolbox span').withText('Panel (dynamisch)').visible).ok()
});

test('Check property names with deutsch', async t => {
    await t
        .maximizeWindow()

        .click(Selector(".svd-designer-tabbed-container__tab-header").withText("EIGENSCHAFTEN")) // properties
        .click(Selector(".svd-accordion-tab-header").withText("Timer"))
        .expect(Selector(".svd-control-label").withText("Modus des Timers").visible).ok()

        .click(Selector(".svd-accordion-tab-header").withText("Fragen"))
        .expect(Selector(".svd-control-label").withText("Fragennummern anzeigen").visible).ok()

        const options = await Selector(".svd-control-label").withText("Fragennummern anzeigen").parent(".form-group").find(".svd-toolbar-dropdown__select").innerText;
        await t.expect(options.replace(/\n/g, '_')).eql("an_an (unabhängig für jede Seite)_aus");
});

test('Check custom translation', async t => {
    await t
        .maximizeWindow();

    const changeCurrentLocale = ClientFunction(() => {
        //Create your translation
        var frenchStrings = {
            qt: { comment: "Commentaire" },
            pe: { isRequired: "Est obligatoire ?" },
            ed: { designer: "Éditeur de questionnaire" }
        };

        //Set the your translation to the locale
        SurveyCreator.localization.locales["fr"] = frenchStrings;
        SurveyCreator.localization.currentLocale = "fr";
        new SurveyCreator.SurveyCreator("creatorElement");
        return "dummy";
    });

    await t
        .expect(changeCurrentLocale()).eql('dummy')
        .expect(Selector('.svd-tab-text').withText('Éditeur de questionnaire').visible).ok()
        .expect(Selector('span').withText('Commentaire').visible).ok()
        .click(Selector('.svd_toolbox_item').filterVisible().nth(0))
        .expect(Selector('.svda_question_action[title="Est obligatoire ?"]').visible).ok();
});
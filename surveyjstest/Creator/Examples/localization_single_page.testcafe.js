import { Selector, ClientFunction } from 'testcafe';

fixture `localization_single_page`
    .page `https://surveyjstest.azurewebsites.net/Examples/CreatorSinglePage?id=localization&platform=Knockoutjs&theme=default`;

test.skip('Check tab names with french', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('a').withText('Éditeur de questionnaire').textContent).eql("Éditeur de questionnaire")
        .expect(Selector('a').withText('Tester le questionnaire').textContent).eql("Tester le questionnaire")
        .expect(Selector('a').withText('Éditer JSON').textContent).eql("Éditer JSON")
        .expect(Selector('.empty-message[data-bind="text: $root.getLocString(\\\'survey.dropQuestion\\\')"]').textContent).eql("Déposer votre question ici.")
        .expect(Selector('[data-bind^="options: pagesSelection, value: pageSelection, opt"]').textContent).eql("page1Ajouter une page");
});

test('Check toolbox names with french', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('span').withText('Cases à cocher').textContent).eql("Cases à cocher")
        .expect(Selector('span').withText('Liste déroulante').textContent).eql("Liste déroulante")
        .expect(Selector('span').withText('Panneau (panneaux dynamiques)').textContent).eql("Panneau (panneaux dynamiques)");
});

test.skip('Check property names with french', async t => {
    await t
        .maximizeWindow()
        .rightClick('[data-bind^="text: displayName, attr: {title: title || displayN"][title="Mode d\'affichage du panneau chronomètre"]')
        .expect(Selector('[data-bind^="text: displayName, attr: {title: title || displayN"][title="Mode d\\\'affichage du panneau chronomètre"]').innerText).eql("Mode d'affichage du panneau chronomètre")
        .expect(Selector('span').withText('Numérotation des questions').innerText).eql("Numérotation des questions")
        .expect(Selector('div').withText('activé').nth(12).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').textContent).eql("activépagedésactivé");
});

test.skip('Check custom translation', async t => {
    await t
        .maximizeWindow();

    const changeCurrentLocale = ClientFunction(() => {
            //Create your translation
        var deutschStrings = {
            qt: {
            comment: "Kommentar"
            },
            p: {
                isRequired: "Wird bentigt"
            },
            ed:{
                designer: "Umfrage Designer"
            }
        };

    //Set the your translation to the locale
        SurveyCreator
            .localization
            .locales["de"] = deutschStrings;
        SurveyCreator.localization.currentLocale = "de";
        new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
        return "dummy";
    });

    await t
        .expect(changeCurrentLocale()).eql('dummy')
        .expect(Selector('a').withText('Umfrage Designer').innerText).eql("Umfrage Designer")
        .expect(Selector('span').withText('Kommentar').innerText).eql("Kommentar")
        .click(Selector('.svd-svg-icon').nth(1).find('use'))
        .expect(Selector('td').withText('Wird bentigt').innerText).eql("Wird bentigt");
});
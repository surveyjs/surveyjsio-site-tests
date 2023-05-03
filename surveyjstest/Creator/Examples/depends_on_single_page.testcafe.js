import { Selector } from 'testcafe';

fixture `depends_on_single_page`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=dependsonproperties&theme=default`;

test.skip('Check survey properties', async t => {
    await t
        .maximizeWindow()
        .click(Selector('#svd-survey-settings').find('span').withText('Survey Settings'))
        .wait(1000)
        .click(Selector('#editor_tab_id_general').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').nth(3))
        .click(Selector('#editor_tab_id_general').find('option').withText('Asia'))
        .expect(Selector('div').withText('Afghanistan').nth(22).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').textContent).eql("AfghanistanArmeniaAzerbaijanBahrainBangladeshBhutanBrunei DarussalamCambodiaChinaGeorgiaHong KongIndiaIndonesiaIran (Islamic Republic of)IraqIsraelJapanJordanKazakhstanKuwaitKyrgyzstanLao People's Democratic RepublicLebanonMacaoMalaysiaMaldivesMongoliaMyanmarNepalKorea (Democratic People's Republic of)OmanPakistanPalestine, State ofPhilippinesQatarSaudi ArabiaSingaporeKorea (Republic of)Sri LankaSyrian Arab RepublicTaiwanTajikistanThailandTimor-LesteTurkeyTurkmenistanUnited Arab EmiratesUzbekistanViet NamYemen")
        .click(Selector('div').withText('Afghanistan').nth(22).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('#editor_tab_id_general').find('option').withText('Armenia'))
        .click('.btn.btn-primary[data-bind^="visible: koShowApplyButton, disable: readOnly, cli"]')
        .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]')
        .expect(Selector('div').withText('Africa').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').value).eql("Asia")
        .click(Selector('button').withText('Survey Settings'))
        .click(Selector('div').withText('Africa').nth(22).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('#editor_tab_id_general').find('option').withText('Europe'))
        .click(Selector('div').withText('Åland Islands').nth(14).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('Russian Federation'))
        .expect(Selector('div').withText('Åland Islands').nth(14).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').textContent).eql("Åland IslandsAlbaniaAndorraAustriaBelarusBelgiumBosnia and HerzegovinaBulgariaCroatiaCyprusCzech RepublicDenmarkEstoniaFaroe IslandsFinlandFranceGermanyGibraltarGreeceGuernseyHoly SeeHungaryIcelandIrelandIsle of ManItalyJerseyLatviaLiechtensteinLithuaniaLuxembourgMacedonia (the former Yugoslav Republic of)MaltaMoldova (Republic of)MonacoMontenegroNetherlandsNorwayPolandPortugalRepublic of KosovoRomaniaRussian FederationSan MarinoSerbiaSlovakiaSloveniaSpainSvalbard and Jan MayenSwedenSwitzerlandUkraineUnited Kingdom of Great Britain and Northern Ireland")
        .click('.btn.btn-primary[data-bind^="visible: koShowApplyButton, disable: readOnly, cli"]')
        .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]');
});

test.skip('Check question properties', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('Checkbox'))
        .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
        .click(Selector('#surveyquestioneditorwindow').find('div').withText('Depends On').nth(4))
        .click(Selector('#editor_tab_id_dependsOn').find('div').find('div').find('div').find('div').nth(1).find('select'))
        .click(Selector('#editor_tab_id_dependsOn').find('option').withText('Developement').nth(0))
        .expect(Selector('div').withText('Developement 1').nth(14).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').textContent).eql("Developement 1Developement 2Developement 3")
        .click(Selector('div').withText('Developement 1').nth(14).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('Developement 2'))
        .click('.btn.btn-primary[data-bind^="visible: koShowApplyButton, disable: readOnly, cli"]')
        .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]')
        .expect(Selector('div').withText('Account').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').value).eql("Developement")
        .expect(Selector('div').withText('Developement 1').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').value).eql("Developement 2")
        .click(Selector('div').withText('Account').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('#creatorElement').find('option').withText('Account').nth(0))
        .expect(Selector('div').withText('Account 1').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').textContent).eql("Account 1Account 2Account 3")
        .click(Selector('div').withText('Account 1').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('Account 2'))
        .click(Selector('.svda_question_action.svd-main-color[data-bind^="key2click, clickNoFocus: function() { onClick($par"][title="Edit"]').find('span').withText('Edit'))
        .click(Selector('.modal-body.svd_notopbottompaddings').nth(13).find('div').withText('Depends On').nth(1))
        .expect(Selector('div').withText('Account 1').nth(22).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').value).eql("Account 2")
        .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]');
});

test.skip('Check single input properties', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.svd_toolbox').find('div').withText('Single-Line Input'))
        .click(Selector('.svd-svg-icon').nth(34).find('use'))
        .click(Selector('#editor_tab_id_general').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('#editor_tab_id_general').find('option').withText('datetime').nth(0))
        .typeText(Selector('div').withText('Date Format').nth(13).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'), 'mm/dd/yy')
        .click(Selector('div').withText('Date Format').nth(13).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'))
        .expect(Selector('div').withText('Date Format').nth(13).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').value).eql('mm/dd/yy')
        .click(Selector('#editor_tab_id_general').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('#editor_tab_id_general').find('option').withText('color'))
        .expect(Selector('div').withText('dateFormat').nth(13).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').exists).eql(false)
        .click('.btn.btn-default.btn-secondary[data-bind^="click: onOkClick, disable: readOnly, value: $root."]')
        .click(Selector('div').withText('color').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('option').withText('date').nth(0))
        .expect(Selector('[data-bind="event: { keydown: $data.editor.keyDownHandler }"]').nth(1).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').exists).eql(true);
});
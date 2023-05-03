import { Selector, ClientFunction } from 'testcafe';

fixture `editor_options_singlepage`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=options&platform=Knockoutjs&theme=default`;

test('Check editor works after JSON Editor tab hidden', async t => {
    const toolboxSingleInput = Selector('span.svd_toolbox_item_text').withText('Single-Line Input');

    await t
        .maximizeWindow()
        .expect(Selector('span.sv-string-viewer').withText("question1").exists).eql(false)
        .click(Selector('input[value="showTestSurveyTab"]'))
        .expect(Selector('span.nav-link').withText('JSON Editor').exists).eql(false)
        .expect(Selector('span.nav-link').withText('Test Survey').exists).eql(false)
        .expect(toolboxSingleInput.exists).eql(true)
        .click(toolboxSingleInput)
        .expect(Selector('span.sv-string-viewer').withText("question1").exists).eql(true);
});

test('Show Embed Survey tab', async t => {
    await t
        .click(Selector('input[value="showEmbeddedSurveyTab"]'))
        .expect(Selector('span.nav-link').withText('Embed Survey').exists).eql(true);
});

test('Show Translation tab', async t => {
    await t
        .click(Selector('input[value="showTranslationTab"]'))
        .expect(Selector('span.nav-link').withText('Translation').exists).eql(true);
});

test('Hide/Show JSON Editor tab', async t => {
    await t
        .expect(Selector('span.nav-link').withText('JSON Editor').exists).eql(false)
        .click(Selector('input[value="showJSONEditorTab"]'))
        .expect(Selector('span.nav-link').withText('JSON Editor').exists).eql(true)
        .click(Selector('input[value="showJSONEditorTab"]'))
        .expect(Selector('span.nav-link').withText('JSON Editor').exists).eql(false);
});

test('Set generate JSON valid option false', async t => {
    await t
        .click(Selector('input[value="showJSONEditorTab"]'))
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .expect(Selector('textarea').innerText).notContains('\"pages\"');
});

test('Hide Test Survey tab', async t => {
    await t
        .expect(Selector('span.nav-link').withText('Test Survey').exists).eql(true)
        .click(Selector('input[value="showTestSurveyTab"]'))
        .expect(Selector('span.nav-link').withText('Test Survey').exists).eql(false);
});

test('Change designer height', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            designerHeight: '300px'
        };
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('.svd-survey-placeholder').clientHeight).eql(500);
});
import { Selector, ClientFunction } from 'testcafe';

fixture `editor_options_singlepage`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=options&theme=default`;

test('Check editor works after JSON Editor tab hidden', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showJSONEditorTab: false
        };
        window.creator = new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Single Input'));

    const questions_count = ClientFunction(() => {
        return creator.survey.getAllQuestions().length;
    });

    await t
        .expect(questions_count()).eql(1);
});

test('Show Embed Survey tab', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showEmbededSurveyTab: true
        };
        new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('span.nav-link').withText('Embed Survey').exists).eql(true);
});

test('Show Translation tab', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showTranslationTab: true
        };
        new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('span.nav-link').withText('Translation').exists).eql(true);
});

test('Hide JSON Editor tab', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showJSONEditorTab : false
        };
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('span.nav-link').withText('JSON Editor').exists).eql(false);
});

test('Use JSON Valid menu options', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showOptions: true
        };
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy');
});

test('Set generate JSON valid option false', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            generateValidJSON: false
        };
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .expect(Selector('.ace_content').innerText).notContains('\"pages\"');
});

test('Limit question types in toolbox', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showTestSurveyTab: false
        };
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('a').withText('Test Survey').exists).eql(false);
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

test('Hide Test Survey tab', async t => {
    const dummy = ClientFunction(() => {
        var creatorOptions = {
            showJSONEditorTab : false
        };
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('a').withText('JSON Editor').exists).eql(false);
});
import { Selector, ClientFunction } from 'testcafe';

fixture `remove_properties`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=options&theme=default`;

test.skip('Remove property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey.Serializer.removeProperty('question', 'description');
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('.svd_toolbox').find('div').withText('Single-Line Input'))
        .expect(Selector('#creatorElement').find('[data-bind^="text: displayName, attr: {title: title || displayN"][title="Description"]').exists).eql(false)
        .click(Selector('a').withText('JSON Editor'))
        .click(Selector('#surveyjsJSONEditor').find('.ace_content'), {
            offsetX: 173,
            offsetY: 98
        })
        .typeText(Selector('#surveyjsJSONEditor').find('.ace_text-input'), `,
        description: \'desc\'`, {
            caretPos: 1
        })
        .expect(Selector('div').withAttribute('class', /ace_gutter\-cell\s+ace_error/).classNames).contains('ace_error');
});

test.skip('Hide property in designer', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey.Serializer.findProperty('question', 'description').visible = false;
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('.svd_toolbox').find('div').withText('Single-Line Input'))
        .expect(Selector('[data-bind^="text: displayName, attr: {title: title || displayN"][title="Description"]').exists).eql(false)
        .click(Selector('a').withText('JSON Editor'))
        .pressKey('backspace')
        .typeText(Selector('#surveyjsJSONEditor').find('.ace_text-input'), '{  "pages": [   {    "name": "page1",    "elements": [     {      "type": "text",      "name": "question1",      "description": "desc"     }    ]   }  ] }', {
            caretPos: 1
        })
        .expect(Selector('div').withAttribute('class', /ace_gutter\-cell\s+ace_error/).exists).eql(false)
        .click(Selector('a').withText('Test Survey'))
        .expect(Selector('span').withText('desc').nth(1).textContent).eql('desc');
});
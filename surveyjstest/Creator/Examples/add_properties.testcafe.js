import { Selector, ClientFunction } from 'testcafe';

fixture `add_properties`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=addproperties&platform=Knockoutjs&theme=default`;

test.skip('Survey property with default string type', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo' } );
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .expect(Selector('label').withText('Foo').exists).eql(true)
        .expect(Selector('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').nth(2).exists).eql(true);
});

test('Required property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('checkbox', { name: '!foo' } );
        creator.JSON = "";
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('.svd_toolbox').find('div').withText('Checkbox'))
        .click(Selector('span.nav-link').withText('JSON Editor'))
        //.expect(Selector('.svd-json-editor-area').exists).eql(true); // if ACE not loaded
        .expect(Selector('div').withAttribute('class', /ace_gutter\-cell\s+ace_error/).exists).eql(true); // if ACE loaded

});

test.skip('Set property via JSON', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('checkbox', { name: '!foo' } );
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('.svd_toolbox').find('div').withText('Checkbox'))
        .click(Selector('span.nav-link').withText('JSON Editor'))
        .typeText('.ace_text-input', '{  "pages": [   {    "name": "page1",    "elements": [     {      "type": "checkbox",      "name": "question1",      "choices": [       "item1",       "item2",       "item3"      ],      "foo":"bar"     }    ]   }  ] }')
        .click(Selector('span.nav-link').withText('Survey Designer'))
        .click('.sv_row')
        .click(Selector('span').withText('Others'))
        .expect(Selector('label').withText('Foo').exists).eql(true)
        .expect(Selector('#editor_tab_id_others').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').value).eql("bar");
});

test('Property with default value', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo', default: 'bar' } );
        creator.JSON = {};
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .expect(Selector('input[placeholder=\"bar\"]').value).eql('bar');
});

test('Check boolean property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:boolean' } );
        creator.JSON = {};
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .expect(Selector('.sjs-cb-label').withText('Foo').exists).eql(true)
        .expect(Selector('.sjs-cb-container').withText('Foo').find('input').exists).eql(true);
});

test.skip('Check number property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:number' } );
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .expect(Selector('label').withText('Foo').exists).eql(true)
        .expect(Selector('div').withText('Foo').find('input').exists).eql(true)
        .typeText(Selector('div').withText('Foo').find('input'), '7')
        .expect(Selector('div').withText('Foo').find('input').value).eql('7');
});

test('Check text property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:text' } );
        creator.JSON = {};
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .click(Selector('div').withText('Foo').find('textarea'))
        .typeText(Selector('div').withText('Foo').find('textarea'), 'Bar')
        .expect(Selector('div').withText('Foo').find('textarea').value).eql('Bar');
});

test('Check html property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:html' } );
        creator.JSON = {};
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .click(Selector('div').withText('Foo'))
        .typeText(Selector('div').withText('Foo').find('textarea'), 'Bar')
        .expect(Selector('div').withText('Foo').find('textarea').value).eql('Bar');
});

test.skip('Check choices property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {    
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo', choices: ['bar', 'egg'], default: 'bar' } );
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .expect(Selector('div').withText('Foo').find('select').value).eql('bar')
        .click(Selector('div').withText('Foo').find('select'))
        .click(Selector('option').withText('egg'))
        .expect(Selector('div').withText('Foo').find('select').value).eql('egg')
        .click('.svd-survey-placeholder');
});

test('Check itemvalues property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:itemvalues' });
        creator.JSON = {};
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Others'))
        .click(Selector('button').withText('Form Entry'))
        .click("input[value='Add New']")
        .click("input[value='Add New']")
        .expect(Selector('div').withText('Foo').find('table tbody').find('tr').count).eql(2);
});

test.skip('Check matrixdropdowncolumns property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('matrixdynamic', { name: 'foo:matrixdropdowncolumns' });
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('div').withText('Matrix').nth(9).find('.svd_toolbox_item_text.hidden-sm.hidden-xs[data-bind="text:title"]'))
        .click(Selector('a').withText('Items').nth(2).find('[data-bind="text: koText"]'))
        .click(Selector('div').withText('Required').nth(19).find('.btn.btn-primary[data-bind^="click: onAddClick, value: $root.getLocString(\\\'pe.a"]'))
        .click(Selector('.modal-body.svd_notopbottompaddings').nth(8).find('div').withText('Required'))
        .click(Selector('div').withText('Required').nth(19).find('.btn.btn-primary[data-bind^="click: onAddClick, value: $root.getLocString(\\\'pe.a"]'))
        .click(Selector('div').withText('×').nth(44).find('.btn.btn-default.btn-secondary[data-bind^="click: $data.onOkClick, disable: readOnly, value: "]'))
        .expect(Selector('a').withText('Items').nth(2).find('[data-bind="text: koText"]').innerText).eql('[ Items: 2 ]');
});

test.skip('Check textitems property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('multipletext', { name: 'foo:textitems' });
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('div').withText('Multiple Text').nth(7).find('.svd_toolbox_item_text.hidden-sm.hidden-xs[data-bind="text:title"]'))
        .click(Selector('a').withText('Items').find('[data-bind="text: koText"]'))
        .click(Selector('.svd-items-control-footer[data-bind="visible: koAllowAddRemoveItems"]').find('.btn.btn-primary[data-bind^="click: onAddClick, value: $root.getLocString(\\\'pe.a"]'))
        .click(Selector('.svd-items-control-footer[data-bind="visible: koAllowAddRemoveItems"]').find('.btn.btn-primary[data-bind^="click: onAddClick, value: $root.getLocString(\\\'pe.a"]'))
        .click(Selector('div').withText('×').nth(28).find('.btn.btn-default.btn-secondary[data-bind^="click: $data.onOkClick, disable: readOnly, value: "]'))
        .expect(Selector('a').withText('Items').nth(1).find('[data-bind="text: koText"]').textContent).eql('[ Items: 2 ]');
});

test.skip('Check choices with function property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'locale',
              choices: function() { return Survey.surveyLocalization.getLocales(); } });
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('div').withText('Default').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]'))
        .click(Selector('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').nth(2).find('option').withText('русский'))
        .expect(Selector('div').withText('Default').nth(10).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').value).eql('ru');
});

test.skip('Check triggers property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:triggers' });
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('span').withText('Single Input'))
        .click('#objectSelector')
        .click(Selector('option').withText('Survey'))
        .click(Selector('[data-bind="text: koText"]').nth(5));

    const workaroundShow = ClientFunction(() => {
        const el = document.querySelector('#modelEditortriggers49').querySelector('div.ddmenu').querySelector('ul');
        el.style.visibility = 'visible';
        return true;
    });

    await t
        .expect(workaroundShow()).ok()
        .click(Selector('a').withText('complete survey').nth(0));

    const workaroundHide = ClientFunction(() => {
        const el = document.querySelector('#modelEditortriggers49').querySelector('div.ddmenu').querySelector('ul');
        el.style.visibility = 'hidden';
        return true;
    });

    await t
        .expect(workaroundHide()).ok()
        .click('[data-bind="if: true, value: koAddConditionQuestion"]')
        .click('[data-bind^="value: name, text: (text || \'\').substring(0, 80), "][title="question1"]')
        .click('.form-control[data-bind^="textInput:koAddConditionValue, enable: koAddContio"]')
        .typeText('.form-control[data-bind^="textInput:koAddConditionValue, enable: koAddContio"]', 'Arr')
        .click(Selector('.btn.btn-default.btn-secondary[data-bind^="click: $data.onOkClick, disable: readOnly, value: "]').nth(5))
        .expect(Selector('[data-bind="text: koText"]').nth(5).textContent).eql('[ Items: 1 ]');
});

test.skip('Check validators property', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        Survey
            .Serializer
            .addProperty('survey', { name: 'foo:validators' });
        var creatorOptions = {};
        new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .click(Selector('[data-bind="text: koText"]').nth(5));

    const workaroundShow = ClientFunction(() => {
        const el = document.querySelectorAll('.propertyeditor-validators')[2].querySelector('div.ddmenu').querySelector('ul');
         el.style.visibility = 'visible';
         return true;
    });

    await t
        .expect(workaroundShow()).ok()
        .click(Selector('a').withText('numeric'));

    const workaroundHide = ClientFunction(() => {
        const el = document.querySelectorAll('.propertyeditor-validators')[2].querySelector('div.ddmenu').querySelector('ul');
        el.style.visibility = 'hidden';
        return true;
    });

    await t
        .expect(workaroundHide()).ok()
        .typeText(Selector('#editor_tab_id_general').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'), '3')
        .typeText(Selector('[data-bind^="visible: objectProperty.koVisible, event: { keydow"][data-property="minValue"]').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {max: koM"]'), '1')
        .click(Selector('[data-bind^="visible: objectProperty.koVisible, event: { keydow"][data-property="maxValue"]').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {max: koM"]'))
        .typeText(Selector('[data-bind^="visible: objectProperty.koVisible, event: { keydow"][data-property="maxValue"]').find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {max: koM"]'), '4')
        .click(Selector('.modal-footer').nth(5).nth(5).find('input').nth(1))
        .expect(Selector('[data-bind="text: koText"]').nth(5).textContent).eql('[ Items: 1 ]');
});
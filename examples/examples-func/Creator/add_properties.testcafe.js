import { Selector, ClientFunction, fixture, test } from 'testcafe';

fixture `add_properties`
  .page `https://surveyjstest.azurewebsites.net/survey-creator/examples/s/add-properties-to-property-grid/vanillajs`;

test.skip('Required property', async t => {
  await t.maximizeWindow();

  await ClientFunction(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('checkbox', { name: '!foo' });
    // eslint-disable-next-line no-undef
    creator.JSON = '';
  })();

  await t
    .click(Selector('.svc-toolbox').find('div').withText('Checkbox'))
    .click(Selector('.svc-tabbed-menu-item').withText('JSON Editor'))
  //.expect(Selector('.svd-json-editor-area').exists).eql(true); // if ACE not loaded
    .expect(Selector('div').withAttribute('class', /ace_gutter\-cell\s+ace_error/).exists).eql(true); // if ACE loaded
});

test('Property with default value', async t => {
  await t.maximizeWindow();

  await ClientFunction(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo', default: 'bar' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  })();

  await t
    .click(Selector('div').withAttribute('title', 'Others'))
    .expect(Selector('[data-name=foo] input').value).eql('bar');
});

test('Check boolean property', async t => {
  await t.maximizeWindow();

  await ClientFunction(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:boolean' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  })();

  await t
    .click(Selector('div').withAttribute('title', 'Others'))
    .expect(Selector('label').withText('Foo').exists).eql(true)
    .expect(Selector('label').withText('Foo').find('input').exists).eql(true);
});

test('Check text property', async t => {
  await t.maximizeWindow();

  await ClientFunction(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:text' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  })();

  await t
    .click(Selector('div').withAttribute('title', 'Others'))
    .click(Selector('div').withText('Foo').find('textarea'))
    .typeText(Selector('div').withText('Foo').find('textarea'), 'Bar')
    .expect(Selector('div').withText('Foo').find('textarea').value).eql('Bar');
});

test('Check html property', async t => {
  await t.maximizeWindow();

  await ClientFunction(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:html' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  })();

  await t
    .click(Selector('div').withAttribute('title', 'Others'))
    .click(Selector('div').withText('Foo'))
    .typeText(Selector('div').withText('Foo').find('textarea'), 'Bar')
    .expect(Selector('div').withText('Foo').find('textarea').value).eql('Bar');
});

test('Check itemvalues property', async t => {
  await t.maximizeWindow();

  await ClientFunction(() => {
    // eslint-disable-next-line no-undef
    Survey.Serializer.addProperty('survey', { name: 'foo:itemvalues' });
    // eslint-disable-next-line no-undef
    creator.JSON = {};
  })();

  await t
    .click(Selector('div').withAttribute('title', 'Others'))
    .click("button[title='Add New']")
    .click("button[title='Add New']")
    .expect(Selector('div').withText('Foo').find('table tbody').find('tr').count).eql(2);
});
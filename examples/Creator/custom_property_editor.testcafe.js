import { Selector, fixture, test } from 'testcafe';

fixture `custom_property_editor`
  .page `https://surveyjstest.azurewebsites.net/survey-creator/examples/s/customize-property-editors/reactjs`;

test('Check shortname property', async t => {
  const shortnameEditor = Selector('.sv-string-viewer').withText('Short name').parent('.spg-question').find('input');
  await t
    .maximizeWindow()
    .click(Selector('.svc-add-new-question-action'))
    .typeText(shortnameEditor, '123456789101112131415')
    .expect(shortnameEditor.value).eql('123456789101112');
});
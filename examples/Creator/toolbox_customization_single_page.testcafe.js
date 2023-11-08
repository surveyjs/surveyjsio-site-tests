import { Selector, ClientFunction, fixture, test } from 'testcafe';

fixture `toolbox_customization_single_page`
  .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=toolboxcustomization&theme=default`;

test.skip('Check dropdown', async t => {
  await t
    .maximizeWindow()
    .drag(Selector('span').withText('All countries'), 388, 448, {
      offsetX: 18,
      offsetY: 5
    })
    .expect(Selector('label').withText('Options caption').exists).eql(true)
    .expect(Selector('label').withText('Options caption').parent().find('input').value).eql('Select a country...');
});

test.skip('Check matrix dynamic', async t => {
  await t
    .maximizeWindow();

  const addMatrixDynamic = ClientFunction(() => {
    window.creator
      .toolbox
      .addItem({
        name: 'Teacher rate',
        isCopied: true,
        iconName: 'icon-default',
        title: 'Teacher rate',
        json: {
          type: 'matrixdynamic',
          name: 'teachersRate',
          cellType: 'radiogroup',
          choices: [
            {
              value: 1,
              text: 'Yes'
            }
          ],
          columns: [
            {
              name: 'subject',
              cellType: 'dropdown',
              title: 'Select a subject',
              choices: [
                'Math: Practical Math'
              ]
            }, {
              name: 'explains'
            }
          ]
        }
      });
    return 'dummy';
  });

  await t
    .expect(addMatrixDynamic()).eql('dummy')
    .click(Selector('span').withText('Teacher rate'))
    .click(Selector('a').withText('Items').find('[data-bind="text: koText"]'))
    .expect(Selector('.form-group').nth(6).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').value).eql('1')
    .expect(Selector('.form-group').nth(7).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').value).eql('Yes')
    .click(Selector('.modal-header').find('button').withText('×'))
    .click(Selector('a').withText('Items').nth(1).find('[data-bind="text: koText"]'))
    .expect(Selector('div').withText('Default').nth(15).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, options: koChoi"]').value).eql('dropdown')
    .expect('').eql('')
    .expect(Selector('.form-group').nth(20).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]').value).eql('explains')
    .click(Selector('.form-group').nth(16).find('.form-control.svd_editor_control[data-bind^="value: koValue, disable: readOnly, attr: {placehol"]'))
    .click(Selector('.modal-header').nth(1).find('button').withText('×'));
});
import { Selector, fixture, test } from 'testcafe';

fixture `Custom Adorner`
  .page `https://surveyjstest.azurewebsites.net/survey-creator/examples/s/create-custom-adorners/reactjs`;

test('Adorner exists', async t => {
  const selector = Selector('.svc-question__content span').withText('Read-Only');
  await t
    .maximizeWindow()
    .hover('.svc-question__content')
    .expect(selector.visible).ok()
    .click(Selector('span').withText('JSON Editor'))
    .pressKey('ctrl+a')
    .pressKey('delete')
    .click(Selector('span').withText('Designer'))
    .wait(1000)
    .expect(selector.visible).notOk()
    .click(Selector('span').withText('Single-Line Input'))
    .wait(1000)
    .hover('.svc-question__content')
    .expect(selector.exists).ok()
    .expect(selector.visible).ok();
});

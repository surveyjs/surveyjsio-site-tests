import { Selector, fixture, test } from 'testcafe';

fixture `Editor Options`
  .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=options&platform=Knockoutjs&theme=default`;

test('Show default tabs', async t => {
  await t
    .maximizeWindow()
    // .expect(Selector('.panel.card.svd_content.svd-dark-bg-color').exists).eql(true)
    .expect(Selector('.svc-tabbed-menu-item').withText('Survey Templates').exists).eql(true)
    .expect(Selector('.svc-tabbed-menu-item').withText('Designer').innerText).eql('Designer')
    .expect(Selector('.svc-tabbed-menu-item').withText('Preview').exists).eql(true)
    .expect(Selector('.svc-tabbed-menu-item').withText('Logic').exists).eql(true);
});
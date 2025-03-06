import { Selector, fixture, test } from 'testcafe';

fixture `Editor Options`
  .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=options&platform=Knockoutjs&theme=default`;

test('Show default tabs', async t => {
  await t
    .maximizeWindow()
    // .expect(Selector('.panel.card.svd_content.svd-dark-bg-color').exists).eql(true)
    .expect(Selector('span.nav-link').withText('Survey Templates').exists).eql(true)
    .expect(Selector('span.nav-link').withText('Designer').innerText).eql('Designer')
    .expect(Selector('span.nav-link').withText('Preview').exists).eql(true)
    .expect(Selector('span.nav-link').withText('Logic').exists).eql(true);
});
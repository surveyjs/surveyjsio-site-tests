import { Selector } from 'testcafe';

fixture `Editor Options`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=options&theme=default`;

test('Show default tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.panel.card.svd_content.svd-dark-bg-color').exists).eql(true)
        .expect(Selector('span.nav-link').withText('Survey Designer').innerText).eql('Survey Designer')
        .expect(Selector('#creatorElement span.nav-link').withText('Test Survey').innerText).eql('Test Survey')
        .expect(Selector('span.nav-link').withText('JSON Editor').innerText).eql('JSON Editor');
});
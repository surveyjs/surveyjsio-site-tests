import { Selector } from 'testcafe';
import { getIUnderstandButton } from '../../helpers';

fixture `tabs`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=jQuery&theme=default`;

test('Click example tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.tabs__tab.example-tab.tabs__tab--active').classNames).contains('tabs__tab--active')
        .click(Selector('.tabs__tab-wrapper').nth(1).find('a').withText('Code'))
        .expect(Selector('.tabs__tab-wrapper').find('a').withText('Result').classNames).notContains('tabs__tab--active')
        .expect(Selector('.tabs__tab.example-tab.tabs__tab--active').classNames).contains('tabs__tab--active');
});

test('Click survey result tabs', async t => {
    await t
        .maximizeWindow()
        .click(getIUnderstandButton())
        .click(Selector('span').withText('Ford').nth(1))
        .click('.sv_complete_btn')
        .expect(Selector('a').withText('JSON').classNames).contains('v2-class---demo-tab-item--active')
        .click(Selector('a').withText('Export to Pdf'))
        .expect(Selector('a').withText('JSON').classNames).notContains('v2-class---demo-tab-item--active')
        .expect(Selector('a').withText('Export to Pdf').classNames).contains('v2-class---demo-tab-item--active');
});

test('Check survey result tabs', async t => {
    await t
        .maximizeWindow()
        .click(getIUnderstandButton())
        .click(Selector('span').withText('Ford').nth(1))
        .click('.sv_complete_btn')
        .expect(Selector('a').withText('JSON').visible).ok()
        .expect(Selector('a').withText('JSON').classNames).contains('v2-class---demo-tab-item--active')
        .expect(Selector('a').withText('Export to Pdf').visible).ok()
        .expect(Selector('a').withText('Export to Pdf').classNames).notContains('v2-class---demo-tab-item--active');
});
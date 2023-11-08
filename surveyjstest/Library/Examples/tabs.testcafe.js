import { Selector , fixture, test } from 'testcafe';
import { getIUnderstandButton, getExampleTabSelector, acceptCookie } from '../../helpers';

fixture `tabs`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=jQuery&theme=default`
    .beforeEach(async t => {
        await acceptCookie(t);
    });

test('Click example tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.v2-class---footer-toolbar-item.v2-class---footer-toolbar-item--active').classNames).contains('v2-class---footer-toolbar-item--active')
        .click(getExampleTabSelector('Code'))
        .expect(getExampleTabSelector('Result').classNames).notContains('v2-class---footer-toolbar-item--active')
        .expect(Selector('.v2-class---footer-toolbar-item.v2-class---footer-toolbar-item--active').classNames).contains('v2-class---footer-toolbar-item--active');
});

test('Click survey result tabs', async t => {
    await t
        .maximizeWindow()
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
        .click(Selector('span').withText('Ford').nth(1))
        .click('.sv_complete_btn')
        .expect(Selector('a').withText('JSON').visible).ok()
        .expect(Selector('a').withText('JSON').classNames).contains('v2-class---demo-tab-item--active')
        .expect(Selector('a').withText('Export to Pdf').visible).ok()
        .expect(Selector('a').withText('Export to Pdf').classNames).notContains('v2-class---demo-tab-item--active');
});
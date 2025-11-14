import { Selector, fixture, test } from 'testcafe';
import { getIUnderstandButton, getExampleTabSelector, acceptCookie } from '../helpers';

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
    .expect(getExampleTabSelector('Demo').classNames).notContains('v2-class---footer-toolbar-item--active')
    .expect(Selector('.v2-class---footer-toolbar-item.v2-class---footer-toolbar-item--active').classNames).contains('v2-class---footer-toolbar-item--active');
});

test('Click survey result tabs', async t => {
  await t
    .maximizeWindow()
    .click(Selector('span').withText('Ford').nth(1))
    .click('.sd-navigation__complete-btn')
    .expect(Selector('a').withText('JSON').classNames).contains('v2-class---demo-tab-item--active')
    .click(Selector('a').withText('Export to PDF'))
    .expect(Selector('a').withText('JSON').classNames).notContains('v2-class---demo-tab-item--active')
    .expect(Selector('a').withText('Export to PDF').classNames).contains('v2-class---demo-tab-item--active');
});

test('Check survey result tabs', async t => {
  await t
    .maximizeWindow()
    .click(Selector('span').withText('Ford').nth(1))
    .click('.sd-navigation__complete-btn')
    .expect(Selector('a').withText('JSON').visible).ok()
    .expect(Selector('a').withText('JSON').classNames).contains('v2-class---demo-tab-item--active')
    .expect(Selector('a').withText('Export to PDF').visible).ok()
    .expect(Selector('a').withText('Export to PDF').classNames).notContains('v2-class---demo-tab-item--active');
});
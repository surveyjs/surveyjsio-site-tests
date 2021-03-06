import { Selector } from 'testcafe';

fixture `tabs`
    .page `https://surveyjstest.azurewebsites.net/Examples/Library?id=questiontype-radiogroup&platform=jQuery&theme=default`;

test('Click example tabs', async t => {
    await t
        .maximizeWindow()
        .expect(Selector('.tabs__tab.example-tab.tabs__tab--active').classNames).contains('tabs__tab--active')
        .click(Selector('.tabs__tab-wrapper').nth(1).find('a').withText('JavaScript'))
        .expect(Selector('.tabs__tab-wrapper').find('a').withText('Result').classNames).notContains('tabs__tab--active')
        .expect(Selector('.tabs__tab.example-tab.tabs__tab--active').classNames).contains('tabs__tab--active');
});

test('Click survey result tabs', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span').withText('I understand'))
        .click(Selector('span').withText('Ford').nth(1))
        .click('.sv_complete_btn')
        .expect(Selector('a').withText('JSON').classNames).contains('tabs__tab--active')
        .click(Selector('#result-tabs').find('a').withText('PDF'))
        .expect(Selector('a').withText('JSON').classNames).notContains('tabs__tab--active')
        .expect(Selector('.tabs__tab.survey-result-tab.tabs__tab--active').classNames).contains('tabs__tab--active');
});
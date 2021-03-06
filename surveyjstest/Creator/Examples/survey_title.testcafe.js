import { Selector } from 'testcafe';

fixture `survey_title`
    .page `https://surveyjstest.azurewebsites.net/Examples/Survey-Creator`;

test('title_adorners', async t => {
    await t
        .maximizeWindow()
        .click(Selector('.sidebar__subitem-content').nth(34).find('div').withText('Survey and page titles'))
        .switchToIframe(Selector('[name="content-result"][class^="tabs__tab-panel example-tab tabs__tab-panel--activ"]').find('iframe'))
        .expect(Selector('span').withText('Input page title here').nth(2).visible).eql(true, 'Page title is visible')
        .expect(Selector('span').withText('Enter a page description').nth(2).visible).eql(true)
        .expect(Selector('#scrollableDiv').find('span').withText('Input survey title here').nth(2).visible).eql(false)
        .expect(Selector('span').withText('Enter a survey description').nth(2).visible).eql(false)
        .click(Selector('.svd-primary-icon.svda-title-action__show-hide[data-bind="css: $parent.getStyle($data)"]').find('svg'))
        .expect(Selector('span').withText('Input survey title here').nth(2).visible).eql(true)
        .expect(Selector('span').withText('Enter a survey description').nth(2).visible).eql(true)
        .expect(Selector('span').withText('Add logo...').nth(2).visible).eql(true)
        .click('#cb_allowShowEmptyTitle')
        .expect(Selector('span').withText('Input page title here').exists).eql(false)
        .expect(Selector('span').withText('Enter a page description').exists).eql(false)
        .click('#cb_allowControlSurveyTitleVisibility')
        .expect(Selector('.svd-primary-icon.svda-title-action__show-hide[data-bind=\"css: $parent.getStyle($data)\"]').find('svg').exists).eql(false);
});
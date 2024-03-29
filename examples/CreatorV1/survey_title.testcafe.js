import { Selector, fixture, test } from 'testcafe';

fixture`survey_title`
  .page`https://surveyjstest.azurewebsites.net/Examples/Survey-Creator?id=titleadorner&platform=Knockoutjs`;

test.skip('title_adorners', async t => {
  await t
    .maximizeWindow()
    .expect(Selector('span').withText('Input page title here').nth(2).visible).eql(true, 'Page title is visible')
    .expect(Selector('span').withText('Enter a page description').nth(2).visible).eql(true)
    .expect(Selector('#scrollableDiv').find('span').withText('Input survey title here').nth(2).visible).eql(false)
    .expect(Selector('span').withText('Enter a survey description').nth(2).visible).eql(false)
    .click(Selector('.svd-primary-icon.svda-title-action__show-hide[data-bind="css: $parent.getStyle($data)"]').find('svg'))
    .expect(Selector('span').withText('Input survey title here').nth(2).visible).eql(true)
    .expect(Selector('span').withText('Enter a survey description').nth(2).visible).eql(true)
    .expect(Selector('span').withText('Add logo...').nth(2).visible).eql(true)
    .click(Selector('span').withText('Allow show page empty title'))
    .expect(Selector('span').withText('Input page title here').exists).eql(false)
    .expect(Selector('span').withText('Enter a page description').exists).eql(false)
    .click(Selector('span').withText('Allow user to change survey title visibility'))
    .expect(Selector('.svd-primary-icon.svda-title-action__show-hide[data-bind=\"css: $parent.getStyle($data)\"]').find('svg').exists).eql(false);
});
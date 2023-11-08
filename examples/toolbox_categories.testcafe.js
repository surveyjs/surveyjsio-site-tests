import { Selector, ClientFunction } from 'testcafe';

fixture `toolbox_categories`
    .page `https://surveyjstest.azurewebsites.net//Examples/CreatorSinglePage?id=toolboxcategories&theme=default`;

test.skip('Change category', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        var creatorOptions = { };
        creator = new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        creator
            .toolbox
            .changeCategories([
            {
                name: 'rating',
                category: 'Rating'
            }
        ]);
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('span').withText('GENERAL').exists).eql(true)
        .expect(Selector('span').withText('RATING').exists).eql(true)
        .click(Selector('span').withText('RATING'))
        .expect(Selector('[data-bind="css: { \\\'panel-collapse collapse\\\': koCollapsed}"]').nth(1).find('div').withText('Rating').exists).eql(true)
        .click(Selector('span').withText('Rating'))
        .expect(Selector('#sq_148').exists).eql(true);
});

test.skip('Add toolbox item to new category', async t => {
    await t
        .maximizeWindow();

    const dummy = ClientFunction(() => {
        var creatorOptions = { };
        creator = new SurveyCreator.SurveyCreator('creatorElement', creatorOptions);
        creator
            .toolbox
            .addItem({
                name: 'countries',
                isCopied: true,
                iconName: 'icon-default',
                title: 'All countries',
                category: 'Custom',
                json: {
                    type: 'dropdown',
                    optionsCaption: 'Select a country...',
                    choicesByUrl: {
                        url: 'https://restcountries.eu/rest/v2/all'
                    }
                }
            });
        return 'dummy';
    });

    await t
        .expect(dummy()).eql('dummy')
        .expect(Selector('span').withText('GENERAL').exists).eql(true)
        .expect(Selector('span').withText('CUSTOM').exists).eql(true)
        .click(Selector('.panel.panel-info').nth(1).find('div').withText('CUSTOM'))
        .expect(Selector('[data-bind="css: { \\\'panel-collapse collapse\\\': koCollapsed}"]').nth(1).find('div').withText('All countries').exists).eql(true)
        .click(Selector('span').withText('All countries'))
        .expect(Selector('#sq_148').exists).eql(true);
});
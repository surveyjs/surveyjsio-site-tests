import { Selector } from 'testcafe';

fixture `warmup`
    .page `https://surveyjstest.azurewebsites.net/Account/Login`;

test('Warmup If Site Is Updating', async t => {
    const article = Selector('article', { timeout: 1000000 }).exists;
    await t.expect(article).ok();
});
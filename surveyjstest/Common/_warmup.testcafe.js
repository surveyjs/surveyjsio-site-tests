fixture `warmup`
    .page `https://surveyjstest.azurewebsites.net/Account/Login`;

test('WarmupForLogin', async t => {
    await t
        .wait(5000)
        .expect(true).eql(true);
});
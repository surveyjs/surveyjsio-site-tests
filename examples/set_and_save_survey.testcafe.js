import { Selector, ClientFunction } from 'testcafe';

fixture `set_and_save_survey`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=setsurvey&theme=default`;

test.skip('Load survey text and log modified designer', async t => {
    await t
        .maximizeWindow();

    const console_log_hook = ClientFunction(() => {
        console.stdlog = console.log.bind(console);
        console.logs = [];
        console.log = function(){
            console.logs.push(Array.from(arguments));
            console.stdlog.apply(console, arguments);
        }
        return 'dummy';
    });

    await t
        .expect(console_log_hook()).eql('dummy')
        .click(Selector('a').withText('Test Survey'))
        .expect(Selector('span').withText('q1').nth(4).textContent).eql('q1')
        .expect(Selector('div').withText('1 .  q1').nth(24).find('[data-bind^="disable: question.isReadOnly, attr: {type: questio"].sv_q_text_root').tagName).eql('input')
        .click(Selector('a').withText('Survey Designer'))
        .click(Selector('span').withText('Checkbox'))
        .click(Selector('#svd-save').find('span').withText('Save Survey'));

    const console_log_content = ClientFunction(() => {
        return console.logs[console.logs.length - 1][0];
    });

    await t
        .expect(console_log_content()).match(/text.*\s?.*q1.*\s?.*\s?.*\s?.*checkbox.*\s?.*\s?.*\s?.*item1/);
});
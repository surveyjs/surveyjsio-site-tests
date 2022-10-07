import { Selector } from 'testcafe';
import { getIUnderstandButton } from '../../helpers';

fixture `custom_matrix_cell_types`
    .page `https://surveyjstest.azurewebsites.net/Examples/Builder?id=matrixcustomcelltypes&theme=default`;

test.skip('File and tagbox cell types in matrix', async t => {
    await t
        .maximizeWindow()
        .click(Selector('span.nav-link').withText('Test Survey'))
        .expect(Selector('#sq_148').find('td').withText('English').textContent).contains('LiteratureMath')
        .expect(Selector('div').withText('Select a subject').nth(40).find('[data-bind^="css: question.cssClasses.fileInput, attr: {id: que"].sv_q_file_input[title="Choose file(s)..."]').tagName).eql('input')
        .click(Selector('div').withText('English').nth(42).find('.select2-selection__rendered'))
        .click('[class^="select2-results__option select2-results__option--h"]')
        .click(getIUnderstandButton())
        .click(Selector('.surveyjs-customer-survey-close[title="Hide this panel"]').find('img'))
        .click('[data-bind^="value: completeText, click: completeLastPage, visi"].sv_complete_btn')
        .expect(Selector('div').withText('[{\"subjects\":[\"English: American Literature\"]}').textContent).match(/Literature/);
});
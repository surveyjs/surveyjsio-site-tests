import { Selector } from 'testcafe';

//const domain = 'http://localhost:62946';
const domain = "https://surveyjstest.azurewebsites.net";

fixture`account`
    .page(domain + '/pricing').beforeEach(async t => {
        const cookiePopupAccept = Selector(".v2-class---cookies-popup__button-container a");
        if(await cookiePopupAccept.exists) {
            await t.click(cookiePopupAccept); // close cookie msg
        } 
    });;

test('Full buy cart cycle', async t => {
    await t.maximizeWindow();

    await t.click(Selector('.v2-class---pricing-header--basic a').withText('Buy Now').filterVisible());
    await t.navigateTo('/pricing');
    await t.click(Selector('.v2-class---pricing-header--pro a').withText('Buy Now').filterVisible());

    await t.navigateTo('/cart');

    const basicRow = Selector(".v2-class---cart-item").nth(0);
    const proRow = Selector(".v2-class---cart-item").nth(1);

    await t.click(basicRow.find(".v2-class---editor-dropdown__control"));
    await t.click(Selector(".sv-popup .v2-class---drop-down-menu-item__link").withExactText("3").filterVisible());

    await t.expect(basicRow.find("td").nth(2).innerText).eql("€499.00");
    await t.expect(basicRow.find("td").nth(3).innerText).eql("-€198.00");
    await t.expect(basicRow.find("td").nth(4).innerText).eql("€1,299.00");

    await t.expect(proRow.find("td").nth(2).innerText).eql("€899.00");
    await t.expect(proRow.find("td").nth(3).innerText).eql("€0.00");
    await t.expect(proRow.find("td").nth(4).innerText).eql("€899.00");

    await t.expect(Selector(".v2-class---cart-subtotal-container__value").innerText).eql("€2,198.00");

    await t.expect(Selector("input[aria-label='Company VAT Number (EU companies only)']").visible).notOk("no vat", { timeout: 500 });

    await t.typeText(Selector("input[aria-label='Full Name']"), "Tester Name");
    await t.typeText(Selector("input[aria-label=Email]"), "tester@surveyjs.io");
    await t.typeText(Selector("input[aria-label='Country']"), "Argentina");
    await t.pressKey("Enter");
    await t.typeText(Selector("input[aria-label='Company Name']"), "Tester Company");
    await t.typeText(Selector("input[aria-label='Postal Code']"), "123456");
    await t.typeText(Selector("input[aria-label='Address']"), "Test address");
    await t.typeText(Selector("input[aria-label='Phone']"), "+34567890123");

    

    await t.click(Selector("button").withText("Proceed to Checkout"));
    const iframeSelector = Selector('#sjs-pyapal-payment iframe', { timeout: 30000 });
    await t.switchToIframe(iframeSelector);
    await t.click(Selector("div.paypal-button[aria-label='PayPal']"), {timeout: 30000});

    await t.click(Selector("button").withText("Log In"));
    await t.typeText(Selector("#email"), "buyer@surveyjs.io");
    await t.click(Selector("button").withText("Next"));
    await t.typeText(Selector("#password"), "buyer@surveyjs.io");
    await t.click(Selector("button").withText("Log In"));
    await t.click(Selector("button").withText("Complete Purchase"));
    await t.expect(Selector("body").innerText).eql("OK", "ok", {timeout: 30000});
});
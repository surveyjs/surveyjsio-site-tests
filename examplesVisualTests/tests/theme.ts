import { Selector, fixture, test } from 'testcafe';
import { demoModule, disableSmoothScroll, explicitErrorHandler, takeElementScreenshot, wrapVisualTest } from '../helpers';

fixture`Themes`.beforeEach(async t => {
  await explicitErrorHandler();
  await disableSmoothScroll();

  const cookiePopupAccept = Selector('.v2-class---banner-footer-actions .v2-class---button');
  if(await cookiePopupAccept.exists) {
    await t.click(cookiePopupAccept); // close cookie msg
  }
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/hotel-booking-form-template-free/reactjs')('Hotel Booking Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 1100);
    await takeElementScreenshot('themes-hotel-booking-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__next-btn'));
    await takeElementScreenshot('themes-hotel-booking-form-2.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-hotel-booking-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/order-form-template-free/reactjs')('Order Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 1500);
    await takeElementScreenshot('themes-order-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__next-btn'));
    await takeElementScreenshot('themes-order-form-2.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__next-btn'));
    await takeElementScreenshot('themes-order-form-3.png', demoModule, t, comparer);

    await t
      .click(Selector('.sd-navigation__next-btn'))
      .click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-order-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/online-check-in-form-template-free/reactjs')('Online Check-In Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 2200);
    await takeElementScreenshot('themes-online-check-in-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-online-check-in-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/patient-registration-form-template-free/reactjs')('Patient Registration Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 2500);
    await takeElementScreenshot('themes-patient-registration-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-patient-registration-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/pet-hotel-reservation-form-template-free/reactjs')('Pet Hotel Reservation Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 1100);
    await takeElementScreenshot('themes-pet-hotel-reservation-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__next-btn'));
    await takeElementScreenshot('themes-pet-hotel-reservation-form-2.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__next-btn'));
    await takeElementScreenshot('themes-pet-hotel-reservation-form-3.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-pet-hotel-reservation-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/car-rental-form-template-free/reactjs')('Car Rental Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 3200);
    await takeElementScreenshot('themes-car-rental-form-1.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/issue-report-template-free/reactjs')('Issue Report', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 1700);
    await takeElementScreenshot('themes-issue-report-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-issue-report-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/sales-contract-form-template-free/reactjs')('Sales Contract Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1500, 1100);
    await takeElementScreenshot('themes-sales-contract-form-1.png', demoModule, t, comparer);

    await t.resizeWindow(1920, 2500);
    await takeElementScreenshot('themes-sales-contract-form-2.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-sales-contract-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/conference-registration-form-template-free/reactjs')('Conference Registration Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 2500);
    await takeElementScreenshot('themes-conference-registration-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-conference-registration-form-completed-page.png', demoModule, t, comparer);
  });
});

test.page('https://surveyjstest.azurewebsites.net/form-library/examples/feedback-form-template-free/reactjs')('Feedback Form', async t => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1280, 2200);
    await takeElementScreenshot('themes-feedback-form-1.png', demoModule, t, comparer);

    await t.click(Selector('.sd-navigation__complete-btn'));
    await takeElementScreenshot('themes-feedback-form-completed-page.png', demoModule, t, comparer);
  });
});
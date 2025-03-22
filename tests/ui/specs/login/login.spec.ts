import { expect, test } from '../../fixtures/base';
import ENV from '../../helper/env';

test.beforeEach('open app', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.pageHeader).toBeVisible();
});

test('company footer link', async ({ loginPage }) => {
    await expect(loginPage.companyLinkFooter).toBeVisible();
});

test('successful login', async ({ loginPage, landingPage }) => {
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    await expect(landingPage.pageHeader).toBeVisible();
});

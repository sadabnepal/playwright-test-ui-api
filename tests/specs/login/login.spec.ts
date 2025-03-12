import { expect, test } from '@playwright/test';
import ENV from '../../helper/env';
import LandingPage from '../../pages/landing.page';
import LoginPage from '../../pages/login.page';

test.beforeEach('open app', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await expect(loginPage.pageHeader).toBeVisible();
});

test('company footer link', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.companyLinkFooter).toBeVisible();
});

test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    const landingPage = new LandingPage(page);
    await expect(landingPage.pageHeader).toBeVisible();
});

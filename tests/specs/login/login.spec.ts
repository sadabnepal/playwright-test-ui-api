import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/login.page';
import LandingPage from '../../pages/landing.page';

import { config } from 'dotenv';
config({ path: '.env' });

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
    await loginPage.login(process.env.USERNAME as string, process.env.PASSWORD as string);

    const landingPage = new LandingPage(page);
    await expect(landingPage.pageHeader).toBeVisible();
});

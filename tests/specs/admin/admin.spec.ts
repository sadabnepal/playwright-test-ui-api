import { test, expect } from 'playwright/test'
import LandingPage from '../../pages/landing.page';
import AdminPage from '../../pages/admin.page';
import LoginPage from '../../pages/login.page';
import { toastMessage } from '../../pages/component';
import { userData } from '../../data/user';

import { config } from 'dotenv';
config({ path: '.env' });

test('validate admin page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(process.env.USERNAME as string, process.env.PASSWORD as string);

    const landingPage = new LandingPage(page);
    await expect(landingPage.pageHeader).toBeVisible();

    await landingPage.navigate().goto('Admin');

    const adminPage = new AdminPage(page);
    await adminPage.addUser(userData);
    await expect(toastMessage(page)).toHaveText('Successfully Saved');
});

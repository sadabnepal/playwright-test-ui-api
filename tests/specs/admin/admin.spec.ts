import { expect, test } from 'playwright/test';
import { userData } from '../../data/user';
import ENV from '../../helper/env';
import AdminPage from '../../pages/admin.page';
import { toastMessage } from '../../pages/component';
import LandingPage from '../../pages/landing.page';
import LoginPage from '../../pages/login.page';

test('validate admin page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    const landingPage = new LandingPage(page);
    await expect(landingPage.pageHeader).toBeVisible();

    await landingPage.navigate().goto('Admin');

    const adminPage = new AdminPage(page);
    await adminPage.addUser(userData);
    await expect(toastMessage(page)).toHaveText('Successfully Saved');
});

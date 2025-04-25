import { expect, test } from '@fixtures/base';
import { toastMessage } from '@pages/component';
import { adminUserData } from '@ui/data/user';
import { ENV } from '@ui/helper/env';

test('validate admin page', async ({ page, loginPage, landingPage, navigatePage, employeePage, adminPage }) => {

    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible();

    await navigatePage.goto('PIM');
    const existingUser = await employeePage.getExistingUserName();

    await navigatePage.goto('Admin');
    await adminPage.addUser(adminUserData(existingUser));
    await expect(toastMessage(page)).toHaveText('Successfully Saved');

});

import { expect, test } from '@fixtures/base';
import { userData } from '@ui/data/user';
import ENV from '@ui/helper/env';
import { toastMessage } from '../../pages/component';

test('validate admin page', async ({ page, loginPage, landingPage, navigatePage, adminPage }) => {

    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible();

    await navigatePage.goto('Admin');

    await adminPage.addUser(userData);
    await expect(toastMessage(page)).toHaveText('Successfully Saved');

});

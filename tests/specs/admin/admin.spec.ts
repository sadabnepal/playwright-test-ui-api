import { userData } from '../../data/user';
import { expect, test } from '../../fixtures/base';
import ENV from '../../helper/env';
import { toastMessage } from '../../pages/component';

test('validate admin page', async ({ page, loginPage, landingPage, adminPage }) => {

    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible();

    await landingPage.navigate().goto('Admin');

    await adminPage.addUser(userData);
    await expect(toastMessage(page)).toHaveText('Successfully Saved');

});

import { expect, test } from '@fixtures/base';
import { createEmployeeData } from '@ui/data/employee';
import ENV from '@ui/helper/env';
import { toastMessage } from '../../pages/component';

test('validate add employee', async ({ page, loginPage, landingPage, navigatePage, employeePage }) => {

    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible();

    await navigatePage.goto('PIM');

    await employeePage.addEmployee(createEmployeeData('Enabled'));
    await expect(toastMessage(page)).toHaveText('Successfully Saved');

});

import { createEmployeeData } from '../../data/employee';
import { expect, test } from '../../fixtures/base';
import ENV from '../../helper/env';
import { toastMessage } from '../../pages/component';

test('validate add employee', async ({ page, loginPage, landingPage, employeePage }) => {

    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible();

    await landingPage.navigate().goto('PIM');

    await employeePage.addEmployee(createEmployeeData('Enabled'));
    await expect(toastMessage(page)).toHaveText('Successfully Saved');

});

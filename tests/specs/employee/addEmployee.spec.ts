import { expect, test } from 'playwright/test';
import { createEmployeeData } from '../../data/employee';
import ENV from '../../helper/env';
import { toastMessage } from '../../pages/component';
import EmployeePage from '../../pages/employee.page';
import LandingPage from '../../pages/landing.page';
import LoginPage from '../../pages/login.page';

test('validate add employee', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    const landingPage = new LandingPage(page);
    await expect(landingPage.pageHeader).toBeVisible();

    await landingPage.navigate().goto('PIM');

    const employeePage = new EmployeePage(page);
    await employeePage.addEmployee(createEmployeeData('Enabled'));
    await expect(toastMessage(page)).toHaveText('Successfully Saved');
});

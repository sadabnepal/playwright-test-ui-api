import { test, expect } from 'playwright/test'
import LandingPage from '../../pages/landing.page';
import AdminPage from '../../pages/admin.page';
import LoginPage from '../../pages/login.page';
import { fa, faker } from '@faker-js/faker';

import { config } from 'dotenv';
import { toastMessage } from '../../pages/component';
import EmployeePage from '../../pages/employee.page';
import { createEmployeeData } from '../../data/employee';
config({ path: '.env' });

test('validate add employee', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(process.env.USERNAME as string, process.env.PASSWORD as string);

    const landingPage = new LandingPage(page);
    await expect(landingPage.pageHeader).toBeVisible();

    await landingPage.navigate().goto('PIM');

    const employeePage = new EmployeePage(page);
    await employeePage.addEmployee(createEmployeeData('Enabled'));
    await expect(toastMessage(page)).toHaveText('Successfully Saved');
});

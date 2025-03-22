import { test as base } from '@playwright/test';
import AdminPage from '../pages/admin.page';
import EmployeePage from '../pages/employee.page';
import LandingPage from '../pages/landing.page';
import LoginPage from '../pages/login.page';

type PageOption = {
    landingPage: LandingPage;
    loginPage: LoginPage;
    employeePage: EmployeePage;
    adminPage: AdminPage;
}

export const test = base.extend<PageOption>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    employeePage: async ({ page }, use) => {
        await use(new EmployeePage(page));
    },
    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    }
});
export { expect } from '@playwright/test';

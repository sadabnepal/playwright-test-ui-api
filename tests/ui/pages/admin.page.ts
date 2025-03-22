import { expect, Page } from '@playwright/test';
import { ICreateUser } from '../interfaces/user';
import { getDropdownLocator, getInputLocator } from './component';

class AdminPage {

    constructor(private readonly page: Page) { }

    async topMenu(menuItem: 'Add Employee' | 'Employee List' | 'Reports') {
        await this.page.getByRole('link', { name: menuItem }).click();
        await expect(this.page.getByRole('heading', { name: menuItem })).toBeVisible();
    }

    async addUser(options: ICreateUser) {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await expect(this.page.getByRole('heading', { name: 'Add User' })).toBeVisible();

        await getDropdownLocator(this.page, 'User Role').click();
        await this.page.getByRole('option', { name: options.role }).click();

        await getInputLocator(this.page, 'Employee Name').fill(options.name);
        await this.page.getByText(options.name).click();

        await getDropdownLocator(this.page, 'Status').click();
        await this.page.getByRole('option', { name: options.status }).click();

        await getInputLocator(this.page, 'Username').fill(options.username);
        await getInputLocator(this.page, 'Password').fill(options.password);
        await getInputLocator(this.page, 'Confirm Password').fill(options.password);
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

}
export default AdminPage;
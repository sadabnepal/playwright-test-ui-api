import { expect, Page } from '@playwright/test';
import { ICreateEmployee } from '@ui/interface/employee';
import { getInputLocator, getTableRows } from './component';

class EmployeePage {

    constructor(private readonly page: Page) { }

    async getExistingUserName() {
        const firstRowCells = getTableRows(this.page).first().getByRole('cell');
        const firstName = await firstRowCells.nth(2).innerText();
        const lastName = await firstRowCells.nth(3).innerText();
        return firstName.concat(' ').concat(lastName);
    }

    async addEmployee(options: ICreateEmployee) {
        await this.page.getByRole('link', { name: 'Add Employee' }).click();
        await expect(this.page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();

        await this.page.getByPlaceholder('First Name').fill(options.employeeDetails.firstName);
        await this.page.getByPlaceholder('Middle Name').fill(options.employeeDetails.middleName);
        await this.page.getByPlaceholder('Last Name').fill(options.employeeDetails.lastName);
        await getInputLocator(this.page, 'Employee Id').fill(options.employeeDetails.employeeId);

        if (options.loginDetails) {
            await this.page.locator('.oxd-switch-wrapper').click();
            await getInputLocator(this.page, 'Username').fill(options.loginDetails.username);
            await getInputLocator(this.page, 'Password').fill(options.loginDetails.password);
            await getInputLocator(this.page, 'Confirm Password').fill(options.loginDetails.password);
            await this.page.getByText(options.loginDetails.status).click();
            await this.page.getByRole('button', { name: 'Save' }).click();
        }
    }


}
export default EmployeePage;
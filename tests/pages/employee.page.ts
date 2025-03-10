import { expect, Page } from "@playwright/test";
import { getInputLocator } from "./component";
import { ICreateEmployee } from "../interfaces/employee";

class EmployeePage {

    constructor(private readonly page: Page) { }

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
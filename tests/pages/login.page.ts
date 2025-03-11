import { Page } from '@playwright/test';

class LoginPage {

    constructor(private readonly page: Page) { }

    get pageHeader() { return this.page.getByRole('heading', { name: 'Login' }) };
    get companyLinkFooter() { return this.page.getByRole('link', { name: 'OrangeHRM, Inc' }) };

    async open() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

}
export default LoginPage;
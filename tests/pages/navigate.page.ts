import { expect, Page } from "@playwright/test";

class NavigatePage {

    constructor(private readonly page: Page) { };

    async goto(menuItem: 'Admin' | 'PIM' | 'Leave' | 'Time' | 'Recruitment' | 'Performance' | 'Dashboard' | 'Directory' | 'Maintenance' | 'Claim' | 'Buzz') {
        await this.page.getByRole('link', { name: menuItem }).click();
        await expect(this.page.getByRole('heading', { name: menuItem })).toBeVisible();
    }

}
export default NavigatePage;
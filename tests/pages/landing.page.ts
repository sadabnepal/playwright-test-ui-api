import { Page } from '@playwright/test';
import NavigatePage from './navigate.page';

class LandingPage {

    constructor(private readonly page: Page) { }

    get pageHeader() { return this.page.getByRole('heading', { name: 'Dashboard' }) };

    navigate() {
        return new NavigatePage(this.page);
    }
}
export default LandingPage;
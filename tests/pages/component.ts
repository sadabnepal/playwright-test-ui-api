import { Page } from "@playwright/test";

const getDropdownByLabel = (label: string) => `//label[text()='${label}']/parent::div/following-sibling::*//div[contains(@class, 'select-text--after')]`;
const getInputByLabel = (label: string) => `//label[text()='${label}']/parent::*/following-sibling::*//input`;
export const toastMessage = (page: Page) => page.locator('.oxd-text--toast-message');

export function getInputLocator(page: Page, label: string) {
    return page.locator(getInputByLabel(label));
};

export function getDropdownLocator(page: Page, label: string) {
    return page.locator(getDropdownByLabel(label));
};

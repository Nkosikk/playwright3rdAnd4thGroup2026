import { expect, Page,Locator } from '@playwright/test';
export class basePage {

    constructor(public page: Page) { }

    async GoToUrl(url: string) {
        await this.page.goto(url);
    }

    async ClickElementByLocatorString(locator: string) {
        await this.page.click(locator);
    }

    async ClickElementByLocator(locator: Locator) {
        await locator.click();
    }

    async EnterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async VerifyElementVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

}
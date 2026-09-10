import { basePage } from '../utils/basePage';

export class loginPage extends basePage {

    async openNdosiWebsite() {
        await this.GoToUrl('/');
    }

    async navigateToLoginPage() {
        await this.ClickElementByLocator(this.page.getByRole('button', { name: 'Login' }));
    }
    async userLogin(username: string, password: string) {
        await this.EnterText(this.page.locator('#login-email'),username);
        await this.EnterText(this.page.locator('#login-password'),password);
        await this.ClickElementByLocator(this.page.locator('xpath=//button[contains(.,"Login")]'));
    }
    

}
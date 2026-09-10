import { loginPage } from '../Pages/loginPage';
import { test as base } from '@playwright/test';

type CustomFixture = {
    loginPage: loginPage;
};

export const test = base.extend<CustomFixture>({
    loginPage: async ({ page }, use) => {
        await use(new loginPage(page));
    }
});
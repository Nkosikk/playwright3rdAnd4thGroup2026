import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { test as base } from "@playwright/test";


type CustomFixtures = {
    // Define your custom fixtures here
    loginPage: LoginPage;
    homePage: HomePage;

};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    
});

export const test = base.extend<CustomFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    
});



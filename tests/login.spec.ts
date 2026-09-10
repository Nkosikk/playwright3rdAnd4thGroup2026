import { test } from '../fixtures/customFixture';
import {validUsers} from '../testdata/TestData'


test.describe("Login Tests", () => {

    test("User can login with valid credentials", async ({ loginPage }) => {
        await loginPage.openNdosiWebsite();
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
    });
});
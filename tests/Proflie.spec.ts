import { test } from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";

test.describe("Profile Tests", () => {
        test("User should be able to view profile", async ({ loginPage, homePage }) => {

                await loginPage.openNdosiPage();
                await loginPage.navigateToLoginPage();
                await loginPage.userLogin(
                    validUsers.studentUser.username,
                    validUsers.studentUser.password


                );

            
                await homePage.clickMenu();
                await homePage.ClickMyProfile();
                await homePage.ClickEditProfile();
                await homePage.EditGitProfileName(validUsers.gitusername.mygitusername);
        });
});
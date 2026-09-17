import { BasePage } from "../utils/BasePage";
import { Locator } from "@playwright/test";

export class Homepage extends BasePage{
     async ClickMenu () {
        await this.ClickElement(this.page.getbyrole('button', { name: 'Menu' }));   
     }

     async ClickMyProfile (){
        await this.ClickElement(this.page.getbyrole('button', { name: 'My Profile' }));
     }
    
     async ClickEditProfile (){
        await this.ClickElement(this.page.getbyrole('button', { name: 'Edit Profile' }))
     }

     async EditGitProfileName (gitusername: string ){
        await this.EnterText(this.page.getbyplaceholder('e.g., octocat'), gitusername)
     }
    }
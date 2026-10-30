import { Page, Locator } from '@playwright/test'

export class LoginPageLocators {
    readonly salesPulseLogo		   : Locator
    readonly signInHeader 		   : Locator
    readonly crmPracticeAppHeader1 : Locator
    readonly crmPracticeAppHeader2 : Locator
    readonly crmPracticeAppHeader3 : Locator
    readonly crmDescription1 	   : Locator
    readonly crmDescription2 	   : Locator
    readonly workEmailText 		   : Locator
    readonly passwordText 		   : Locator
    readonly loginBtn 			   : Locator
    readonly rememberMeCheckbox	   : Locator
    readonly keepMeSignedInLabel   : Locator
    readonly loginErrorMessage	   : Locator

    constructor(page: Page){
        this.salesPulseLogo		   = page.getByTestId("app-logo")
        this.signInHeader 		   = page.locator("//h2[text()='Sign in']")
        this.crmPracticeAppHeader1 = page.locator("//p[contains(text(),'CRM practice ')]")
        this.crmPracticeAppHeader2 = page.locator("//h1[contains(text(),'Close more deals')]")
        this.crmPracticeAppHeader3 = page.locator("//span[contains(text(),'faster')]")
        this.crmDescription1 	   = page.locator("//p[contains(text(),'A leads table')]")
        this.crmDescription2 	   = page.locator("//dd[contains(text(),'Sales rep ')]")
        this.workEmailText 		   = page.getByTestId("crm-email")
        this.passwordText 		   = page.getByTestId("crm-password")
        this.loginBtn 			   = page.getByTestId("crm-login")
        this.rememberMeCheckbox	   = page.getByTestId("crm-remember")
        this.keepMeSignedInLabel   = page.locator("//label[contains(text(),' Keep me sign')]")
        this.loginErrorMessage	   = page.getByTestId("crm-login-error")
    }

}
import { Page } from "@playwright/test";
import { LoginPageLocators } from "../page-elements/login-page-locators"
import { WebCommons } from "../../commons/ui/web-commons";
import data from "../../testdata/ui/login-page-data.json" with { type: "json" };
import config from "../../config/config.json" with { type: "json" };

export class LoginPageSteps {
  page: Page;
  web: WebCommons;
  readonly loginPageLocators: LoginPageLocators

  // Constructor to initialize the page and web commons
  constructor(page: Page) {
    this.page = page;
    this.web = new WebCommons(this.page);
    this.loginPageLocators = new LoginPageLocators(this.page)
  }

  // Method to launch the application
  async launchApplication(): Promise<void> {
    await this.web.launchApplication(config.app.url, config.app.title);
    console.log("Application launched successfully");
  }

  async verifyLoginPageIsDisplayed(): Promise<void> {
    await this.web.isElementVisible(this.loginPageLocators.salesPulseLogo);
    await this.web.isElementVisible(this.loginPageLocators.signInHeader);
    await this.web.isElementVisible(this.loginPageLocators.crmPracticeAppHeader1,);
    await this.web.isElementVisible(this.loginPageLocators.crmPracticeAppHeader2,);
    await this.web.isElementVisible(this.loginPageLocators.crmPracticeAppHeader3,);
    await this.web.isElementVisible(this.loginPageLocators.crmDescription1,)
    await this.web.isElementVisible(this.loginPageLocators.crmDescription2,)    
    console.log("Login page is displayed successfully");
  }

  async verifyProvideLoginCredentials(username: string, password: string): Promise<void>{
    await this.web.enterText(this.loginPageLocators.workEmailText, username)
    await this.web.enterText(this.loginPageLocators.passwordText, password)
  }

  async verifyClickOnRememberMeCheckbox(): Promise<void> {
    await this.web.click(this.loginPageLocators.rememberMeCheckbox,)
  }

  async verifyClickOnKeepMeSignedInLabel(): Promise<void> {
    await this.web.click(this.loginPageLocators.keepMeSignedInLabel,)
  }

  async verifyLoginErrorMessageIsDisplayed(): Promise<void> {
    await this.web.isElementVisible(this.loginPageLocators.loginErrorMessage,)
  }

  async verifyClickOnLoginBtn(): Promise<void> {
    await this.web.click(this.loginPageLocators.loginBtn,)
  }
}

import { test, TestInfo } from '@playwright/test'
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts'
import { DashboardPageSteps } from '../../page-objects/page-steps/dashboard-page-steps.ts'
import data from '../../testdata/ui/login-page-data.json' with {type : 'json'}
import config from '../../config/config.json' with {type : 'json'}

let loginPage : LoginPageSteps
let dashboardPageSteps: DashboardPageSteps
let testInfo : TestInfo
let testData : any

test.describe('Login Page Feature Test', ()=>{
    test.beforeEach( async ({ page }) =>{
        loginPage = new LoginPageSteps(page)
        dashboardPageSteps = new DashboardPageSteps(page)
        await loginPage.launchApplication()
        // await loginPage.verifyLoginPageIsDisplayed()
        // await loginPage.verifyProvideLoginCredentials(config.app['username'], config.app['password'])
        // await loginPage.verifyClickOnLoginBtn()
        // await dashboardPageSteps.verifyDashboardPageIsDisplayed()
        // await dashboardPageSteps.clickOnLogoutBtn()
    })

    test('Verify login functionality with valid credentials', async ({ }, testInfo: TestInfo)=> {        
        testData = data[testInfo.title as keyof typeof data]
        await test.step('Verify login page is displayed', async () => {
            await loginPage.verifyLoginPageIsDisplayed()
        })
        
        await test.step('Verify login functionality with valid credentials', async () => {
            await loginPage.verifyProvideLoginCredentials(testData['username'], testData['password'])
        })

        await test.step('Verify click on login button', async () => {
            await loginPage.verifyClickOnLoginBtn()
        })

        await test.step('Verify dashboard page is displayed', async () => {
            await dashboardPageSteps.verifyDashboardPageIsDisplayed()
        })
    })

    test('Verify login functionality with valid username and invalid password', async({}, testInfo: TestInfo)=> {
        testData = data[testInfo.title as keyof typeof data]

        await test.step('Verify login page is displayed', async () => {
            await loginPage.verifyLoginPageIsDisplayed()
        })

        await test.step('Verify login functionality with invalid credentials', async () => {
            await loginPage.verifyProvideLoginCredentials(testData['username'], testData['password'])
        })

        await test.step('Verify click on login button', async () => {
            await loginPage.verifyClickOnLoginBtn()
        })

        await test.step('Verify login error message is displayed', async () => {
            await loginPage.verifyLoginErrorMessageIsDisplayed()
        })
    })

    test('Verify login functionality with invalid username and valid password', async({}, testInfo: TestInfo)=> {
        testData = data[testInfo.title as keyof typeof data]

        await test.step('Verify login page is displayed', async () => {
            await loginPage.verifyLoginPageIsDisplayed()
        })

        await test.step('Verify login functionality with invalid credentials', async () => {
            await loginPage.verifyProvideLoginCredentials(testData['username'], testData['password'])
        })

        await test.step('Verify click on login button', async () => {
            await loginPage.verifyClickOnLoginBtn()
        })

        await test.step('Verify login error message is displayed', async () => {
            await loginPage.verifyLoginErrorMessageIsDisplayed()
        })
    })

    test('Verify login functionality without credentials', async({}, testInfo: TestInfo)=> {
        testData = data[testInfo.title as keyof typeof data]

        await test.step('Verify login page is displayed', async () => {
            await loginPage.verifyLoginPageIsDisplayed()
        })

        await test.step('Verify login functionality with invalid credentials', async () => {
            await loginPage.verifyProvideLoginCredentials(testData['username'], testData['password'])
        })

        await test.step('Verify click on login button', async () => {
            await loginPage.verifyClickOnLoginBtn()
        })

        await test.step('Verify login error message is displayed', async () => {
            await loginPage.verifyLoginErrorMessageIsDisplayed()
        })
    })

    test('Verify login functionality with invalid credentials', async({}, testInfo: TestInfo)=> {
        testData = data[testInfo.title as keyof typeof data]

        await test.step('Verify login page is displayed', async () => {
            await loginPage.verifyLoginPageIsDisplayed()
        })

        await test.step('Verify login functionality with invalid credentials', async () => {
            await loginPage.verifyProvideLoginCredentials(testData['username'], testData['password'])
        })

        await test.step('Verify click on login button', async () => {
            await loginPage.verifyClickOnLoginBtn()
        })

        await test.step('Verify login error message is displayed', async () => {
            await loginPage.verifyLoginErrorMessageIsDisplayed()
        })
    })
    
    test('Verify logout functionality with valid credentials', async ({ }, testInfo: TestInfo)=> {        
        testData = data[testInfo.title as keyof typeof data]
        
        await test.step('Verify login page is displayed', async () => {
            await loginPage.verifyLoginPageIsDisplayed()
        })

        await test.step('Verify login functionality with valid credentials', async () => {
            await loginPage.verifyProvideLoginCredentials(testData['username'], testData['password'])
        })

        await test.step('Verify click on keep me signed in', async () => {
            await loginPage.verifyClickOnKeepMeSignedInLabel()
            await loginPage.verifyClickOnRememberMeCheckbox()
        })
        
        await test.step('Verify click on login button', async () => {
            await loginPage.verifyClickOnLoginBtn()
        })
        
        await test.step('Verify dashboard page is displayed', async () => {
            await dashboardPageSteps.verifyDashboardPageIsDisplayed()
        })

        await test.step('Verify click on logout button', async () => {
            await dashboardPageSteps.clickOnLogoutBtn()
        })
    })

})
import { test, TestInfo } from '@playwright/test'
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts'
import { DashboardPageSteps } from '../../page-objects/page-steps/dashboard-page-steps.ts'
// import dashboardData from '../../testdata/ui/dashboard-page-data.json' with {type : 'json'}
import config from '../../config/config.json' with {type : 'json'}

let loginPage : LoginPageSteps
let dashboardPage: DashboardPageSteps
let testInfo : TestInfo
let testData : any

test.describe('Dashboard Page Feature Test', ()=>{
    test.beforeEach( async ({ page }) =>{
        loginPage = new LoginPageSteps(page)
        dashboardPage = new DashboardPageSteps(page)
        await loginPage.launchApplication()
        await loginPage.verifyLoginPageIsDisplayed()
        await loginPage.verifyProvideLoginCredentials(config.app['username'], config.app['password'])
        await loginPage.verifyClickOnLoginBtn()
    })

    test('Verify Dashboard Functionality', async ({ }, testInfo: TestInfo)=> {
        // testData = dashboardData[testInfo.title as keyof typeof dashboardData]
        await test.step('Verify dashboard page is displayed', async () => {
            await dashboardPage.verifyDashboardPageIsDisplayed()
        })

        await test.step('Verify visibility of open pipeline button', async () => {
            await dashboardPage.verifyIsDisplayedClickOnPipelineButton()
        })

        await test.step('Verify visibility of work my leads button', async () => {
            await dashboardPage.clickOnWorkMyLeadsButton()
        })
    })
})
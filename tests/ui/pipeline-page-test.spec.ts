import { test, TestInfo } from '@playwright/test'
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts'
import { DashboardPageSteps } from '../../page-objects/page-steps/dashboard-page-steps.ts'
import { LeadsPageSteps } from '../../page-objects/page-steps/leads-page-steps.ts'
import { PipelinePageSteps } from '../../page-objects/page-steps/pipeline-page-steps.ts'
import pipelineData from '../../testdata/ui/pipeline-page-data.json' with {type : 'json'}
import config from '../../config/config.json' with {type : 'json'}

let loginPage : LoginPageSteps
let dashboardPage: DashboardPageSteps
let leadsPage: LeadsPageSteps
let pipelinePage: PipelinePageSteps
let testInfo : TestInfo
let testData : any

test.describe('Leads Page Feature Test', ()=>{
    test.beforeEach( async ({ page }) =>{
        loginPage = new LoginPageSteps(page)
        dashboardPage = new DashboardPageSteps(page)
        leadsPage = new LeadsPageSteps(page)
        pipelinePage = new PipelinePageSteps(page)
        await loginPage.launchApplication()
        await loginPage.verifyLoginPageIsDisplayed()
        await loginPage.verifyProvideLoginCredentials(config.app['username'], config.app['password'])
        await loginPage.verifyClickOnLoginBtn()
    })

    test('Verify Drag And Drop Lead from Qualified to Proposal Section', async ({ }, testInfo: TestInfo)=> {

        testData = pipelineData[testInfo.title as keyof typeof pipelineData]
        
        await test.step('Verify Pipeline Menu Link Clicked', async() => {
            await pipelinePage.verifyClickPipelineMenuLink()
        })

        await test.step('Verify Pipeline Page Is displayed', async () => {
            await pipelinePage.verifyPipelinePageIsDisplayed()
        })
        
        await test.step('Verify Drag & Drop Lead from Qualified to Proposal Section', async () => {
            await pipelinePage.verifyDragDrop(testData['company'])
        })

    })

})

import { test, TestInfo } from '@playwright/test'
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts'
import { DashboardPageSteps } from '../../page-objects/page-steps/dashboard-page-steps.ts'
import { LeadsPageSteps } from '../../page-objects/page-steps/leads-page-steps.ts'
import { PipelinePageSteps } from '../../page-objects/page-steps/pipeline-page-steps.ts'
import leadsData from '../../testdata/ui/leads-page-data.json' with {type : 'json'}
import config from '../../config/config.json' with {type : 'json'}

let loginPage : LoginPageSteps
let dashboardPage: DashboardPageSteps
let leadsPage: LeadsPageSteps
let pipelinePage: PipelinePageSteps
let testInfo : TestInfo
let testData : any

test.describe('Leads Page Feature Test', () => {

    test.beforeEach( async ({ page }) => {
        loginPage = new LoginPageSteps(page)
        dashboardPage = new DashboardPageSteps(page)
        leadsPage = new LeadsPageSteps(page)
        pipelinePage = new PipelinePageSteps(page)
        await loginPage.launchApplication()
        await loginPage.verifyLoginPageIsDisplayed()
        await loginPage.verifyProvideLoginCredentials(config.app['username'], config.app['password'])
        await loginPage.verifyClickOnLoginBtn()
    })

        test('Verify Create New Lead And Convert It', async ({ }, testInfo: TestInfo) => {

        testData = leadsData[testInfo.title as keyof typeof leadsData]
        
        await test.step('Verify Dashboard Page Is displayed', async () => {
            await dashboardPage.verifyDashboardPageIsDisplayed()
        })

        await test.step('Verify Get Initial KPI Values', async() => {
            await dashboardPage.verifyFetchInitialKpiValues()
        })

        await test.step('Verify Work My Leads Button Clicked', async () => {
            await dashboardPage.clickOnWorkMyLeadsButton()
        })

        await test.step('Verify Leads Page Is Displayed', async () => {
            await leadsPage.verifyLeadsPageIsDisplayed()
        })

        await test.step('Verify New Lead Button Clicked', async () => {
            await leadsPage.verifyClickOnNewLeadButton()
        })

        await test.step('Verify New Lead form Is Displayed', async () => {
            await leadsPage.verifyNewLeadFormIsDisplayed(testData['jobTitle'], testData['empStatus'])
        })

        await test.step('Verify Create New Lead', async () => {
            await leadsPage.verifyCreateNewLead(testData['contactName'], testData['company'], testData['email'], testData['phone'], testData['source'], testData['estValue'])
        })

        await test.step('Verify Lead, Status Converted And Banner Is Displayed', async () => {
            await leadsPage.verifySearchLead(testData['contactName'])
            await leadsPage.verifyLeadIsDisplayed(testData['contactName'], testData['company'], testData['email'], testData['source'], testData['status'])            
        })

        await test.step('Verify Lead Link Clicked Succesfully And Deal Section Displayed', async () => {
            await leadsPage.verifyClickOnLead()
            await leadsPage.verifyConvertToLeadPageIsDisplayed()
            await leadsPage.verifySaveNotes(testData['note'], testData['logCall'], testData['logEmail'])
            await leadsPage.verifyConvertToDeal(testData['leadStatus'])
            await leadsPage.verifyConfirmConvertToDealFormIsDisplayed()
            await leadsPage.verifyConfirmConvertToDeal(testData['dealValue'], testData['expectedClose'])
        })

        await test.step('Verify View Pipeline Clicked', async()=> {
            await leadsPage.verifyClickOnViewPipeline()
        })

        await test.step('Verify Pipeline Page Is displayed', async () => {
            await pipelinePage.verifyPipelinePageIsDisplayed()
        })
        
        await test.step('Verify Drag & Drop Lead From Qualified To Proposal Section', async () => {
            await pipelinePage.verifyDragDrop(testData['company'])
        })

        await test.step('Verify Dashboard Menu Clicked', async () => {
            await dashboardPage.clickOnDashboardMenu()
        })

        await test.step('Verify Dashboard Page Is displayed', async () => {
            await dashboardPage.verifyDashboardPageIsDisplayed()
        })

        await test.step('Verify Changed KPI Values', async() => {
            await dashboardPage.verifyFetchInitialKpiValues()
            await dashboardPage.verifyFetchLatestKpiValues()
        })
    })

})
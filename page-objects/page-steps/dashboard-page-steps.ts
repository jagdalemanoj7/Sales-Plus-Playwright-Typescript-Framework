import { Page } from "@playwright/test";
import { DashboardPageLocators } from "../page-elements/dashboard-page-locators";
import { WebCommons } from "../../commons/ui/web-commons";
import data from "../../testdata/ui/login-page-data.json" with { type: "json" };
import config from "../../config/config.json" with { type: "json" };

export class DashboardPageSteps {
    page : Page
    web: WebCommons
    dashboardPageLocators : DashboardPageLocators
    private initialPipelineKpiValue : number | null = null
    private initialWonKpiValue : number | null = null
    private initialWinRatePercentage : number | null = null
    private latestPipelineKpiValue : number | null = null
    private latestWonKpiValue : number | null = null
    private latestWinRatePercentage : number | null = null

    constructor(page: Page){
        this.page = page,
        this.web = new WebCommons(this.page)
        this.dashboardPageLocators = new DashboardPageLocators(this.page)
    }

    async verifyDashboardPageIsDisplayed(): Promise<void>{
        await this.web.waitForLoadDOMContent()
        await this.web.isElementVisible(this.dashboardPageLocators.welcomeHeader,)
        // console.log('logo is displayed')
        await this.web.isElementVisible(this.dashboardPageLocators.userLabel,) 
        // console.log('welcome header is displayed')       
        await this.web.isElementVisible(this.dashboardPageLocators.dashboardMenuLink,)        
        // console.log('change pwd link is displayed')
        await this.web.isElementVisible(this.dashboardPageLocators.leadsMenuLink,)
        // console.log('logout link is displayed')
        await this.web.isElementVisible(this.dashboardPageLocators.pipelineMenuLink,)
        // console.log('emp info header is displayed')
        await this.web.isElementVisible(this.dashboardPageLocators.logoutButton,)
        console.log('Dashboard Page is displayed successfully')        
    }

    async clickOnDashboardMenu(): Promise<void>{
        await this.web.click(this.dashboardPageLocators.dashboardMenuLink)
    }

    async clickOnLogoutBtn(): Promise<void>{
        await this.web.click(this.dashboardPageLocators.logoutButton,)
        console.log('logout Button is clicked')
    }

    async verifyFetchInitialKpiValues(): Promise<void>{
        let pipelineKpiValue = await this.web.getElementInnerText(this.dashboardPageLocators.kpiPipelineLabel, 0)
        pipelineKpiValue = pipelineKpiValue.replace(/[^0-9]/g,'')
        this.initialPipelineKpiValue = parseInt(pipelineKpiValue)
        let wonKpiValue = await this.web.getElementInnerText(this.dashboardPageLocators.kpiWonLabel, 0)
        wonKpiValue = wonKpiValue.replace(/[^0-9]/g,'')
        this.initialWonKpiValue = parseInt(wonKpiValue)
        let winRateValue = await this.web.getElementInnerText(this.dashboardPageLocators.kpiWinRateLabel, 0)
        winRateValue = winRateValue.replace(/[^0-9]/g,'')
        this.initialWinRatePercentage = parseInt(winRateValue)        
    }

    async verifyFetchLatestKpiValues(): Promise<void>{
        let pipelineKpiValue = await this.web.getElementInnerText(this.dashboardPageLocators.kpiPipelineLabel, 0)
        pipelineKpiValue = pipelineKpiValue.replace(/[^0-9]/g,'')
        this.latestPipelineKpiValue = parseInt(pipelineKpiValue)
        let wonKpiValue = await this.web.getElementInnerText(this.dashboardPageLocators.kpiWonLabel, 0)
        wonKpiValue = wonKpiValue.replace(/[^0-9]/g,'')
        this.latestWonKpiValue = parseInt(wonKpiValue)
        let winRateValue = await this.web.getElementInnerText(this.dashboardPageLocators.kpiWinRateLabel, 0)
        winRateValue = winRateValue.replace(/[^0-9]/g,'')
        this.latestWinRatePercentage = parseInt(winRateValue)

        this.latestPipelineKpiValue = this.latestPipelineKpiValue - this.initialPipelineKpiValue!
        this.latestWonKpiValue = this.latestWonKpiValue - this.initialWonKpiValue!
        this.latestWinRatePercentage = this.latestWinRatePercentage - this.initialWinRatePercentage!

        if( this.latestPipelineKpiValue > this.initialPipelineKpiValue!
            && this.latestWonKpiValue > this.initialWonKpiValue!
            && this.latestWinRatePercentage > this.initialWinRatePercentage!
        ) {
            this.web.validateValues(this.dashboardPageLocators.kpiPipelineLabel, this.latestPipelineKpiValue)
            this.web.validateValues(this.dashboardPageLocators.kpiWonLabel, this.latestPipelineKpiValue)
            this.web.validateValues(this.dashboardPageLocators.kpiWinRateLabel, this.latestPipelineKpiValue)
        }
    }

    async clickOnWorkMyLeadsButton(): Promise<void> {
        await this.web.click(this.dashboardPageLocators.workMyLeadsButton,)
        console.log('Leads button is clicked')
    }
 
    async verifyIsDisplayedClickOnPipelineButton(): Promise<void> {
        await this.web.isElementVisible(this.dashboardPageLocators.openPipelineButton)    
        // await this.web.click(dashboardPage.openPipelineButton, 'getByText')
        // console.log('Pipeline button is clicked')
    }

}
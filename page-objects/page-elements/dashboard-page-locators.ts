import { Page, Locator } from '@playwright/test'

export class DashboardPageLocators {
    readonly userLabel:		     Locator
    readonly welcomeHeader:	     Locator
    readonly kpiPipelineLabel:   Locator
    readonly kpiWonLabel:        Locator
    readonly kpiWinRateLabel:    Locator
    readonly dashboardMenuLink:  Locator
    readonly leadsMenuLink:	     Locator
    readonly pipelineMenuLink:	 Locator
    readonly logoutButton:		 Locator
    readonly workMyLeadsButton:  Locator
    readonly openPipelineButton: Locator

    constructor(page: Page){
        this.userLabel =          page.getByTestId("crm-user")				
        this.welcomeHeader =      page.locator("//h1[contains(text(),'Welcome, ')]")
        this.kpiPipelineLabel =   page.getByTestId("kpi-pipeline-value")
        this.kpiWonLabel =        page.getByTestId("kpi-won")
        this.kpiWinRateLabel =    page.getByTestId("kpi-win-rate")
        this.dashboardMenuLink =  page.getByTestId("nav-dashboard")
        this.leadsMenuLink =      page.getByTestId("nav-leads")
        this.pipelineMenuLink =   page.getByTestId("nav-pipeline")
        this.logoutButton =       page.getByTestId("crm-logout")
        this.workMyLeadsButton =  page.getByTestId("go-to-leads")
        this.openPipelineButton = page.getByText("Open pipeline")
    }

}
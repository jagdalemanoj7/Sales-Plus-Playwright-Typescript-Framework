import { Page } from "@playwright/test";
import { PipelinePageLocators } from "../page-elements/pipeline-page-locators";
import { WebCommons } from "../../commons/ui/web-commons";

export class PipelinePageSteps {
  page: Page;
  web: WebCommons;
  readonly pipelinePageLocators: PipelinePageLocators;

  // Constructor to initialize the page and web commons
  constructor(page: Page) {
    this.page = page;
    this.web = new WebCommons(this.page);
    this.pipelinePageLocators = new PipelinePageLocators(this.page);
  }

  async verifyClickPipelineMenuLink(): Promise<void> {
    await this.web.click(this.pipelinePageLocators.pipelineMenuLink);
  }

  async verifyPipelinePageIsDisplayed(): Promise<void> {
    await this.web.waitForLoadDOMContent();
    await this.web.isElementVisible(this.pipelinePageLocators.pipelineMenuLink);
    await this.web.isElementVisible(this.pipelinePageLocators.pipelineTitle);
    await this.web.isElementVisible(this.pipelinePageLocators.pipelineDescr);
    await this.web.isElementVisible(
      this.pipelinePageLocators.pipelineQualifiedHeader,
    );
    await this.web.isElementVisible(
      this.pipelinePageLocators.pipelineProposalHeader,
    );
    await this.web.isElementVisible(
      this.pipelinePageLocators.pipelineNegotiationHeader,
    );
    await this.web.isElementVisible(
      this.pipelinePageLocators.pipelineWonHeader,
    );
    await this.web.isElementVisible(
      this.pipelinePageLocators.pipelineLostHeader,
    );
    console.log("Pipeline page is displayed successfully");
  }

  async verifyDragDrop(company: string): Promise<void> {
    const source = await this.web.filter(
      this.pipelinePageLocators.pipelineLeadCompany,
      company,
    );
    const target = this.pipelinePageLocators.pipelineWonStage;
    await this.web.dragAndDrop(source, target);

    // Verify lead is now inside Proposal section
    await this.web.filter(
      this.pipelinePageLocators.pipelineLeadCompany,
      company,
    );
    await this.web.waitForTimeout(4000);
  }
  
}

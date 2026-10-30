import { Locator, Page } from "@playwright/test";

export class PipelinePageLocators {
  readonly pipelineMenuLink: Locator;
  readonly pipelineTitle: Locator;
  readonly pipelineDescr: Locator;
  readonly pipelineQualifiedHeader: Locator;
  readonly pipelineProposalHeader: Locator;
  readonly pipelineNegotiationHeader: Locator;
  readonly pipelineWonHeader: Locator;
  readonly pipelineLostHeader: Locator;
  readonly pipelineQualifiedLeadCompany: Locator;
  readonly pipelineProposalLeadCompany: Locator;
  readonly pipelineLeadCompany: Locator;
  readonly pipelineQualifiedStage: Locator;
  readonly pipelineProposalStage: Locator;
  readonly pipelineNegotiationStage: Locator;
  readonly pipelineWonStage: Locator;
  readonly pipelineLostStage: Locator;

  constructor(page: Page) {
    this.pipelineMenuLink = page.getByTestId("nav-pipeline");
    this.pipelineTitle = page.getByTestId("page-title");
    this.pipelineDescr = page.locator("//p[contains(text(),'Drag cards')]");
    this.pipelineQualifiedHeader = page.locator("//h2[contains(text(),'Qualified')]",);
    this.pipelineProposalHeader = page.locator("//h2[contains(text(),'Proposal')]",);
    this.pipelineNegotiationHeader = page.locator("//h2[contains(text(),'Negotiation')]",);
    this.pipelineWonHeader = page.locator("//h2[contains(text(),'Won')]");
    this.pipelineLostHeader = page.locator("//h2[contains(text(),'Lost')]");
    this.pipelineQualifiedLeadCompany = page.locator("//section[contains(@aria-label,'Qualified')]/descendant::p",);
    this.pipelineProposalLeadCompany = page.locator("//section[contains(@aria-label,'Proposal')]/descendant::p",);
    this.pipelineLeadCompany = page.locator("p");
    this.pipelineQualifiedStage = page.getByTestId("stage-qualified");
    this.pipelineProposalStage = page.getByTestId("stage-proposal");
    this.pipelineNegotiationStage = page.getByTestId("stage-negotiation");
    this.pipelineWonStage = page.getByTestId("stage-won");
    this.pipelineLostStage = page.getByTestId("stage-lost");
  }
}

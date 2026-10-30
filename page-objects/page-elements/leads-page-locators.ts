import { Locator, Page } from "@playwright/test";

export class LeadsPageLocators {
  readonly leadsMenuLink: Locator;
  readonly leadsTitle: Locator;
  readonly leadCountLabel: Locator;
  readonly newLeadButton: Locator;
  readonly leadSearchTextBox: Locator;
  readonly leadStatusFilterDropdown: Locator;
  readonly leadStatusFilterDropdownOptions: Locator;
  readonly leadSourceFilterDropdown: Locator;
  readonly leadSourceFilterDropdownOptions: Locator;
  readonly selectLeadCheckboxCountLabel: Locator;
  readonly leadRecordRow: Locator;
  readonly leadRecordCheckbox: Locator;
  readonly leadCompanyFilter: Locator;
  readonly leadOwnerFilterDropdown: Locator;
  readonly applyOwnerFilterSelectionButton: Locator;
  readonly clearOwnerFilterSelectionButton: Locator;
  readonly selectAllLeadsChechbox: Locator;
  readonly leadContactLabel: Locator;
  readonly leadEmailLabel: Locator;
  readonly leadCompanyLabel: Locator;
  readonly leadSourceLabel: Locator;
  readonly leadStatusLabel: Locator;
  readonly leadOwnerLabel: Locator;
  readonly SuccessToaster: Locator;
  readonly noLeadsMatchLabel: Locator;
  readonly newLeadModalTitle: Locator;
  readonly contactNameTextBox: Locator;
  readonly companyTextBox: Locator;
  readonly emailTextBox: Locator;
  readonly phoneTextBox: Locator;
  readonly leadSourceDropdown: Locator;
  readonly estValueTextBox: Locator;
  readonly saveLeadButton: Locator;
  readonly newLeadModalCloseButton: Locator;
  readonly backToLeadsLink: Locator;
  readonly convertToLeadTitle: Locator;
  readonly convertToLeadDescription: Locator;
  readonly convertToLeadNoteButton: Locator;
  readonly convertToLeadNoteTextarea: Locator;
  readonly convertToLeadLogCallButton: Locator;
  readonly convertToLeadLogCallTextarea: Locator;
  readonly convertToLeadEmailButton: Locator;
  readonly convertToLeadLogEmailTextarea: Locator;
  readonly convertToLeadStatus: Locator;
  readonly convertToLeadSaveNoteButton: Locator;
  readonly convertToLeadSavedNoteLog: Locator;
  readonly convertToLeadSavedCallLog: Locator;
  readonly convertToLeadSavedEmailLog: Locator;
  readonly convertToLeadActivityTimelineLabel: Locator;
  readonly convertToLeadOwnerLable: Locator;
  readonly convertToLeadOwnerValueLable: Locator;
  readonly convertToLeadSourceLable: Locator;
  readonly convertToLeadSourceValueLable: Locator;
  readonly convertToLeadEstLable: Locator;
  readonly convertToLeadEstValueLable: Locator;
  readonly convertToLeadStatusDropdown: Locator;
  readonly convertToLeadButton: Locator;
  readonly confirmCreateDealFormTitle: Locator;
  readonly confirmCreateDealFormClose: Locator;
  readonly confirmCreateDealValueLabel: Locator;
  readonly confirmCreateDealValueTextbox: Locator;
  readonly confirmCreateDealLeadEstLabel: Locator;
  readonly confirmCreateDealExpCloseLabel: Locator;
  readonly confirmCreateDealCloseDropdown: Locator;
  readonly confirmCreateDealButton: Locator;
  readonly convertToLeadBanner: Locator;
  readonly convertToLeadViewPipeline: Locator;

  constructor(page: Page) {
    this.leadsMenuLink = page.getByTestId("nav-leads");
    this.leadsTitle = page.getByTestId("page-title");
    this.leadCountLabel = page.getByTestId("lead-count");
    this.newLeadButton = page.getByTestId("new-lead");
    this.leadSearchTextBox = page.getByTestId("lead-search");
    this.leadStatusFilterDropdown = page.getByTestId("lead-status-filter");
    this.leadStatusFilterDropdownOptions = page.locator(
      "//select[contains(@id,'lead-status-filter')]/option",
    );
    this.leadSourceFilterDropdown = page.getByTestId("lead-source-filter");
    this.leadSourceFilterDropdownOptions = page.locator(
      "//select[contains(@id,'lead-source-filter')]/option",
    );
    this.selectLeadCheckboxCountLabel = page.getByTestId("selected-count");
    this.leadRecordRow = page.locator("tr[data-testid='lead-row']");
    this.leadRecordCheckbox = page.locator('input[type="checkbox"]');
    this.leadCompanyFilter = page.locator("td");
    this.leadOwnerFilterDropdown = page.getByTestId("bulk-owner");
    this.applyOwnerFilterSelectionButton = page.getByTestId("apply-bulk");
    this.clearOwnerFilterSelectionButton = page.getByTestId("clear-selection");
    this.selectAllLeadsChechbox = page.getByTestId("select-all-leads");
    this.leadContactLabel = page.locator("//td/a");
    this.leadEmailLabel = page.locator("//td/div");
    this.leadCompanyLabel = page.locator("//td[3]");
    this.leadSourceLabel = page.locator("//td[4]");
    this.leadStatusLabel = page.locator("//td/span");
    this.leadOwnerLabel = page.locator("//td[6]");
    this.SuccessToaster = page.getByTestId("leads-toast");
    this.noLeadsMatchLabel = page.locator(
      "//div[contains(@data-testid,'no-leads')]/p",
    );
    this.newLeadModalTitle = page.locator(
      "//h2[contains(@class,'text-lg font-bold')]",
    );
    this.contactNameTextBox = page.getByTestId("lead-name");
    this.companyTextBox = page.getByTestId("lead-company");
    this.emailTextBox = page.getByTestId("lead-email");
    this.phoneTextBox = page.getByTestId("lead-phone");
    this.leadSourceDropdown = page.locator("//label/following-sibling::select");
    this.estValueTextBox = page.getByTestId("lead-value");
    this.saveLeadButton = page.getByTestId("save-lead");
    this.newLeadModalCloseButton = page.getByTestId("new-lead-modal-close");
    this.backToLeadsLink = page.getByTestId("back-to-leads");
    this.convertToLeadTitle = page.getByTestId("lead-title");
    this.convertToLeadDescription = page.locator("//h1/following-sibling::p");
    this.convertToLeadNoteButton = page.getByTestId("activity-note");
    this.convertToLeadNoteTextarea = page.getByPlaceholder("Add a note…");
    this.convertToLeadLogCallButton = page.getByTestId("activity-call");
    this.convertToLeadLogCallTextarea = page.getByPlaceholder("Call summary…");
    this.convertToLeadEmailButton = page.getByTestId("activity-email");
    this.convertToLeadLogEmailTextarea =
      page.getByPlaceholder("Email summary…");
    this.convertToLeadStatus = page.locator("//div/following-sibling::span");
    this.convertToLeadSaveNoteButton = page.getByTestId("log-activity");
    this.convertToLeadSavedNoteLog = page.locator(
      "//strong[text()='note']/following-sibling::p",
    );
    this.convertToLeadSavedCallLog = page.locator(
      "//strong[text()='call']/following-sibling::p",
    );
    this.convertToLeadSavedEmailLog = page.locator(
      "//strong[text()='email']/following-sibling::p",
    );
    this.convertToLeadActivityTimelineLabel =
      page.getByTestId("activity-timeline");
    this.convertToLeadOwnerLable = page.locator(
      "//dt[contains(text(),'Owner')]",
    );
    this.convertToLeadOwnerValueLable = page.locator(
      "//dt[contains(text(),'Owner')]/following-sibling::dd",
    );
    this.convertToLeadSourceLable = page.locator(
      "//dt[contains(text(),'Source')]",
    );
    this.convertToLeadSourceValueLable = page.locator(
      "//dt[contains(text(),'Source')]/following-sibling::dd",
    );
    this.convertToLeadEstLable = page.locator(
      "//dt[contains(text(),'Est. value')]",
    );
    this.convertToLeadEstValueLable = page.locator(
      "//dt[contains(text(),'Est. value')]/following-sibling::dd",
    );
    this.convertToLeadStatusDropdown = page.getByTestId("lead-status-select");
    this.convertToLeadButton = page.getByTestId("convert-lead");
    this.confirmCreateDealFormTitle = page.locator(
      "//h2[contains(text(), 'Convert ')]",
    );
    this.confirmCreateDealFormClose = page.getByTestId("convert-modal-close");
    this.confirmCreateDealValueLabel = page.locator(
      "//label[contains(text(),'Deal value (USD)')]",
    );
    this.confirmCreateDealValueTextbox = page.getByTestId("deal-value");
    this.confirmCreateDealLeadEstLabel = page.locator(
      "//p[contains(text(),'Lead est')]",
    );
    this.confirmCreateDealExpCloseLabel = page.locator(
      "//label[contains(text(),'Expected close')]",
    );
    this.confirmCreateDealCloseDropdown = page.getByTestId("deal-close");
    this.confirmCreateDealButton = page.getByTestId("confirm-convert");
    this.convertToLeadBanner = page.getByTestId("converted-banner");
    this.convertToLeadViewPipeline = page.getByTestId("view-pipeline");
  }
}

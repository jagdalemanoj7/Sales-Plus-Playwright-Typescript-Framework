import { Page } from "@playwright/test";
import { LeadsPageLocators } from "../page-elements/leads-page-locators";
import { WebCommons } from "../../commons/ui/web-commons";

export class LeadsPageSteps {
  page: Page;
  web: WebCommons;
  readonly leadsPageLocators: LeadsPageLocators;
  private selectedLeadCount: number | null = null
  
  // Constructor to initialize the page and web commons
  constructor(page: Page) {
    this.page = page;
    this.web = new WebCommons(this.page);
    this.leadsPageLocators = new LeadsPageLocators(this.page);
  }

  async verifyLeadsPageIsDisplayed(): Promise<void> {
    await this.web.waitForLoadDOMContent();
    await this.web.isElementVisible(this.leadsPageLocators.leadsMenuLink);
    await this.web.isElementVisible(this.leadsPageLocators.leadsTitle);
    await this.web.isElementVisible(this.leadsPageLocators.leadCountLabel);
    await this.web.isElementVisible(this.leadsPageLocators.newLeadButton);
    console.log("Leads page is displayed successfully");
  }

  async verifyClickOnNewLeadButton(): Promise<void> {
    await this.web.click(this.leadsPageLocators.newLeadButton);
    console.log("clicked on New Lead button");
  }

  async verifyNewLeadFormIsDisplayed(
    jobTitle: string,
    empStatus: string,
  ): Promise<void> {
    await this.web.isElementVisible(this.leadsPageLocators.newLeadModalTitle);
    await this.web.isElementVisible(
      this.leadsPageLocators.newLeadModalCloseButton,
    );
    await this.web.isElementVisible(this.leadsPageLocators.contactNameTextBox);
    await this.web.isElementVisible(this.leadsPageLocators.companyTextBox);
    await this.web.isElementVisible(this.leadsPageLocators.emailTextBox);
    await this.web.isElementVisible(this.leadsPageLocators.phoneTextBox);
    await this.web.isElementVisible(this.leadsPageLocators.leadSourceDropdown);
    await this.web.isElementVisible(this.leadsPageLocators.estValueTextBox);
    await this.web.isElementVisible(this.leadsPageLocators.saveLeadButton);
    console.log("New Lead form is displayed successfully");
  }

  async verifyCreateNewLead(
    contactName: string,
    company: string,
    email: string,
    phone: string,
    source: string,
    estValue: string,
  ): Promise<void> {
    await this.web.enterText(
      this.leadsPageLocators.contactNameTextBox,
      contactName,
    );
    await this.web.verifyTextFilled(
      this.leadsPageLocators.contactNameTextBox,
      contactName,
    );
    await this.web.enterText(this.leadsPageLocators.companyTextBox, company);
    await this.web.verifyTextFilled(
      this.leadsPageLocators.companyTextBox,
      company,
    );
    await this.web.enterText(this.leadsPageLocators.emailTextBox, email);
    await this.web.verifyTextFilled(this.leadsPageLocators.emailTextBox, email);
    await this.web.enterText(this.leadsPageLocators.phoneTextBox, phone);
    await this.web.verifyTextFilled(this.leadsPageLocators.phoneTextBox, phone);
    await this.web.selectOption(
      this.leadsPageLocators.leadSourceDropdown,
      source,
    );
    await this.web.enterText(this.leadsPageLocators.estValueTextBox, estValue);
    await this.web.verifyTextFilled(
      this.leadsPageLocators.estValueTextBox,
      estValue,
    );
    await this.web.click(this.leadsPageLocators.saveLeadButton);
    console.log("New Lead details are provided successfully");
  }

  async verifySearchLead(contactName: string): Promise<void> {
    await this.web.enterText(
      this.leadsPageLocators.leadSearchTextBox,
      contactName,
    );
    console.log("Search contact name is entered successfully");
  }

  async verifyLeadIsDisplayed(
    contactName: string,
    company: string,
    email: string,
    source: string,
    status: string,
  ): Promise<void> {
    const actualContactName = await this.web.getElementInnerText(
      this.leadsPageLocators.leadContactLabel, 0
    );
    await this.web.compareText(actualContactName, contactName);
    const actualCompany = await this.web.getElementInnerText(
      this.leadsPageLocators.leadCompanyLabel, 0
    );
    await this.web.compareText(actualCompany, company);
    const actualEmail = await this.web.getElementInnerText(
      this.leadsPageLocators.leadEmailLabel, 0
    );
    await this.web.compareText(actualEmail, email);
    const actualSource = await this.web.getElementInnerText(
      this.leadsPageLocators.leadSourceLabel, 0
    );
    await this.web.compareText(actualSource, source);
    const actualStatus = await this.web.getElementInnerText(
      this.leadsPageLocators.leadStatusLabel, 0
    );
    await this.web.compareText(actualStatus, status);
    console.log(
      "New Lead, status is converted and Banner displayed successfully",
    );
    // await this.web.waitForTimeout(9000) // Wait for 2 seconds to ensure the lead is displayed
  }

  async verifyClickOnLead(): Promise<void> {
    await this.web.click(this.leadsPageLocators.leadContactLabel);
    console.log("Searched Lead is clicked successfully");
  }

  async verifyConvertToLeadPageIsDisplayed(): Promise<void> {
    await this.web.isElementVisible(this.leadsPageLocators.backToLeadsLink);
    await this.web.isElementVisible(this.leadsPageLocators.convertToLeadTitle);
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadDescription,
    );
    await this.web.isElementVisible(this.leadsPageLocators.convertToLeadStatus);
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadNoteButton,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadNoteTextarea,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadLogCallButton,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadEmailButton,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadSaveNoteButton,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadActivityTimelineLabel,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadOwnerLable,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadOwnerValueLable,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadSourceLable,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadSourceValueLable,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadEstLable,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadEstValueLable,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.convertToLeadStatusDropdown,
    );
    await this.web.isElementVisible(this.leadsPageLocators.convertToLeadButton);
    console.log("Convert to Lead page is displayed successfully");
  }

  async verifySaveNotes(
    note: string,
    callSummary: string,
    emailSummary: string,
  ): Promise<void> {
    await this.web.click(this.leadsPageLocators.convertToLeadNoteButton);
    await this.web.enterText(
      this.leadsPageLocators.convertToLeadNoteTextarea,
      note,
    );
    await this.web.verifyTextFilled(
      this.leadsPageLocators.convertToLeadNoteTextarea,
      note,
    );
    await this.web.click(this.leadsPageLocators.convertToLeadSaveNoteButton);
    await this.web.verifyDisplayedText(
      this.leadsPageLocators.convertToLeadSavedNoteLog,
      note,
      0
    );
    await this.web.click(this.leadsPageLocators.convertToLeadLogCallButton);
    await this.web.enterText(
      this.leadsPageLocators.convertToLeadLogCallTextarea,
      callSummary,
    );
    await this.web.verifyTextFilled(
      this.leadsPageLocators.convertToLeadLogCallTextarea,
      callSummary,
    );
    await this.web.click(this.leadsPageLocators.convertToLeadSaveNoteButton);
    await this.web.verifyDisplayedText(
      this.leadsPageLocators.convertToLeadSavedCallLog,
      callSummary,
      0
    );
    await this.web.click(this.leadsPageLocators.convertToLeadEmailButton);
    await this.web.enterText(
      this.leadsPageLocators.convertToLeadLogEmailTextarea,
      emailSummary,
    );
    await this.web.verifyTextFilled(
      this.leadsPageLocators.convertToLeadLogEmailTextarea,
      emailSummary,
    );
    await this.web.click(this.leadsPageLocators.convertToLeadSaveNoteButton);
    await this.web.verifyDisplayedText(
      this.leadsPageLocators.convertToLeadSavedEmailLog,
      emailSummary,
      0
    );
    console.log("Note is added and saved successfully");
  }

  async verifyConvertToDeal(status: string): Promise<void> {
    await this.web.selectOption(
      this.leadsPageLocators.convertToLeadStatusDropdown,
      status,
    );
    await this.web.click(this.leadsPageLocators.convertToLeadButton);
    console.log("Status Provided and CLicked on convert to deal successfully");
  }

  async verifyConfirmConvertToDealFormIsDisplayed(): Promise<void> {
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealFormTitle,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealFormClose,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealValueLabel,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealValueTextbox,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealLeadEstLabel,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealExpCloseLabel,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealCloseDropdown,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.confirmCreateDealButton,
    );
    console.log("Confirm Convert To Deal Form is Displayed Successfully");
  }

  async verifyConfirmConvertToDeal(
    dealValue: string,
    expClose: string,
  ): Promise<void> {
    await this.web.enterText(
      this.leadsPageLocators.confirmCreateDealValueTextbox,
      dealValue,
    );
    await this.web.verifyTextFilled(
      this.leadsPageLocators.confirmCreateDealValueTextbox,
      dealValue,
    );
    await this.web.selectOption(
      this.leadsPageLocators.confirmCreateDealCloseDropdown,
      expClose,
    );
    await this.web.click(this.leadsPageLocators.confirmCreateDealButton);
    await this.web.isElementVisible(this.leadsPageLocators.convertToLeadBanner);
    console.log("Deal Created Successfully");
  }

  async verifyClickOnViewPipeline(): Promise<void> {
    await this.web.click(this.leadsPageLocators.convertToLeadViewPipeline);
  }

  async verifyClickOnLeadMenuLink(): Promise<void> {
    await this.web.click(this.leadsPageLocators.leadsMenuLink);
    console.log("clicked on Lead menu link");
  }

  async verifyCountOfStatusDropdownFilterOptions(): Promise<number> {
    return await this.web.getCount(
      this.leadsPageLocators.leadStatusFilterDropdownOptions,
    );
  }

  async verifyCountOfStatusLabelOptions(): Promise<number> {
    return await this.web.getCount(this.leadsPageLocators.leadStatusLabel);
  }

  async verifyLeadRecordFilteredWithStatusOptions(
    statusOptions: string[],
    allStatuses: string,
  ): Promise<void> {
    let statusDropdownOptionCount =
      await this.verifyCountOfStatusDropdownFilterOptions();

    for (let i = 0; i < statusDropdownOptionCount - 1; i++) {
      await this.web.selectOption(
        this.leadsPageLocators.leadStatusFilterDropdown,
        statusOptions[i],
      );
      let statusLabelOptionCount = await this.verifyCountOfStatusLabelOptions();

      for (let j = 0; j < statusLabelOptionCount; j++) {
        if (statusOptions[i] !== "Converted") {
          await this.web.verifyDisplayedText(
            this.leadsPageLocators.leadStatusLabel,
            statusOptions[i],
            j,
          );
          await this.web.verifyElementCount(
            this.leadsPageLocators.leadStatusLabel,
            statusLabelOptionCount,
          );
        } else {
          await this.web.verifyDisplayedText(
            this.leadsPageLocators.noLeadsMatchLabel,
            statusOptions[i],
            0,
          );
        }
      }
    }
    await this.web.selectOption(
      this.leadsPageLocators.leadStatusFilterDropdown,
      allStatuses,
    );
  }

  async verifySelectStatusOption(
    statusOption: string
  ): Promise<void>{
    await this.web.selectOption(
        this.leadsPageLocators.leadStatusFilterDropdown,
        statusOption,
    );
    await this.web.verifyDisplayedText(
        this.leadsPageLocators.leadStatusLabel,
        statusOption,
        0,
    );
  }

  async verifyCountOfSourceDropdownFilterOptions(): Promise<number> {
    return await this.web.getCount(
      this.leadsPageLocators.leadSourceFilterDropdownOptions,
    );
  }

  async verifyCountOfSourceLabelOptions(): Promise<number> {
    return await this.web.getCount(this.leadsPageLocators.leadSourceLabel);
  }

  async verifyLeadRecordFilteredWithSourceOptions(
    sourceOptions: string[],
    allSources: string,
  ): Promise<void> {
    let sourceDropdownOptionCount =
      await this.verifyCountOfSourceDropdownFilterOptions();

    for (let i = 0; i < sourceDropdownOptionCount - 1; i++) {
      await this.web.selectOption(
        this.leadsPageLocators.leadSourceFilterDropdown,
        sourceOptions[i],
      );

      let sourceLabelOptionCount = await this.verifyCountOfSourceLabelOptions();

      for (let j = 0; j < sourceLabelOptionCount; j++) {
        if (sourceOptions[i] !== "Converted") {
          await this.web.verifyDisplayedText(
            this.leadsPageLocators.leadSourceLabel,
            sourceOptions[i],
            j,
          );
          await this.web.verifyElementCount(
            this.leadsPageLocators.leadSourceLabel,
            sourceLabelOptionCount,
          );
        } else {
          await this.web.verifyDisplayedText(
            this.leadsPageLocators.noLeadsMatchLabel,
            sourceOptions[i],
            0,
          );
        }
      }
    }
    await this.web.selectOption(
      this.leadsPageLocators.leadSourceFilterDropdown,
      allSources,
    );
  }

  async verifySelectAllLeadsCheckboxIsSelected(): Promise<void> {
    await this.web.isCheckboxNotChecked(
      this.leadsPageLocators.selectAllLeadsChechbox,
    );
    await this.web.click(this.leadsPageLocators.selectAllLeadsChechbox);
    await this.web.isCheckboxChecked(
      this.leadsPageLocators.selectAllLeadsChechbox,
    );
    this.selectedLeadCount = await this.verifyGetCountOfSelectedLeadsUsingCountLabel();
    await this.web.waitForTimeout(1000)
  }

  async verifyOwnerIsSelectedFromDropdown(owner: string): Promise<void> {
    await this.web.isElementVisible(
      this.leadsPageLocators.leadOwnerFilterDropdown,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.selectLeadCheckboxCountLabel,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.applyOwnerFilterSelectionButton,
    );
    await this.web.isElementVisible(
      this.leadsPageLocators.clearOwnerFilterSelectionButton,
    );
    await this.web.selectOption(
      this.leadsPageLocators.leadOwnerFilterDropdown,
      owner,
    );
    await this.web.waitForTimeout(4000);
  }

  async verifyOwnerFilterApplyButtonClick(): Promise<void> {
    await this.web.click(
      this.leadsPageLocators.applyOwnerFilterSelectionButton,
    );
    await this.web.isElementVisible(this.leadsPageLocators.SuccessToaster);
  }
  
  async verifyCountOfOwnerLabelOptions(): Promise<number> {
    return await this.web.getCount(this.leadsPageLocators.leadOwnerLabel);
  }

  async verifyGetCountOfSelectedLeadsUsingCountLabel(): Promise<number> {
    const text = await this.web.getElementInnerText(
      this.leadsPageLocators.selectLeadCheckboxCountLabel, 0
    );
    // return Number(text.replace(/[^0-9]/g, ""));
    return parseInt(text.replace(/[^0-9]/g,''))
  }

  async verifySelectedLeadIsChecked(
    companies: string[],
  ): Promise<void> {
    for (let index = 0; index < companies.length; index++) {
        // filtering company exist in row and that checkbox
        const row = this.leadsPageLocators.leadRecordRow.filter({
            has: this.leadsPageLocators.leadCompanyFilter.filter({
                hasText: companies[index],
            }),
        })//.filter({ has : this.leadsPageLocators.leadRecordCheckbox });
        const checkbox = row.locator('input[type="checkbox"]');
        await checkbox.check();
    }
    this.selectedLeadCount = await this.verifyGetCountOfSelectedLeadsUsingCountLabel();
    await this.web.waitForTimeout(1000);
  }

  async getDisplayedLeadCount(): Promise<number> {
     return this.web.getCount(this.leadsPageLocators.leadRecordRow);
  }

  async verifySelectedOwnerAppliedToLead(owner: string): Promise<void> {
    
    for (let i = 0; i < this.selectedLeadCount!; i++) {
      await this.web.verifyDisplayedText(
        this.leadsPageLocators.leadOwnerLabel,
        owner,
        i,
      );
    }
    await this.web.waitForTimeout(1000);
  }

  async verifySelectedOwnerAppliedToSelectiveLead(owner: string, companies: string[]): Promise<void> {
    
    for (let index = 0; index < this.selectedLeadCount!; index++) {
        const row = this.leadsPageLocators.leadRecordRow.filter({
            has: this.leadsPageLocators.leadCompanyFilter.filter({
                hasText: companies[index],
            }),
        })
        const leadOwner = row.locator("//td[6]");

      await this.web.verifyDisplayedText(
        leadOwner,
        owner,
        0,
      );
    }    
    await this.web.waitForTimeout(1000);
  }

  async verifyOwnerFilterClearButtonClick(): Promise<void> {
    await this.web.click(
      this.leadsPageLocators.clearOwnerFilterSelectionButton,
    );
    await this.web.isCheckboxNotChecked(
      this.leadsPageLocators.selectAllLeadsChechbox,
    );
    await this.web.waitForTimeout(1000)
  }
}

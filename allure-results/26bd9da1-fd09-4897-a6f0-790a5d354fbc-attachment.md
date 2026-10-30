# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify create new lead and convert it
- Location: tests\ui\leads-page-test.spec.ts:28:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.dragTo: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('p').filter({ hasText: 'Tech Nova Solutions' })
    - locator resolved to <p class="font-bold">Tech Nova Solutions</p>
  - attempting move and down action
    - waiting for element to be visible and stable
    - element is visible and stable
    - scrolling into view if needed
    - done scrolling
    - performing move and down action
    - move and down action done
    - waiting for scheduled navigations to finish
    - navigations have finished
  - waiting for getByTestId('region')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "PracticeQAAutomation logo PracticeQAAutomation" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "PracticeQAAutomation logo" [ref=e5]
        - generic [ref=e6]: PracticeQAAutomation
      - navigation "Main" [ref=e7]:
        - button "Tools" [ref=e9]
        - button "Apps" [ref=e13]
        - button "Challenges" [ref=e17]
        - button "AI" [ref=e21]:
          - generic [aria-hidden] [ref=e22]: ✨
          - text: AI
        - button "Interview" [ref=e26]
        - link "What's new New release" [ref=e29] [cursor=pointer]:
          - /url: /releases
          - generic [ref=e30]:
            - text: What's new
            - generic "New release" [ref=e31]
        - link "About Me" [ref=e32] [cursor=pointer]:
          - /url: /about
      - generic [ref=e33]:
        - link "Support this site" [ref=e34] [cursor=pointer]:
          - /url: https://rzp.io/rzp/supportpracticeqaautomation
          - generic [aria-hidden] [ref=e35]: ☕
        - button "Switch to light theme" [ref=e36]
  - main [ref=e40]:
    - generic [ref=e41]:
      - generic [ref=e43]:
        - button "Go back" [ref=e44]
        - link "📈 SalesPulse" [ref=e47] [cursor=pointer]:
          - /url: /apps/crm
          - generic [ref=e48]: 📈
          - generic [ref=e49]: SalesPulse
        - navigation [ref=e50]:
          - link "Dashboard" [ref=e51] [cursor=pointer]:
            - /url: /apps/crm/dashboard
          - link "Leads" [ref=e52] [cursor=pointer]:
            - /url: /apps/crm/leads
          - link "Pipeline" [ref=e53] [cursor=pointer]:
            - /url: /apps/crm/pipeline
        - generic [ref=e54]:
          - button "🧑‍🏫 AI coach · paused" [ref=e55]:
            - text: 🧑‍🏫
            - generic [ref=e56]: AI coach · paused
          - generic [ref=e57]: Maya Chen
          - button "Log out" [ref=e58] [cursor=pointer]
      - generic [ref=e60]:
        - generic [ref=e62]:
          - heading "Pipeline" [level=1] [ref=e63]
          - paragraph [ref=e64]: Drag cards between columns, or use the “Move to” menu on each card.
        - generic [ref=e65]:
          - region "Qualified" [ref=e66]:
            - generic [ref=e69]:
              - heading "Qualified 2" [level=2] [ref=e70]
              - generic [ref=e71]: $97,500
            - list [ref=e72]:
              - listitem [ref=e73]:
                - paragraph [ref=e74]: Umbrella Health
                - paragraph [ref=e75]: Noah Singh · Maya Chen
                - generic [ref=e76]:
                  - generic [ref=e77]: $42,000
                  - combobox "Move Umbrella Health" [ref=e78]:
                    - option "Qualified" [selected]
                    - option "Proposal"
                    - option "Negotiation"
                    - option "Won"
                    - option "Lost"
              - listitem [ref=e79]:
                - paragraph [ref=e80]: Tech Nova Solutions
                - paragraph [ref=e81]: Rahul Sharma · Maya Chen
                - generic [ref=e82]:
                  - generic [ref=e83]: $55,500
                  - combobox "Move Tech Nova Solutions" [ref=e84]:
                    - option "Qualified" [selected]
                    - option "Proposal"
                    - option "Negotiation"
                    - option "Won"
                    - option "Lost"
          - region "Proposal" [ref=e85]:
            - generic [ref=e88]:
              - heading "Proposal 2" [level=2] [ref=e89]
              - generic [ref=e90]: $167,000
            - list [ref=e91]:
              - listitem [ref=e92]:
                - paragraph [ref=e93]: Stark Logistics
                - paragraph [ref=e94]: Emma Wilson · Leo Park
                - generic [ref=e95]:
                  - generic [ref=e96]: $76,000
                  - combobox "Move Stark Logistics" [ref=e97]:
                    - option "Qualified"
                    - option "Proposal" [selected]
                    - option "Negotiation"
                    - option "Won"
                    - option "Lost"
              - listitem [ref=e98]:
                - paragraph [ref=e99]: Tyrell Robotics
                - paragraph [ref=e100]: Ivy Nguyen · Omar Haddad
                - generic [ref=e101]:
                  - generic [ref=e102]: $91,000
                  - combobox "Move Tyrell Robotics" [ref=e103]:
                    - option "Qualified"
                    - option "Proposal" [selected]
                    - option "Negotiation"
                    - option "Won"
                    - option "Lost"
          - region "Negotiation" [ref=e104]:
            - generic [ref=e107]:
              - heading "Negotiation 1" [level=2] [ref=e108]
              - generic [ref=e109]: $18,000
            - list [ref=e110]:
              - listitem [ref=e111]:
                - paragraph [ref=e112]: Soylent Foods
                - paragraph [ref=e113]: Zoe Adams · Nina Rossi
                - generic [ref=e114]:
                  - generic [ref=e115]: $18,000
                  - combobox "Move Soylent Foods" [ref=e116]:
                    - option "Qualified"
                    - option "Proposal"
                    - option "Negotiation" [selected]
                    - option "Won"
                    - option "Lost"
          - region "Won" [ref=e117]:
            - generic [ref=e120]:
              - heading "Won 1" [level=2] [ref=e121]
              - generic [ref=e122]: $55,000
            - list [ref=e123]:
              - listitem [ref=e124]:
                - paragraph [ref=e125]: Vandelay Imports
                - paragraph [ref=e126]: Lucas Meyer · Maya Chen
                - generic [ref=e127]:
                  - generic [ref=e128]: $55,000
                  - combobox "Move Vandelay Imports" [ref=e129]:
                    - option "Qualified"
                    - option "Proposal"
                    - option "Negotiation"
                    - option "Won" [selected]
                    - option "Lost"
          - region "Lost" [ref=e130]:
            - generic [ref=e133]:
              - heading "Lost 1" [level=2] [ref=e134]
              - generic [ref=e135]: $24,000
            - list [ref=e136]:
              - listitem [ref=e137]:
                - paragraph [ref=e138]: Oscorp Labs
                - paragraph [ref=e139]: Owen Scott · Leo Park
                - generic [ref=e140]:
                  - generic [ref=e141]: $24,000
                  - combobox "Move Oscorp Labs" [ref=e142]:
                    - option "Qualified"
                    - option "Proposal"
                    - option "Negotiation"
                    - option "Won"
                    - option "Lost" [selected]
  - contentinfo [ref=e143]:
    - generic [ref=e144]:
      - generic [ref=e145]:
        - link "PracticeQAAutomation — home" [ref=e146] [cursor=pointer]:
          - /url: /
          - generic [ref=e147]: PracticeQAAutomation
        - paragraph [ref=e148]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e149]:
          - link "Follow us on LinkedIn" [ref=e150] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e153] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e154]: ☕
            - text: Support this site
      - generic [ref=e155]:
        - generic [ref=e156]:
          - generic [ref=e157]: Tools
          - link "Selenium" [ref=e158] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e159] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e160] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e161]:
          - generic [ref=e162]: Apps
          - link "All domain apps" [ref=e163] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e164] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e165] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e166] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e167] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e168]:
          - generic [ref=e169]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e170] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e171] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e172] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e173] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e174] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e175] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e176] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e177] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e178] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e179] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e180] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e181] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e182] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e183] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e184] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e185] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e186] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e188]:
      - paragraph [ref=e189]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e190] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e191]:
        - text: Made by
        - link "Amir" [ref=e192] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e193]: ❤️
  - alert [ref=e194]
```

# Test source

```ts
  1   | import { Page, expect }  from "@playwright/test";
  2   | import pipelinePage from "../page-elements/pipeline-page-element.json" with { type: "json" };
  3   | import leadsPage from "../page-elements/leads-page-element.json" with { type: "json" };
  4   | import { WebCommons } from "../../commons/ui/web-commons";
  5   | import leadsData from "../../testdata/ui/leads-page-data.json" with { type: "json" };
  6   | import config from "../../config/config.json" with { type: "json" };
  7   | 
  8   | export class PipelinePageSteps {
  9   |   page: Page;
  10  |   web: WebCommons;
  11  | 
  12  |   // Constructor to initialize the page and web commons
  13  |   constructor(page: Page) {
  14  |     this.page = page;
  15  |     this.web = new WebCommons(this.page);
  16  |   }
  17  | 
  18  |   async verifyPipelinePageIsDisplayed(): Promise<void> {
  19  |     await this.web.waitForLoadDOMContent()    
  20  |     await this.web.isElementVisible(pipelinePage.pipelineMenuLink, 'getByTestId')
  21  |     await this.web.isElementVisible(pipelinePage.pipelineTitle, 'getByTestId')
  22  |     await this.web.isElementVisible(pipelinePage.pipelineDescr, 'xpath')
  23  |     await this.web.isElementVisible(pipelinePage.pipelineQualifiedHeader, 'xpath')
  24  |     await this.web.isElementVisible(pipelinePage.pipelineProposalHeader, 'xpath')
  25  |     await this.web.isElementVisible(pipelinePage.pipelineNegotiationHeader, 'xpath')
  26  |     await this.web.isElementVisible(pipelinePage.pipelineWonHeader, 'xpath')
  27  |     await this.web.isElementVisible(pipelinePage.pipelineLostHeader, 'xpath')
  28  |     console.log('Pipeline page is displayed successfully')
  29  |   }
  30  | 
  31  |    async verifyDragDrop(company: string): Promise<void>{
  32  | 
  33  |     const source = await this.web.filter(pipelinePage.pipelineLeadCompany, 'xpath', `${company}`)
  34  |     const target = await this.web.element(pipelinePage.pipelineSection, 'getByTestId')
> 35  |     await source.dragTo(target)
      |                  ^ Error: locator.dragTo: Test timeout of 30000ms exceeded.
  36  | 
  37  |     // Verify lead is now inside Proposal section
  38  |     await this.web.filter(pipelinePage.pipelineLeadCompany, 'xpath', `${company}`)  
  39  |     await this.web.waitForTimeout(4000)
  40  |   }
  41  | 
  42  | /*  async verifyNewLeadFormIsDisplayed(jobTitle: string, empStatus: string): Promise<void>{ 
  43  |     await this.web.isElementVisible(leadsPage.newLeadModalTitle, 'xpath')
  44  |     await this.web.isElementVisible(leadsPage.newLeadModalCloseButton, 'getByTestId')
  45  |     await this.web.isElementVisible(leadsPage.contactNameTextBox, 'getByTestId')
  46  |     await this.web.isElementVisible(leadsPage.companyTextBox, 'getByTestId')
  47  |     await this.web.isElementVisible(leadsPage.emailTextBox, 'getByTestId')
  48  |     await this.web.isElementVisible(leadsPage.phoneTextBox, 'getByTestId')
  49  |     await this.web.isElementVisible(leadsPage.leadSourceDropdown, 'xpath')
  50  |     await this.web.isElementVisible(leadsPage.estValueTextBox, 'getByTestId')
  51  |     await this.web.isElementVisible(leadsPage.saveLeadButton, 'getByTestId')
  52  |     console.log('New Lead form is displayed successfully')
  53  |   }
  54  | 
  55  |   async verifyCreateNewLead(contactName: string, company: string, email: string, phone: string, source: string, estValue: string): Promise<void>{
  56  |     await this.web.enterText(leadsPage.contactNameTextBox, 'getByTestId', contactName)
  57  |     await this.web.verifyTextFilled(leadsPage.contactNameTextBox, 'getByTestId', contactName)
  58  |     await this.web.enterText(leadsPage.companyTextBox, 'getByTestId', company)
  59  |     await this.web.verifyTextFilled(leadsPage.companyTextBox, 'getByTestId', company)
  60  |     await this.web.enterText(leadsPage.emailTextBox, 'getByTestId', email)
  61  |     await this.web.verifyTextFilled(leadsPage.emailTextBox, 'getByTestId', email)
  62  |     await this.web.enterText(leadsPage.phoneTextBox, 'getByTestId', phone)
  63  |     await this.web.verifyTextFilled(leadsPage.phoneTextBox, 'getByTestId', phone)
  64  |     await this.web.selectOption(leadsPage.leadSourceDropdown, 'xpath', source)
  65  |     // await this.web.verifyDropdownValueSelected(leadsPage.leadSourceDropdown, 'xpath', source)
  66  |     await this.web.enterText(leadsPage.estValueTextBox, 'getByTestId', estValue)
  67  |     await this.web.verifyTextFilled(leadsPage.estValueTextBox, 'getByTestId', estValue)
  68  |     await this.web.click(leadsPage.saveLeadButton, 'getByTestId')
  69  |     console.log('New Lead details are provided successfully')
  70  |   }
  71  | 
  72  |   async verifySearchLead(contactName: string): Promise<void>{
  73  |     await this.web.enterText(leadsPage.leadSearchTextBox, 'getByTestId', contactName)
  74  |     console.log('Search contact name is entered successfully')
  75  |   }
  76  | 
  77  | 
  78  |   async verifyLeadIsDisplayed(contactName: string, company: string, email: string, source: string): Promise<void>{
  79  |     await this.web.isElementVisible(leadsPage.leadContactLabel, 'xpath')
  80  |     await this.web.isElementVisible(leadsPage.leadCompanyLabel, 'xpath')
  81  |     await this.web.isElementVisible(leadsPage.leadEmailLabel, 'xpath')
  82  |     await this.web.isElementVisible(leadsPage.leadSourceLabel, 'xpath')
  83  |     console.log('New Lead is displayed successfully')
  84  |     // await this.web.waitForTimeout(9000) // Wait for 2 seconds to ensure the lead is displayed
  85  |   }
  86  | 
  87  |   async verifyClickOnLead(): Promise<void>{
  88  |     await this.web.click(leadsPage.leadContactLabel, 'xpath')
  89  |     console.log('Searched Lead is clicked successfully')
  90  |   }
  91  | 
  92  |   async verifyConvertToLeadPageIsDisplayed(): Promise<void>{
  93  |     await this.web.isElementVisible(leadsPage.backToLeadsLink, 'getByTestId')
  94  |     await this.web.isElementVisible(leadsPage.convertToLeadTitle, 'getByTestId')
  95  |     await this.web.isElementVisible(leadsPage.convertToLeadDescription, 'xpath')
  96  |     await this.web.isElementVisible(leadsPage.convertToLeadStatus, 'xpath')
  97  |     await this.web.isElementVisible(leadsPage.convertToLeadNoteButton, 'getByTestId')
  98  |     await this.web.isElementVisible(leadsPage.convertToLeadNoteTextarea, 'getByPlaceholder')
  99  |     await this.web.isElementVisible(leadsPage.convertToLeadLogCallButton, 'getByTestId')
  100 |     await this.web.isElementVisible(leadsPage.convertToLeadEmailButton, 'getByTestId')
  101 |     await this.web.isElementVisible(leadsPage.convertToLeadSaveNoteButton, 'getByTestId')
  102 |     await this.web.isElementVisible(leadsPage.convertToLeadActivityTimelineLabel, 'getByTestId')
  103 |     await this.web.isElementVisible(leadsPage.convertToLeadOwnerLable, 'xpath')
  104 |     await this.web.isElementVisible(leadsPage.convertToLeadOwnerValueLable, 'xpath')
  105 |     await this.web.isElementVisible(leadsPage.convertToLeadSourceLable, 'xpath')
  106 |     await this.web.isElementVisible(leadsPage.convertToLeadSourceValueLable, 'xpath')
  107 |     await this.web.isElementVisible(leadsPage.convertToLeadEstLable, 'xpath')
  108 |     await this.web.isElementVisible(leadsPage.convertToLeadEstValueLable, 'xpath')
  109 |     await this.web.isElementVisible(leadsPage.convertToLeadStatusDropdown, 'getByTestId')
  110 |     await this.web.isElementVisible(leadsPage.convertToLeadButton, 'getByTestId')
  111 |     console.log('Convert to Lead page is displayed successfully')
  112 |   }
  113 | 
  114 |   async verifySaveNotes(note: string, callSummary: string, emailSummary: string): Promise<void>{
  115 |     await this.web.click(leadsPage.convertToLeadNoteButton, 'getByTestId')
  116 |     await this.web.enterText(leadsPage.convertToLeadNoteTextarea, 'getByPlaceholder', note)
  117 |     await this.web.verifyTextFilled(leadsPage.convertToLeadNoteTextarea, 'getByPlaceholder', note)
  118 |     await this.web.click(leadsPage.convertToLeadSaveNoteButton, 'getByTestId')
  119 |     await this.web.verifyDisplayedText(leadsPage.convertToLeadSavedNoteLog, 'xpath', note)
  120 |     await this.web.click(leadsPage.convertToLeadLogCallButton, 'getByTestId')
  121 |     await this.web.enterText(leadsPage.convertToLeadLogCallTextarea, 'getByPlaceholder', callSummary)
  122 |     await this.web.verifyTextFilled(leadsPage.convertToLeadLogCallTextarea, 'getByPlaceholder', callSummary)
  123 |     await this.web.click(leadsPage.convertToLeadSaveNoteButton, 'getByTestId')
  124 |     await this.web.verifyDisplayedText(leadsPage.convertToLeadSavedCallLog, 'xpath', callSummary)
  125 |     await this.web.click(leadsPage.convertToLeadEmailButton, 'getByTestId')
  126 |     await this.web.enterText(leadsPage.convertToLeadLogEmailTextarea, 'getByPlaceholder', emailSummary)
  127 |     await this.web.verifyTextFilled(leadsPage.convertToLeadLogEmailTextarea, 'getByPlaceholder', emailSummary)
  128 |     await this.web.click(leadsPage.convertToLeadSaveNoteButton, 'getByTestId')
  129 |     await this.web.verifyDisplayedText(leadsPage.convertToLeadSavedEmailLog, 'xpath', emailSummary)
  130 |     console.log('Note is added and saved successfully')
  131 |   }
  132 | 
  133 |   async verifyConvertToDeal(status: string): Promise<void> {
  134 |     await this.web.selectOption(leadsPage.convertToLeadStatusDropdown, 'getByTestId', status)
  135 |     await this.web.click(leadsPage.convertToLeadButton, 'getByTestId')    
```
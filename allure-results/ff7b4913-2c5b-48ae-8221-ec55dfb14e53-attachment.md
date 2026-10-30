# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Search, Filter Status And Source
- Location: tests\ui\leads-page-test.spec.ts:84:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'statusOptions')
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - link "Leads" [active] [ref=e52] [cursor=pointer]:
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
        - generic [ref=e61]:
          - generic [ref=e62]:
            - heading "Leads" [level=1] [ref=e63]
            - paragraph [ref=e64]:
              - generic [ref=e65]: 12 leads
          - button "+ New lead" [ref=e66] [cursor=pointer]
        - generic [ref=e67]:
          - searchbox "Search leads" [ref=e68]
          - combobox "Status" [ref=e69]:
            - option "All statuses" [selected]
            - option "New"
            - option "Contacted"
            - option "Qualified"
            - option "Unqualified"
            - option "Converted"
          - combobox "Source" [ref=e70]:
            - option "All sources" [selected]
            - option "Website"
            - option "Referral"
            - option "LinkedIn"
            - option "Event"
            - option "Cold call"
        - table [ref=e72]:
          - rowgroup [ref=e73]:
            - row [ref=e74]:
              - columnheader [ref=e75]:
                - checkbox "Select all" [ref=e76]
              - columnheader "Lead" [ref=e77]
              - columnheader "Company" [ref=e78]
              - columnheader "Source" [ref=e79]
              - columnheader "Status" [ref=e80]
              - columnheader "Owner" [ref=e81]
              - columnheader "Value" [ref=e82]
          - rowgroup [ref=e83]:
            - row [ref=e84]:
              - cell [ref=e85]:
                - checkbox "Select Owen Scott" [ref=e86]
              - cell "Owen Scott owen@oscorp.com" [ref=e87]:
                - link "Owen Scott" [ref=e88] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1012
                - generic [ref=e89]: owen@oscorp.com
              - cell "Oscorp Labs" [ref=e90]
              - cell "Referral" [ref=e91]
              - cell "Unqualified" [ref=e92]
              - cell "Omar Haddad" [ref=e94]
              - cell "$54,000" [ref=e95]
            - row [ref=e96]:
              - cell [ref=e97]:
                - checkbox "Select Ivy Nguyen" [ref=e98]
              - cell "Ivy Nguyen ivy@tyrell.com" [ref=e99]:
                - link "Ivy Nguyen" [ref=e100] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1011
                - generic [ref=e101]: ivy@tyrell.com
              - cell "Tyrell Robotics" [ref=e102]
              - cell "Website" [ref=e103]
              - cell "Qualified" [ref=e104]
              - cell "Nina Rossi" [ref=e106]
              - cell "$55,000" [ref=e107]
            - row [ref=e108]:
              - cell [ref=e109]:
                - checkbox "Select Ryan Patel" [ref=e110]
              - cell "Ryan Patel ryan@cyberdyne.com" [ref=e111]:
                - link "Ryan Patel" [ref=e112] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1010
                - generic [ref=e113]: ryan@cyberdyne.com
              - cell "Cyberdyne Systems" [ref=e114]
              - cell "Cold call" [ref=e115]
              - cell "Contacted" [ref=e116]
              - cell "Leo Park" [ref=e118]
              - cell "$56,000" [ref=e119]
            - row [ref=e120]:
              - cell [ref=e121]:
                - checkbox "Select Chloe Martin" [ref=e122]
              - cell "Chloe Martin chloe@pied.com" [ref=e123]:
                - link "Chloe Martin" [ref=e124] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1009
                - generic [ref=e125]: chloe@pied.com
              - cell "Pied Piper" [ref=e126]
              - cell "Event" [ref=e127]
              - cell "New" [ref=e128]
              - cell "Maya Chen" [ref=e130]
              - cell "$57,000" [ref=e131]
            - row [ref=e132]:
              - cell [ref=e133]:
                - checkbox "Select Lucas Meyer" [ref=e134]
              - cell "Lucas Meyer lucas@vandelay.com" [ref=e135]:
                - link "Lucas Meyer" [ref=e136] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1008
                - generic [ref=e137]: lucas@vandelay.com
              - cell "Vandelay Imports" [ref=e138]
              - cell "LinkedIn" [ref=e139]
              - cell "Unqualified" [ref=e140]
              - cell "Omar Haddad" [ref=e142]
              - cell "$58,000" [ref=e143]
            - row [ref=e144]:
              - cell [ref=e145]:
                - checkbox "Select Zoe Adams" [ref=e146]
              - cell "Zoe Adams zoe@soylent.com" [ref=e147]:
                - link "Zoe Adams" [ref=e148] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1007
                - generic [ref=e149]: zoe@soylent.com
              - cell "Soylent Foods" [ref=e150]
              - cell "Referral" [ref=e151]
              - cell "Qualified" [ref=e152]
              - cell "Nina Rossi" [ref=e154]
              - cell "$59,000" [ref=e155]
            - row [ref=e156]:
              - cell [ref=e157]:
                - checkbox "Select Ethan Kim" [ref=e158]
              - cell "Ethan Kim ethan@hooli.com" [ref=e159]:
                - link "Ethan Kim" [ref=e160] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1006
                - generic [ref=e161]: ethan@hooli.com
              - cell "Hooli Cloud" [ref=e162]
              - cell "Website" [ref=e163]
              - cell "Contacted" [ref=e164]
              - cell "Leo Park" [ref=e166]
              - cell "$60,000" [ref=e167]
            - row [ref=e168]:
              - cell [ref=e169]:
                - checkbox "Select Mia Lopez" [ref=e170]
              - cell "Mia Lopez mia@wayne.com" [ref=e171]:
                - link "Mia Lopez" [ref=e172] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1005
                - generic [ref=e173]: mia@wayne.com
              - cell "Wayne Retail" [ref=e174]
              - cell "Cold call" [ref=e175]
              - cell "New" [ref=e176]
              - cell "Maya Chen" [ref=e178]
              - cell "$61,000" [ref=e179]
            - row [ref=e180]:
              - cell [ref=e181]:
                - checkbox "Select Emma Wilson" [ref=e182]
              - cell "Emma Wilson emma@stark.com" [ref=e183]:
                - link "Emma Wilson" [ref=e184] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1004
                - generic [ref=e185]: emma@stark.com
              - cell "Stark Logistics" [ref=e186]
              - cell "Event" [ref=e187]
              - cell "Unqualified" [ref=e188]
              - cell "Omar Haddad" [ref=e190]
              - cell "$62,000" [ref=e191]
            - row [ref=e192]:
              - cell [ref=e193]:
                - checkbox "Select Noah Singh" [ref=e194]
              - cell "Noah Singh noah@umbrella.com" [ref=e195]:
                - link "Noah Singh" [ref=e196] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1003
                - generic [ref=e197]: noah@umbrella.com
              - cell "Umbrella Health" [ref=e198]
              - cell "LinkedIn" [ref=e199]
              - cell "Qualified" [ref=e200]
              - cell "Nina Rossi" [ref=e202]
              - cell "$63,000" [ref=e203]
            - row [ref=e204]:
              - cell [ref=e205]:
                - checkbox "Select Liam Carter" [ref=e206]
              - cell "Liam Carter liam@initech.com" [ref=e207]:
                - link "Liam Carter" [ref=e208] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1002
                - generic [ref=e209]: liam@initech.com
              - cell "Initech" [ref=e210]
              - cell "Referral" [ref=e211]
              - cell "Contacted" [ref=e212]
              - cell "Leo Park" [ref=e214]
              - cell "$64,000" [ref=e215]
            - row [ref=e216]:
              - cell [ref=e217]:
                - checkbox "Select Ava Brooks" [ref=e218]
              - cell "Ava Brooks ava@acme.com" [ref=e219]:
                - link "Ava Brooks" [ref=e220] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1001
                - generic [ref=e221]: ava@acme.com
              - cell "Acme Industries" [ref=e222]
              - cell "Website" [ref=e223]
              - cell "New" [ref=e224]
              - cell "Maya Chen" [ref=e226]
              - cell "$5,000" [ref=e227]
  - contentinfo [ref=e228]:
    - generic [ref=e229]:
      - generic [ref=e230]:
        - link "PracticeQAAutomation — home" [ref=e231] [cursor=pointer]:
          - /url: /
          - generic [ref=e232]: PracticeQAAutomation
        - paragraph [ref=e233]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e234]:
          - link "Follow us on LinkedIn" [ref=e235] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e238] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e239]: ☕
            - text: Support this site
      - generic [ref=e240]:
        - generic [ref=e241]:
          - generic [ref=e242]: Tools
          - link "Selenium" [ref=e243] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e244] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e245] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e246]:
          - generic [ref=e247]: Apps
          - link "All domain apps" [ref=e248] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e249] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e250] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e251] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e252] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e253]:
          - generic [ref=e254]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e255] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e256] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e257] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e258] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e259] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e260] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e261] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e262] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e263] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e264] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e265] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e266] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e267] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e268] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e269] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e270] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e271] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e273]:
      - paragraph [ref=e274]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e275] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e276]:
        - text: Made by
        - link "Amir" [ref=e277] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e278]: ❤️
  - alert [ref=e279]
```

# Test source

```ts
  1   | import { test, TestInfo } from '@playwright/test'
  2   | import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts'
  3   | import { DashboardPageSteps } from '../../page-objects/page-steps/dashboard-page-steps.ts'
  4   | import { LeadsPageSteps } from '../../page-objects/page-steps/leads-page-steps.ts'
  5   | import { PipelinePageSteps } from '../../page-objects/page-steps/pipeline-page-steps.ts'
  6   | import leadsData from '../../testdata/ui/leads-page-data.json' with {type : 'json'}
  7   | import config from '../../config/config.json' with {type : 'json'}
  8   | 
  9   | let loginPage : LoginPageSteps
  10  | let dashboardPage: DashboardPageSteps
  11  | let leadsPage: LeadsPageSteps
  12  | let pipelinePage: PipelinePageSteps
  13  | let testInfo : TestInfo
  14  | let testData : any
  15  | 
  16  | test.describe('Leads Page Feature Test', () => {
  17  | 
  18  |     test.beforeEach( async ({ page }) =>{
  19  |         loginPage = new LoginPageSteps(page)
  20  |         dashboardPage = new DashboardPageSteps(page)
  21  |         leadsPage = new LeadsPageSteps(page)
  22  |         pipelinePage = new PipelinePageSteps(page)
  23  |         await loginPage.launchApplication()
  24  |         await loginPage.verifyLoginPageIsDisplayed()
  25  |         await loginPage.verifyProvideLoginCredentials(config.app['username'], config.app['password'])
  26  |         await loginPage.verifyClickOnLoginBtn()
  27  |     })
  28  | 
  29  |     test.skip('Verify create new lead and convert it', async ({ }, testInfo: TestInfo)=> {
  30  | 
  31  |         testData = leadsData[testInfo.title as keyof typeof leadsData]
  32  |         
  33  |         await test.step('Verify Dashboard Page Is displayed', async () => {
  34  |             await dashboardPage.verifyDashboardPageIsDisplayed()
  35  |         })
  36  | 
  37  |         await test.step('Verify Work My Leads Button Clicked', async () => {
  38  |             await dashboardPage.clickOnWorkMyLeadsButton()
  39  |         })
  40  | 
  41  |         await test.step('Verify Leads Page Is Displayed', async () => {
  42  |             await leadsPage.verifyLeadsPageIsDisplayed()
  43  |         })
  44  | 
  45  |         await test.step('Verify New Lead Button Clicked', async () => {
  46  |             await leadsPage.verifyClickOnNewLeadButton()
  47  |         })
  48  | 
  49  |         await test.step('Verify New Lead form Is Displayed', async () => {
  50  |             await leadsPage.verifyNewLeadFormIsDisplayed(testData['jobTitle'], testData['empStatus'])
  51  |         })
  52  | 
  53  |         await test.step('Verify Create New Lead', async () => {
  54  |             await leadsPage.verifyCreateNewLead(testData['contactName'], testData['company'], testData['email'], testData['phone'], testData['source'], testData['estValue'])
  55  |         })
  56  | 
  57  |         await test.step('Verify Lead, Status Converted And Banner Is Displayed', async () => {
  58  |             await leadsPage.verifySearchLead(testData['contactName'])
  59  |             await leadsPage.verifyLeadIsDisplayed(testData['contactName'], testData['company'], testData['email'], testData['source'], testData['status'])            
  60  |         })
  61  | 
  62  |         await test.step('Verify Lead Link Clicked Succesfully And Deal Section Displayed', async () => {
  63  |             await leadsPage.verifyClickOnLead()
  64  |             await leadsPage.verifyConvertToLeadPageIsDisplayed()
  65  |             await leadsPage.verifySaveNotes(testData['note'], testData['logCall'], testData['logEmail'])
  66  |             await leadsPage.verifyConvertToDeal(testData['leadStatus'])
  67  |             await leadsPage.verifyConfirmConvertToDealFormIsDisplayed()
  68  |             await leadsPage.verifyConfirmConvertToDeal(testData['dealValue'], testData['expectedClose'])
  69  |         })
  70  | 
  71  |         await test.step('Verify View Pipeline Clicked', async()=> {
  72  |             await leadsPage.verifyClickOnViewPipeline()
  73  |         })
  74  | 
  75  |         await test.step('Verify Pipeline Page Is displayed', async () => {
  76  |             await pipelinePage.verifyPipelinePageIsDisplayed()
  77  |         })
  78  |         
  79  |         await test.step('Verify Drag & Drop Lead From Qualified To Proposal Section', async () => {
  80  |             await pipelinePage.verifyDragDrop(testData['company'])
  81  |         })
  82  |     })
  83  | 
  84  |     test('Search, Filter Status And Source', async ({}, testInfo: TestInfo) => {
  85  |         testData = leadsData[testInfo.title as keyof typeof leadsData]
  86  | 
  87  |         await test.step('Verify Dashboard Page Is Displayed', async () => {
  88  |             await dashboardPage.verifyDashboardPageIsDisplayed()
  89  |         })
  90  | 
  91  |         await test.step('Verify Leads Menu Link Is Clicked', async () => {
  92  |             await leadsPage.verifyClickOnLeadMenuLink()
  93  |         })
  94  | 
  95  |         await test.step('Verify Leads Page Is Displayed', async () => {
  96  |             await leadsPage.verifyLeadsPageIsDisplayed()
  97  |         })
  98  | 
  99  |         await test.step('Verify Status Options Are Selected From Dropdown', async () => {
> 100 |             await leadsPage.verifyLeadRecordWithStatusFilter(testData.statusOptions)
      |                                                                       ^ TypeError: Cannot read properties of undefined (reading 'statusOptions')
  101 |         })
  102 |     })
  103 | })
```
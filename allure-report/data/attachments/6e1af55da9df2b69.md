# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard-page-test.spec.ts >> Add Employee Page Feature Test >> Verify add employee functionality with valid credentials
- Location: tests\ui\dashboard-page-test.spec.ts:22:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Open pipeline')

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
  1   | import { Page, Locator, expect, FrameLocator } from "@playwright/test";
  2   | 
  3   | export class WebCommons {
  4   |     page: Page;
  5   | 
  6   |     // Constructor to initilize the page
  7   |     constructor(page: Page) {
  8   |     this.page = page;
  9   |     }
  10  | 
  11  |     // Common method to generate WebElement from the locator
  12  |     async element(
  13  |     locator: string,
  14  |     locatorType: string,
  15  |     frameLocator?: string,
  16  |     role?: any,
  17  |   ): Promise<Locator> {
  18  |     switch (locatorType) {
  19  |       case "xpath":
  20  |         return this.page.locator(locator);
  21  |         break;
  22  |       case "getByText":
  23  |         return this.page.getByText(locator);
  24  |         break;
  25  |       case "getByLabel":
  26  |         return this.page.getByLabel(locator);
  27  |         break;
  28  |       case "getByPlaceholder":
  29  |         return this.page.getByPlaceholder(locator);
  30  |         break;
  31  |       case "getByAltText":
  32  |         return this.page.getByAltText(locator);
  33  |         break;
  34  |       case "getByTitle":
  35  |         return this.page.getByTitle(locator);
  36  |         break;
  37  |       case "getByTestId":
  38  |         return this.page.getByTestId(locator);
  39  |         break;
  40  |       case "getByRole":
  41  |         return this.page.getByRole(role, { name: locator });
  42  |         break;
  43  |       case "frame":
  44  |         return this.page.frameLocator(frameLocator).locator(locator)
  45  |         break;
  46  |       default:
  47  |         throw new Error(`Invalid locator Type: ${locatorType}`);
  48  |     }
  49  |     }
  50  | 
  51  |     // Common method to launch the application
  52  |     async launchApplication(url: string, title: string): Promise<void> {
  53  |     await this.page.goto(url);
  54  |     await this.page.waitForURL(url);
  55  |     await this.page.setViewportSize({ width: 1920, height: 1200 })
  56  |     await expect(this.page).toHaveTitle(title);
  57  |     }
  58  | 
  59  |     // common method to locate iframe
  60  |     /* async frameLocator(frameLocator: string, locator: string): Promise<Locator>{
  61  |       return this.page.frameLocator(frameLocator).locator(locator)
  62  |   } */
  63  | 
  64  |     // Scroll to specified element
  65  |     async scrollToElement(
  66  |     locator: string,
  67  |     locatorType: string,
  68  |     frameLocator?: string,
  69  |     role?: any,
  70  |   ): Promise<void> {
  71  |     const element = await this.element(locator, locatorType, frameLocator, role);
> 72  |     await element.scrollIntoViewIfNeeded({ timeout: 60000 });
      |                   ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  73  |     }
  74  | 
  75  |     // Click to element
  76  |     async click(
  77  |         locator: string, 
  78  |         locatorType: string, 
  79  |         frameLocator?:string, 
  80  |         framelocatorType?: string, 
  81  |         role?: any
  82  |     ): Promise<void> {
  83  |     const element = await this.element(locator, locatorType, frameLocator, framelocatorType, role);
  84  |     await this.scrollToElement(locator, locatorType, frameLocator, framelocatorType, role);
  85  |     await element.click();
  86  |     }
  87  | 
  88  |     // Double Click
  89  |     async doubleClick(
  90  |     locator: string,
  91  |     locatorType: string,
  92  |     frameLocator?:string,
  93  |     role?: any,
  94  |   ): Promise<void> {
  95  |     const element = await this.element(locator, locatorType,frameLocator, role);
  96  |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  97  |     await element.dblclick();
  98  |     }
  99  | 
  100 |     // Right click
  101 |     async rightClick(
  102 |     locator: string,
  103 |     locatorType: string,
  104 |     frameLocator?:string,
  105 |     role?: any,
  106 |   ): Promise<void> {
  107 |     const element = await this.element(locator, locatorType, frameLocator, role);
  108 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  109 |     await element.click({ button: "right" });
  110 |     }
  111 | 
  112 |     // Hover on an element
  113 |     async hoverElement(
  114 |     locator: string,
  115 |     locatorType: string,
  116 |     frameLocator?:string,
  117 |     role?: any,
  118 |   ): Promise<void> {
  119 |     const element = await this.element(locator, locatorType, frameLocator, role);
  120 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  121 |     await element.hover();
  122 |     }
  123 | 
  124 |     // Force Click to element
  125 |     async forceClick(
  126 |     locator: string,
  127 |     locatorType: string,
  128 |     frameLocator?:string,
  129 |     role?: any,
  130 |   ): Promise<void> {
  131 |     const element = await this.element(locator, locatorType, frameLocator, role);
  132 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  133 |     await element.click({ force: true });
  134 |     }
  135 | 
  136 |     // Clear to element
  137 |     async clearText(
  138 |     locator: string,
  139 |     locatorType: string,
  140 |     frameLocator?:string,
  141 |     role?: any,
  142 |   ): Promise<void> {
  143 |     const element = await this.element(locator, locatorType, frameLocator, role);
  144 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  145 |     await element.clear();
  146 |     }
  147 | 
  148 |     // Type text into the textbox element
  149 |     async enterText(
  150 |     locator: string,
  151 |     locatorType: string,
  152 |     text: string,
  153 |     frameLocator?:string,
  154 |     role?: any,
  155 |   ): Promise<void> {
  156 |     const element = await this.element(locator, locatorType, frameLocator, role);
  157 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  158 |     await element.fill(text);
  159 |     }
  160 | 
  161 |     // get the text provided in the textbox
  162 |     async getText(
  163 |     locator: string,
  164 |     locatorType: string,
  165 |     frameLocator?:string,
  166 |     role?: any,
  167 |   ): Promise<string> {
  168 |     const element = await this.element(locator, locatorType, frameLocator, role);
  169 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  170 |     return await element.inputValue();
  171 |     }
  172 | 
```
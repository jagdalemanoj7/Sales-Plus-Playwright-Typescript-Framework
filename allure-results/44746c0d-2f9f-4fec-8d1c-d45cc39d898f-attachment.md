# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Owner Selective Assignment
- Location: tests\ui\leads-page-test.spec.ts:108:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('selected-count').first()

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
              - cell "Nina Rossi" [ref=e94]
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
  - alert [ref=e279]: "SalesPulse: CRM Practice App | PracticeQAAutomation"
```

# Test source

```ts
  1   | import { Page, Locator, expect } from "@playwright/test";
  2   | 
  3   | export class WebCommons {
  4   |   page: Page;
  5   | 
  6   |   // Constructor to initilize the page
  7   |   constructor(page: Page) {
  8   |     this.page = page;
  9   |   }
  10  | 
  11  |   // Common method to launch the application
  12  |   async launchApplication(url: string, title: string): Promise<void> {
  13  |     await this.page.goto(url);
  14  |     await this.page.waitForURL(url);
  15  |     await this.page.setViewportSize({ width: 1520, height: 810 });
  16  |     await expect(this.page).toHaveTitle(title);
  17  |   }
  18  | 
  19  |   // Scroll to specified element
  20  |   async scrollToElement(locator: Locator, index = 0): Promise<void> {
  21  |     await locator.nth(index).scrollIntoViewIfNeeded({ timeout: 60000 });
  22  |   }
  23  | 
  24  |   async click(locator: Locator): Promise<void> {
  25  |     await locator.click();
  26  |   }
  27  | 
  28  |   // Double Click
  29  |   async doubleClick(locator: Locator): Promise<void> {
  30  |     await locator.dblclick();
  31  |   }
  32  | 
  33  |   // Scroll to specified element
  34  |   async rightClick(locator: Locator): Promise<void> {
  35  |     await locator.click({ button: "right" });
  36  |   }
  37  | 
  38  |   // Hover on an element
  39  |   async hoverElement(locator: Locator): Promise<void> {
  40  |     await locator.hover();
  41  |   }
  42  | 
  43  |   // Force Click to element
  44  |   async forceClick(locator: Locator): Promise<void> {
  45  |     await locator.click({ force: true });
  46  |   }
  47  | 
  48  |   // Clear text to textbox element
  49  |   async clearText(locator: Locator): Promise<void> {
  50  |     await locator.clear();
  51  |   }
  52  | 
  53  |   // Provide text to textbox element
  54  |   async enterText(locator: Locator, text: string): Promise<void> {
  55  |     await locator.fill(text);
  56  |   }
  57  | 
  58  |   // get the text provided in the textbox
  59  |   async getText(locator: Locator): Promise<string> {
  60  |     return await locator.inputValue();
  61  |   }
  62  | 
  63  |   // Press key on an element
  64  |   async pressKey(locator: Locator, key: string): Promise<void> {
  65  |     await locator.press(key);
  66  |   }
  67  | 
  68  |   // Select option from dropdown
  69  |   async selectOption(locator: Locator, option: string): Promise<void> {
  70  |     await locator.selectOption(option);
  71  |   }
  72  | 
  73  |   async getElementText(locator: Locator): Promise<string | null> {
  74  |     return await locator.textContent();
  75  |   }
  76  | 
  77  |   // Compare text values
  78  |   async compareText(actual: string, expected: string): Promise<void> {
  79  |     if (!actual.match(expected)) {
  80  |       throw new Error(`Expected Value is ${expected} , But found ${actual}`);
  81  |     }
  82  |   }
  83  | 
  84  |   // get the text from element using innerText() method
  85  |   async getElementInnerText(locator: Locator, index = 0): Promise<string> {
> 86  |     return await locator.nth(index).innerText();
      |                                     ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  87  |   }
  88  | 
  89  |   // get the all text from elements using innerText() method
  90  |   async getAllElementInnerText(locator: Locator): Promise<string[]> {
  91  |     return await locator.allInnerTexts();
  92  |   }
  93  | 
  94  |   // Verify text filled in textbox
  95  |   async verifyTextFilled(
  96  |     locator: Locator,
  97  |     expectedValue: string,
  98  |   ): Promise<void> {
  99  |     await expect(locator).toHaveValue(expectedValue);
  100 |   }
  101 | 
  102 |   // verify text displayed
  103 |   async verifyDisplayedText(
  104 |     locator: Locator,
  105 |     expectedText: string,
  106 |     index = 0,
  107 |   ): Promise<void> {
  108 |     await expect(locator.nth(index)).toHaveText(expectedText);
  109 |   }
  110 | 
  111 |   // Count of element
  112 |   async verifyElementCount(locator: Locator, count: number): Promise<void> {
  113 |     await expect(locator).toHaveCount(count);
  114 |   }
  115 | 
  116 |   // Get element attribute
  117 |   async getElementAttribute(
  118 |     locator: Locator,
  119 |     attribute: string,
  120 |   ): Promise<string | null> {
  121 |     return await locator.getAttribute(attribute);
  122 |   }
  123 | 
  124 |   // Upload an element
  125 |   async uploadFile(locator: Locator, filePath: string): Promise<void> {
  126 |     await locator.setInputFiles(filePath);
  127 |   }
  128 | 
  129 |   async scrollToFilteredElement(element: Locator): Promise<void> {
  130 |     await element.scrollIntoViewIfNeeded({ timeout: 50000 });
  131 |   }
  132 | 
  133 |   // Filter rlement
  134 |   async filter(locator: Locator, data: string): Promise<Locator> {
  135 |     const filteredElement = locator.filter({ hasText: data });
  136 |     await this.scrollToFilteredElement(filteredElement);
  137 |     await expect(filteredElement).toBeVisible({ timeout: 50000 });
  138 |     return filteredElement;
  139 |   }
  140 | 
  141 |   // Filter rlement
  142 |   async locatorFilter(
  143 |     outerLocator: Locator,
  144 |     innerLocator: Locator,
  145 |     data: string,
  146 |     childSelector: string,
  147 |   ): Promise<Locator> {
  148 |     const filteredElement = outerLocator.filter({
  149 |       has: innerLocator.filter({ hasText: data }),
  150 |     });
  151 |     const childElement = filteredElement.locator(childSelector);
  152 |     await this.scrollToFilteredElement(childElement);
  153 |     await expect(childElement).toBeVisible({ timeout: 50000 });
  154 |     return childElement;
  155 |   }
  156 | 
  157 |   // Drag and Drop Element
  158 |   async dragAndDrop(
  159 |     sourceElement: Locator,
  160 |     targetElement: Locator,
  161 |   ): Promise<void> {
  162 |     await sourceElement.dragTo(targetElement);
  163 |   }
  164 | 
  165 |   // Verify element having text value
  166 |   async verifyElementText(
  167 |     locator: Locator,
  168 |     expectedText: string,
  169 |   ): Promise<void> {
  170 |     await expect(locator).toHaveText(expectedText);
  171 |   }
  172 | 
  173 |   // Check if an element is visible
  174 |   async isElementVisible(locator: Locator): Promise<void> {
  175 |     await expect(locator).toBeVisible({ timeout: 50000 });
  176 |   }
  177 | 
  178 |   async isElementEditable(locator: Locator): Promise<void> {
  179 |     await expect(locator).toBeEditable();
  180 |   }
  181 | 
  182 |   async isElementHidden(locator: Locator): Promise<void> {
  183 |     await expect(locator).toBeHidden();
  184 |   }
  185 | 
  186 |   async isElementEnabled(locator: Locator): Promise<void> {
```
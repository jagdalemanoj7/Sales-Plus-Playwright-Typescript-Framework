# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Owner Bulk Assignment
- Location: tests\ui\leads-page-test.spec.ts:144:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('bulk-owner')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByTestId('bulk-owner') with timeout 50000ms
  - waiting for getByTestId('bulk-owner')
  - Test timeout of 30000ms exceeded.

```

```yaml
- banner:
  - link "PracticeQAAutomation logo PracticeQAAutomation":
    - /url: /
    - img "PracticeQAAutomation logo"
    - text: PracticeQAAutomation
  - navigation "Main":
    - button "Tools"
    - button "Apps"
    - button "Challenges"
    - button "AI"
    - button "Interview"
    - link "What's new New release":
      - /url: /releases
      - text: What's new
    - link "About Me":
      - /url: /about
  - link "Support this site":
    - /url: https://rzp.io/rzp/supportpracticeqaautomation
  - button "Switch to light theme"
- main:
  - button "Go back"
  - link "📈 SalesPulse":
    - /url: /apps/crm
  - navigation:
    - link "Dashboard":
      - /url: /apps/crm/dashboard
    - link "Leads":
      - /url: /apps/crm/leads
    - link "Pipeline":
      - /url: /apps/crm/pipeline
  - button "🧑‍🏫 AI coach · paused"
  - text: Maya Chen
  - button "Log out"
  - heading "Leads" [level=1]
  - paragraph: 12 leads
  - button "+ New lead"
  - searchbox "Search leads"
  - combobox "Status":
    - option "All statuses" [selected]
    - option "New"
    - option "Contacted"
    - option "Qualified"
    - option "Unqualified"
    - option "Converted"
  - combobox "Source":
    - option "All sources" [selected]
    - option "Website"
    - option "Referral"
    - option "LinkedIn"
    - option "Event"
    - option "Cold call"
  - table:
    - rowgroup:
      - row "Select all Lead Company Source Status Owner Value":
        - columnheader "Select all":
          - checkbox "Select all"
        - columnheader "Lead"
        - columnheader "Company"
        - columnheader "Source"
        - columnheader "Status"
        - columnheader "Owner"
        - columnheader "Value"
    - rowgroup:
      - row "Select Owen Scott Owen Scott owen@oscorp.com Oscorp Labs Referral Unqualified Omar Haddad $54,000":
        - cell "Select Owen Scott":
          - checkbox "Select Owen Scott"
        - cell "Owen Scott owen@oscorp.com":
          - link "Owen Scott":
            - /url: /apps/crm/leads/L-1012
          - text: owen@oscorp.com
        - cell "Oscorp Labs"
        - cell "Referral"
        - cell "Unqualified"
        - cell "Omar Haddad"
        - cell "$54,000"
      - row "Select Ivy Nguyen Ivy Nguyen ivy@tyrell.com Tyrell Robotics Website Qualified Nina Rossi $55,000":
        - cell "Select Ivy Nguyen":
          - checkbox "Select Ivy Nguyen"
        - cell "Ivy Nguyen ivy@tyrell.com":
          - link "Ivy Nguyen":
            - /url: /apps/crm/leads/L-1011
          - text: ivy@tyrell.com
        - cell "Tyrell Robotics"
        - cell "Website"
        - cell "Qualified"
        - cell "Nina Rossi"
        - cell "$55,000"
      - row "Select Ryan Patel Ryan Patel ryan@cyberdyne.com Cyberdyne Systems Cold call Contacted Leo Park $56,000":
        - cell "Select Ryan Patel":
          - checkbox "Select Ryan Patel"
        - cell "Ryan Patel ryan@cyberdyne.com":
          - link "Ryan Patel":
            - /url: /apps/crm/leads/L-1010
          - text: ryan@cyberdyne.com
        - cell "Cyberdyne Systems"
        - cell "Cold call"
        - cell "Contacted"
        - cell "Leo Park"
        - cell "$56,000"
      - row "Select Chloe Martin Chloe Martin chloe@pied.com Pied Piper Event New Maya Chen $57,000":
        - cell "Select Chloe Martin":
          - checkbox "Select Chloe Martin"
        - cell "Chloe Martin chloe@pied.com":
          - link "Chloe Martin":
            - /url: /apps/crm/leads/L-1009
          - text: chloe@pied.com
        - cell "Pied Piper"
        - cell "Event"
        - cell "New"
        - cell "Maya Chen"
        - cell "$57,000"
      - row "Select Lucas Meyer Lucas Meyer lucas@vandelay.com Vandelay Imports LinkedIn Unqualified Omar Haddad $58,000":
        - cell "Select Lucas Meyer":
          - checkbox "Select Lucas Meyer"
        - cell "Lucas Meyer lucas@vandelay.com":
          - link "Lucas Meyer":
            - /url: /apps/crm/leads/L-1008
          - text: lucas@vandelay.com
        - cell "Vandelay Imports"
        - cell "LinkedIn"
        - cell "Unqualified"
        - cell "Omar Haddad"
        - cell "$58,000"
      - row "Select Zoe Adams Zoe Adams zoe@soylent.com Soylent Foods Referral Qualified Nina Rossi $59,000":
        - cell "Select Zoe Adams":
          - checkbox "Select Zoe Adams"
        - cell "Zoe Adams zoe@soylent.com":
          - link "Zoe Adams":
            - /url: /apps/crm/leads/L-1007
          - text: zoe@soylent.com
        - cell "Soylent Foods"
        - cell "Referral"
        - cell "Qualified"
        - cell "Nina Rossi"
        - cell "$59,000"
      - row "Select Ethan Kim Ethan Kim ethan@hooli.com Hooli Cloud Website Contacted Leo Park $60,000":
        - cell "Select Ethan Kim":
          - checkbox "Select Ethan Kim"
        - cell "Ethan Kim ethan@hooli.com":
          - link "Ethan Kim":
            - /url: /apps/crm/leads/L-1006
          - text: ethan@hooli.com
        - cell "Hooli Cloud"
        - cell "Website"
        - cell "Contacted"
        - cell "Leo Park"
        - cell "$60,000"
      - row "Select Mia Lopez Mia Lopez mia@wayne.com Wayne Retail Cold call New Maya Chen $61,000":
        - cell "Select Mia Lopez":
          - checkbox "Select Mia Lopez"
        - cell "Mia Lopez mia@wayne.com":
          - link "Mia Lopez":
            - /url: /apps/crm/leads/L-1005
          - text: mia@wayne.com
        - cell "Wayne Retail"
        - cell "Cold call"
        - cell "New"
        - cell "Maya Chen"
        - cell "$61,000"
      - row "Select Emma Wilson Emma Wilson emma@stark.com Stark Logistics Event Unqualified Omar Haddad $62,000":
        - cell "Select Emma Wilson":
          - checkbox "Select Emma Wilson"
        - cell "Emma Wilson emma@stark.com":
          - link "Emma Wilson":
            - /url: /apps/crm/leads/L-1004
          - text: emma@stark.com
        - cell "Stark Logistics"
        - cell "Event"
        - cell "Unqualified"
        - cell "Omar Haddad"
        - cell "$62,000"
      - row "Select Noah Singh Noah Singh noah@umbrella.com Umbrella Health LinkedIn Qualified Nina Rossi $63,000":
        - cell "Select Noah Singh":
          - checkbox "Select Noah Singh"
        - cell "Noah Singh noah@umbrella.com":
          - link "Noah Singh":
            - /url: /apps/crm/leads/L-1003
          - text: noah@umbrella.com
        - cell "Umbrella Health"
        - cell "LinkedIn"
        - cell "Qualified"
        - cell "Nina Rossi"
        - cell "$63,000"
      - row "Select Liam Carter Liam Carter liam@initech.com Initech Referral Contacted Leo Park $64,000":
        - cell "Select Liam Carter":
          - checkbox "Select Liam Carter"
        - cell "Liam Carter liam@initech.com":
          - link "Liam Carter":
            - /url: /apps/crm/leads/L-1002
          - text: liam@initech.com
        - cell "Initech"
        - cell "Referral"
        - cell "Contacted"
        - cell "Leo Park"
        - cell "$64,000"
      - row "Select Ava Brooks Ava Brooks ava@acme.com Acme Industries Website New Maya Chen $5,000":
        - cell "Select Ava Brooks":
          - checkbox "Select Ava Brooks"
        - cell "Ava Brooks ava@acme.com":
          - link "Ava Brooks":
            - /url: /apps/crm/leads/L-1001
          - text: ava@acme.com
        - cell "Acme Industries"
        - cell "Website"
        - cell "New"
        - cell "Maya Chen"
        - cell "$5,000"
- contentinfo:
  - link "PracticeQAAutomation — home":
    - /url: /
    - text: PracticeQAAutomation
  - paragraph: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
  - link "Follow us on LinkedIn":
    - /url: https://www.linkedin.com/company/practice-qa-automation
  - link "Support this site":
    - /url: https://rzp.io/rzp/supportpracticeqaautomation
  - text: Tools
  - link "Selenium":
    - /url: /selenium
  - link "Playwright":
    - /url: /playwright
  - link "Cypress":
    - /url: /cypress
  - text: Apps
  - link "All domain apps":
    - /url: /apps
  - link "📘 Project KT":
    - /url: /projects
  - link "Nova Shop":
    - /url: /shop
  - link "TrustBank":
    - /url: /apps/bank
  - link "SecureLife":
    - /url: /apps/insurance
  - text: Practice
  - link "📄 Start-here guide (PDF)":
    - /url: /downloads/practiceqa-start-guide.pdf
  - link "Challenges":
    - /url: /challenges
  - link "🔥 Daily challenge":
    - /url: /daily
  - link "Basic Auth":
    - /url: /misc/basic-auth
  - link "✨ AI tools":
    - /url: /ai
  - link "🔌 API practice":
    - /url: /api-practice
  - link "🗄️ SQL Playground":
    - /url: /sql-playground
  - link "📈 Performance testing":
    - /url: /performance-testing
  - link "🥒 BDD & Cucumber":
    - /url: /bdd
  - link "🧱 Framework & CI":
    - /url: /framework-ci
  - link "Test case library":
    - /url: /test-cases
  - link "🎯 Interview questions":
    - /url: /interview
  - link "🧠 Interview quiz":
    - /url: /interview/quiz
  - link "🤝 Share your interview":
    - /url: /interview/share
  - link "🆕 What's new":
    - /url: /releases
  - link "About Me":
    - /url: /about
  - link "Report a bug":
    - /url: /about#feedback
  - paragraph:
    - text: © 2026 PracticeQAAutomation. All rights reserved. ·
    - link "Privacy":
      - /url: /privacy
  - paragraph:
    - text: Made by
    - link "Amir":
      - /url: /about
    - text: with
    - img "love": ❤️
- alert
```

# Test source

```ts
  78  |   async compareText(actual: string, expected: string): Promise<void> {
  79  |     if (!actual.match(expected)) {
  80  |       throw new Error(`Expected Value is ${expected} , But found ${actual}`);
  81  |     }
  82  |   }
  83  | 
  84  |   // get the text from element using innerText() method
  85  |   async getElementInnerText(
  86  |     locator: Locator,
  87  |     index = 0,
  88  |   ): Promise<string | null> {
  89  |     return await locator.nth(index).innerText();
  90  |   }
  91  | 
  92  |   // get the all text from elements using innerText() method
  93  |   async getAllElementInnerText(locator: Locator): Promise<string[]> {
  94  |     return await locator.allInnerTexts();
  95  |   }
  96  | 
  97  |   // Verify text filled in textbox
  98  |   async verifyTextFilled(
  99  |     locator: Locator,
  100 |     expectedValue: string,
  101 |   ): Promise<void> {
  102 |     await expect(locator).toHaveValue(expectedValue);
  103 |   }
  104 | 
  105 |   // verify text displayed 
  106 |   async verifyDisplayedText(
  107 |     locator: Locator,
  108 |     expectedText: string,
  109 |     index = 0,
  110 |   ): Promise<void> {
  111 |     await expect(locator.nth(index)).toHaveText(expectedText);
  112 |   }
  113 | 
  114 |   // Count of element
  115 |   async verifyElementCount(locator: Locator, count: number): Promise<void> {
  116 |     await expect(locator).toHaveCount(count);
  117 |   }
  118 | 
  119 |   // Get element attribute
  120 |   async getElementAttribute(
  121 |     locator: Locator,
  122 |     attribute: string,
  123 |   ): Promise<string | null> {
  124 |     return await locator.getAttribute(attribute);
  125 |   }
  126 | 
  127 |   // Upload an element
  128 |   async uploadFile(locator: Locator, filePath: string): Promise<void> {
  129 |     await locator.setInputFiles(filePath);
  130 |   }
  131 | 
  132 |   async scrollToFilteredElement(element: Locator): Promise<void> {
  133 |     await element.scrollIntoViewIfNeeded({ timeout: 50000 });
  134 |   }
  135 | 
  136 |   // Filter rlement
  137 |   async filter(locator: Locator, data: string): Promise<Locator> {
  138 |     const filteredElement = locator.filter({ hasText: data });
  139 |     await this.scrollToFilteredElement(filteredElement);
  140 |     await expect(filteredElement).toBeVisible({ timeout: 50000 });
  141 |     return filteredElement;
  142 |   }
  143 | 
  144 |   // Filter rlement
  145 |   async locatorFilter(
  146 |     outerLocator: Locator,
  147 |     innerLocator: Locator,
  148 |     data: string,
  149 |     childSelector: string,
  150 |   ): Promise<Locator> {
  151 |     const filteredElement = outerLocator.filter({
  152 |       has: innerLocator.filter({ hasText: data }),
  153 |     });
  154 |     const childElement = filteredElement.locator(childSelector);
  155 |     await this.scrollToFilteredElement(childElement);
  156 |     await expect(childElement).toBeVisible({ timeout: 50000 });
  157 |     return childElement;
  158 |   }
  159 | 
  160 |   // Drag and Drop Element
  161 |   async dragAndDrop(
  162 |     sourceElement: Locator,
  163 |     targetElement: Locator,
  164 |   ): Promise<void> {
  165 |     await sourceElement.dragTo(targetElement);
  166 |   }
  167 | 
  168 |   // Verify element having text value
  169 |   async verifyElementText(
  170 |     locator: Locator,
  171 |     expectedText: string,
  172 |   ): Promise<void> {
  173 |     await expect(locator).toHaveText(expectedText);
  174 |   }
  175 | 
  176 |   // Check if an element is visible
  177 |   async isElementVisible(locator: Locator): Promise<void> {
> 178 |     await expect(locator).toBeVisible({ timeout: 50000 });
      |                           ^ Error: expect(locator).toBeVisible() failed
  179 |   }
  180 |   
  181 |   async isElementEditable(locator: Locator): Promise<void> {
  182 |     await expect(locator).toBeEditable();
  183 |   }
  184 | 
  185 |   async isElementHidden(locator: Locator): Promise<void> {
  186 |     await expect(locator).toBeHidden();
  187 |   }
  188 | 
  189 |   async isElementEnabled(locator: Locator): Promise<void> {
  190 |     await expect(locator).toBeEnabled();
  191 |   }
  192 | 
  193 |   // Check if an Checkbox/ Radio is not selected
  194 |   async isCheckboxNotChecked(locator: Locator): Promise<void> {
  195 |     await expect(locator).not.toBeChecked();
  196 |   }
  197 |   
  198 |   // Check if an Checkbox/ Radio is selected
  199 |   async isCheckboxChecked(locator: Locator): Promise<void> {
  200 |     await expect(locator).toBeChecked();
  201 |   }
  202 | 
  203 |   // Handle alert pop-up
  204 |   async handleAlert(
  205 |     action: "accept" | "dismiss",
  206 |     textToEnter?: string,
  207 |   ): Promise<void> {
  208 |     this.page.on("dialog", async (dialog) => {
  209 |       if (action === "accept") {
  210 |         await dialog.accept(textToEnter);
  211 |       } else {
  212 |         await dialog.dismiss();
  213 |       }
  214 |     });
  215 |   }
  216 | 
  217 | 
  218 |   // Take screenshot of the page
  219 |   async takeScreenshot(path: string): Promise<void> {
  220 |     await this.page.screenshot({ path });
  221 |   }
  222 | 
  223 |   // Get count
  224 |   async getCount(locator: Locator): Promise<number> {
  225 |     return await locator.count();
  226 |   }
  227 | 
  228 |   // verify expected value contains actual value
  229 |   async verifyValueContains(actual: string, expected: string) {}
  230 | 
  231 |   // custum wait
  232 |   async waitForTimeout(timeout: number): Promise<void> {
  233 |     await this.page.waitForTimeout(timeout);
  234 |   }
  235 | 
  236 |   //  wait for page load
  237 |   async waitForLoadPage(): Promise<void> {
  238 |     await this.page.waitForLoadState("load");
  239 |   }
  240 | 
  241 |   //  wait for dom content load
  242 |   async waitForLoadDOMContent(): Promise<void> {
  243 |     await this.page.waitForLoadState("domcontentloaded");
  244 |   }
  245 | }
  246 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify create new lead and convert it
- Location: tests\ui\leads-page-test.spec.ts:28:9

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('p') resolved to 19 elements:
    1) <p class="text-xs font-bold uppercase tracking-wider text-subtle">Testing types</p> aka getByText('Testing types')
    2) <p class="mt-1 text-sm text-muted">Drag cards between columns, or use the “Move to” …</p> aka getByText('Drag cards between columns,')
    3) <p class="font-bold">Umbrella Health</p> aka getByText('Umbrella Health')
    4) <p class="text-xs text-muted">Noah Singh · Maya Chen</p> aka getByText('Noah Singh · Maya Chen')
    5) <p class="font-bold">Tech Nova Solutions</p> aka getByText('Tech Nova Solutions')
    6) <p class="text-xs text-muted">Rahul Sharma · Maya Chen</p> aka getByText('Rahul Sharma · Maya Chen')
    7) <p class="font-bold">Stark Logistics</p> aka getByText('Stark Logistics')
    8) <p class="text-xs text-muted">Emma Wilson · Leo Park</p> aka getByText('Emma Wilson · Leo Park')
    9) <p class="font-bold">Tyrell Robotics</p> aka getByText('Tyrell Robotics')
    10) <p class="text-xs text-muted">Ivy Nguyen · Omar Haddad</p> aka getByText('Ivy Nguyen · Omar Haddad')
    ...

Call log:
  - waiting for locator('p')

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
  1   | import { Page, Locator, expect, FrameLocator } from "@playwright/test";
  2   | 
  3   | export class WebCommons {
  4   |   page: Page;
  5   | 
  6   |   // Constructor to initilize the page
  7   |   constructor(page: Page) {
  8   |     this.page = page;
  9   |   }
  10  | 
  11  |   // Common method to generate WebElement from the locator
  12  |   async element(
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
  44  |         return this.page.frameLocator(frameLocator).locator(locator);
  45  |         break;
  46  |       default:
  47  |         throw new Error(`Invalid locator Type: ${locatorType}`);
  48  |     }
  49  |   }
  50  | 
  51  |   // Common method to launch the application
  52  |   async launchApplication(url: string, title: string): Promise<void> {
  53  |     await this.page.goto(url);
  54  |     await this.page.waitForURL(url);
  55  |     await this.page.setViewportSize({ width: 1520, height: 810 });
  56  |     await expect(this.page).toHaveTitle(title);
  57  |   }
  58  | 
  59  |   // common method to locate iframe
  60  |   /* async frameLocator(frameLocator: string, locator: string): Promise<Locator>{
  61  |       return this.page.frameLocator(frameLocator).locator(locator)
  62  |   } */
  63  | 
  64  |   // Scroll to specified element
  65  |   async scrollToElement(
  66  |     locator: string,
  67  |     locatorType: string,
  68  |     frameLocator?: string,
  69  |     role?: any,
  70  |   ): Promise<void> {
  71  |     const element = await this.element(
  72  |       locator,
  73  |       locatorType,
  74  |       frameLocator,
  75  |       role,
  76  |     );
> 77  |     await element.scrollIntoViewIfNeeded({ timeout: 60000 });
      |                   ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('p') resolved to 19 elements:
  78  |   }
  79  | 
  80  |   // Click to element
  81  |   async click(
  82  |     locator: string,
  83  |     locatorType: string,
  84  |     frameLocator?: string,
  85  |     framelocatorType?: string,
  86  |     role?: any,
  87  |   ): Promise<void> {
  88  |     const element = await this.element(
  89  |       locator,
  90  |       locatorType,
  91  |       frameLocator,
  92  |       framelocatorType,
  93  |       role,
  94  |     );
  95  |     await this.scrollToElement(
  96  |       locator,
  97  |       locatorType,
  98  |       frameLocator,
  99  |       framelocatorType,
  100 |       role,
  101 |     );
  102 |     await element.click();
  103 |   }
  104 | 
  105 |   // Double Click
  106 |   async doubleClick(
  107 |     locator: string,
  108 |     locatorType: string,
  109 |     frameLocator?: string,
  110 |     role?: any,
  111 |   ): Promise<void> {
  112 |     const element = await this.element(
  113 |       locator,
  114 |       locatorType,
  115 |       frameLocator,
  116 |       role,
  117 |     );
  118 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  119 |     await element.dblclick();
  120 |   }
  121 | 
  122 |   // Right click
  123 |   async rightClick(
  124 |     locator: string,
  125 |     locatorType: string,
  126 |     frameLocator?: string,
  127 |     role?: any,
  128 |   ): Promise<void> {
  129 |     const element = await this.element(
  130 |       locator,
  131 |       locatorType,
  132 |       frameLocator,
  133 |       role,
  134 |     );
  135 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  136 |     await element.click({ button: "right" });
  137 |   }
  138 | 
  139 |   // Hover on an element
  140 |   async hoverElement(
  141 |     locator: string,
  142 |     locatorType: string,
  143 |     frameLocator?: string,
  144 |     role?: any,
  145 |   ): Promise<void> {
  146 |     const element = await this.element(
  147 |       locator,
  148 |       locatorType,
  149 |       frameLocator,
  150 |       role,
  151 |     );
  152 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  153 |     await element.hover();
  154 |   }
  155 | 
  156 |   // Force Click to element
  157 |   async forceClick(
  158 |     locator: string,
  159 |     locatorType: string,
  160 |     frameLocator?: string,
  161 |     role?: any,
  162 |   ): Promise<void> {
  163 |     const element = await this.element(
  164 |       locator,
  165 |       locatorType,
  166 |       frameLocator,
  167 |       role,
  168 |     );
  169 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  170 |     await element.click({ force: true });
  171 |   }
  172 | 
  173 |   // Clear to element
  174 |   async clearText(
  175 |     locator: string,
  176 |     locatorType: string,
  177 |     frameLocator?: string,
```
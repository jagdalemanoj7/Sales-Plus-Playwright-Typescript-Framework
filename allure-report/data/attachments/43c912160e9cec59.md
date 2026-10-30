# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify create new lead and convert it
- Location: tests\ui\leads-page-test.spec.ts:25:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('page-title')

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
        - heading "Welcome, Maya" [level=1] [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - paragraph [ref=e64]: Open leads
            - paragraph [ref=e65]: "6"
          - generic [ref=e66]:
            - paragraph [ref=e67]: Pipeline value
            - paragraph [ref=e68]: $227,000
          - generic [ref=e69]:
            - paragraph [ref=e70]: Won
            - paragraph [ref=e71]: $55,000
          - generic [ref=e72]:
            - paragraph [ref=e73]: Win rate
            - paragraph [ref=e74]: 50%
        - generic [ref=e75]:
          - generic [ref=e76]:
            - heading "Pipeline by stage" [level=2] [ref=e77]
            - list [ref=e78]:
              - listitem [ref=e79]:
                - generic [ref=e80]:
                  - generic [ref=e81]: Qualified (1)
                  - generic [ref=e82]: $42,000
              - listitem [ref=e85]:
                - generic [ref=e86]:
                  - generic [ref=e87]: Proposal (2)
                  - generic [ref=e88]: $167,000
              - listitem [ref=e91]:
                - generic [ref=e92]:
                  - generic [ref=e93]: Negotiation (1)
                  - generic [ref=e94]: $18,000
              - listitem [ref=e97]:
                - generic [ref=e98]:
                  - generic [ref=e99]: Won (1)
                  - generic [ref=e100]: $55,000
              - listitem [ref=e103]:
                - generic [ref=e104]:
                  - generic [ref=e105]: Lost (1)
                  - generic [ref=e106]: $24,000
            - link "Open pipeline" [ref=e109] [cursor=pointer]:
              - /url: /apps/crm/pipeline
          - generic [ref=e110]:
            - heading "Recent activity" [level=2] [ref=e111]
            - paragraph [ref=e112]: No activity logged yet. Open a lead to add one.
            - link "Work my leads" [ref=e113] [cursor=pointer]:
              - /url: /apps/crm/leads
  - contentinfo [ref=e114]:
    - generic [ref=e115]:
      - generic [ref=e116]:
        - link "PracticeQAAutomation — home" [ref=e117] [cursor=pointer]:
          - /url: /
          - generic [ref=e118]: PracticeQAAutomation
        - paragraph [ref=e119]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e120]:
          - link "Follow us on LinkedIn" [ref=e121] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e124] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e125]: ☕
            - text: Support this site
      - generic [ref=e126]:
        - generic [ref=e127]:
          - generic [ref=e128]: Tools
          - link "Selenium" [ref=e129] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e130] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e131] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e132]:
          - generic [ref=e133]: Apps
          - link "All domain apps" [ref=e134] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e135] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e136] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e137] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e138] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e139]:
          - generic [ref=e140]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e141] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e142] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e143] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e144] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e145] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e146] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e147] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e148] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e149] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e150] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e151] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e152] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e153] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e154] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e155] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e156] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e157] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e159]:
      - paragraph [ref=e160]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e161] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e162]:
        - text: Made by
        - link "Amir" [ref=e163] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e164]: ❤️
  - alert [ref=e165]: Welcome, Maya
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
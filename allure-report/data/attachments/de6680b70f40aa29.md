# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Filtered Lead Record According To Status And Source
- Location: tests\ui\leads-page-test.spec.ts:84:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
              - generic [ref=e65]: 0 leads
          - button "+ New lead" [ref=e66] [cursor=pointer]
        - generic [ref=e67]:
          - searchbox "Search leads" [ref=e68]
          - combobox "Status" [ref=e69]:
            - option "All statuses"
            - option "New"
            - option "Contacted"
            - option "Qualified"
            - option "Unqualified"
            - option "Converted" [selected]
          - combobox "Source" [ref=e70]:
            - option "All sources" [selected]
            - option "Website"
            - option "Referral"
            - option "LinkedIn"
            - option "Event"
            - option "Cold call"
        - generic [ref=e71]:
          - generic [ref=e72]: 🔍
          - paragraph [ref=e73]: No leads match.
  - contentinfo [ref=e74]:
    - generic [ref=e75]:
      - generic [ref=e76]:
        - link "PracticeQAAutomation — home" [ref=e77] [cursor=pointer]:
          - /url: /
          - generic [ref=e78]: PracticeQAAutomation
        - paragraph [ref=e79]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e80]:
          - link "Follow us on LinkedIn" [ref=e81] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e84] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e85]: ☕
            - text: Support this site
      - generic [ref=e86]:
        - generic [ref=e87]:
          - generic [ref=e88]: Tools
          - link "Selenium" [ref=e89] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e90] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e91] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e92]:
          - generic [ref=e93]: Apps
          - link "All domain apps" [ref=e94] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e95] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e96] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e97] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e98] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e99]:
          - generic [ref=e100]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e101] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e102] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e103] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e104] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e105] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e106] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e107] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e108] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e109] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e110] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e111] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e112] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e113] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e114] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e115] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e116] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e117] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e119]:
      - paragraph [ref=e120]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e121] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e122]:
        - text: Made by
        - link "Amir" [ref=e123] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e124]: ❤️
  - alert [ref=e125]
```

# Test source

```ts
  455 |     role?: any,
  456 |     data?: string
  457 |   ): Promise<void> {
  458 |     const element = await this.element(
  459 |       locator,
  460 |       locatorType,
  461 |       frameLocator,
  462 |       role,
  463 |     );
  464 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  465 |     await expect(element).toBeVisible({ timeout: 50000 });    
  466 |   }
  467 | 
  468 |   // Check if an element is enabled
  469 |   async isElementEnabled(
  470 |     locator: string,
  471 |     locatorType: string,
  472 |     frameLocator?: string,
  473 |     role?: any,
  474 |   ): Promise<void> {
  475 |     const element = await this.element(
  476 |       locator,
  477 |       locatorType,
  478 |       frameLocator,
  479 |       role,
  480 |     );
  481 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  482 |     await expect(element).toBeEnabled();
  483 |   }
  484 | 
  485 |   // Check if an element is enabled
  486 |   async isElementEditable(
  487 |     locator: string,
  488 |     locatorType: string,
  489 |     frameLocator?: string,
  490 |     role?: any,
  491 |   ): Promise<void> {
  492 |     const element = await this.element(
  493 |       locator,
  494 |       locatorType,
  495 |       frameLocator,
  496 |       role,
  497 |     );
  498 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  499 |     await expect(element).toBeEditable();
  500 |   }
  501 | 
  502 |   // Check if an element is hidden
  503 |   async isElementHidden(
  504 |     locator: string,
  505 |     locatorType: string,
  506 |     frameLocator?: string,
  507 |     role?: any,
  508 |   ): Promise<void> {
  509 |     const element = await this.element(
  510 |       locator,
  511 |       locatorType,
  512 |       frameLocator,
  513 |       role,
  514 |     );
  515 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  516 |     await expect(element).toBeHidden();
  517 |   }
  518 | 
  519 |   // Handle alert pop-up
  520 |   async handleAlert(
  521 |     action: "accept" | "dismiss",
  522 |     textToEnter?: string,
  523 |   ): Promise<void> {
  524 |     this.page.on("dialog", async (dialog) => {
  525 |       if (action === "accept") {
  526 |         await dialog.accept(textToEnter);
  527 |       } else {
  528 |         await dialog.dismiss();
  529 |       }
  530 |     });
  531 |   }
  532 | 
  533 |   // Take screenshot of the page
  534 |   async takeScreenshot(path: string): Promise<void> {
  535 |     await this.page.screenshot({ path });
  536 |   }
  537 | 
  538 |   // Get count
  539 |   async getCount(
  540 |     locator: string,
  541 |     locatorType: string,
  542 |     frameLocator?: string,
  543 |     role?: any,
  544 |   ): Promise<number>{
  545 |     const element = await this.element(locator, locatorType, frameLocator, role);
  546 |     // await this.scrollToElement(locator, locatorType, frameLocator, role);
  547 |     return await element.count()
  548 |   }
  549 | 
  550 |   // verify expected value contains actual value
  551 |   async verifyValueContains(actual: string, expected: string) {}
  552 | 
  553 |   // custum wait
  554 |   async waitForTimeout(timeout: number): Promise<void> {
> 555 |     await this.page.waitForTimeout(timeout);
      |                     ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  556 |   }
  557 | 
  558 |   //  wait for page load
  559 |   async waitForLoadPage(): Promise<void> {
  560 |     await this.page.waitForLoadState("load");
  561 |   }
  562 | 
  563 |   //  wait for dom content load
  564 |   async waitForLoadDOMContent(): Promise<void> {
  565 |     await this.page.waitForLoadState("domcontentloaded");
  566 |   }
  567 | }
  568 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login-page-test.spec.ts >> Login Page Feature Test >> Verify login functionality with valid credentials
- Location: tests\ui\login-page-test.spec.ts:24:9

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with //h1[contains(text(),'Welcome, ')]
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
          - paragraph [ref=e62]: CRM practice app
          - heading "Close more deals, faster" [level=1] [ref=e63]
          - paragraph [ref=e64]: A leads table with bulk actions, lead activity, convert-to-deal, and a drag-and-drop pipeline.
          - generic [ref=e65]:
            - heading "Test users" [level=2] [ref=e66]
            - generic [ref=e68]:
              - term [ref=e69]:
                - code [ref=e70]: sales@crm.dev
              - definition [ref=e71]: Sales rep — leads, deals & pipeline
            - generic [ref=e73]:
              - term [ref=e74]: Password
              - definition [ref=e75]:
                - code [ref=e76]: Crm@123
        - generic [ref=e77]:
          - heading "Sign in" [level=2] [ref=e78]
          - generic [ref=e79]:
            - generic [ref=e80]: Work email
            - textbox "Work email" [ref=e81]: sales@crm.dev
          - generic [ref=e82]:
            - generic [ref=e83]: Password
            - textbox "Password" [ref=e84]: Crm@123
          - generic [ref=e85]:
            - checkbox "Keep me signed in" [ref=e86]
            - text: Keep me signed in
          - button "Sign in" [active] [ref=e87] [cursor=pointer]
  - contentinfo [ref=e88]:
    - generic [ref=e89]:
      - generic [ref=e90]:
        - link "PracticeQAAutomation — home" [ref=e91] [cursor=pointer]:
          - /url: /
          - generic [ref=e92]: PracticeQAAutomation
        - paragraph [ref=e93]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e94]:
          - link "Follow us on LinkedIn" [ref=e95] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e98] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e99]: ☕
            - text: Support this site
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]: Tools
          - link "Selenium" [ref=e103] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e104] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e105] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e106]:
          - generic [ref=e107]: Apps
          - link "All domain apps" [ref=e108] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e109] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e110] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e111] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e112] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e113]:
          - generic [ref=e114]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e115] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e116] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e117] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e118] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e119] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e120] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e121] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e122] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e123] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e124] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e125] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e126] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e127] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e128] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e129] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e130] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e131] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e133]:
      - paragraph [ref=e134]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e135] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e136]:
        - text: Made by
        - link "Amir" [ref=e137] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e138]: ❤️
  - alert [ref=e139]
```

# Test source

```ts
  428 |     role?: any,
  429 |   ): Promise<void> {
  430 |     const element = await this.element(
  431 |       locator,
  432 |       locatorType,
  433 |       frameLocator,
  434 |       role,
  435 |     );
  436 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  437 |     await element.setInputFiles(filePath);
  438 |   }
  439 | 
  440 |   async scrollToFilteredElement(
  441 |     element: Locator
  442 |   ): Promise<void>{
  443 |     await element.scrollIntoViewIfNeeded({ timeout: 50000 })
  444 |   }
  445 | 
  446 |   // Filter rlement
  447 |   async filter(
  448 |     locator: string,
  449 |     locatorType: string,
  450 |     data: string,
  451 |     frameLocator?: string,
  452 |     role?: any,
  453 |   ): Promise<Locator> {
  454 |     const element = await this.element(
  455 |       locator,
  456 |       locatorType,
  457 |       frameLocator,
  458 |       role,
  459 |     );
  460 |     const filteredElement = await element.filter({ hasText: data });
  461 |     await this.scrollToFilteredElement(filteredElement)
  462 |     await expect(filteredElement).toBeVisible({ timeout: 50000 })
  463 |     return filteredElement;
  464 |   }
  465 | 
  466 |   // Filter rlement
  467 |   async locatorFilter(    
  468 |     outerLocator: string,
  469 |     outerLocatorType: string,    
  470 |     innerLocator: string,
  471 |     innerLocatorType: string,
  472 |     data: string,
  473 |     mainLocator: string,
  474 |     mainLocatorType: string,
  475 |     frameLocator?: string,
  476 |     role?: any,
  477 |   ): Promise<Locator> {
  478 |     const outerElement = await this.element(outerLocator, outerLocatorType, frameLocator, role,);
  479 |     const innerElement = await this.element(innerLocator, innerLocatorType, frameLocator, role,);
  480 |     // const mainElement  = await this.element(mainLocator, mainLocatorType, frameLocator, role)
  481 |     // await this.scrollToFilteredElement(outerElement)
  482 |     // await this.scrollToFilteredElement(innerElement)
  483 | 
  484 |     const filteredElement = await outerElement.filter({ has: innerElement.filter({hasText: data }) })
  485 |                             //    outerElement.filter({ has: page.locator('td', { hasText: company }) });
  486 | 
  487 |     const mainFilteredElement = await filteredElement.locator(mainLocator)
  488 |     await this.scrollToFilteredElement(mainFilteredElement)
  489 |     await expect(mainFilteredElement).toBeVisible({ timeout: 50000 })
  490 |     return mainFilteredElement;
  491 |   }
  492 | 
  493 |   // Drag and Drop Element
  494 |   async dragAndDrop(
  495 |     sourceElement: Locator,
  496 |     targetElement: Locator,
  497 |   ): Promise<void> {
  498 |     await sourceElement.dragTo(targetElement);
  499 |   }
  500 | 
  501 |   // Verify element having text value
  502 |   async verifyElementText(
  503 |     locator: string,
  504 |     locatorType: string,
  505 |     expectedText: string,
  506 |     frameLocator?: string,
  507 |     role?: any,
  508 |   ) {
  509 |     const element = await this.element(
  510 |       locator,
  511 |       locatorType,
  512 |       frameLocator,
  513 |       role,
  514 |     );
  515 |     await expect(element).toHaveText(expectedText);
  516 |   }
  517 |   
  518 |   // Check if an element is visible
  519 |   async isElementVisible(
  520 |     element: Locator,
  521 |     // locatorType: string,
  522 |     frameLocator?: Locator,
  523 |     // role?: any,
  524 |     data?: string
  525 |   ): Promise<void> {
  526 |     // const element = await this.element(locator, locatorType, frameLocator, role, );
  527 |     // await this.scrollToElement(locator, locatorType, frameLocator, role);
> 528 |     await expect(element).toBeVisible({ timeout: 50000 });    
      |                           ^ Error: toBeVisible can be only used with Locator object, was called with //h1[contains(text(),'Welcome, ')]
  529 |   }
  530 | 
  531 |   // Check if an element is enabled
  532 |   async isElementEnabled(
  533 |     locator: string,
  534 |     locatorType: string,
  535 |     frameLocator?: string,
  536 |     role?: any,
  537 |   ): Promise<void> {
  538 |     const element = await this.element(
  539 |       locator,
  540 |       locatorType,
  541 |       frameLocator,
  542 |       role,
  543 |     );
  544 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  545 |     await expect(element).toBeEnabled();
  546 |   }
  547 | 
  548 |   // Check if an element is enabled
  549 |   async isElementEditable(
  550 |     locator: string,
  551 |     locatorType: string,
  552 |     frameLocator?: string,
  553 |     role?: any,
  554 |   ): Promise<void> {
  555 |     const element = await this.element(
  556 |       locator,
  557 |       locatorType,
  558 |       frameLocator,
  559 |       role,
  560 |     );
  561 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  562 |     await expect(element).toBeEditable();
  563 |   }
  564 | 
  565 |   // Check if an element is hidden
  566 |   async isElementHidden(
  567 |     locator: string,
  568 |     locatorType: string,
  569 |     frameLocator?: string,
  570 |     role?: any,
  571 |   ): Promise<void> {
  572 |     const element = await this.element(
  573 |       locator,
  574 |       locatorType,
  575 |       frameLocator,
  576 |       role,
  577 |     );
  578 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  579 |     await expect(element).toBeHidden();
  580 |   }
  581 | 
  582 |   // Check if an Checkbox/ Radio is not selected
  583 |   async isCheckboxNotChecked(
  584 |     locator: string,
  585 |     locatorType: string,
  586 |     frameLocator?: string,
  587 |     role?: any,): Promise<void> {
  588 |     const element = await this.element(
  589 |       locator,
  590 |       locatorType,
  591 |       frameLocator,
  592 |       role,
  593 |     );    
  594 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  595 |     await expect(element).not.toBeChecked()
  596 |   }
  597 | 
  598 |   // Check if an Checkbox/ Radio is selected
  599 |   async isCheckboxChecked(
  600 |     locator: string,
  601 |     locatorType: string,
  602 |     frameLocator?: string,
  603 |     role?: any,): Promise<void> {
  604 |     const element = await this.element(
  605 |       locator,
  606 |       locatorType,
  607 |       frameLocator,
  608 |       role,
  609 |     );    
  610 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  611 |     await expect(element).toBeChecked()
  612 |   }
  613 |   
  614 |   // Handle alert pop-up
  615 |   async handleAlert(
  616 |     action: "accept" | "dismiss",
  617 |     textToEnter?: string,
  618 |   ): Promise<void> {
  619 |     this.page.on("dialog", async (dialog) => {
  620 |       if (action === "accept") {
  621 |         await dialog.accept(textToEnter);
  622 |       } else {
  623 |         await dialog.dismiss();
  624 |       }
  625 |     });
  626 |   }
  627 | 
  628 |   // Take screenshot of the page
```
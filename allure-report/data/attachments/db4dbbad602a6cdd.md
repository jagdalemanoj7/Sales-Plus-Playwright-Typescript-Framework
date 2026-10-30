# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify create new lead and convert it
- Location: tests\ui\leads-page-test.spec.ts:28:9

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with Promise Promise { <pending> }
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
        - button "🧑‍🏫 AI coach · paused" [ref=e55]:
          - text: 🧑‍🏫
          - generic [ref=e56]: AI coach · paused
      - generic [ref=e58]:
        - generic [ref=e59]:
          - paragraph [ref=e60]: CRM practice app
          - heading "Close more deals, faster" [level=1] [ref=e61]
          - paragraph [ref=e62]: A leads table with bulk actions, lead activity, convert-to-deal, and a drag-and-drop pipeline.
          - generic [ref=e63]:
            - heading "Test users" [level=2] [ref=e64]
            - generic [ref=e66]:
              - term [ref=e67]:
                - code [ref=e68]: sales@crm.dev
              - definition [ref=e69]: Sales rep — leads, deals & pipeline
            - generic [ref=e71]:
              - term [ref=e72]: Password
              - definition [ref=e73]:
                - code [ref=e74]: Crm@123
        - generic [ref=e75]:
          - heading "Sign in" [level=2] [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78]: Work email
            - textbox "Work email" [ref=e79]
          - generic [ref=e80]:
            - generic [ref=e81]: Password
            - textbox "Password" [ref=e82]
          - generic [ref=e83]:
            - checkbox "Keep me signed in" [ref=e84]
            - text: Keep me signed in
          - button "Sign in" [ref=e85] [cursor=pointer]
  - contentinfo [ref=e86]:
    - generic [ref=e87]:
      - generic [ref=e88]:
        - link "PracticeQAAutomation — home" [ref=e89] [cursor=pointer]:
          - /url: /
          - generic [ref=e90]: PracticeQAAutomation
        - paragraph [ref=e91]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e92]:
          - link "Follow us on LinkedIn" [ref=e93] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e96] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e97]: ☕
            - text: Support this site
      - generic [ref=e98]:
        - generic [ref=e99]:
          - generic [ref=e100]: Tools
          - link "Selenium" [ref=e101] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e102] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e103] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e104]:
          - generic [ref=e105]: Apps
          - link "All domain apps" [ref=e106] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e107] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e108] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e109] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e110] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e111]:
          - generic [ref=e112]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e113] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e114] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e115] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e116] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e117] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e118] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e119] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e120] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e121] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e122] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e123] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e124] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e125] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e126] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e127] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e128] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e129] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e131]:
      - paragraph [ref=e132]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e133] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e134]:
        - text: Made by
        - link "Amir" [ref=e135] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e136]: ❤️
  - alert [ref=e137]
```

# Test source

```ts
  323 |     );
  324 |     await expect(element).toHaveText(expectedText);
  325 |   }
  326 | 
  327 |   /*   async verifyDropdownValueSelected(locator: string, locatorType: string, expectedValue: string, frameLocator?: string, role?: any): Promise<void> {
  328 |     const element = await this.element(locator, locatorType, frameLocator, role);
  329 |     await expect(element).toHaveValue(expectedValue);
  330 |   } */
  331 | 
  332 |   // Get element attribute
  333 |   async getElementAttribute(
  334 |     locator: string,
  335 |     locatorType: string,
  336 |     attribute: string,
  337 |     frameLocator?: string,
  338 |     role?: any,
  339 |   ): Promise<string | null> {
  340 |     const element = await this.element(
  341 |       locator,
  342 |       locatorType,
  343 |       frameLocator,
  344 |       role,
  345 |     );
  346 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  347 |     return await element.getAttribute(attribute);
  348 |   }
  349 | 
  350 |   // Upload an element
  351 |   async uploadFile(
  352 |     locator: string,
  353 |     locatorType: string,
  354 |     filePath: string,
  355 |     frameLocator?: string,
  356 |     role?: any,
  357 |   ): Promise<void> {
  358 |     const element = await this.element(
  359 |       locator,
  360 |       locatorType,
  361 |       frameLocator,
  362 |       role,
  363 |     );
  364 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  365 |     await element.setInputFiles(filePath);
  366 |   }
  367 | 
  368 |   // Filter rlement
  369 |   async filter(
  370 |     locator: string,
  371 |     locatorType: string,
  372 |     data: string | undefined,
  373 |     frameLocator?: string,
  374 |     role?: any,
  375 |   ): Promise<Locator> {
  376 |     const element = await this.element(
  377 |       locator,
  378 |       locatorType,
  379 |       frameLocator,
  380 |       role,
  381 |     );
  382 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  383 |     const filteredElement = await element.filter({ hasText: data });
  384 |     await expect(filteredElement).toBeVisible({ timeout: 50000 })
  385 |     return filteredElement;
  386 |   }
  387 | 
  388 |   // Drag and Drop Element
  389 |   async dragAndDrop(
  390 |     sourceElement: Locator,
  391 |     targetElement: Locator,
  392 |   ): Promise<void> {
  393 |     await sourceElement.dragTo(targetElement);
  394 |   }
  395 | 
  396 |   // Verify element having text value
  397 |   async verifyElementText(
  398 |     locator: string,
  399 |     locatorType: string,
  400 |     expectedText: string,
  401 |     frameLocator?: string,
  402 |     role?: any,
  403 |   ) {
  404 |     const element = await this.element(
  405 |       locator,
  406 |       locatorType,
  407 |       frameLocator,
  408 |       role,
  409 |     );
  410 |     await expect(element).toHaveText(expectedText);
  411 |   }
  412 |   
  413 |   // Check if an element is visible
  414 |   async isElementVisible(
  415 |     locator: string,
  416 |     locatorType: string,
  417 |     frameLocator?: string,
  418 |     role?: any,
  419 |     data?: string
  420 |   ): Promise<void> {
  421 |     if(data!==''){
  422 |         const element = this.filter(locator, locatorType, data, frameLocator, role)
> 423 |         await expect(element).toBeVisible({ timeout: 50000 })
      |                               ^ Error: toBeVisible can be only used with Locator object, was called with Promise Promise { <pending> }
  424 |     }
  425 |     else {
  426 |         const element = await this.element(
  427 |       locator,
  428 |       locatorType,
  429 |       frameLocator,
  430 |       role,
  431 |         );
  432 |         await this.scrollToElement(locator, locatorType, frameLocator, role);
  433 |         await expect(element).toBeVisible({ timeout: 50000 });
  434 |     }
  435 |   }
  436 | 
  437 |   // Check if an element is enabled
  438 |   async isElementEnabled(
  439 |     locator: string,
  440 |     locatorType: string,
  441 |     frameLocator?: string,
  442 |     role?: any,
  443 |   ): Promise<void> {
  444 |     const element = await this.element(
  445 |       locator,
  446 |       locatorType,
  447 |       frameLocator,
  448 |       role,
  449 |     );
  450 |     await expect(element).toBeEnabled();
  451 |   }
  452 | 
  453 |   // Check if an element is enabled
  454 |   async isElementEditable(
  455 |     locator: string,
  456 |     locatorType: string,
  457 |     frameLocator?: string,
  458 |     role?: any,
  459 |   ): Promise<void> {
  460 |     const element = await this.element(
  461 |       locator,
  462 |       locatorType,
  463 |       frameLocator,
  464 |       role,
  465 |     );
  466 |     await expect(element).toBeEditable();
  467 |   }
  468 | 
  469 |   // Check if an element is hidden
  470 |   async isElementHidden(
  471 |     locator: string,
  472 |     locatorType: string,
  473 |     frameLocator?: string,
  474 |     role?: any,
  475 |   ): Promise<void> {
  476 |     const element = await this.element(
  477 |       locator,
  478 |       locatorType,
  479 |       frameLocator,
  480 |       role,
  481 |     );
  482 |     await expect(element).toBeHidden();
  483 |   }
  484 | 
  485 |   // Handle alert pop-up
  486 |   async handleAlert(
  487 |     action: "accept" | "dismiss",
  488 |     textToEnter?: string,
  489 |   ): Promise<void> {
  490 |     this.page.on("dialog", async (dialog) => {
  491 |       if (action === "accept") {
  492 |         await dialog.accept(textToEnter);
  493 |       } else {
  494 |         await dialog.dismiss();
  495 |       }
  496 |     });
  497 |   }
  498 | 
  499 |   // Take screenshot of the page
  500 |   async takeScreenshot(path: string): Promise<void> {
  501 |     await this.page.screenshot({ path });
  502 |   }
  503 | 
  504 |   // Compare text values
  505 |   async compareText(actual: string | null, expected: string) {
  506 |     if (!actual?.includes(expected)) {
  507 |       throw new Error(`Expected Value is ${expected} , But found ${actual}`);
  508 |     }
  509 |   }
  510 | 
  511 |   // verify expected value contains actual value
  512 |   async verifyValueContains(actual: string, expected: string) {}
  513 | 
  514 |   // custum wait
  515 |   async waitForTimeout(timeout: number): Promise<void> {
  516 |     await this.page.waitForTimeout(timeout);
  517 |   }
  518 | 
  519 |   //  wait for page load
  520 |   async waitForLoadPage(): Promise<void> {
  521 |     await this.page.waitForLoadState("load");
  522 |   }
  523 | 
```
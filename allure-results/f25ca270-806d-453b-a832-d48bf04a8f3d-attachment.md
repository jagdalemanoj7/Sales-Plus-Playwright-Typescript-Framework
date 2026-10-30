# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Owner Bulk Assignment
- Location: tests\ui\leads-page-test.spec.ts:108:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[type=\'checkbox\']').filter({ has: locator('td').filter({ hasText: 'Oscorp Labs' }) })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('input[type=\'checkbox\']').filter({ has: locator('td').filter({ hasText: 'Oscorp Labs' }) }) with timeout 50000ms
  - waiting for locator('input[type=\'checkbox\']').filter({ has: locator('td').filter({ hasText: 'Oscorp Labs' }) })
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
  357 |     locatorType: string,
  358 |     count: number,
  359 |     frameLocator?: string,
  360 |     role?: any,
  361 |     
  362 |   ): Promise<void> {
  363 |     const element = await this.element(
  364 |       locator,
  365 |       locatorType,
  366 |       frameLocator,
  367 |       role,
  368 |     );    
  369 |     await expect(element).toHaveCount(count)
  370 |   }
  371 | 
  372 |   /*   async verifyDropdownValueSelected(locator: string, locatorType: string, expectedValue: string, frameLocator?: string, role?: any): Promise<void> {
  373 |     const element = await this.element(locator, locatorType, frameLocator, role);
  374 |     await expect(element).toHaveValue(expectedValue);
  375 |   } */
  376 | 
  377 |   // Get element attribute
  378 |   async getElementAttribute(
  379 |     locator: string,
  380 |     locatorType: string,
  381 |     attribute: string,
  382 |     frameLocator?: string,
  383 |     role?: any,
  384 |   ): Promise<string | null> {
  385 |     const element = await this.element(
  386 |       locator,
  387 |       locatorType,
  388 |       frameLocator,
  389 |       role,
  390 |     );
  391 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  392 |     return await element.getAttribute(attribute);
  393 |   }
  394 | 
  395 |   // Upload an element
  396 |   async uploadFile(
  397 |     locator: string,
  398 |     locatorType: string,
  399 |     filePath: string,
  400 |     frameLocator?: string,
  401 |     role?: any,
  402 |   ): Promise<void> {
  403 |     const element = await this.element(
  404 |       locator,
  405 |       locatorType,
  406 |       frameLocator,
  407 |       role,
  408 |     );
  409 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  410 |     await element.setInputFiles(filePath);
  411 |   }
  412 | 
  413 |   async scrollToFilteredElement(
  414 |     element: Locator
  415 |   ): Promise<void>{
  416 |     await element.scrollIntoViewIfNeeded({ timeout: 50000 })
  417 |   }
  418 | 
  419 |   // Filter rlement
  420 |   async filter(
  421 |     locator: string,
  422 |     locatorType: string,
  423 |     data: string,
  424 |     frameLocator?: string,
  425 |     role?: any,
  426 |   ): Promise<Locator> {
  427 |     const element = await this.element(
  428 |       locator,
  429 |       locatorType,
  430 |       frameLocator,
  431 |       role,
  432 |     );
  433 |     const filteredElement = await element.filter({ hasText: data });
  434 |     await this.scrollToFilteredElement(filteredElement)
  435 |     await expect(filteredElement).toBeVisible({ timeout: 50000 })
  436 |     return filteredElement;
  437 |   }
  438 | 
  439 |   // Filter rlement
  440 |   async locatorFilter(
  441 |     outerLocator: string,
  442 |     outerLocatorType: string,
  443 |     innerLocator: string,
  444 |     innerLocatorType: string,
  445 |     data: string,
  446 |     frameLocator?: string,
  447 |     role?: any,
  448 |   ): Promise<Locator> {
  449 |     const outerElement = await this.element(outerLocator, outerLocatorType, frameLocator, role,);
  450 |     const innerElement = await this.element(innerLocator, innerLocatorType, frameLocator, role,);
  451 |     // await this.scrollToFilteredElement(outerElement)
  452 |     // await this.scrollToFilteredElement(innerElement)
  453 | 
  454 |     const filteredElement = await outerElement.filter({ has: innerElement.filter( {hasText: data }) })
  455 |                             //    outerElement.filter({ has: page.locator('td', { hasText: company }) });
  456 |     // await this.scrollToFilteredElement(filteredElement)
> 457 |     await expect(filteredElement).toBeVisible({ timeout: 50000 })
      |                                   ^ Error: expect(locator).toBeVisible() failed
  458 |     return filteredElement;
  459 |   }
  460 | 
  461 |   // Drag and Drop Element
  462 |   async dragAndDrop(
  463 |     sourceElement: Locator,
  464 |     targetElement: Locator,
  465 |   ): Promise<void> {
  466 |     await sourceElement.dragTo(targetElement);
  467 |   }
  468 | 
  469 |   // Verify element having text value
  470 |   async verifyElementText(
  471 |     locator: string,
  472 |     locatorType: string,
  473 |     expectedText: string,
  474 |     frameLocator?: string,
  475 |     role?: any,
  476 |   ) {
  477 |     const element = await this.element(
  478 |       locator,
  479 |       locatorType,
  480 |       frameLocator,
  481 |       role,
  482 |     );
  483 |     await expect(element).toHaveText(expectedText);
  484 |   }
  485 |   
  486 |   // Check if an element is visible
  487 |   async isElementVisible(
  488 |     locator: string,
  489 |     locatorType: string,
  490 |     frameLocator?: string,
  491 |     role?: any,
  492 |     data?: string
  493 |   ): Promise<void> {
  494 |     const element = await this.element(
  495 |       locator,
  496 |       locatorType,
  497 |       frameLocator,
  498 |       role,
  499 |     );
  500 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  501 |     await expect(element).toBeVisible({ timeout: 50000 });    
  502 |   }
  503 | 
  504 |   // Check if an element is enabled
  505 |   async isElementEnabled(
  506 |     locator: string,
  507 |     locatorType: string,
  508 |     frameLocator?: string,
  509 |     role?: any,
  510 |   ): Promise<void> {
  511 |     const element = await this.element(
  512 |       locator,
  513 |       locatorType,
  514 |       frameLocator,
  515 |       role,
  516 |     );
  517 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  518 |     await expect(element).toBeEnabled();
  519 |   }
  520 | 
  521 |   // Check if an element is enabled
  522 |   async isElementEditable(
  523 |     locator: string,
  524 |     locatorType: string,
  525 |     frameLocator?: string,
  526 |     role?: any,
  527 |   ): Promise<void> {
  528 |     const element = await this.element(
  529 |       locator,
  530 |       locatorType,
  531 |       frameLocator,
  532 |       role,
  533 |     );
  534 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  535 |     await expect(element).toBeEditable();
  536 |   }
  537 | 
  538 |   // Check if an element is hidden
  539 |   async isElementHidden(
  540 |     locator: string,
  541 |     locatorType: string,
  542 |     frameLocator?: string,
  543 |     role?: any,
  544 |   ): Promise<void> {
  545 |     const element = await this.element(
  546 |       locator,
  547 |       locatorType,
  548 |       frameLocator,
  549 |       role,
  550 |     );
  551 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  552 |     await expect(element).toBeHidden();
  553 |   }
  554 | 
  555 |   // Check if an Checkbox/ Radio is not selected
  556 |   async isCheckboxNotChecked(
  557 |     locator: string,
```
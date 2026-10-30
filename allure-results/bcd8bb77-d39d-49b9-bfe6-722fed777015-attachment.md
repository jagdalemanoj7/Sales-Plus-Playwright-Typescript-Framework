# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Owner Bulk Assignment
- Location: tests\ui\leads-page-test.spec.ts:108:9

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('input[type=\'checkbox\']') resolved to 13 elements:
    1) <input type="checkbox" aria-label="Select all" data-testid="select-all-leads" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-all-leads')
    2) <input type="checkbox" data-testid="select-L-1012" aria-label="Select Owen Scott" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1012')
    3) <input type="checkbox" data-testid="select-L-1011" aria-label="Select Ivy Nguyen" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1011')
    4) <input type="checkbox" data-testid="select-L-1010" aria-label="Select Ryan Patel" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1010')
    5) <input type="checkbox" data-testid="select-L-1009" aria-label="Select Chloe Martin" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1009')
    6) <input type="checkbox" data-testid="select-L-1008" aria-label="Select Lucas Meyer" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1008')
    7) <input type="checkbox" data-testid="select-L-1007" aria-label="Select Zoe Adams" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1007')
    8) <input type="checkbox" data-testid="select-L-1006" aria-label="Select Ethan Kim" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1006')
    9) <input type="checkbox" data-testid="select-L-1005" aria-label="Select Mia Lopez" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1005')
    10) <input type="checkbox" data-testid="select-L-1004" aria-label="Select Emma Wilson" class="h-4 w-4 accent-[var(--brand)]"/> aka getByTestId('select-L-1004')
    ...

Call log:
  - waiting for locator('input[type=\'checkbox\']')

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
              - cell "Nina Rossi" [ref=e118]
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
              - cell "Nina Rossi" [ref=e130]
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
              - cell "Nina Rossi" [ref=e142]
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
              - cell "Nina Rossi" [ref=e166]
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
              - cell "Nina Rossi" [ref=e178]
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
              - cell "Nina Rossi" [ref=e190]
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
              - cell "Nina Rossi" [ref=e214]
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
              - cell "Nina Rossi" [ref=e226]
              - cell "$5,000" [ref=e227]
        - status [ref=e228]: 12 lead(s) assigned to Nina Rossi
  - contentinfo [ref=e229]:
    - generic [ref=e230]:
      - generic [ref=e231]:
        - link "PracticeQAAutomation — home" [ref=e232] [cursor=pointer]:
          - /url: /
          - generic [ref=e233]: PracticeQAAutomation
        - paragraph [ref=e234]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e235]:
          - link "Follow us on LinkedIn" [ref=e236] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e239] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e240]: ☕
            - text: Support this site
      - generic [ref=e241]:
        - generic [ref=e242]:
          - generic [ref=e243]: Tools
          - link "Selenium" [ref=e244] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e245] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e246] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e247]:
          - generic [ref=e248]: Apps
          - link "All domain apps" [ref=e249] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e250] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e251] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e252] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e253] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e254]:
          - generic [ref=e255]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e256] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e257] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e258] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e259] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e260] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e261] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e262] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e263] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e264] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e265] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e266] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e267] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e268] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e269] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e270] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e271] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e272] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e274]:
      - paragraph [ref=e275]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e276] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e277]:
        - text: Made by
        - link "Amir" [ref=e278] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e279]: ❤️
  - alert [ref=e280]
```

# Test source

```ts
  316 |     );
  317 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  318 |     return await element.allInnerTexts();
  319 |   }
  320 | 
  321 |   async verifyTextFilled(
  322 |     locator: string,
  323 |     locatorType: string,
  324 |     expectedValue: string,
  325 |     frameLocator?: string,
  326 |     role?: any,
  327 |   ): Promise<void> {
  328 |     const element = await this.element(
  329 |       locator,
  330 |       locatorType,
  331 |       frameLocator,
  332 |       role,
  333 |     );
  334 |     await expect(element).toHaveValue(expectedValue);
  335 |   }
  336 | 
  337 |   async verifyDisplayedText(
  338 |     locator: string,
  339 |     locatorType: string,
  340 |     expectedText: string,
  341 |     index?: number | undefined,
  342 |     frameLocator?: string,
  343 |     role?: any,
  344 |     
  345 |   ): Promise<void> {
  346 |     const element = await this.element(
  347 |       locator,
  348 |       locatorType,
  349 |       frameLocator,
  350 |       role,
  351 |     );
  352 |     await expect(element.nth(index)).toHaveText(expectedText);
  353 |   }
  354 | 
  355 |   async verifyElementCount(
  356 |     locator: string,
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
> 416 |     await element.scrollIntoViewIfNeeded({ timeout: 50000 })
      |                   ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('input[type=\'checkbox\']') resolved to 13 elements:
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
  451 |     await this.scrollToFilteredElement(outerElement)
  452 |     await this.scrollToFilteredElement(innerElement)
  453 | 
  454 |     const filteredElement = await outerElement.filter({ has: innerElement.filter( {hasText: data }) })
  455 |                             //    outerElement.filter({ has: page.locator('td', { hasText: company }) });
  456 |     // await this.scrollToFilteredElement(filteredElement)
  457 |     await expect(filteredElement).toBeVisible({ timeout: 50000 })
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
```
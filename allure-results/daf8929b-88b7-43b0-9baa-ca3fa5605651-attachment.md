# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Filtered Lead Record According To Status And Source
- Location: tests\ui\leads-page-test.spec.ts:84:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//td/span')
Expected: "New"
Error: strict mode violation: locator('//td/span') resolved to 3 elements:
    1) <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400">New</span> aka getByText('New', { exact: true }).nth(2)
    2) <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400">New</span> aka getByText('New', { exact: true }).nth(3)
    3) <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400">New</span> aka getByText('New', { exact: true }).nth(4)

Call log:
  - Expect "toHaveText" locator('//td/span') with timeout 5000ms
  - waiting for locator('//td/span')

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
              - generic [ref=e65]: 3 leads
          - button "+ New lead" [ref=e66] [cursor=pointer]
        - generic [ref=e67]:
          - searchbox "Search leads" [ref=e68]
          - combobox "Status" [ref=e69]:
            - option "All statuses"
            - option "New" [selected]
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
                - checkbox "Select Chloe Martin" [ref=e86]
              - cell "Chloe Martin chloe@pied.com" [ref=e87]:
                - link "Chloe Martin" [ref=e88] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1009
                - generic [ref=e89]: chloe@pied.com
              - cell "Pied Piper" [ref=e90]
              - cell "Event" [ref=e91]
              - cell "New" [ref=e92]
              - cell "Maya Chen" [ref=e94]
              - cell "$57,000" [ref=e95]
            - row [ref=e96]:
              - cell [ref=e97]:
                - checkbox "Select Mia Lopez" [ref=e98]
              - cell "Mia Lopez mia@wayne.com" [ref=e99]:
                - link "Mia Lopez" [ref=e100] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1005
                - generic [ref=e101]: mia@wayne.com
              - cell "Wayne Retail" [ref=e102]
              - cell "Cold call" [ref=e103]
              - cell "New" [ref=e104]
              - cell "Maya Chen" [ref=e106]
              - cell "$61,000" [ref=e107]
            - row [ref=e108]:
              - cell [ref=e109]:
                - checkbox "Select Ava Brooks" [ref=e110]
              - cell "Ava Brooks ava@acme.com" [ref=e111]:
                - link "Ava Brooks" [ref=e112] [cursor=pointer]:
                  - /url: /apps/crm/leads/L-1001
                - generic [ref=e113]: ava@acme.com
              - cell "Acme Industries" [ref=e114]
              - cell "Website" [ref=e115]
              - cell "New" [ref=e116]
              - cell "Maya Chen" [ref=e118]
              - cell "$5,000" [ref=e119]
  - contentinfo [ref=e120]:
    - generic [ref=e121]:
      - generic [ref=e122]:
        - link "PracticeQAAutomation — home" [ref=e123] [cursor=pointer]:
          - /url: /
          - generic [ref=e124]: PracticeQAAutomation
        - paragraph [ref=e125]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e126]:
          - link "Follow us on LinkedIn" [ref=e127] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e130] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e131]: ☕
            - text: Support this site
      - generic [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e134]: Tools
          - link "Selenium" [ref=e135] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e136] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e137] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e138]:
          - generic [ref=e139]: Apps
          - link "All domain apps" [ref=e140] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e141] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e142] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e143] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e144] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e145]:
          - generic [ref=e146]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e147] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e148] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e149] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e150] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e151] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e152] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e153] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e154] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e155] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e156] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e157] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e158] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e159] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e160] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e161] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e162] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e163] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e165]:
      - paragraph [ref=e166]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e167] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e168]:
        - text: Made by
        - link "Amir" [ref=e169] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e170]: ❤️
  - alert [ref=e171]
```

# Test source

```ts
  231 |     role?: any,
  232 |   ): Promise<void> {
  233 |     const element = await this.element(
  234 |       locator,
  235 |       locatorType,
  236 |       frameLocator,
  237 |       role,
  238 |     );
  239 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  240 |     await element.press(key);
  241 |   }
  242 | 
  243 |   // Select option from dropdown
  244 |   async selectOption(
  245 |     locator: string,
  246 |     locatorType: string,
  247 |     option: string,
  248 |     frameLocator?: string,
  249 |     role?: any,
  250 |   ): Promise<void> {
  251 |     const element = await this.element(
  252 |       locator,
  253 |       locatorType,
  254 |       frameLocator,
  255 |       role,
  256 |     );
  257 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  258 |     await element.selectOption(option);
  259 |   }
  260 | 
  261 |   // get the text from element using textContent() method
  262 |   async getElementText(
  263 |     locator: string,
  264 |     locatorType: string,
  265 |     frameLocator?: string,
  266 |     role?: any,
  267 |   ): Promise<string | null> {
  268 |     const element = await this.element(
  269 |       locator,
  270 |       locatorType,
  271 |       frameLocator,
  272 |       role,
  273 |     );
  274 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  275 |     return await element.textContent();
  276 |   }
  277 | 
  278 |   // Compare text values
  279 |   async compareText(actual: string, expected: string): Promise<void> {
  280 |     if (!actual.match(expected)) {
  281 |       throw new Error(`Expected Value is ${expected} , But found ${actual}`);
  282 |     }
  283 |   }
  284 | 
  285 |   // get the text from element using innerText() method
  286 |   async getElementInnerText(
  287 |     locator: string,
  288 |     locatorType: string,
  289 |     frameLocator?: string,
  290 |     role?: any,
  291 |   ): Promise<string | null> {
  292 |     const element = await this.element(
  293 |       locator,
  294 |       locatorType,
  295 |       frameLocator,
  296 |       role,
  297 |     );
  298 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  299 |     return await element.innerText();
  300 |   }
  301 | 
  302 |   async verifyTextFilled(
  303 |     locator: string,
  304 |     locatorType: string,
  305 |     expectedValue: string,
  306 |     frameLocator?: string,
  307 |     role?: any,
  308 |   ): Promise<void> {
  309 |     const element = await this.element(
  310 |       locator,
  311 |       locatorType,
  312 |       frameLocator,
  313 |       role,
  314 |     );
  315 |     await expect(element).toHaveValue(expectedValue);
  316 |   }
  317 | 
  318 |   async verifyDisplayedText(
  319 |     locator: string,
  320 |     locatorType: string,
  321 |     expectedText: string,
  322 |     frameLocator?: string,
  323 |     role?: any,
  324 |   ): Promise<void> {
  325 |     const element = await this.element(
  326 |       locator,
  327 |       locatorType,
  328 |       frameLocator,
  329 |       role,
  330 |     );
> 331 |     await expect(element).toHaveText(expectedText);
      |                           ^ Error: expect(locator).toHaveText(expected) failed
  332 |   }
  333 | 
  334 |   /*   async verifyDropdownValueSelected(locator: string, locatorType: string, expectedValue: string, frameLocator?: string, role?: any): Promise<void> {
  335 |     const element = await this.element(locator, locatorType, frameLocator, role);
  336 |     await expect(element).toHaveValue(expectedValue);
  337 |   } */
  338 | 
  339 |   // Get element attribute
  340 |   async getElementAttribute(
  341 |     locator: string,
  342 |     locatorType: string,
  343 |     attribute: string,
  344 |     frameLocator?: string,
  345 |     role?: any,
  346 |   ): Promise<string | null> {
  347 |     const element = await this.element(
  348 |       locator,
  349 |       locatorType,
  350 |       frameLocator,
  351 |       role,
  352 |     );
  353 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  354 |     return await element.getAttribute(attribute);
  355 |   }
  356 | 
  357 |   // Upload an element
  358 |   async uploadFile(
  359 |     locator: string,
  360 |     locatorType: string,
  361 |     filePath: string,
  362 |     frameLocator?: string,
  363 |     role?: any,
  364 |   ): Promise<void> {
  365 |     const element = await this.element(
  366 |       locator,
  367 |       locatorType,
  368 |       frameLocator,
  369 |       role,
  370 |     );
  371 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  372 |     await element.setInputFiles(filePath);
  373 |   }
  374 | 
  375 |   async scrollToFilteredElement(
  376 |     element: Locator
  377 |   ): Promise<void>{
  378 |     await element.scrollIntoViewIfNeeded({ timeout: 50000 })
  379 |   }
  380 | 
  381 |   // Filter rlement
  382 |   async filter(
  383 |     locator: string,
  384 |     locatorType: string,
  385 |     data: string,
  386 |     frameLocator?: string,
  387 |     role?: any,
  388 |   ): Promise<Locator> {
  389 |     const element = await this.element(
  390 |       locator,
  391 |       locatorType,
  392 |       frameLocator,
  393 |       role,
  394 |     );
  395 |     const filteredElement = await element.filter({ hasText: data });
  396 |     await this.scrollToFilteredElement(filteredElement)
  397 |     await expect(filteredElement).toBeVisible({ timeout: 50000 })
  398 |     return filteredElement;
  399 |   }
  400 | 
  401 |   // Drag and Drop Element
  402 |   async dragAndDrop(
  403 |     sourceElement: Locator,
  404 |     targetElement: Locator,
  405 |   ): Promise<void> {
  406 |     await sourceElement.dragTo(targetElement);
  407 |   }
  408 | 
  409 |   // Verify element having text value
  410 |   async verifyElementText(
  411 |     locator: string,
  412 |     locatorType: string,
  413 |     expectedText: string,
  414 |     frameLocator?: string,
  415 |     role?: any,
  416 |   ) {
  417 |     const element = await this.element(
  418 |       locator,
  419 |       locatorType,
  420 |       frameLocator,
  421 |       role,
  422 |     );
  423 |     await expect(element).toHaveText(expectedText);
  424 |   }
  425 |   
  426 |   // Check if an element is visible
  427 |   async isElementVisible(
  428 |     locator: string,
  429 |     locatorType: string,
  430 |     frameLocator?: string,
  431 |     role?: any,
```
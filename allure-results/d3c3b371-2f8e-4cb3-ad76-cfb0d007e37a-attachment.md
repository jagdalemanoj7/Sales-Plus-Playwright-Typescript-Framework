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
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//td/span').nth(undefined)

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
  201 |       locatorType,
  202 |       frameLocator,
  203 |       role,
  204 |     );
  205 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  206 |     await element.fill(text);
  207 |   }
  208 | 
  209 |   // get the text provided in the textbox
  210 |   async getText(
  211 |     locator: string,
  212 |     locatorType: string,
  213 |     frameLocator?: string,
  214 |     role?: any,
  215 |   ): Promise<string> {
  216 |     const element = await this.element(
  217 |       locator,
  218 |       locatorType,
  219 |       frameLocator,
  220 |       role,
  221 |     );
  222 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  223 |     return await element.inputValue();
  224 |   }
  225 | 
  226 |   // Press key on an element
  227 |   async pressKey(
  228 |     locator: string,
  229 |     locatorType: string,
  230 |     key: string,
  231 |     frameLocator?: string,
  232 |     role?: any,
  233 |   ): Promise<void> {
  234 |     const element = await this.element(
  235 |       locator,
  236 |       locatorType,
  237 |       frameLocator,
  238 |       role,
  239 |     );
  240 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  241 |     await element.press(key);
  242 |   }
  243 | 
  244 |   // Select option from dropdown
  245 |   async selectOption(
  246 |     locator: string,
  247 |     locatorType: string,
  248 |     option: string,
  249 |     frameLocator?: string,
  250 |     role?: any,
  251 |   ): Promise<void> {
  252 |     const element = await this.element(
  253 |       locator,
  254 |       locatorType,
  255 |       frameLocator,
  256 |       role,
  257 |     );
  258 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  259 |     await element.selectOption(option);
  260 |   }
  261 | 
  262 |   // get the text from element using textContent() method
  263 |   async getElementText(
  264 |     locator: string,
  265 |     locatorType: string,
  266 |     frameLocator?: string,
  267 |     role?: any,
  268 |   ): Promise<string | null> {
  269 |     const element = await this.element(
  270 |       locator,
  271 |       locatorType,
  272 |       frameLocator,
  273 |       role,
  274 |     );
  275 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  276 |     return await element.textContent();
  277 |   }
  278 | 
  279 |   // Compare text values
  280 |   async compareText(actual: string, expected: string): Promise<void> {
  281 |     if (!actual.match(expected)) {
  282 |       throw new Error(`Expected Value is ${expected} , But found ${actual}`);
  283 |     }
  284 |   }
  285 | 
  286 |   // get the text from element using innerText() method
  287 |   async getElementInnerText(
  288 |     locator: string,
  289 |     locatorType: string,
  290 |     index?: number,
  291 |     frameLocator?: string,
  292 |     role?: any,
  293 |   ): Promise<string | null> {
  294 |     const element = await this.element(
  295 |       locator,
  296 |       locatorType,
  297 |       frameLocator,
  298 |       role,
  299 |     );
  300 |     // await this.scrollToElement(locator, locatorType, frameLocator, role);
> 301 |     return await element.nth(index).innerText();
      |                                     ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  302 |   }
  303 | 
  304 |   // get the all text from elements using innerText() method
  305 |   async getAllElementInnerText(
  306 |     locator: string,
  307 |     locatorType: string,
  308 |     frameLocator?: string,
  309 |     role?: any,
  310 |   ): Promise<string[] | null> {
  311 |     const element = await this.element(
  312 |       locator,
  313 |       locatorType,
  314 |       frameLocator,
  315 |       role,
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
  352 |     if(element.nth(index).innerText()!== undefined)
  353 |         await expect(element.nth(index)).toHaveText(expectedText);
  354 |     else
  355 |         await expect(element.nth(index)).toBeEmpty()
  356 |   }
  357 | 
  358 |   /*   async verifyDropdownValueSelected(locator: string, locatorType: string, expectedValue: string, frameLocator?: string, role?: any): Promise<void> {
  359 |     const element = await this.element(locator, locatorType, frameLocator, role);
  360 |     await expect(element).toHaveValue(expectedValue);
  361 |   } */
  362 | 
  363 |   // Get element attribute
  364 |   async getElementAttribute(
  365 |     locator: string,
  366 |     locatorType: string,
  367 |     attribute: string,
  368 |     frameLocator?: string,
  369 |     role?: any,
  370 |   ): Promise<string | null> {
  371 |     const element = await this.element(
  372 |       locator,
  373 |       locatorType,
  374 |       frameLocator,
  375 |       role,
  376 |     );
  377 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  378 |     return await element.getAttribute(attribute);
  379 |   }
  380 | 
  381 |   // Upload an element
  382 |   async uploadFile(
  383 |     locator: string,
  384 |     locatorType: string,
  385 |     filePath: string,
  386 |     frameLocator?: string,
  387 |     role?: any,
  388 |   ): Promise<void> {
  389 |     const element = await this.element(
  390 |       locator,
  391 |       locatorType,
  392 |       frameLocator,
  393 |       role,
  394 |     );
  395 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  396 |     await element.setInputFiles(filePath);
  397 |   }
  398 | 
  399 |   async scrollToFilteredElement(
  400 |     element: Locator
  401 |   ): Promise<void>{
```
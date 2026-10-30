# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify create new lead and convert it
- Location: tests\ui\leads-page-test.spec.ts:25:9

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('//strong[text()=\'note\']/following-sibling::p')
Expected: "Follow-up Discussion; Discussed project requirements with the client. Need to prepare a demo by next week.; 2026-10-18"
Error: Not an input element

Call log:
  - Expect "toHaveValue" locator('//strong[text()=\'note\']/following-sibling::p') with timeout 5000ms
  - waiting for locator('//strong[text()=\'note\']/following-sibling::p')

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
        - link "← All leads" [ref=e61] [cursor=pointer]:
          - /url: /apps/crm/leads
        - generic [ref=e62]:
          - generic [ref=e63]:
            - heading "Rahul Sharma" [level=1] [ref=e64]
            - paragraph [ref=e65]: Tech Nova Solutions · rahul.sharma@technova.com · 9876543210
          - generic [ref=e66]: New
        - generic [ref=e67]:
          - generic [ref=e68]:
            - tablist [ref=e69]:
              - tab "note" [selected] [ref=e70]
              - tab "Log call" [ref=e71]
              - tab "email" [ref=e72]
            - textbox "Activity details" [ref=e73]:
              - /placeholder: Add a note…
            - button "Save note" [active] [ref=e74] [cursor=pointer]
            - list [ref=e75]:
              - listitem [ref=e76]:
                - strong [ref=e78]: note
                - text: · 10/18/2026, 11:48:55 PM
                - paragraph [ref=e79]: Follow-up Discussion; Discussed project requirements with the client. Need to prepare a demo by next week.; 2026-10-18
          - complementary [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]:
                - term [ref=e83]: Owner
                - definition [ref=e84]: Maya Chen
              - generic [ref=e85]:
                - term [ref=e86]: Source
                - definition [ref=e87]: LinkedIn
              - generic [ref=e88]:
                - term [ref=e89]: Est. value
                - definition [ref=e90]: $60,000
            - generic [ref=e91]:
              - generic [ref=e92]: Status
              - combobox "Status" [ref=e93]:
                - option "New" [selected]
                - option "Contacted"
                - option "Qualified"
                - option "Unqualified"
            - button "Convert to deal" [ref=e94] [cursor=pointer]
  - contentinfo [ref=e95]:
    - generic [ref=e96]:
      - generic [ref=e97]:
        - link "PracticeQAAutomation — home" [ref=e98] [cursor=pointer]:
          - /url: /
          - generic [ref=e99]: PracticeQAAutomation
        - paragraph [ref=e100]: A free sandbox of real apps and interactive elements for Selenium, Playwright and Cypress practice.
        - generic [ref=e101]:
          - link "Follow us on LinkedIn" [ref=e102] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practice-qa-automation
          - link "Support this site" [ref=e105] [cursor=pointer]:
            - /url: https://rzp.io/rzp/supportpracticeqaautomation
            - generic [aria-hidden] [ref=e106]: ☕
            - text: Support this site
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]: Tools
          - link "Selenium" [ref=e110] [cursor=pointer]:
            - /url: /selenium
          - link "Playwright" [ref=e111] [cursor=pointer]:
            - /url: /playwright
          - link "Cypress" [ref=e112] [cursor=pointer]:
            - /url: /cypress
        - generic [ref=e113]:
          - generic [ref=e114]: Apps
          - link "All domain apps" [ref=e115] [cursor=pointer]:
            - /url: /apps
          - link "📘 Project KT" [ref=e116] [cursor=pointer]:
            - /url: /projects
          - link "Nova Shop" [ref=e117] [cursor=pointer]:
            - /url: /shop
          - link "TrustBank" [ref=e118] [cursor=pointer]:
            - /url: /apps/bank
          - link "SecureLife" [ref=e119] [cursor=pointer]:
            - /url: /apps/insurance
        - generic [ref=e120]:
          - generic [ref=e121]: Practice
          - link "📄 Start-here guide (PDF)" [ref=e122] [cursor=pointer]:
            - /url: /downloads/practiceqa-start-guide.pdf
          - link "Challenges" [ref=e123] [cursor=pointer]:
            - /url: /challenges
          - link "🔥 Daily challenge" [ref=e124] [cursor=pointer]:
            - /url: /daily
          - link "Basic Auth" [ref=e125] [cursor=pointer]:
            - /url: /misc/basic-auth
          - link "✨ AI tools" [ref=e126] [cursor=pointer]:
            - /url: /ai
          - link "🔌 API practice" [ref=e127] [cursor=pointer]:
            - /url: /api-practice
          - link "🗄️ SQL Playground" [ref=e128] [cursor=pointer]:
            - /url: /sql-playground
          - link "📈 Performance testing" [ref=e129] [cursor=pointer]:
            - /url: /performance-testing
          - link "🥒 BDD & Cucumber" [ref=e130] [cursor=pointer]:
            - /url: /bdd
          - link "🧱 Framework & CI" [ref=e131] [cursor=pointer]:
            - /url: /framework-ci
          - link "Test case library" [ref=e132] [cursor=pointer]:
            - /url: /test-cases
          - link "🎯 Interview questions" [ref=e133] [cursor=pointer]:
            - /url: /interview
          - link "🧠 Interview quiz" [ref=e134] [cursor=pointer]:
            - /url: /interview/quiz
          - link "🤝 Share your interview" [ref=e135] [cursor=pointer]:
            - /url: /interview/share
          - link "🆕 What's new" [ref=e136] [cursor=pointer]:
            - /url: /releases
          - link "About Me" [ref=e137] [cursor=pointer]:
            - /url: /about
          - link "Report a bug" [ref=e138] [cursor=pointer]:
            - /url: /about#feedback
    - generic [ref=e140]:
      - paragraph [ref=e141]:
        - text: © 2026 PracticeQAAutomation. All rights reserved. ·
        - link "Privacy" [ref=e142] [cursor=pointer]:
          - /url: /privacy
      - paragraph [ref=e143]:
        - text: Made by
        - link "Amir" [ref=e144] [cursor=pointer]:
          - /url: /about
        - text: with
        - img "love" [ref=e145]: ❤️
  - alert [ref=e146]
```

# Test source

```ts
  208 |   // get the text provided in the textbox
  209 |   async getText(
  210 |     locator: string,
  211 |     locatorType: string,
  212 |     frameLocator?: string,
  213 |     role?: any,
  214 |   ): Promise<string> {
  215 |     const element = await this.element(
  216 |       locator,
  217 |       locatorType,
  218 |       frameLocator,
  219 |       role,
  220 |     );
  221 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  222 |     return await element.inputValue();
  223 |   }
  224 | 
  225 |   // Press key on an element
  226 |   async pressKey(
  227 |     locator: string,
  228 |     locatorType: string,
  229 |     key: string,
  230 |     frameLocator?: string,
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
  278 |   // get the text from element using innerText() method
  279 |   async getElementInnerText(
  280 |     locator: string,
  281 |     locatorType: string,
  282 |     frameLocator?: string,
  283 |     role?: any,
  284 |   ): Promise<string | null> {
  285 |     const element = await this.element(
  286 |       locator,
  287 |       locatorType,
  288 |       frameLocator,
  289 |       role,
  290 |     );
  291 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  292 |     return await element.innerText();
  293 |   }
  294 | 
  295 |   async verifyTextFilledInTextBox(
  296 |     locator: string,
  297 |     locatorType: string,
  298 |     expectedValue: string,
  299 |     frameLocator?: string,
  300 |     role?: any,
  301 |   ): Promise<void> {
  302 |     const element = await this.element(
  303 |       locator,
  304 |       locatorType,
  305 |       frameLocator,
  306 |       role,
  307 |     );
> 308 |     await expect(element).toHaveValue(expectedValue);
      |                           ^ Error: expect(locator).toHaveValue(expected) failed
  309 |   }
  310 | 
  311 |   async verifyDropdownValueSelected(
  312 |     locator: string,
  313 |     locatorType: string,
  314 |     expectedValue: string,
  315 |     frameLocator?: string,
  316 |     role?: any,
  317 |   ): Promise<void> {
  318 |     const element = await this.element(
  319 |       locator,
  320 |       locatorType,
  321 |       frameLocator,
  322 |       role,
  323 |     );
  324 |     await expect(element).toHaveValue(expectedValue);
  325 |   }
  326 | 
  327 |   // Get element attribute
  328 |   async getElementAttribute(
  329 |     locator: string,
  330 |     locatorType: string,
  331 |     attribute: string,
  332 |     frameLocator?: string,
  333 |     role?: any,
  334 |   ): Promise<string | null> {
  335 |     const element = await this.element(
  336 |       locator,
  337 |       locatorType,
  338 |       frameLocator,
  339 |       role,
  340 |     );
  341 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  342 |     return await element.getAttribute(attribute);
  343 |   }
  344 | 
  345 |   // Upload an element
  346 |   async uploadFile(
  347 |     locator: string,
  348 |     locatorType: string,
  349 |     filePath: string,
  350 |     frameLocator?: string,
  351 |     role?: any,
  352 |   ): Promise<void> {
  353 |     const element = await this.element(
  354 |       locator,
  355 |       locatorType,
  356 |       frameLocator,
  357 |       role,
  358 |     );
  359 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  360 |     await element.setInputFiles(filePath);
  361 |   }
  362 | 
  363 |   // Verify element having text value
  364 |   async verifyElementText(
  365 |     locator: string,
  366 |     locatorType: string,
  367 |     expectedText: string,
  368 |     frameLocator?: string,
  369 |     role?: any,
  370 |   ) {
  371 |     const element = await this.element(
  372 |       locator,
  373 |       locatorType,
  374 |       frameLocator,
  375 |       role,
  376 |     );
  377 |     await expect(element).toHaveText(expectedText);
  378 |   }
  379 | 
  380 |   // Check if an element is visible
  381 |   async isElementVisible(
  382 |     locator: string,
  383 |     locatorType: string,
  384 |     frameLocator?: string,
  385 |     role?: any,
  386 |   ): Promise<void> {
  387 |     const element = await this.element(
  388 |       locator,
  389 |       locatorType,
  390 |       frameLocator,
  391 |       role,
  392 |     );
  393 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  394 |     await expect(element).toBeVisible({ timeout: 50000 });
  395 |   }
  396 | 
  397 |   // Check if an element is enabled
  398 |   async isElementEnabled(
  399 |     locator: string,
  400 |     locatorType: string,
  401 |     frameLocator?: string,
  402 |     role?: any,
  403 |   ): Promise<void> {
  404 |     const element = await this.element(
  405 |       locator,
  406 |       locatorType,
  407 |       frameLocator,
  408 |       role,
```
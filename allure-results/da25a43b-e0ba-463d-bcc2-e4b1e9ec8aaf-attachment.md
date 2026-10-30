# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\leads-page-test.spec.ts >> Leads Page Feature Test >> Verify Filtered Lead Record According To Status And Source
- Location: tests\ui\leads-page-test.spec.ts:84:9

# Error details

```
Error: locator.selectOption: options[0]: expected object, got undefined
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
  159 |     locator: string,
  160 |     locatorType: string,
  161 |     frameLocator?: string,
  162 |     role?: any,
  163 |   ): Promise<void> {
  164 |     const element = await this.element(
  165 |       locator,
  166 |       locatorType,
  167 |       frameLocator,
  168 |       role,
  169 |     );
  170 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  171 |     await element.click({ force: true });
  172 |   }
  173 | 
  174 |   // Clear to element
  175 |   async clearText(
  176 |     locator: string,
  177 |     locatorType: string,
  178 |     frameLocator?: string,
  179 |     role?: any,
  180 |   ): Promise<void> {
  181 |     const element = await this.element(
  182 |       locator,
  183 |       locatorType,
  184 |       frameLocator,
  185 |       role,
  186 |     );
  187 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  188 |     await element.clear();
  189 |   }
  190 | 
  191 |   // Type text into the textbox element
  192 |   async enterText(
  193 |     locator: string,
  194 |     locatorType: string,
  195 |     text: string,
  196 |     frameLocator?: string,
  197 |     role?: any,
  198 |   ): Promise<void> {
  199 |     const element = await this.element(
  200 |       locator,
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
> 259 |     await element.selectOption(option);
      |                   ^ Error: locator.selectOption: options[0]: expected object, got undefined
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
  290 |     frameLocator?: string,
  291 |     role?: any,
  292 |   ): Promise<string | null> {
  293 |     const element = await this.element(
  294 |       locator,
  295 |       locatorType,
  296 |       frameLocator,
  297 |       role,
  298 |     );
  299 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  300 |     return await element.innerText();
  301 |   }
  302 | 
  303 |   // get the all text from elements using innerText() method
  304 |   async getAllElementInnerText(
  305 |     locator: string,
  306 |     locatorType: string,
  307 |     frameLocator?: string,
  308 |     role?: any,
  309 |   ): Promise<string[] | null> {
  310 |     const element = await this.element(
  311 |       locator,
  312 |       locatorType,
  313 |       frameLocator,
  314 |       role,
  315 |     );
  316 |     await this.scrollToElement(locator, locatorType, frameLocator, role);
  317 |     return await element.allInnerTexts();
  318 |   }
  319 | 
  320 |   async verifyTextFilled(
  321 |     locator: string,
  322 |     locatorType: string,
  323 |     expectedValue: string,
  324 |     frameLocator?: string,
  325 |     role?: any,
  326 |   ): Promise<void> {
  327 |     const element = await this.element(
  328 |       locator,
  329 |       locatorType,
  330 |       frameLocator,
  331 |       role,
  332 |     );
  333 |     await expect(element).toHaveValue(expectedValue);
  334 |   }
  335 | 
  336 |   async verifyDisplayedText(
  337 |     locator: string,
  338 |     locatorType: string,
  339 |     expectedText: string,
  340 |     index?: number | undefined,
  341 |     frameLocator?: string,
  342 |     role?: any,
  343 |     
  344 |   ): Promise<void> {
  345 |     const element = await this.element(
  346 |       locator,
  347 |       locatorType,
  348 |       frameLocator,
  349 |       role,
  350 |     );
  351 |     await expect(element.nth(index)).toHaveText(expectedText);
  352 |   }
  353 | 
  354 |   /*   async verifyDropdownValueSelected(locator: string, locatorType: string, expectedValue: string, frameLocator?: string, role?: any): Promise<void> {
  355 |     const element = await this.element(locator, locatorType, frameLocator, role);
  356 |     await expect(element).toHaveValue(expectedValue);
  357 |   } */
  358 | 
  359 |   // Get element attribute
```
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

Locator:  locator('//label/following-sibling::select')
Expected: "LinkedIn"
Received: "linkedin"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" locator('//label/following-sibling::select') with timeout 5000ms
  - waiting for locator('//label/following-sibling::select')
    14 × locator resolved to <select class="field " id="lead-source" name="lead-source" data-testid="lead-source">…</select>
       - unexpected value "linkedin"

```

```yaml
- combobox "Source":
  - option "Select source"
  - option "Website"
  - option "Referral"
  - option "LinkedIn" [selected]
  - option "Event"
  - option "Cold call"
```

# Test source

```ts
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
  308 |     await expect(element).toHaveValue(expectedValue);
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
> 324 |     await expect(element).toHaveValue(expectedValue);
      |                           ^ Error: expect(locator).toHaveValue(expected) failed
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
  409 |     );
  410 |     await expect(element).toBeEnabled();
  411 |   }
  412 | 
  413 |   // Check if an element is enabled
  414 |   async isElementEditable(
  415 |     locator: string,
  416 |     locatorType: string,
  417 |     frameLocator?: string,
  418 |     role?: any,
  419 |   ): Promise<void> {
  420 |     const element = await this.element(
  421 |       locator,
  422 |       locatorType,
  423 |       frameLocator,
  424 |       role,
```
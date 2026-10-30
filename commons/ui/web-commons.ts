import { Page, Locator, expect } from "@playwright/test";

export class WebCommons {
  page: Page;

  // Constructor to initilize the page
  constructor(page: Page) {
    this.page = page;
  }

  // Common method to launch the application
  async launchApplication(url: string, title: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForURL(url);
    // Get system screen size
    const {width, height} = await this.page.evaluate(() => {
        return { width: window.screen.width, height: window.screen.height };
    });
    
    await this.page.setViewportSize({ width, height });
    await expect(this.page).toHaveTitle(title);
  }

  // Scroll to specified element
  async scrollToElement(locator: Locator, index = 0): Promise<void> {
    await locator.nth(index).scrollIntoViewIfNeeded({ timeout: 60000 });
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  // Double Click
  async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();
  }

  // Scroll to specified element
  async rightClick(locator: Locator): Promise<void> {
    await locator.click({ button: "right" });
  }

  // Hover on an element
  async hoverElement(locator: Locator): Promise<void> {
    await locator.hover();
  }

  // Force Click to element
  async forceClick(locator: Locator): Promise<void> {
    await locator.click({ force: true });
  }

  // Clear text to textbox element
  async clearText(locator: Locator): Promise<void> {
    await locator.clear();
  }

  // Provide text to textbox element
  async enterText(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  // get the text provided in the textbox
  async getText(locator: Locator): Promise<string> {
    return await locator.inputValue();
  }

  // Press key on an element
  async pressKey(locator: Locator, key: string): Promise<void> {
    await locator.press(key);
  }

  // Select option from dropdown
  async selectOption(locator: Locator, option: string): Promise<void> {
    await locator.selectOption(option);
  }

  async getElementText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }

  // Compare text values
  async compareText(actual: string, expected: string): Promise<void> {
    if (!actual.match(expected)) {
      throw new Error(`Expected Value is ${expected} , But found ${actual}`);
    }
  }

  // get the text from element using innerText() method
  async getElementInnerText(locator: Locator, index: number): Promise<string> {
    return await locator.nth(index).innerText();
  }

  // get the all text from elements using innerText() method
  async getAllElementInnerText(locator: Locator): Promise<string[]> {
    return await locator.allInnerTexts();
  }

  // Verify text filled in textbox
  async verifyTextFilled(
    locator: Locator,
    expectedValue: string,
  ): Promise<void> {
    await expect(locator).toHaveValue(expectedValue);
  }

  // verify text displayed
  async verifyDisplayedText(
    locator: Locator,
    expectedText: string,
    index: number
  ): Promise<void> {
    await expect((locator).nth(index)).toHaveText(expectedText);
  }

  // Count of element
  async verifyElementCount(locator: Locator, count: number): Promise<void> {
    await expect(locator).toHaveCount(count);
  }

  // Get element attribute
  async getElementAttribute(
    locator: Locator,
    attribute: string,
  ): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  // Upload an element
  async uploadFile(locator: Locator, filePath: string): Promise<void> {
    await locator.setInputFiles(filePath);
  }

  async scrollToFilteredElement(element: Locator): Promise<void> {
    await element.scrollIntoViewIfNeeded({ timeout: 50000 });
  }

  // Filter rlement
  async filter(locator: Locator, data: string): Promise<Locator> {
    const filteredElement = locator.filter({ hasText: data });
    await this.scrollToFilteredElement(filteredElement);
    await expect(filteredElement).toBeVisible({ timeout: 50000 });
    return filteredElement;
  }

  // Filter rlement
  async locatorFilter(
    outerLocator: Locator,
    innerLocator: Locator,
    data: string,
    childSelector: string,
  ): Promise<Locator> {
    const filteredElement = outerLocator.filter({
      has: innerLocator.filter({ hasText: data }),
    });
    const childElement = filteredElement.locator(childSelector);
    await this.scrollToFilteredElement(childElement);
    await expect(childElement).toBeVisible({ timeout: 50000 });
    return childElement;
  }

  // Drag and Drop Element
  async dragAndDrop(
    sourceElement: Locator,
    targetElement: Locator,
  ): Promise<void> {
    await sourceElement.dragTo(targetElement);
  }

  // Verify element having text value
  async verifyElementText(
    locator: Locator,
    expectedText: string,
  ): Promise<void> {
    await expect(locator).toHaveText(expectedText);
  }

  // Check if an element is visible
  async isElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 50000 });
  }

  async isElementEditable(locator: Locator): Promise<void> {
    await expect(locator).toBeEditable();
  }

  async isElementHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  async isElementEnabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  // Check if an Checkbox/ Radio is not selected
  async isCheckboxNotChecked(locator: Locator): Promise<void> {
    await expect(locator).not.toBeChecked();
  }

  // Check if an Checkbox/ Radio is selected
  async isCheckboxChecked(locator: Locator): Promise<void> {
    await expect(locator).toBeChecked();
  }

  // Handle alert pop-up
  async handleAlert(
    action: "accept" | "dismiss",
    textToEnter?: string,
  ): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      if (action === "accept") {
        await dialog.accept(textToEnter);
      } else {
        await dialog.dismiss();
      }
    });
  }

  // Take screenshot of the page
  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({ path });
  }

  // Get count
  async getCount(locator: Locator): Promise<number> {
    return await locator.count();
  }

  // verify expected value contains actual value
  async verifyValueContains(actual: string, expected: string) {}

  // custum wait
  async waitForTimeout(timeout: number): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }

  //  wait for page load
  async waitForLoadPage(): Promise<void> {
    await this.page.waitForLoadState("load");
  }

  //  wait for dom content load
  async waitForLoadDOMContent(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async validateValues(
    locator : Locator,
    latestValue : number
  ): Promise<void>{
    expect(locator).toBe(latestValue)
  }

}

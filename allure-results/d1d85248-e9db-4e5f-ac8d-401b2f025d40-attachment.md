# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Product Test >> Search, by page
- Location: tests\api\t-test.spec.ts:16:7

# Error details

```
Error: data[1].name

expect(received).toBe(expected) // Object.is equality

Expected: "Cotton T-shirt"
Received: "Cricket Bat"
```

# Test source

```ts
  266 |    * @param key
  267 |    * @param expDataType
  268 |    */
  269 |   async validateResponseSchemas(
  270 |     arrayPath: string,
  271 |     keys: string[],
  272 |     expectedTypes: string[],
  273 |   ): Promise<void> {
  274 |     const responseBody = await this.response.json();
  275 |     const items = this.getResponseValue(responseBody, arrayPath);
  276 | 
  277 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  278 |       true,
  279 |     );
  280 |     expect(keys.length).toBe(expectedTypes.length);
  281 | 
  282 |     for (const [itemIndex, item] of items.entries()) {
  283 |       expect(
  284 |         item !== null && typeof item === "object" && !Array.isArray(item),
  285 |         `Item ${itemIndex} should be an object`,
  286 |       ).toBe(true);
  287 | 
  288 |       for (const [keyIndex, key] of keys.entries()) {
  289 |         expect(
  290 |           Object.prototype.hasOwnProperty.call(item, key),
  291 |           `Item ${itemIndex} is missing required key "${key}"`,
  292 |         ).toBe(true);
  293 |         expect(typeof item[key], `Type of item ${itemIndex} key "${key}"`).toBe(
  294 |           expectedTypes[keyIndex],
  295 |         );
  296 |       }
  297 |     }
  298 |   }
  299 | 
  300 |   /**
  301 |    * Common method to validate cookie in the response
  302 |    * @param cookieName
  303 |    * @param expValue
  304 |    */
  305 |   async validateResponseCookie(cookieName: string, expValue: any) {
  306 |     const cookies = await this.response.cookies();
  307 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  308 |     const actualValue = cookie ? cookie.value : undefined;
  309 |     await expect(actualValue).toBe(expValue);
  310 |   }
  311 | 
  312 |   async validateObjectKeys(
  313 |     arrayPath: string,
  314 |     requiredKeys: string[],
  315 |   ): Promise<void> {
  316 |     const responseBody = await this.response.json();
  317 |     const items = this.getResponseValue(responseBody, arrayPath);
  318 | 
  319 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  320 |       true,
  321 |     );
  322 | 
  323 |     for (const [index, item] of items.entries()) {
  324 |       expect(
  325 |         item !== null && typeof item === "object" && !Array.isArray(item),
  326 |         `Item ${index} should be an object`,
  327 |       ).toBe(true);
  328 | 
  329 |       const missingKeys = requiredKeys.filter(
  330 |         (key) => !Object.prototype.hasOwnProperty.call(item, key),
  331 |       );
  332 | 
  333 |       expect(missingKeys, `Product ${index} is missing required keys`).toEqual(
  334 |         [],
  335 |       );
  336 |     }
  337 |   }
  338 | 
  339 |     /**
  340 |    * Common method to validate the specific value of key
  341 |    * @param key
  342 |    * @param expDataType
  343 |    */
  344 |   async validateSpecificKeyValue(
  345 |     arrayPath: string,
  346 |     property: string,
  347 |     expectedValue: string,
  348 |   ): Promise<void> {
  349 |     const responseBody = await this.response.json();
  350 |     const items = this.getResponseValue(responseBody, arrayPath);
  351 | 
  352 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`
  353 |     ).toBe(true,
  354 |     );
  355 | 
  356 |     expect(items.length, `Expected at least one item in "${arrayPath}"`,
  357 |     ).toBeGreaterThan(0);
  358 | 
  359 |     for (const [index, item] of items.entries()) {
  360 |       const value = item[property];
  361 |       expect(
  362 |         typeof value,
  363 |         `Expected ${arrayPath}[${index}].${property} to be a string`,
  364 |       ).toBe("string");
  365 | 
> 366 |       expect(value, `${arrayPath}[${index}].${property}`).toBe(expectedValue)
      |                                                           ^ Error: data[1].name
  367 |       
  368 |     }
  369 |   }
  370 | }
  371 | 
```
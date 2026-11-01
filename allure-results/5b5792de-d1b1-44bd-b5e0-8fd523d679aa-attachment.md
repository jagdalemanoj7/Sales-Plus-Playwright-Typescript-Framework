# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Product Test >> [B2] Zero price → 422
- Location: tests\api\t-test.spec.ts:17:7

# Error details

```
Error: "details" should be an array

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  209 |    * @param expValue
  210 |    */
  211 |   async validateResponseHeader(headerName: string, expValue: any) {
  212 |     const header = await this.response.headers();
  213 |     const actualValue = header[headerName];
  214 |     await expect(actualValue).toBe(expValue);
  215 |   }
  216 | 
  217 |   /**
  218 |    * Common method to validate the schema response body
  219 |    * @param key
  220 |    * @param expDataType
  221 |    */
  222 |   async validateResponseSchema(key: string, expDataType: string) {
  223 |     const responseBody = await this.response.json();
  224 |     const actualValue = this.getResponseValue(responseBody, key);
  225 |     const actualDataType = typeof actualValue;
  226 |     await expect(actualDataType).toBe(expDataType);
  227 |   }
  228 | 
  229 |   /**
  230 |    * Common method to validate cookie in the response
  231 |    * @param cookieName
  232 |    * @param expValue
  233 |    */
  234 |   async validateResponseCookie(cookieName: string, expValue: any) {
  235 |     const cookies = await this.response.cookies();
  236 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  237 |     const actualValue = cookie ? cookie.value : undefined;
  238 |     await expect(actualValue).toBe(expValue);
  239 |   }
  240 | 
  241 |   /**
  242 |    * Common method to validate the specific value of key
  243 |    * @param key
  244 |    * @param expDataType
  245 |    */
  246 |   async validateItemsLength(
  247 |     arrayPath: string,
  248 |     expectedLength: number,
  249 |   ): Promise<void> {
  250 |     const responseBody = await this.response.json();
  251 |     const items = this.getResponseValue(responseBody, arrayPath);
  252 | 
  253 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  254 |       true,
  255 |     );
  256 |     expect(items.length, `Unexpected number of items in "${arrayPath}"`).toBe(
  257 |       expectedLength,
  258 |     );
  259 |   }
  260 | 
  261 |   /**
  262 |    * Common method to validate Obejct Keys
  263 |    * @param arrayPath 
  264 |    * @param requiredKeys 
  265 |    */
  266 |   async validateObjectKeys(
  267 |     arrayPath: string,
  268 |     requiredKeys: string[],
  269 |   ): Promise<void> {
  270 |     const responseBody = await this.response.json();
  271 |     const items = this.getResponseValue(responseBody, arrayPath);
  272 | 
  273 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  274 |       true,
  275 |     );
  276 | 
  277 |     for (const [index, item] of items.entries()) {
  278 |       expect(
  279 |         item !== null && typeof item === "object" && !Array.isArray(item),
  280 |         `Item ${index} should be an object`,
  281 |       ).toBe(true);
  282 | 
  283 |       const missingKeys = requiredKeys.filter(
  284 |         (key) => !Object.prototype.hasOwnProperty.call(item, key),
  285 |       );
  286 | 
  287 |       expect(missingKeys, `Product ${index} is missing required keys`).toEqual(
  288 |         [],
  289 |       );
  290 |     }
  291 |   }
  292 | 
  293 |   /**
  294 |    * Common method to validate the specific value of key
  295 |    * @param arrayPath
  296 |    * @param dataIndex
  297 |    * @param property
  298 |    * @param expectedValue
  299 |    */
  300 |   async validateSpecificKeyValue(
  301 |     arrayPath: string,
  302 |     dataIndex: number,
  303 |     property: string,
  304 |     expectedValue: string,
  305 |   ): Promise<void> {
  306 |     const responseBody = await this.response.json();
  307 |     const items = this.getResponseValue(responseBody, arrayPath);
  308 | 
> 309 |     expect(Array.isArray(items), `"${arrayPath}" should be an array`).toBe(
      |                                                                       ^ Error: "details" should be an array
  310 |       true,
  311 |     );
  312 |     expect(dataIndex, "Index should be non-negative").toBeGreaterThanOrEqual(0);
  313 |     expect(items.length, `No item at index ${dataIndex}`).toBeGreaterThan(
  314 |       dataIndex,
  315 |     );
  316 | 
  317 |     const item = items[dataIndex];
  318 |     expect(item).toHaveProperty(property);
  319 |     expect(item[property]).toBe(expectedValue);
  320 |   }
  321 | 
  322 |   /**
  323 |    * Common method to validate the value is positive and non-negative number
  324 |    * @param arrayPath
  325 |    * @param property
  326 |    * @param greaterThanZero
  327 |    */
  328 |   async validatePositiveNumberValues(
  329 |     arrayPath: string,
  330 |     property: string,
  331 |     greaterThanZero = false,
  332 |   ): Promise<void> {
  333 |     const responseBody = await this.response.json();
  334 |     const items = this.getResponseValue(responseBody, arrayPath);
  335 | 
  336 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  337 |       true,
  338 |     );
  339 | 
  340 |     expect(items.length, `Expected at least one item in "${arrayPath}"`,
  341 |     ).toBeGreaterThan(0);
  342 | 
  343 |     for (const [index, item] of items.entries()) {
  344 |       const value = item[property];
  345 |       expect(
  346 |         typeof value,
  347 |         `Expected ${arrayPath}[${index}].${property} to be a number`,
  348 |       ).toBe("number");
  349 | 
  350 |       if (greaterThanZero) {
  351 |         expect(
  352 |           value,
  353 |           `${arrayPath}[${index}].${property} must be >= 0`,
  354 |         ).toBeGreaterThanOrEqual(0);
  355 |       } else {
  356 |         expect(
  357 |           value,
  358 |           `${arrayPath}[${index}].${property} must be > 0`,
  359 |         ).toBeGreaterThan(0);
  360 |       }
  361 |     }
  362 |   }
  363 | 
  364 |   /**
  365 |    * Common method to validate the schema response body
  366 |    * @param arrayPath
  367 |    * @param key
  368 |    * @param expDataType
  369 |    */
  370 |   async validateResponseSchemas(
  371 |     arrayPath: string,
  372 |     keys: string[],
  373 |     expectedTypes: string[],
  374 |   ): Promise<void> {
  375 |     const responseBody = await this.response.json();
  376 |     const items = this.getResponseValue(responseBody, arrayPath);
  377 | 
  378 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  379 |       true,
  380 |     );
  381 |     expect(keys.length).toBe(expectedTypes.length);
  382 | 
  383 |     for (const [itemIndex, item] of items.entries()) {
  384 |       expect(
  385 |         item !== null && typeof item === "object" && !Array.isArray(item),
  386 |         `Item ${itemIndex} should be an object`,
  387 |       ).toBe(true);
  388 | 
  389 |       for (const [keyIndex, key] of keys.entries()) {
  390 |         expect(
  391 |           Object.prototype.hasOwnProperty.call(item, key),
  392 |           `Item ${itemIndex} is missing required key "${key}"`,
  393 |         ).toBe(true);
  394 |         expect(typeof item[key], `Type of item ${itemIndex} key "${key}"`).toBe(
  395 |           expectedTypes[keyIndex],
  396 |         );
  397 |       }
  398 |     }
  399 |   }
  400 | 
  401 |   /**
  402 |    * Common method to validate the price in descending order
  403 |    * @param arrayPath 
  404 |    * @param property 
  405 |    */
  406 |   async validateSortedPriceInDescendingOrder(
  407 |     arrayPath: string,
  408 |     property: string,
  409 |   ): Promise<void> {
```
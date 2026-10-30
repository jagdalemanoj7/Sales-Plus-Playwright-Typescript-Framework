# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Product Test >> List products
- Location: tests\api\t-test.spec.ts:16:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Matcher error: received value must be a number or bigint

Received has value: undefined
```

# Test source

```ts
  95  |       value: accessToken,
  96  |       expiresAt: Date.now() + Math.max(0, expiresInSeconds * 1000 - 30_000),
  97  |     });
  98  |     return accessToken;
  99  |   }
  100 | 
  101 |   /**
  102 |    * Common method to send the request and get the response.
  103 |    * @param requestType
  104 |    * @param endpoint
  105 |    * @param payload
  106 |    * @param token
  107 |    * @returns
  108 |    */
  109 |   async getResponse(
  110 |     requestType: string,
  111 |     endpoint: string,
  112 |     payload?: any,
  113 |     token?: string,
  114 |   ) {
  115 |     if (!this.requestContext) {
  116 |       throw new Error(
  117 |         "Request context is not initialized. Call InitializeRequestContext() first.",
  118 |       );
  119 |     }
  120 | 
  121 |     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  122 |     switch (requestType.toLowerCase()) {
  123 |       case "get":
  124 |         this.response = await this.requestContext.get(endpoint, { headers });
  125 |         break;
  126 |       case "post":
  127 |         this.response = await this.requestContext.post(endpoint, {
  128 |           data: payload,
  129 |           headers,
  130 |         });
  131 |         break;
  132 |       case "put":
  133 |         this.response = await this.requestContext.put(endpoint, {
  134 |           data: payload,
  135 |           headers,
  136 |         });
  137 |         break;
  138 |       case "patch":
  139 |         this.response = await this.requestContext.patch(endpoint, {
  140 |           data: payload,
  141 |           headers,
  142 |         });
  143 |         break;
  144 |       case "delete":
  145 |         this.response = await this.requestContext.delete(endpoint, { headers });
  146 |         break;
  147 |       default:
  148 |         throw new Error(`Unsupported Request Type: ${requestType}`);
  149 |     }
  150 | 
  151 |     return this.response;
  152 |   }
  153 | 
  154 |   /**
  155 |    * Common method to validate the status code
  156 |    * @param expCode
  157 |    */
  158 |   async validateStatusCode(expCode: number) {
  159 |     const actualCode = this.response.status();
  160 |     await expect(actualCode).toBe(expCode);
  161 |   }
  162 | 
  163 |   /**
  164 |    * Common method to validate the status massage
  165 |    * @param expMessage
  166 |    */
  167 |   async validateStatusMessage(expMessage: string) {
  168 |     const actualMessage = this.response.statusText();
  169 |     await expect(actualMessage).toBe(expMessage);
  170 |   }
  171 | 
  172 |   private getResponseValue(responseBody: any, key: string): any {
  173 |     return key
  174 |       .split(".")
  175 |       .reduce((value: any, part: string) => value?.[part], responseBody);
  176 |   }
  177 | 
  178 |   /**
  179 |    * Common method to validate response body
  180 |    * @param key
  181 |    * @param expValue
  182 |    */
  183 |   async validateResponseBody(key: string, expValue: any) {
  184 |     const responseBody = await this.response.json();
  185 |     const actualValue = this.getResponseValue(responseBody, key);
  186 |     await expect(actualValue).toBe(expValue);
  187 |   }
  188 | 
  189 |   async validatePositiveNumber(key: string, equalToZero?: boolean){
  190 |     const responseBody = await this.response.json();
  191 |     const actualValue = this.getResponseValue(responseBody, key);
  192 |     if(equalToZero)
  193 |         await expect(actualValue).toBeGreaterThanOrEqual(0)
  194 |     else
> 195 |         await expect(actualValue).toBeGreaterThan(0)
      |                                   ^ Error: expect(received).toBeGreaterThan(expected)
  196 |   }
  197 | 
  198 |   /**
  199 |    * Common method to validate the response header
  200 |    * @param headerName
  201 |    * @param expValue
  202 |    */
  203 |   async validateResponseHeader(headerName: string, expValue: any) {
  204 |     const header = await this.response.headers();
  205 |     const actualValue = header[headerName];
  206 |     await expect(actualValue).toBe(expValue);
  207 |   }
  208 | 
  209 |   /**
  210 |    * Common method to validate the schema response body
  211 |    * @param key
  212 |    * @param expDataType
  213 |    */
  214 |   async validateResponseSchema(key: string, expDataType: string) {
  215 |     const responseBody = await this.response.json();
  216 |     const actualValue = this.getResponseValue(responseBody, key);
  217 |     const actualDataType = typeof actualValue;
  218 |     await expect(actualDataType).toBe(expDataType);
  219 |   }
  220 | 
  221 |   /**
  222 |    * Common method to validate the schema response body
  223 |    * @param key
  224 |    * @param expDataType
  225 |    */
  226 |   async validateResponseSchemas(
  227 |     arrayPath: string,
  228 |     keys: string[],
  229 |     expectedTypes: string[],
  230 |   ): Promise<void> {
  231 |     const responseBody = await this.response.json();
  232 |     const items = this.getResponseValue(responseBody, arrayPath);
  233 | 
  234 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  235 |       true,
  236 |     );
  237 |     expect(keys.length).toBe(expectedTypes.length);
  238 | 
  239 |     for (const [itemIndex, item] of items.entries()) {
  240 |       expect(
  241 |         item !== null && typeof item === "object" && !Array.isArray(item),
  242 |         `Item ${itemIndex} should be an object`,
  243 |       ).toBe(true);
  244 | 
  245 |       for (const [keyIndex, key] of keys.entries()) {
  246 |         expect(
  247 |           Object.prototype.hasOwnProperty.call(item, key),
  248 |           `Item ${itemIndex} is missing required key "${key}"`,
  249 |         ).toBe(true);
  250 |         expect(typeof item[key], `Type of item ${itemIndex} key "${key}"`).toBe(
  251 |           expectedTypes[keyIndex],
  252 |         );
  253 |       }
  254 |     }
  255 |   }
  256 | 
  257 |   /**
  258 |    * Common method to validate cookie in the response
  259 |    * @param cookieName
  260 |    * @param expValue
  261 |    */
  262 |   async validateResponseCookie(cookieName: string, expValue: any) {
  263 |     const cookies = await this.response.cookies();
  264 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  265 |     const actualValue = cookie ? cookie.value : undefined;
  266 |     await expect(actualValue).toBe(expValue);
  267 |   }
  268 | 
  269 |   async validateObjectKeys(
  270 |     arrayPath: string,
  271 |     requiredKeys: string[],
  272 |   ): Promise<void> {
  273 |     const responseBody = await this.response.json();
  274 |     const items = this.getResponseValue(responseBody, arrayPath);
  275 | 
  276 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  277 |       true,
  278 |     );
  279 | 
  280 |     for (const [index, item] of items.entries()) {
  281 |       expect(
  282 |         item !== null && typeof item === "object" && !Array.isArray(item),
  283 |         `Item ${index} should be an object`,
  284 |       ).toBe(true);
  285 | 
  286 |       const missingKeys = requiredKeys.filter(
  287 |         (key) => !Object.prototype.hasOwnProperty.call(item, key),
  288 |       );
  289 | 
  290 |       expect(missingKeys, `Product ${index} is missing required keys`).toEqual(
  291 |         [],
  292 |       );
  293 |     }
  294 |   }
  295 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Order Test >> [B5] Another customer's order → 403
- Location: tests\api\t-test.spec.ts:18:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 403
Received: 415
```

# Test source

```ts
  70  |     await this.validateStatusMessage(data.expStatusMessage);
  71  |     await this.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue);
  72  |     await this.validateResponseBody(data.expiresInKey, data.expiresInValue);
  73  |     await this.validateResponseBody(data.userIdKey, data.userIdValue);
  74  |     await this.validateResponseBody(data.userNameKey, data.userNameValue);
  75  |     await this.validateResponseBody(data.nameKey, data.nameValue);
  76  |     await this.validateResponseBody(data.userEmailKey, data.userEmailValue);
  77  |     await this.validateResponseBody(data.userRoleKey, data.userRoleValue);
  78  | 
  79  |     const tokenKey = key ?? data.tokenKey;
  80  |     const accessToken = responseBody[tokenKey];
  81  |     if (typeof accessToken !== "string" || accessToken.length === 0) {
  82  |       throw new Error(
  83  |         `Login response did not contain a token in '${tokenKey}'`,
  84  |       );
  85  |     }
  86  | 
  87  |     const expiresInSeconds = Number(responseBody[data.expiresInKey] ?? 15 * 60);
  88  |     if (!Number.isFinite(expiresInSeconds) || expiresInSeconds <= 0) {
  89  |       throw new Error(
  90  |         `Invalid token expiry value: ${responseBody[data.expiresInKey]}`,
  91  |       );
  92  |     }
  93  | 
  94  |     this.accessTokens.set(user, {
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
  114 |     params?: Record<string, string | number | boolean>,
  115 |   ) {
  116 |     if (!this.requestContext) {
  117 |       throw new Error(
  118 |         "Request context is not initialized. Call InitializeRequestContext() first.",
  119 |       );
  120 |     }
  121 | 
  122 |     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  123 |     switch (requestType.toLowerCase()) {
  124 |       case "get":
  125 |         this.response = await this.requestContext.get(endpoint, {
  126 |           headers,
  127 |           params,
  128 |         });
  129 |         break;
  130 |       case "post":
  131 |         this.response = await this.requestContext.post(endpoint, {
  132 |           data: payload,
  133 |           headers,
  134 |           params,
  135 |         });
  136 |         break;
  137 |       case "put":
  138 |         this.response = await this.requestContext.put(endpoint, {
  139 |           data: payload,
  140 |           headers,
  141 |           params,
  142 |         });
  143 |         break;
  144 |       case "patch":
  145 |         this.response = await this.requestContext.patch(endpoint, {
  146 |           data: payload,
  147 |           headers,
  148 |           params,
  149 |         });
  150 |         break;
  151 |       case "delete":
  152 |         this.response = await this.requestContext.delete(endpoint, {
  153 |           headers,
  154 |           params,
  155 |         });
  156 |         break;
  157 |       default:
  158 |         throw new Error(`Unsupported Request Type: ${requestType}`);
  159 |     }
  160 | 
  161 |     return this.response;
  162 |   }
  163 | 
  164 |   /**
  165 |    * Common method to validate the status code
  166 |    * @param expCode
  167 |    */
  168 |   async validateStatusCode(expCode: number) {
  169 |     const actualCode = this.response.status();
> 170 |     await expect(actualCode).toBe(expCode);
      |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  171 |   }
  172 | 
  173 |   /**
  174 |    * Common method to validate the status massage
  175 |    * @param expMessage
  176 |    */
  177 |   async validateStatusMessage(expMessage: string) {
  178 |     const actualMessage = this.response.statusText();
  179 |     await expect(actualMessage).toBe(expMessage);
  180 |   }
  181 | 
  182 |   /**
  183 |    *
  184 |    * @param responseBody
  185 |    * @param key
  186 |    * @returns
  187 |    */
  188 |   private getResponseValue(responseBody: any, key: string): any {
  189 |     const value = key
  190 |       .split(".")
  191 |       .reduce((value: any, part: string) => value?.[part], responseBody);
  192 |     return value;
  193 |   }
  194 | 
  195 |   /**
  196 |    * Common method to validate response body
  197 |    * @param key
  198 |    * @param expValue
  199 |    */
  200 |   async validateResponseBody(key: string, expValue: any) {
  201 |     const responseBody = await this.response.json();
  202 |     const actualValue = this.getResponseValue(responseBody, key);
  203 |     await expect(actualValue).toBe(expValue);
  204 |   }
  205 | 
  206 |   /**
  207 |    * Common method to validate the response header
  208 |    * @param headerName
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
```
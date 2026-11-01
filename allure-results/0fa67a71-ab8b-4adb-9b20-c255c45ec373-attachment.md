# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Order Test >> Cancel my order
- Location: tests\api\t-test.spec.ts:33:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  69  |     await this.validateStatusCode(data.expCode);
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
  160 |     return this.response;
  161 |   }
  162 | 
  163 |   /**
  164 |    * Common method to validate the status code
  165 |    * @param expCode
  166 |    */
  167 |   async validateStatusCode(expCode: number) {
  168 |     const actualCode = this.response.status();
> 169 |     await expect(actualCode).toBe(expCode);
      |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  170 |   }
  171 | 
  172 |   /**
  173 |    * Common method to validate the status massage
  174 |    * @param expMessage
  175 |    */
  176 |   async validateStatusMessage(expMessage: string) {
  177 |     const actualMessage = this.response.statusText();
  178 |     await expect(actualMessage).toBe(expMessage);
  179 |   }
  180 | 
  181 |   /**
  182 |    * Common method to get value of any property
  183 |    * @param responseBody
  184 |    * @param key
  185 |    * @returns
  186 |    */
  187 |   private getResponseValue(responseBody: any, key: string): any {
  188 |     const value = key
  189 |       .split(".")
  190 |       .reduce((value: any, part: string) => value?.[part], responseBody);
  191 |     return value;
  192 |   }
  193 | 
  194 |   async getPropertyValue(key: string): Promise<any>{
  195 |     const responseBody = await this.response.json()
  196 |     const value = this.getResponseValue(responseBody, key)
  197 |     return value
  198 |   }
  199 | 
  200 |   /**
  201 |    * Common method to validate response body
  202 |    * @param key
  203 |    * @param expValue
  204 |    */
  205 |   async validateResponseBody(key: string, expValue: any) {
  206 |     const responseBody = await this.response.json();
  207 |     const actualValue = this.getResponseValue(responseBody, key);
  208 |     await expect(actualValue).toBe(expValue);
  209 |   }
  210 | 
  211 |   /**
  212 |    * Common method to validate the response header
  213 |    * @param headerName
  214 |    * @param expValue
  215 |    */
  216 |   async validateResponseHeader(headerName: string, expValue: any) {
  217 |     const header = await this.response.headers();
  218 |     const actualValue = header[headerName];
  219 |     await expect(actualValue).toBe(expValue);
  220 |   }
  221 | 
  222 |   /**
  223 |    * Common method to validate the schema response body
  224 |    * @param key
  225 |    * @param expDataType
  226 |    */
  227 |   async validateResponseSchema(key: string, expDataType: string) {
  228 |     const responseBody = await this.response.json();
  229 |     const actualValue = this.getResponseValue(responseBody, key);
  230 |     const actualDataType = typeof actualValue;
  231 |     await expect(actualDataType).toBe(expDataType);
  232 |   }
  233 | 
  234 |   /**
  235 |    * Common method to validate cookie in the response
  236 |    * @param cookieName
  237 |    * @param expValue
  238 |    */
  239 |   async validateResponseCookie(cookieName: string, expValue: any) {
  240 |     const cookies = await this.response.cookies();
  241 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  242 |     const actualValue = cookie ? cookie.value : undefined;
  243 |     await expect(actualValue).toBe(expValue);
  244 |   }
  245 | 
  246 |   /**
  247 |    * Common method to validate the specific value of key
  248 |    * @param key
  249 |    * @param expDataType
  250 |    */
  251 |   async validateItemsLength(
  252 |     arrayPath: string,
  253 |     expectedLength: number,
  254 |   ): Promise<void> {
  255 |     const responseBody = await this.response.json();
  256 |     const items = this.getResponseValue(responseBody, arrayPath);
  257 | 
  258 |     expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
  259 |       true,
  260 |     );
  261 |     expect(items.length, `Unexpected number of items in "${arrayPath}"`).toBe(
  262 |       expectedLength,
  263 |     );
  264 |   }
  265 | 
  266 |   /**
  267 |    * Common method to validate Obejct Keys
  268 |    * @param arrayPath 
  269 |    * @param requiredKeys 
```
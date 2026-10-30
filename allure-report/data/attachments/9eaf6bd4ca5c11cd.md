# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Auth Test >> Who Am I
- Location: tests\api\t-test.spec.ts:16:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "2"
Received: undefined
```

# Test source

```ts
  86  |       );
  87  |     }
  88  | 
  89  |     const expiresInSeconds = Number(responseBody[data.expiresInKey] ?? 15 * 60);
  90  |     if (!Number.isFinite(expiresInSeconds) || expiresInSeconds <= 0) {
  91  |       throw new Error(
  92  |         `Invalid token expiry value: ${responseBody[data.expiresInKey]}`,
  93  |       );
  94  |     }
  95  | 
  96  |     this.accessTokens.set(user, {
  97  |       value: accessToken,
  98  |       expiresAt: Date.now() + Math.max(0, expiresInSeconds * 1000 - 30_000),
  99  |     });
  100 |     return accessToken;
  101 |   }
  102 | 
  103 |   /**
  104 |    * Common method to send the request and get the response.
  105 |    * @param requestType
  106 |    * @param endpoint
  107 |    * @param payload
  108 |    * @param token
  109 |    * @returns
  110 |    */
  111 |   async getResponse(
  112 |     requestType: string,
  113 |     endpoint: string,
  114 |     payload?: any,
  115 |     token?: string,
  116 |   ) {
  117 |     if (!this.requestContext) {
  118 |       throw new Error(
  119 |         "Request context is not initialized. Call InitializeRequestContext() first.",
  120 |       );
  121 |     }
  122 | 
  123 |     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  124 |     switch (requestType.toLowerCase()) {
  125 |       case "get":
  126 |         this.response = await this.requestContext.get(endpoint, { headers });
  127 |         break;
  128 |       case "post":
  129 |         this.response = await this.requestContext.post(endpoint, {
  130 |           data: payload,
  131 |           headers,
  132 |         });
  133 |         break;
  134 |       case "put":
  135 |         this.response = await this.requestContext.put(endpoint, {
  136 |           data: payload,
  137 |           headers,
  138 |         });
  139 |         break;
  140 |       case "patch":
  141 |         this.response = await this.requestContext.patch(endpoint, {
  142 |           data: payload,
  143 |           headers,
  144 |         });
  145 |         break;
  146 |       case "delete":
  147 |         this.response = await this.requestContext.delete(endpoint, { headers });
  148 |         break;
  149 |       default:
  150 |         throw new Error(`Unsupported Request Type: ${requestType}`);
  151 |     }
  152 | 
  153 |     return this.response;
  154 |   }
  155 | 
  156 |   /**
  157 |    * Common method to validate the status code
  158 |    * @param expCode
  159 |    */
  160 |   async validateStatusCode(expCode: number) {
  161 |     const actualCode = this.response.status();
  162 |     await expect(actualCode).toBe(expCode);
  163 |   }
  164 | 
  165 |   /**
  166 |    * Common method to validate the status massage
  167 |    * @param expMessage
  168 |    */
  169 |   async validateStatusMessage(expMessage: string) {
  170 |     const actualMessage = this.response.statusText();
  171 |     await expect(actualMessage).toBe(expMessage);
  172 |   }
  173 | 
  174 |   private getResponseValue(responseBody: any, key: string): any {
  175 |     return key.split(".").reduce((value: any, part: string) => value?.[part], responseBody);
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
> 186 |     await expect(actualValue).toBe(expValue);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  187 |   }
  188 | 
  189 |   /**
  190 |    * Common method to validate the response header
  191 |    * @param headerName
  192 |    * @param expValue
  193 |    */
  194 |   async validateResponseHeader(headerName: string, expValue: any) {
  195 |     const header = await this.response.headers();
  196 |     const actualValue = header[headerName];
  197 |     await expect(actualValue).toBe(expValue);
  198 |   }
  199 | 
  200 |   /**
  201 |    * Common method to validate the schema response body
  202 |    * @param key
  203 |    * @param expDataType
  204 |    */
  205 |   async validateResponseSchema(key: string, expDataType: string) {
  206 |     const responseBody = await this.response.json();
  207 |     const actualValue = this.getResponseValue(responseBody, key);
  208 |     const actualDataType = typeof actualValue;
  209 |     await expect(actualDataType).toBe(expDataType);
  210 |   }
  211 | 
  212 |   /**
  213 |    * Common method to validate cookie in the response
  214 |    * @param cookieName
  215 |    * @param expValue
  216 |    */
  217 |   async validateResponseCookie(cookieName: string, expValue: any) {
  218 |     const cookies = await this.response.cookies();
  219 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  220 |     const actualValue = cookie ? cookie.value : undefined;
  221 |     await expect(actualValue).toBe(expValue);
  222 |   }
  223 | }
  224 | 
```
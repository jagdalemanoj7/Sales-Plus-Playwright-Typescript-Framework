# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Auth Test >> Who Am I
- Location: tests\api\t-test.spec.ts:58:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: undefined
```

# Test source

```ts
  79  |     const accessToken = responseBody[tokenKey];
  80  |     if (typeof accessToken !== "string" || accessToken.length === 0) {
  81  |       throw new Error(
  82  |         `Login response did not contain a token in '${tokenKey}'`,
  83  |       );
  84  |     }
  85  | 
  86  |     const expiresInSeconds = Number(responseBody[data.expiresInKey] ?? 15 * 60);
  87  |     if (!Number.isFinite(expiresInSeconds) || expiresInSeconds <= 0) {
  88  |       throw new Error(
  89  |         `Invalid token expiry value: ${responseBody[data.expiresInKey]}`,
  90  |       );
  91  |     }
  92  | 
  93  |     this.accessTokens.set(user, {
  94  |       value: accessToken,
  95  |       expiresAt: Date.now() + Math.max(0, expiresInSeconds * 1000 - 30_000),
  96  |     });
  97  |     return accessToken;
  98  |   }
  99  | 
  100 |   /**
  101 |    * Common method to send the request and get the response.
  102 |    * @param requestType
  103 |    * @param endpoint
  104 |    * @param payload
  105 |    * @param token
  106 |    * @returns
  107 |    */
  108 |   async getResponse(
  109 |     requestType: string,
  110 |     endpoint: string,
  111 |     payload?: any,
  112 |     token?: string,
  113 |   ) {
  114 |     if (!this.requestContext) {
  115 |       throw new Error(
  116 |         "Request context is not initialized. Call InitializeRequestContext() first.",
  117 |       );
  118 |     }
  119 | 
  120 |     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  121 |     switch (requestType.toLowerCase()) {
  122 |       case "get":
  123 |         this.response = await this.requestContext.get(endpoint, { headers });
  124 |         break;
  125 |       case "post":
  126 |         this.response = await this.requestContext.post(endpoint, {
  127 |           data: payload,
  128 |           headers,
  129 |         });
  130 |         break;
  131 |       case "put":
  132 |         this.response = await this.requestContext.put(endpoint, {
  133 |           data: payload,
  134 |           headers,
  135 |         });
  136 |         break;
  137 |       case "patch":
  138 |         this.response = await this.requestContext.patch(endpoint, {
  139 |           data: payload,
  140 |           headers,
  141 |         });
  142 |         break;
  143 |       case "delete":
  144 |         this.response = await this.requestContext.delete(endpoint, { headers });
  145 |         break;
  146 |       default:
  147 |         throw new Error(`Unsupported Request Type: ${requestType}`);
  148 |     }
  149 | 
  150 |     return this.response;
  151 |   }
  152 | 
  153 |   /**
  154 |    * Common method to validate the status code
  155 |    * @param expCode
  156 |    */
  157 |   async validateStatusCode(expCode: number) {
  158 |     const actualCode = this.response.status();
  159 |     await expect(actualCode).toBe(expCode);
  160 |   }
  161 | 
  162 |   /**
  163 |    * Common method to validate the status massage
  164 |    * @param expMessage
  165 |    */
  166 |   async validateStatusMessage(expMessage: string) {
  167 |     const actualMessage = this.response.statusText();
  168 |     await expect(actualMessage).toBe(expMessage);
  169 |   }
  170 | 
  171 |   /**
  172 |    * Common method to validate response body
  173 |    * @param key
  174 |    * @param expValue
  175 |    */
  176 |   async validateResponseBody(key: string, expValue: any) {
  177 |     const responseBody = await this.response.json();
  178 |     const actualValue = responseBody[key];
> 179 |     await expect(actualValue).toBe(expValue);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  180 |   }
  181 | 
  182 |   /**
  183 |    * Common method to validate the response header
  184 |    * @param headerName
  185 |    * @param expValue
  186 |    */
  187 |   async validateResponseHeader(headerName: string, expValue: any) {
  188 |     const header = await this.response.headers();
  189 |     const actualValue = header[headerName];
  190 |     await expect(actualValue).toBe(expValue);
  191 |   }
  192 | 
  193 |   /**
  194 |    * Common method to validate the schema response body
  195 |    * @param key
  196 |    * @param expDataType
  197 |    */
  198 |   async validateResponseSchema(key: string, expDataType: string) {
  199 |     const responseBody = await this.response.json();
  200 |     const actualValue = responseBody[key];
  201 |     const actualDataType = typeof actualValue;
  202 |     await expect(actualDataType).toBe(expDataType);
  203 |   }
  204 | 
  205 |   /**
  206 |    * Common method to validate cookie in the response
  207 |    * @param cookieName
  208 |    * @param expValue
  209 |    */
  210 |   async validateResponseCookie(cookieName: string, expValue: any) {
  211 |     const cookies = await this.response.cookies();
  212 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  213 |     const actualValue = cookie ? cookie.value : undefined;
  214 |     await expect(actualValue).toBe(expValue);
  215 |   }
  216 | }
  217 | 
```
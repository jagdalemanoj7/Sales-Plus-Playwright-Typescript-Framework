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

Expected: "2"
Received: undefined
```

# Test source

```ts
  78  |     const accessToken = responseBody[tokenKey];
  79  |     if (typeof accessToken !== "string" || accessToken.length === 0) {
  80  |       throw new Error(
  81  |         `Login response did not contain a token in '${tokenKey}'`,
  82  |       );
  83  |     }
  84  | 
  85  |     const expiresInSeconds = Number(responseBody[data.expiresInKey] ?? 15 * 60);
  86  |     if (!Number.isFinite(expiresInSeconds) || expiresInSeconds <= 0) {
  87  |       throw new Error(
  88  |         `Invalid token expiry value: ${responseBody[data.expiresInKey]}`,
  89  |       );
  90  |     }
  91  | 
  92  |     this.accessTokens.set(user, {
  93  |       value: accessToken,
  94  |       expiresAt: Date.now() + Math.max(0, expiresInSeconds * 1000 - 30_000),
  95  |     });
  96  |     return accessToken;
  97  |   }
  98  | 
  99  |   /**
  100 |    * Common method to send the request and get the response.
  101 |    * @param requestType
  102 |    * @param endpoint
  103 |    * @param payload
  104 |    * @param token
  105 |    * @returns
  106 |    */
  107 |   async getResponse(
  108 |     requestType: string,
  109 |     endpoint: string,
  110 |     payload?: any,
  111 |     token?: string,
  112 |   ) {
  113 |     if (!this.requestContext) {
  114 |       throw new Error(
  115 |         "Request context is not initialized. Call InitializeRequestContext() first.",
  116 |       );
  117 |     }
  118 | 
  119 |     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  120 |     switch (requestType.toLowerCase()) {
  121 |       case "get":
  122 |         this.response = await this.requestContext.get(endpoint, { headers });
  123 |         break;
  124 |       case "post":
  125 |         this.response = await this.requestContext.post(endpoint, {
  126 |           data: payload,
  127 |           headers,
  128 |         });
  129 |         break;
  130 |       case "put":
  131 |         this.response = await this.requestContext.put(endpoint, {
  132 |           data: payload,
  133 |           headers,
  134 |         });
  135 |         break;
  136 |       case "patch":
  137 |         this.response = await this.requestContext.patch(endpoint, {
  138 |           data: payload,
  139 |           headers,
  140 |         });
  141 |         break;
  142 |       case "delete":
  143 |         this.response = await this.requestContext.delete(endpoint, { headers });
  144 |         break;
  145 |       default:
  146 |         throw new Error(`Unsupported Request Type: ${requestType}`);
  147 |     }
  148 | 
  149 |     return this.response;
  150 |   }
  151 | 
  152 |   /**
  153 |    * Common method to validate the status code
  154 |    * @param expCode
  155 |    */
  156 |   async validateStatusCode(expCode: number) {
  157 |     const actualCode = this.response.status();
  158 |     await expect(actualCode).toBe(expCode);
  159 |   }
  160 | 
  161 |   /**
  162 |    * Common method to validate the status massage
  163 |    * @param expMessage
  164 |    */
  165 |   async validateStatusMessage(expMessage: string) {
  166 |     const actualMessage = this.response.statusText();
  167 |     await expect(actualMessage).toBe(expMessage);
  168 |   }
  169 | 
  170 |   /**
  171 |    * Common method to validate response body
  172 |    * @param key
  173 |    * @param expValue
  174 |    */
  175 |   async validateResponseBody(key: string, expValue: any) {
  176 |     const responseBody = await this.response.json();
  177 |     const actualValue = responseBody[key];
> 178 |     await expect(actualValue).toBe(expValue);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  179 |   }
  180 | 
  181 |   /**
  182 |    * Common method to validate the response header
  183 |    * @param headerName
  184 |    * @param expValue
  185 |    */
  186 |   async validateResponseHeader(headerName: string, expValue: any) {
  187 |     const header = await this.response.headers();
  188 |     const actualValue = header[headerName];
  189 |     await expect(actualValue).toBe(expValue);
  190 |   }
  191 | 
  192 |   /**
  193 |    * Common method to validate the schema response body
  194 |    * @param key
  195 |    * @param expDataType
  196 |    */
  197 |   async validateResponseSchema(key: string, expDataType: string) {
  198 |     const responseBody = await this.response.json();
  199 |     const actualValue = responseBody[key];
  200 |     const actualDataType = typeof actualValue;
  201 |     await expect(actualDataType).toBe(expDataType);
  202 |   }
  203 | 
  204 |   /**
  205 |    * Common method to validate cookie in the response
  206 |    * @param cookieName
  207 |    * @param expValue
  208 |    */
  209 |   async validateResponseCookie(cookieName: string, expValue: any) {
  210 |     const cookies = await this.response.cookies();
  211 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  212 |     const actualValue = cookie ? cookie.value : undefined;
  213 |     await expect(actualValue).toBe(expValue);
  214 |   }
  215 | }
  216 | 
```
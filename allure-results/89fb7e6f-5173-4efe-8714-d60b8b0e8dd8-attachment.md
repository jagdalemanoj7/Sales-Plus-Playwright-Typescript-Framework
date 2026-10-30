# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Auth Test >> Who Am I
- Location: tests\api\t-test.spec.ts:58:9

# Error details

```
TypeError: this.response.statusMessage is not a function
```

# Test source

```ts
  64  |     // validate response code, message and body
  65  |     await this.validateStatusCode(data.expCode)
  66  |     await this.validateStatusMessage(data.expStatusMessage)
  67  |     await this.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue)
  68  |     await this.validateResponseBody(data.expiresInKey, data.expiresInValue)
  69  |     await this.validateResponseBody(data.userIdKey, data.userIdValue)
  70  |     await this.validateResponseBody(data.userNameKey, data.userNameValue)
  71  |     await this.validateResponseBody(data.nameKey, data.nameValue)
  72  |     await this.validateResponseBody(data.userEmailKey, data.userEmailValue)
  73  |     await this.validateResponseBody(data.userRoleKey, data.userRoleValue)
  74  | 
  75  |     const tokenKey = key ?? data.tokenKey;
  76  |     const accessToken = responseBody[tokenKey];
  77  |     if (typeof accessToken !== "string" || accessToken.length === 0) {
  78  |       throw new Error(
  79  |         `Login response did not contain a token in '${tokenKey}'`,
  80  |       );
  81  |     }
  82  | 
  83  |     const expiresInSeconds = Number(responseBody[data.expiresInKey] ?? 15 * 60);
  84  |     if (!Number.isFinite(expiresInSeconds) || expiresInSeconds <= 0) {
  85  |       throw new Error(
  86  |         `Invalid token expiry value: ${responseBody[data.expiresInKey]}`,
  87  |       );
  88  |     }
  89  | 
  90  |     this.accessTokens.set(user, {
  91  |       value: accessToken,
  92  |       expiresAt: Date.now() + Math.max(0, expiresInSeconds * 1000 - 30_000),
  93  |     });
  94  |     return accessToken;
  95  |   }
  96  | 
  97  |   /**
  98  |    * Common method to send the request and get the response.
  99  |    * @param requestType
  100 |    * @param endpoint
  101 |    * @param payload
  102 |    * @param token
  103 |    * @returns
  104 |    */
  105 |   async getResponse(
  106 |     requestType: string,
  107 |     endpoint: string,
  108 |     payload?: any,
  109 |     token?: string,
  110 |   ) {
  111 |     if (!this.requestContext) {
  112 |       throw new Error(
  113 |         "Request context is not initialized. Call InitializeRequestContext() first.",
  114 |       );
  115 |     }
  116 | 
  117 |     const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  118 |     switch (requestType.toLowerCase()) {
  119 |       case "get":
  120 |         this.response = await this.requestContext.get(endpoint, { headers });
  121 |         break;
  122 |       case "post":
  123 |         this.response = await this.requestContext.post(endpoint, {
  124 |           data: payload,
  125 |           headers,
  126 |         });
  127 |         break;
  128 |       case "put":
  129 |         this.response = await this.requestContext.put(endpoint, {
  130 |           data: payload,
  131 |           headers,
  132 |         });
  133 |         break;
  134 |       case "patch":
  135 |         this.response = await this.requestContext.patch(endpoint, {
  136 |           data: payload,
  137 |           headers,
  138 |         });
  139 |         break;
  140 |       case "delete":
  141 |         this.response = await this.requestContext.delete(endpoint, { headers });
  142 |         break;
  143 |       default:
  144 |         throw new Error(`Unsupported Request Type: ${requestType}`);
  145 |     }
  146 | 
  147 |     return this.response;
  148 |   }
  149 | 
  150 |   /**
  151 |    * Common method to validate the status code
  152 |    * @param expCode
  153 |    */
  154 |   async validateStatusCode(expCode: number) {
  155 |     const actualCode = this.response.status();
  156 |     await expect(actualCode).toBe(expCode);
  157 |   }
  158 | 
  159 |   /**
  160 |    * Common method to validate the status massage
  161 |    * @param expMessage
  162 |    */
  163 |   async validateStatusMessage(expMessage: string) {
> 164 |     const actualMessage = this.response.statusMessage();
      |                                         ^ TypeError: this.response.statusMessage is not a function
  165 |     await expect(actualMessage).toBe(expMessage);
  166 |   }
  167 | 
  168 |   /**
  169 |    * Common method to validate response body
  170 |    * @param key
  171 |    * @param expValue
  172 |    */
  173 |   async validateResponseBody(key: string, expValue: any) {
  174 |     const responseBody = await this.response.json();
  175 |     const actualValue = responseBody[key];
  176 |     await expect(actualValue).toBe(expValue);
  177 |   }
  178 | 
  179 |   /**
  180 |    * Common method to validate the response header
  181 |    * @param headerName
  182 |    * @param expValue
  183 |    */
  184 |   async validateResponseHeader(headerName: string, expValue: any) {
  185 |     const header = await this.response.headers();
  186 |     const actualValue = header[headerName];
  187 |     await expect(actualValue).toBe(expValue);
  188 |   }
  189 | 
  190 |   /**
  191 |    * Common method to validate the schema response body
  192 |    * @param key
  193 |    * @param expDataType
  194 |    */
  195 |   async validateResponseSchema(key: string, expDataType: string) {
  196 |     const responseBody = await this.response.json();
  197 |     const actualValue = responseBody[key];
  198 |     const actualDataType = typeof actualValue;
  199 |     await expect(actualDataType).toBe(expDataType);
  200 |   }
  201 | 
  202 |   /**
  203 |    * Common method to validate cookie in the response
  204 |    * @param cookieName
  205 |    * @param expValue
  206 |    */
  207 |   async validateResponseCookie(cookieName: string, expValue: any) {
  208 |     const cookies = await this.response.cookies();
  209 |     const cookie = cookies.find((c: any) => c.name === cookieName);
  210 |     const actualValue = cookie ? cookie.value : undefined;
  211 |     await expect(actualValue).toBe(expValue);
  212 |   }
  213 | }
  214 | 
```
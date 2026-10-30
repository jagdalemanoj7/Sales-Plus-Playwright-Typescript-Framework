# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Auth Test >> Who Am I
- Location: tests\api\t-test.spec.ts:16:9

# Error details

```
Error: Token request failed: 400
```

# Test source

```ts
  1   | import { expect, request } from "@playwright/test";
  2   | import config from "../../config/config.json" with { type: "json" };
  3   | import authData from "../../testdata/api/auth-data.json" with { type: "json" };
  4   | 
  5   | export class APICommons {
  6   |   /**
  7   |    * @param requestContex Pre-requisites of API requests like headers, authorization-related information, etc.
  8   |    * @param response Output received from the API request
  9   |    * @param payload  data for post/put/patch request
  10  |    */    
  11  |   private requestContext: any; // 
  12  |   private response: any;       // Output received from the API request
  13  |   private accessTokens = new Map<string, { value: string; expiresAt: number }>();
  14  |   private expectedValue = null
  15  |   
  16  |   /**
  17  |    * Method to Create Request Context (Meaningful adding base URL headers, authorizations, etc).
  18  |    * @param requestType
  19  |    * @param endpoint
  20  |    * @param payload
  21  |    * @return
  22  |    */
  23  |   async InitializeRequestContext() {
  24  |     this.requestContext = await request.newContext({
  25  |       baseURL: config.api.base_url,
  26  |       extraHTTPHeaders: {},
  27  |     });
  28  |   }
  29  | 
  30  |   /**
  31  |    * Common method to generate token before expiring
  32  |    * @param user
  33  |    * @param key
  34  |    * @returns
  35  |    */
  36  |   async generateToken(user: string, key?: string): Promise<string> {
  37  |     // This block checks whether a valid token is already cached for the requested user:
  38  |     const cachedToken = this.accessTokens.get(user);
  39  |     if (cachedToken && Date.now() < cachedToken.expiresAt) {
  40  |       return cachedToken.value;
  41  |     }
  42  | 
  43  |     // describes the shape of the login data object
  44  |     const loginRequests: Record<string, typeof authData.loginAsUserRavi> = {
  45  |       loginAsUserRavi: authData.loginAsUserRavi,
  46  |       loginAsUserMeera: authData.loginAsUserMeera,
  47  |       loginAsAdmin: authData.loginAsAdmin,
  48  |     };
  49  |     const data = loginRequests[user];
  50  |     if (!data) {
  51  |       throw new Error(`Unknown login user: ${user}`);
  52  |     }
  53  | 
  54  |     const response = await this.getResponse(
  55  |       data.requestType,
  56  |       data.endpoint,
  57  |       data.tokenKey,
  58  |       undefined
  59  |     );
  60  | 
  61  |     if (!response.ok()) {
> 62  |       throw new Error(`Token request failed: ${response.status()}`);
      |             ^ Error: Token request failed: 400
  63  |     }
  64  | 
  65  |     const responseBody = await response.json();
  66  |     // validate response code, message and body
  67  |     await this.validateStatusCode(data.expCode)
  68  |     await this.validateStatusMessage(data.expStatusMessage)
  69  |     await this.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue)
  70  |     let expectedValue = parseInt(data.expiresInValue)
  71  |     await this.validateResponseBody(data.expiresInKey, expectedValue)
  72  |     expectedValue = parseInt(data.userIdValue)
  73  |     await this.validateResponseBody(data.userIdKey, expectedValue)
  74  |     await this.validateResponseBody(data.userNameKey, data.userNameValue)
  75  |     await this.validateResponseBody(data.nameKey, data.nameValue)
  76  |     await this.validateResponseBody(data.userEmailKey, data.userEmailValue)
  77  |     await this.validateResponseBody(data.userRoleKey, data.userRoleValue)
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
  112 |     token?: string,
  113 |     payload?: any,
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
```
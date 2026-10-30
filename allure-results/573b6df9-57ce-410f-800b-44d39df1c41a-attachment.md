# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\t-test.spec.ts >> Auth Test >> Who Am I
- Location: tests\api\t-test.spec.ts:58:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'userName')
```

# Test source

```ts
  1  | import { test, TestInfo } from '@playwright/test'
  2  | import { APICommons } from '../../commons/api/api-commons.ts'
  3  | import authData from '../../testdata/api/auth-data.json'
  4  | 
  5  | test.describe('Auth Test', async() => {
  6  |     let apiCommons : APICommons
  7  |     let token : any
  8  |     let testInfo : TestInfo
  9  | 
  10 |     // Initialize the api instance before each test to share base url, headers etc
  11 |     test.beforeEach(async() => {
  12 |         apiCommons = new APICommons()
  13 |         await apiCommons.InitializeRequestContext()
  14 |     })
  15 | 
  16 |     test.skip('Admin Login', async() => {
  17 |         const data = authData.loginAsAdmin
  18 |         await apiCommons.getResponse(data.requestType, data.endpoint, data.payload)
  19 |         await apiCommons.validateStatusCode(data.expCode)
  20 |         await apiCommons.validateStatusMessage(data.expStatusMessage)
  21 |         await apiCommons.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue)
  22 |         await apiCommons.validateResponseBody(data.expiresInKey, data.expiresInValue)
  23 |         await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue)
  24 |         await apiCommons.validateResponseBody(data.userNameKey, data.userNameValue)
  25 |         await apiCommons.validateResponseBody(data.nameKey, data.nameValue)
  26 |         await apiCommons.validateResponseBody(data.userEmailKey, data.userEmailValue)
  27 |         await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue)
  28 |     })
  29 | 
  30 |     test.skip('User 1 Login', async() => {
  31 |         const data = authData.loginAsUserRavi
  32 |         await apiCommons.getResponse(data.requestType, data.endpoint, data.payload)
  33 |         await apiCommons.validateStatusCode(data.expCode)
  34 |         await apiCommons.validateStatusMessage(data.expStatusMessage)
  35 |         await apiCommons.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue)
  36 |         await apiCommons.validateResponseBody(data.expiresInKey, data.expiresInValue)
  37 |         await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue)
  38 |         await apiCommons.validateResponseBody(data.userNameKey, data.userNameValue)
  39 |         await apiCommons.validateResponseBody(data.nameKey, data.nameValue)
  40 |         await apiCommons.validateResponseBody(data.userEmailKey, data.userEmailValue)
  41 |         await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue)
  42 |     })
  43 | 
  44 |     test.skip('User 2 Login', async() => {
  45 |         const data = authData.loginAsUserMeera
  46 |         await apiCommons.getResponse(data.requestType, data.endpoint, data.payload)
  47 |         await apiCommons.validateStatusCode(data.expCode)
  48 |         await apiCommons.validateStatusMessage(data.expStatusMessage)
  49 |         await apiCommons.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue)
  50 |         await apiCommons.validateResponseBody(data.expiresInKey, data.expiresInValue)
  51 |         await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue)
  52 |         await apiCommons.validateResponseBody(data.userNameKey, data.userNameValue)
  53 |         await apiCommons.validateResponseBody(data.nameKey, data.nameValue)
  54 |         await apiCommons.validateResponseBody(data.userEmailKey, data.userEmailValue)
  55 |         await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue)
  56 |     })
  57 | 
  58 |     test('Who Am I', async() => {
  59 |         const userData = authData.user.user1
  60 |         const data = authData.whoAmI
> 61 |         token = await apiCommons.generateToken(userData.userName)
     |                                                         ^ TypeError: Cannot read properties of undefined (reading 'userName')
  62 |         await apiCommons.getResponse(data.requestType, data.endpoint, token)
  63 |         await apiCommons.validateStatusCode(data.expCode)
  64 |         await apiCommons.validateStatusMessage(data.expStatusMessage)
  65 |         await apiCommons.validateResponseBody(data.userIdKey, userData.userIdValue)
  66 |         await apiCommons.validateResponseBody(data.userNameKey, userData.userNameValue)
  67 |         await apiCommons.validateResponseBody(data.nameKey, userData.nameValue)
  68 |         await apiCommons.validateResponseBody(data.userEmailKey, userData.userEmailValue)
  69 |         await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue)
  70 |     })
  71 | })
```
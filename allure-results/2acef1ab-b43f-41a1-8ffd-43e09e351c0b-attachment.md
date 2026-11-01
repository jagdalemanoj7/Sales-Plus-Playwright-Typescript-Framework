# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users\users-test.spec.ts >> Users Test
- Location: tests\api\users\users-test.spec.ts:6:5

# Error details

```
Error: Playwright Test did not expect test.beforeEach() to be called here.
Most common reasons include:
- You are calling test.beforeEach() in a configuration file.
- You are calling test.beforeEach() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test.beforeEach() from an async test.describe() block. Only sync ones are supported.
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import { APICommons } from "../../../commons/api/api-commons";
  3  | import authData from '../../../testdata/api/auth-data.json'
  4  | import userData from '../../../testdata/api/users-data.json'
  5  | 
  6  | test('Users Test', () => {
  7  |     let apiCommons: APICommons
  8  |     let token: any
  9  | 
> 10 |     test.beforeEach(async() => {
     |          ^ Error: Playwright Test did not expect test.beforeEach() to be called here.
  11 |         apiCommons = new APICommons()
  12 |         await apiCommons.InitializeRequestContext()
  13 |     })
  14 | 
  15 |     test('[B4] List users (admin) — no passwords', async() => {
  16 |         const admin = authData.loginAsAdmin
  17 |         token = await apiCommons.generateToken(admin.userName)
  18 |         const data = await userData.listUsers
  19 |         await apiCommons.getResponse(
  20 |             data.requestType,
  21 |             data.endpoint,
  22 |             undefined,
  23 |             token
  24 |         )
  25 |         await apiCommons.validateStatusCode(data.expCode);
  26 |         await apiCommons.validateStatusMessage(data.expStatusMessage);
  27 |         await apiCommons.validateResponseBody(data.totalKey, data.totalValue);
  28 | 
  29 |     })
  30 | })
```
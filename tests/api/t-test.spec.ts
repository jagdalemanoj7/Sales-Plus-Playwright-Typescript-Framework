import { test, TestInfo } from "@playwright/test";
import { APICommons } from "../../commons/api/api-commons.ts";
import authData from '../../testdata/api/auth-data.json'
import prodData from "../../testdata/api/product-data.json";
import orderData from '../../testdata/api/order-data.json'
import userData from '../../testdata/api/users-data.json'

test.describe("Order Test", () => {
  let apiCommons: APICommons;
  let token: any;
  let testInfo: TestInfo;
  let orderId: number;

  // Initialize the api instance before each test to share base url, headers etc
  test.beforeEach(async () => {
    apiCommons = new APICommons();
    await apiCommons.InitializeRequestContext();
  });

  test.skip("List products", async () => {
    const data = prodData.listProducts;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      undefined,
      token,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.pageKey, data.pageValue);
    await apiCommons.validateResponseBody(data.limitKey, data.limitValue);
    await apiCommons.validateResponseBody(data.totalKey, data.totalValue);
    await apiCommons.validateResponseBody(
      data.totalPagesKey,
      data.totalPagesValue,
    );
    await apiCommons.validateResponseHeader(
      data["X-Total-CountHeader"],
      data["X-Total-CountValue"],
    );
    await apiCommons.validateObjectKeys(data.dataKey, data.objectKeys);
    await apiCommons.validateResponseSchemas(
      data.dataKey,
      data.objectKeys,
      data.objectSchemas,
    );
    await apiCommons.validatePositiveNumberValues(data.dataKey, data.objectKeys[4]);
    await apiCommons.validatePositiveNumberValues(data.dataKey, data.objectKeys[5], true);
    await apiCommons.validatePositiveNumberValues(data.dataKey, data.objectKeys[6]);
  });

  test('[B4] List users (admin) — no passwords', async() => {
        const admin = authData.loginAsAdmin
        token = await apiCommons.generateToken(admin.userName)
        const data = await userData.listUsers
        await apiCommons.getResponse(
            data.requestType,
            data.endpoint,
            undefined,
            token
        )
        await apiCommons.validateStatusCode(data.expCode);
        await apiCommons.validateStatusMessage(data.expStatusMessage);
        await apiCommons.validateResponseBody(data.totalKey, data.totalValue);
        await apiCommons.validateMissingObjectKeys(data.dataKey, data.objectKeys)
        await apiCommons.validateResponseSchemas(
            data.dataKey,
            data.objectKeys,
            data.objectSchemas,
        );
        await apiCommons.validateMissingObjectKeys(data.dataKey, data.objectKeys, data.passwordKey)
  })
});

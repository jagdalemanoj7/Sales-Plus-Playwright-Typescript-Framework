import { test, TestInfo } from "@playwright/test";
import { APICommons } from "../../../commons/api/api-commons.ts";
import authData from '../../../testdata/api/auth-data.json'
import prodData from "../../../testdata/api/product-data.json";
import orderData from '../../../testdata/api/order-data.json'

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

  test("[B6] Place an order (ravi)", async () => {
    const userData = authData.loginAsUserRavi;
    token = await apiCommons.generateToken(userData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = orderData.placeAnOrder;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      data.payload,
      token
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue);
    await apiCommons.validateSpecificArrayKeyValue(data.dataKey, 0, data.productIdKey, data.productIdValue)
    await apiCommons.validateSpecificArrayKeyValue(data.dataKey, 0, data.quantityKey, data.quantityValue)
    await apiCommons.validateResponseBody(data.totalKey, data.totalValue);
    await apiCommons.validateResponseBody(data.statusKey, data.statusValue);
    orderId = await apiCommons.getPropertyValue(data.orderIdKey)
  });

  test("[B5] Another customer's order → 403", async () => {
    const userData = authData.loginAsUserRavi;
    token = await apiCommons.generateToken(userData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = orderData.anotherCustomersOrder;
    const endpoint = `${data.endpoint}/${data.productId}`
    await apiCommons.getResponse(
      data.requestType,
      endpoint,
      undefined,
      token,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.codeKey, data.codeValue);
    await apiCommons.validateResponseBody(data.messageKey, data.messageValue);
  });

  test("Cancel my order", async () => {
    const userData = authData.loginAsUserRavi;
    token = await apiCommons.generateToken(userData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = orderData.cancelMyOrder;
    const endpoint = `${data.endpoint1}/${orderId}/${data.endpoint2}`
    await apiCommons.getResponse(
      data.requestType,
      endpoint,
      undefined,
      token,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.totalKey, data.totalValue);
    await apiCommons.validateResponseBody(data.statusKey, data.statusValue);
    await apiCommons.validateSpecificArrayKeyValue(data.itemsKey, 0, data.productIdKey, data.productIdValue)
    await apiCommons.validateSpecificArrayKeyValue(data.itemsKey, 0, data.nameKey, data.nameValue)
    await apiCommons.validateSpecificArrayKeyValue(data.itemsKey, 0, data.quantityKey, data.quantityValue)
    await apiCommons.validateSpecificArrayKeyValue(data.itemsKey, 0, data.unitPriceKey, data.unitPriceValue)
    await apiCommons.validateSpecificArrayKeyValue(data.itemsKey, 0, data.lineTotalKey, data.lineTotalValue)
  });

  test("Out of stock → 409", async () => {
    const userData = authData.loginAsUserRavi;
    token = await apiCommons.generateToken(userData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = orderData.outOfStock;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      data.payload,
      token
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.codeKey, data.codeValue);
    await apiCommons.validateResponseBody(data.messageKey, data.messageValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 0, data.fieldKey, data.fieldValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 0, data.detailsMessageKey, data.detailsMessageValue);
  });
  
});

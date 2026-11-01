import { test } from '@playwright/test'
import { APICommons } from '../../../commons/api/api-commons'
import authData from "../../../testdata/api/auth-data.json"
import prodData from "../../../testdata/api/product-data.json";

test.describe("Product Test", () => {
  let apiCommons: APICommons;
  let token: any;

  // Initialize the api instance before each test to share base url, headers etc
  test.beforeEach(async () => {
    apiCommons = new APICommons();
    await apiCommons.InitializeRequestContext();
  });

  test("List products", async () => {
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

  test("Search, any case", async () => {
    const data = prodData.searchAnyCase;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      undefined,
      undefined,
      data.queryParams
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

  test("Search, by page", async () => {
    const data = prodData.searchByPage;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      undefined,
      undefined,
      data.queryParams
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.limitKey, data.limitValue);
    await apiCommons.validateSpecificArrayKeyValue(data.dataKey, data.dataIndex, data.nameKey, data.nameValue)
    await apiCommons.validateItemsLength(data.dataKey, data.queryParams.limit, )
  });

  test("Sort by price, highest first", async () => {
    const data = prodData.sortByPriceHighestFirst;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      undefined,
      undefined,
      data.queryParams
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.totalKey, data.totalValue);
    await apiCommons.validateSortedPriceInDescendingOrder(data.dataKey, data.priceKey)
  });

  test("Get product by id (Etag)", async () => {
    const data = prodData.getProductDetailsById;
    const endpoint = `${data.endpoint}/${data.productId}`
    await apiCommons.getResponse(
      data.requestType,
      endpoint,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.idKey, data.idValue);
    await apiCommons.validateResponseBody(data.nameKey, data.nameValue)
    await apiCommons.validateResponseBody(data.skuKey, data.skuValue)
    await apiCommons.validateResponseBody(data.categoryKey, data.categoryValue)
    await apiCommons.validateResponseBody(data.priceKey, data.priceValue)
    // await apiCommons.validateResponseBody(data.stockKey, data.stockValue)
    await apiCommons.validateResponseBody(data.ratingKey, data.ratingValue)
    await apiCommons.validateResponseHeader(data.etagHeader, data.etagValue)
  });

  test("Unknown Product → 404", async () => {
    const data = prodData.unknownProduct;
    const endpoint = `${data.endpoint}/${data.productId}`
    await apiCommons.getResponse(
      data.requestType,
      endpoint,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.codeKey, data.codeValue);
    await apiCommons.validateResponseBody(data.messageKey, data.messageValue);
  });

  test.skip("[B1] Create product (admin) → 201", async () => {
    const adminData = authData.loginAsAdmin;
    token = await apiCommons.generateToken(adminData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = prodData.createProduct;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      data.payload,
      token
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.nameKey, data.nameValue)
    await apiCommons.validateResponseBody(data.skuKey, data.skuValue)
    await apiCommons.validateResponseBody(data.categoryKey, data.categoryValue)
    await apiCommons.validateResponseBody(data.priceKey, data.priceValue)
    await apiCommons.validateResponseBody(data.stockKey, data.stockValue)
    await apiCommons.validateResponseBody(data.ratingKey, data.ratingValue)
    await apiCommons.validateResponseHeader(data.etagHeader, data.etagValue)
  }); // **Note: Need to create new product data

  test("[B2] Zero price → 422", async () => {
    const adminData = authData.loginAsAdmin;
    token = await apiCommons.generateToken(adminData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = prodData.zeroPrice;
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
  
  test("Bad fields → 422 with details", async () => {
    const adminData = authData.loginAsAdmin;
    token = await apiCommons.generateToken(adminData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = prodData.badFields;
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
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 0, data.fieldSkuKey, data.fieldSkuValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 0, data.detailsSkuMessageKey, data.detailsSkuMessageValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 1, data.fieldNameKey, data.fieldNameValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 1, data.detailsNameMessageKey, data.detailsNameMessageValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 2, data.fieldCategoryKey, data.fieldCategoryValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 2, data.detailsCategoryMessageKey, data.detailsCategoryMessageValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 3, data.fieldPriceKey, data.fieldPriceValue);
    await apiCommons.validateSpecificArrayKeyValue(data.detailsKey, 3, data.detailsPriceMessageKey, data.detailsPriceMessageValue);
  });

  test("Customer cannot create product → 403", async () => {
    const userData = authData.loginAsUserMeera;
    token = await apiCommons.generateToken(userData.userName);
    // await apiCommons.getResponse(adminData.requestType, adminData.endpoint, adminData.payload);
    const data = prodData.customerCannotCreate;
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
    await apiCommons.validateResponseBody(data.codeKey, data.codeValue);
    await apiCommons.validateResponseBody(data.messageKey, data.messageValue);
  });

});
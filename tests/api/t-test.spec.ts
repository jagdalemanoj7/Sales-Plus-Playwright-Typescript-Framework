import { test, TestInfo } from "@playwright/test";
import { APICommons } from "../../commons/api/api-commons.ts";
import prodData from "../../testdata/api/product-data.json";

test.describe("Product Test", () => {
  let apiCommons: APICommons;
  let token: any;
  let testInfo: TestInfo;

  // Initialize the api instance before each test to share base url, headers etc
  test.beforeEach(async () => {
    apiCommons = new APICommons();
    await apiCommons.InitializeRequestContext();
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
    await apiCommons.validateObjectKeys("data", data.objectKeys);
    await apiCommons.validateResponseSchemas(
      "data",
      data.objectKeys,
      data.objectSchemas,
    );
    await apiCommons.validatePositiveNumberValues("data", "price");
    await apiCommons.validatePositiveNumberValues("data", "stock", true);
    await apiCommons.validatePositiveNumberValues("data", "rating");
  });
});

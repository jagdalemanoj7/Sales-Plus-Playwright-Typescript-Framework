import { test, TestInfo } from "@playwright/test";
import { APICommons } from "../../../commons/api/api-commons.ts";
import authData from "../../../testdata/api/auth-data.json";

test.describe("Auth Test", () => {
  let apiCommons: APICommons;
  let token: any;
  let testInfo: TestInfo;

  // Initialize the api instance before each test to share base url, headers etc
  test.beforeEach(async () => {
    apiCommons = new APICommons();
    await apiCommons.InitializeRequestContext();
  });

  test("No token", async () => {
    const data = authData.noToken;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      undefined,
      token,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.codeKey, data.codeValue);
    await apiCommons.validateResponseBody(data.messageKey, data.messageValue);
  });

  test("Admin Login", async () => {
    const data = authData.loginAsAdmin;
    await apiCommons.getResponse(data.requestType, data.endpoint, data.payload);
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(
      data.tokenTypeKey,
      data.tokenTypeValue,
    );
    await apiCommons.validateResponseBody(
      data.expiresInKey,
      data.expiresInValue,
    );
    await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue);
    await apiCommons.validateResponseBody(data.userNameKey, data.userNameValue);
    await apiCommons.validateResponseBody(data.nameKey, data.nameValue);
    await apiCommons.validateResponseBody(
      data.userEmailKey,
      data.userEmailValue,
    );
    await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue);
  });

  test("User Ravi Login", async () => {
    const data = authData.loginAsUserRavi;
    await apiCommons.getResponse(data.requestType, data.endpoint, data.payload);
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(
      data.tokenTypeKey,
      data.tokenTypeValue,
    );
    await apiCommons.validateResponseBody(
      data.expiresInKey,
      data.expiresInValue,
    );
    await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue);
    await apiCommons.validateResponseBody(data.userNameKey, data.userNameValue);
    await apiCommons.validateResponseBody(data.nameKey, data.nameValue);
    await apiCommons.validateResponseBody(
      data.userEmailKey,
      data.userEmailValue,
    );
    await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue);
  });

  test("User Meera Login", async () => {
    const data = authData.loginAsUserMeera;
    await apiCommons.getResponse(data.requestType, data.endpoint, data.payload);
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(
      data.tokenTypeKey,
      data.tokenTypeValue,
    );
    await apiCommons.validateResponseBody(
      data.expiresInKey,
      data.expiresInValue,
    );
    await apiCommons.validateResponseBody(data.userIdKey, data.userIdValue);
    await apiCommons.validateResponseBody(data.userNameKey, data.userNameValue);
    await apiCommons.validateResponseBody(data.nameKey, data.nameValue);
    await apiCommons.validateResponseBody(
      data.userEmailKey,
      data.userEmailValue,
    );
    await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue);
  });

  test("Who Am I", async () => {
    const userData = authData.loginAsUserRavi //.user.user1;
    const data = authData.whoAmI;
    token = await apiCommons.generateToken(userData.userName);
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      undefined,
      token,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.userIdKey, userData.userIdValue);
    await apiCommons.validateResponseBody(
      data.userNameKey,
      userData.userNameValue,
    );
    await apiCommons.validateResponseBody(data.nameKey, userData.nameValue);
    await apiCommons.validateResponseBody(
      data.userEmailKey,
      userData.userEmailValue,
    );
    await apiCommons.validateResponseBody(data.userRoleKey, data.userRoleValue);
  });

  test("Wrong password", async () => {
    const data = authData.wrongPassword;
    await apiCommons.getResponse(
      data.requestType,
      data.endpoint,
      data.payload,
      undefined,
    );
    await apiCommons.validateStatusCode(data.expCode);
    await apiCommons.validateStatusMessage(data.expStatusMessage);
    await apiCommons.validateResponseBody(data.codeKey, data.codeValue);
    await apiCommons.validateResponseBody(data.messageKey, data.messageValue);
  });
});

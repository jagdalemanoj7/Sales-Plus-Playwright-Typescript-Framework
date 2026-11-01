import { expect, request } from "@playwright/test";
import config from "../../config/config.json" with { type: "json" };
import authData from "../../testdata/api/auth-data.json" with { type: "json" };

export class APICommons {
  /**
   * @param requestContex Pre-requisites of API requests like headers, authorization-related information, etc.
   * @param response Output received from the API request
   * @param payload  data for post/put/patch request
   */
  private requestContext: any; //
  private response: any; // Output received from the API request
  private accessTokens = new Map<
    string,
    { value: string; expiresAt: number }
  >();
  private expectedValue = null;

  /**
   * Method to Create Request Context (Meaningful adding base URL headers, authorizations, etc).
   * @param requestType
   * @param endpoint
   * @param payload
   * @return
   */
  async InitializeRequestContext() {
    this.requestContext = await request.newContext({
      baseURL: config.api.base_url,
      extraHTTPHeaders: {},
    });
  }

  /**
   * Common method to generate token before expiring
   * @param user
   * @param key
   * @returns
   */
  async generateToken(user: string, key?: string): Promise<string> {
    // This block checks whether a valid token is already cached for the requested user:
    const cachedToken = this.accessTokens.get(user);
    if (cachedToken && Date.now() < cachedToken.expiresAt) {
      return cachedToken.value;
    }

    // describes the shape of the login data object
    const loginRequests: Record<string, typeof authData.loginAsUserRavi> = {
      loginAsUserRavi: authData.loginAsUserRavi,
      loginAsUserMeera: authData.loginAsUserMeera,
      loginAsAdmin: authData.loginAsAdmin,
    };
    const data = loginRequests[user];
    if (!data) {
      throw new Error(`Unknown login user: ${user}`);
    }

    const response = await this.getResponse(
      data.requestType,
      data.endpoint,
      data.payload,
    );

    if (!response.ok()) {
      throw new Error(`Token request failed: ${response.status()}`);
    }

    const responseBody = await response.json();
    // validate response code, message and body
    await this.validateStatusCode(data.expCode);
    await this.validateStatusMessage(data.expStatusMessage);
    await this.validateResponseBody(data.tokenTypeKey, data.tokenTypeValue);
    await this.validateResponseBody(data.expiresInKey, data.expiresInValue);
    await this.validateResponseBody(data.userIdKey, data.userIdValue);
    await this.validateResponseBody(data.userNameKey, data.userNameValue);
    await this.validateResponseBody(data.nameKey, data.nameValue);
    await this.validateResponseBody(data.userEmailKey, data.userEmailValue);
    await this.validateResponseBody(data.userRoleKey, data.userRoleValue);

    const tokenKey = key ?? data.tokenKey;
    const accessToken = responseBody[tokenKey];
    if (typeof accessToken !== "string" || accessToken.length === 0) {
      throw new Error(
        `Login response did not contain a token in '${tokenKey}'`,
      );
    }

    const expiresInSeconds = Number(responseBody[data.expiresInKey] ?? 15 * 60);
    if (!Number.isFinite(expiresInSeconds) || expiresInSeconds <= 0) {
      throw new Error(
        `Invalid token expiry value: ${responseBody[data.expiresInKey]}`,
      );
    }

    this.accessTokens.set(user, {
      value: accessToken,
      expiresAt: Date.now() + Math.max(0, expiresInSeconds * 1000 - 30_000),
    });
    return accessToken;
  }

  /**
   * Common method to send the request and get the response.
   * @param requestType
   * @param endpoint
   * @param payload
   * @param token
   * @returns
   */
  async getResponse(
    requestType: string,
    endpoint: string,
    payload?: any,
    token?: string,
    params?: Record<string, string | number | boolean>,
  ) {
    if (!this.requestContext) {
      throw new Error(
        "Request context is not initialized. Call InitializeRequestContext() first.",
      );
    }

    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
    switch (requestType.toLowerCase()) {
      case "get":
        this.response = await this.requestContext.get(endpoint, {
          headers,
          params,
        });
        break;
      case "post":
        this.response = await this.requestContext.post(endpoint, {
          data: payload,
          headers,
          params,
        });
        break;
      case "put":
        this.response = await this.requestContext.put(endpoint, {
          data: payload,
          headers,
          params,
        });
        break;
      case "patch":
        this.response = await this.requestContext.patch(endpoint, {
          data: payload,
          headers,
          params,
        });
        break;
      case "delete":
        this.response = await this.requestContext.delete(endpoint, {
          headers,
          params,
        });
        break;
      default:
        throw new Error(`Unsupported Request Type: ${requestType}`);
    }
    return this.response;
  }

  /**
   * Common method to validate the status code
   * @param expCode
   */
  async validateStatusCode(expCode: number) {
    const actualCode = this.response.status();
    await expect(actualCode).toBe(expCode);
  }

  /**
   * Common method to validate the status massage
   * @param expMessage
   */
  async validateStatusMessage(expMessage: string) {
    const actualMessage = this.response.statusText();
    await expect(actualMessage).toBe(expMessage);
  }

  /**
   * Common method to get value of any property
   * @param responseBody
   * @param key
   * @returns
   */
  private getResponseValue(responseBody: any, key: string): any {
    const value = key
      .split(".")
      .reduce((value: any, part: string) => value?.[part], responseBody);
    return value;
  }

  async getPropertyValue(key: string): Promise<any>{
    const responseBody = await this.response.json()
    const value = this.getResponseValue(responseBody, key)
    return value
  }

  /**
   * Common method to validate response body
   * @param key
   * @param expValue
   */
  async validateResponseBody(key: string, expValue: any) {
    const responseBody = await this.response.json();
    const actualValue = this.getResponseValue(responseBody, key);
    await expect(actualValue).toBe(expValue);
  }

  /**
   * Common method to validate the response header
   * @param headerName
   * @param expValue
   */
  async validateResponseHeader(headerName: string, expValue: any) {
    const header = await this.response.headers();
    const actualValue = header[headerName];
    await expect(actualValue).toBe(expValue);
  }

  /**
   * Common method to validate the schema response body
   * @param key
   * @param expDataType
   */
  async validateResponseSchema(key: string, expDataType: string) {
    const responseBody = await this.response.json();
    const actualValue = this.getResponseValue(responseBody, key);
    const actualDataType = typeof actualValue;
    await expect(actualDataType).toBe(expDataType);
  }

  /**
   * Common method to validate cookie in the response
   * @param cookieName
   * @param expValue
   */
  async validateResponseCookie(cookieName: string, expValue: any) {
    const cookies = await this.response.cookies();
    const cookie = cookies.find((c: any) => c.name === cookieName);
    const actualValue = cookie ? cookie.value : undefined;
    await expect(actualValue).toBe(expValue);
  }

  /**
   * Common method to validate the specific value of key
   * @param key
   * @param expDataType
   */
  async validateItemsLength(
    arrayPath: string,
    expectedLength: number,
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
      true,
    );
    expect(items.length, `Unexpected number of items in "${arrayPath}"`).toBe(
      expectedLength,
    );
  }

  /**
   * Common method to validate Obejct Keys
   * @param arrayPath 
   * @param requiredKeys 
   */
  async validateObjectKeys(
    arrayPath: string,
    requiredKeys: string[],
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
      true,
    );

    for (const [index, item] of items.entries()) {
      expect(
        item !== null && typeof item === "object" && !Array.isArray(item),
        `Item ${index} should be an object`,
      ).toBe(true);

      const missingKeys = requiredKeys.filter(
        (key) => !Object.prototype.hasOwnProperty.call(item, key),
      );
      
      expect(missingKeys, `Product ${index} is missing required keys`).toEqual(
        [],
      );

    }
  }

  async validateMissingObjectKeys(
    arrayPath: string,
    requiredKeys: string[],
    missingKey?: any
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
      true,
    );

    for (const [index, item] of items.entries()) {
      expect(
        item !== null && typeof item === "object" && !Array.isArray(item),
        `Item ${index} should be an object`,
      ).toBe(true);

      const missingKeys = requiredKeys.filter(
        (key) => !Object.prototype.hasOwnProperty.call(item, key),
      );
      if(missingKey === undefined) {
        expect(missingKeys, `Product ${index} is missing required keys`).toEqual(
        [],
      );
    }
      else {
      expect(missingKeys, `Product ${index} is missing required keys`).not.toEqual(
        [missingKey],
      );
    }
    }
  }

  /**
   * Common method to validate the specific value of key
   * @param arrayPath
   * @param dataIndex
   * @param property
   * @param expectedValue
   */
  async validateSpecificArrayKeyValue(
    arrayPath: string,
    dataIndex: number,
    property: string,
    expectedValue: any,
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `"${arrayPath}" should be an array`).toBe(
      true,
    );
    expect(dataIndex, "Index should be non-negative").toBeGreaterThanOrEqual(0);
    expect(items.length, `No item at index ${dataIndex}`).toBeGreaterThan(
      dataIndex,
    );

    const item = items[dataIndex];
    expect(item).toHaveProperty(property);
    expect(item[property]).toBe(expectedValue);
  }

  /**
   * Common method to validate the value is positive and non-negative number
   * @param arrayPath
   * @param property
   * @param greaterThanZero
   */
  async validatePositiveNumberValues(
    arrayPath: string,
    property: string,
    greaterThanZero = false,
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
      true,
    );

    expect(items.length, `Expected at least one item in "${arrayPath}"`,
    ).toBeGreaterThan(0);

    for (const [index, item] of items.entries()) {
      const value = item[property];
      expect(
        typeof value,
        `Expected ${arrayPath}[${index}].${property} to be a number`,
      ).toBe("number");

      if (greaterThanZero) {
        expect(
          value,
          `${arrayPath}[${index}].${property} must be >= 0`,
        ).toBeGreaterThanOrEqual(0);
      } else {
        expect(
          value,
          `${arrayPath}[${index}].${property} must be > 0`,
        ).toBeGreaterThan(0);
      }
    }
  }

  /**
   * Common method to validate the schema response body
   * @param arrayPath
   * @param key
   * @param expDataType
   */
  async validateResponseSchemas(
    arrayPath: string,
    keys: string[],
    expectedTypes: string[],
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
      true,
    );
    expect(keys.length).toBe(expectedTypes.length);

    for (const [itemIndex, item] of items.entries()) {
      expect(
        item !== null && typeof item === "object" && !Array.isArray(item),
        `Item ${itemIndex} should be an object`,
      ).toBe(true);

      for (const [keyIndex, key] of keys.entries()) {
        expect(
          Object.prototype.hasOwnProperty.call(item, key),
          `Item ${itemIndex} is missing required key "${key}"`,
        ).toBe(true);
        expect(typeof item[key], `Type of item ${itemIndex} key "${key}"`).toBe(
          expectedTypes[keyIndex],
        );
      }
    }
  }

  /**
   * Common method to validate the price in descending order
   * @param arrayPath 
   * @param property 
   */
  async validateSortedPriceInDescendingOrder(
    arrayPath: string,
    property: string,
  ): Promise<void> {
    const responseBody = await this.response.json();
    const items = this.getResponseValue(responseBody, arrayPath);

    expect(Array.isArray(items), `Expected "${arrayPath}" to be an array`).toBe(
      true,
    );

    const prices: number[] = [];
    for (const [itemIndex, item] of items.entries()) {
      expect(
        item !== null && typeof item === "object" && !Array.isArray(item),
        `Item ${itemIndex} should be an object`,
      ).toBe(true);

      const value = item[property];
      expect(
        typeof value,
        `Expected ${arrayPath}[${itemIndex}].${property} to be a number`,
      ).toBe("number");
      prices.push(value);
    }

    for (let index = 1; index < prices.length; index++) {
      expect(
        prices[index - 1],
        `${property} at index ${index - 1} should be >= ${property} at index ${index}`,
      ).toBeGreaterThanOrEqual(prices[index]);
    }
  }
}

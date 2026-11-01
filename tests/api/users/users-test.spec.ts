import { test } from "@playwright/test";
import { APICommons } from "../../../commons/api/api-commons";
import authData from '../../../testdata/api/auth-data.json'
import userData from '../../../testdata/api/users-data.json'

test.describe('Users Test', () => {
    let apiCommons: APICommons
    let token: any

    test.beforeEach(async() => {
        apiCommons = new APICommons()
        await apiCommons.InitializeRequestContext()
    })

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
})
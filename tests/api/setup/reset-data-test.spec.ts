import { test } from '@playwright/test'
import { APICommons } from '../../../commons/api/api-commons.ts'
import authData from '../../../testdata/api/auth-data.json' with { type : 'json'}

test.describe('Reset Data Test', async() => {
    let apiCommons: APICommons

    // Initialize the APICommons instance before each test to share base url, headers etc
    test.describe(async() => {
        apiCommons = new APICommons()
        await apiCommons.InitializeRequestContext()
    })

    // Request to create a duplicate repository within Github
    test.skip('Restore Starting Data', async() => {
        const data = authData.restoreStartingData
        await apiCommons.getResponse(data.requestType, data.endpoint)
        await apiCommons.validateStatusCode(data.expCode)
        await apiCommons.validateStatusMessage(data.expStatusMessage)
        await apiCommons.validateResponseBody(data.messageKey, data.messageValue)
    })

})

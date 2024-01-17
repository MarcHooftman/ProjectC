import IAdmin from "../interfaces/IAdmin";
import { getApiUrl } from "../utils/getApiUrl";
import { createMockAdmin, createMockTempUser, deleteAllMockInstances } from "./utils";

jest.setTimeout(20000);

describe('Like API endpoints', () => {
    const fetchUrl = getApiUrl();

    let testAdminId = -1;
    let testTempId = -1;

    beforeAll(async () => {
        const CREATED_TEMP_ID = await createMockTempUser();
        const CREATED_ADMIN_ID = await createMockAdmin();
        testAdminId = CREATED_ADMIN_ID;
        testTempId = CREATED_TEMP_ID;
    });

    afterAll(async () => {
        await deleteAllMockInstances({
            adminId: testAdminId,
            tempId: testTempId,
        });
    });

    test('POST /api/auth/admin', async () => {
        const adminResponse = await fetch(`${fetchUrl}/admin/${testAdminId}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        const admin = await adminResponse.json() as IAdmin;
        const response = await fetch(`${fetchUrl}/auth/admin`, 
        { 
            method: 'POST', 
            headers: {
            "ngrok-skip-browser-warning": "1",
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(admin)
        });
        expect(response.status).toBe(200);
    });

    test('POST /api/auth/temp', async () => {
        const tempResponse = await fetch(`${fetchUrl}/tempuser/${testTempId}`, 
        { 
            method: 'GET', 
            headers: { "ngrok-skip-browser-warning": "1",
            'Content-Type': 'application/json', },
        });
        const tempUser = await tempResponse.json();
        const response = await fetch(`${fetchUrl}/auth/temp`, { method: 'POST', headers: { "ngrok-skip-browser-warning": "1", 'Content-Type': 'application/json' }, body: JSON.stringify(tempUser) });
        expect(response.status).toBe(200);
    });
});

/* 

TODO:
test /api/admin GET
test /api/admin/{id} GET
test /api/admin POST
test /api/admin/{id} PUT
test /api/admin/{id} DELETE

*/
import IAdmin from "../interfaces/IAdmin";
import { getApiUrl } from "../utils/getApiUrl";
import { createMockAdmin, deleteMockAdmin } from "./utils";

const TEST_ID = 123456;

describe('Admin API endpoints', () => {
    const fetchUrl = getApiUrl() + "/admin";

    let testAdminId = -1;

    beforeAll(async () => { testAdminId = await createMockAdmin(); });

    afterAll(async () => {
        await deleteMockAdmin(testAdminId);
    });

    test('POST /api/admin', async () => {
        const admin: IAdmin = {
            id: TEST_ID,
            level: 1,
            email: "testadmin@ad.min",
            password: "testpassword",
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(admin) 
        });
        expect(response.status).toBe(201);
    });
    test('GET /api/admin', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });
    test('GET /api/admin/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });
    test('PUT /api/admin/{id}', async () => {
        const updatedAdmin: IAdmin = {
            id: TEST_ID,
            level: 1,
            email: "testadmin@ad.min",
            password: "testpassword",
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(updatedAdmin) 
        });
        expect(response.status).toBe(204);
    });
    test('DELETE /api/admin/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(204);
    });
});

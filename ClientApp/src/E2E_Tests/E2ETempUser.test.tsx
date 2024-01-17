/* 

TODO:
test /api/tempUser GET
test /api/tempUser/{id} GET
test /api/tempUser POST
test /api/tempUser/{id} PUT
test /api/tempUser/{id} DELETE

*/
import ITempUser from "../interfaces/ITempUser";
import { getApiUrl } from "../utils/getApiUrl";
import { createMockTempUser, deleteMockTempUser } from "./utils";

const TEST_ID = 123456;

describe('TempUser API endpoints', () => {
    const fetchUrl = getApiUrl() + "/tempUser";

    let testTempUserId = -1;

    beforeAll(async () => { testTempUserId = await createMockTempUser(); });

    afterAll(async () => {
        await deleteMockTempUser(testTempUserId);
    });

    test('POST /api/tempUser', async () => {
        const tempUser: ITempUser = {
            id: TEST_ID,
            email: "tempuser@email.nl",
            expirationDate: "2024-02-02",
            verificationCode: "123456",
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(tempUser) 
        });
        expect(response.status).toBe(200);
    });
    test('GET /api/tempUser', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });
    test('GET /api/tempUser/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });
    test('PUT /api/tempUser/{id}', async () => {
        const updatedTempUser: ITempUser = {
            id: TEST_ID,
            email: "tempuser@email.nl",
            expirationDate: "2024-04-02",
            verificationCode: "123",
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(updatedTempUser) 
        });
        expect(response.status).toBe(204);
    });
    test('DELETE /api/tempUser/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(204);
    });
});


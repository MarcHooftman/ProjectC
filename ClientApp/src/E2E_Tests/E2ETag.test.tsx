/* 

TODO:
test /api/tag GET
test /api/tag/{id} GET
test /api/tag POST
test /api/tag/{id} PUT
test /api/tag/{id} DELETE

*/
import ITag from "../interfaces/ITag";
import { getApiUrl } from "../utils/getApiUrl";
import { createMockTag, deleteAllMockInstances, generateRandomString } from "./utils";


describe('Tag API endpoints', () => {
    const fetchUrl = getApiUrl() + "/tag";

    let testTag = generateRandomString();

    test('POST /api/tag', async () => {
        const tag: ITag = {
            name: testTag,
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(tag) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/tag', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/tag/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${testTag}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" }});
        expect(response.status).toBe(200);
    });

    test('DELETE /api/tag/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${testTag}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(204);
    });
});

/*

TODO:
test /api/training GET
test /api/training/{id} GET
test /api/training POST
test /api/training/{id} PUT
test /api/training/{id} DELETE

*/

import ITraining from "../interfaces/ITraining";
import { getApiUrl } from "../utils/getApiUrl";

const TEST_ID = 123456;

describe('Training API endpoints', () => {
    const fetchUrl = getApiUrl() + "/training";

    test('POST /api/training', async () => {
        const training: ITraining = {
            id: 123456,
            title: "Test Training",
            description: "Test Description",
            url: "Test URL",
            tags: [{name: "Test Tag 1"}, {name: "Test Tag 2"}],
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/training', async () => {
        const response = await fetch(fetchUrl, { method: 'GET' });
        expect(response.status).toBe(200);
    });

    test('GET /api/training/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET' });
        expect(response.status).toBe(200);
    });


    test('PUT /api/training/{id}', async () => {
        const updatedTraining: ITraining = {
            id: TEST_ID,
            title: "Updated Test Training",
            description: "Updated Test Description",
            url: "Test URL",
            tags: [{name: "Test Tag 3"}, {name: "Test Tag 4"}],
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updatedTraining) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/training/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});

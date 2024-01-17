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
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(training) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/training', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/training/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
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
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            }, 
            body: JSON.stringify(updatedTraining) 
        });
        expect(response.status).toBe(204);
        // test tags
        const newobj = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" }});
        const newobjjson = await newobj.json().then((data: ITraining) => data);
        expect(newobjjson.tags[0].name).toBe("Test Tag 3");
        expect(newobjjson.tags[1].name).toBe("Test Tag 4");
        expect(newobjjson.tags.length).toBe(2);
    });

    test('DELETE /api/training/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" }});
        expect(response.status).toBe(204);
    });
});

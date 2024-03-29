/* 

TODO:
test /api/activity GET
test /api/activity/{id} GET
test /api/activity/first GET
test /api/activity POST
test /api/activity/{id} PUT
test /api/activity/{id} DELETE

*/
import IActivity from "../interfaces/IActivity";
import { getApiUrl } from "../utils/getApiUrl";

const TEST_ID = 123456;

describe('Activity API endpoints', () => {
    const fetchUrl = getApiUrl() + "/activity";

    test('POST /api/activity', async () => {
        const activity: IActivity = {
            id: 123456,
            title: "Test Activity",
            description: "Test Description",
            location: "Test Location",
            time: new Date().toISOString(),
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(activity) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/activity', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/activity/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" }});
        expect(response.status).toBe(200);
    });
    
    test('GET /api/activity/first', async () => {
        const response = await fetch(`${fetchUrl}/first`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });


    test('PUT /api/activity/{id}', async () => {
        const updatedActivity: IActivity = {
            id: TEST_ID,
            title: "Updated Test Activity",
            description: "Updated Test Description",
            location: "Updated Test Location",
            time: new Date().toISOString(),
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            }, 
            body: JSON.stringify(updatedActivity) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/activity/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(204);
    });
});

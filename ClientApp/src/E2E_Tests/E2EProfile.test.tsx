/*

TODO:
test /api/profile GET
test /api/profile/{id} GET
test /api/profile/by-email/{email} GET
test /api/profile/email-exists/{email} GET
test /api/profile POST
test /api/profile/{id} PUT
test /api/profile/{id} DELETE

*/

import IProfile from "../interfaces/IProfile";
import { getApiUrl } from "../utils/getApiUrl";

const TEST_ID = 123456;

describe('Profile API endpoints', () => {
    const fetchUrl = getApiUrl() + "/profile";

    test('POST /api/profile', async () => {
        const profile: IProfile = {
            id: 123456,
            title: "Test Profile",
            description: "Test Description",
            url: "Test URL",
            tags: [{name: "Test Tag 1"}, {name: "Test Tag 2"}],
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/profile', async () => {
        const response = await fetch(fetchUrl, { method: 'GET' });
        expect(response.status).toBe(200);
    });

    test('GET /api/profile/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET' });
        expect(response.status).toBe(200);
    });


    test('PUT /api/profile/{id}', async () => {
        const updatedProfile: IProfile = {
            id: TEST_ID,
            title: "Updated Test Profile",
            description: "Updated Test Description",
            url: "Test URL",
            tags: [{name: "Test Tag 3"}, {name: "Test Tag 4"}],
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updatedProfile) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/profile/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});

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
            id: TEST_ID,
            fullName: "Test Profile",
            role: "Test Role",
            dateOfBirth: new Date().toISOString().slice(0, 10),
            email: "Test Email",
            training: [],
            activity: [],
            memberSince: new Date().toISOString().slice(0, 10),
            department: "Test Department",
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

    test('GET /api/profile/by-email/{email}', async () => {
        const response = await fetch(`${fetchUrl}/by-email/Test Email`, { method: 'GET' });
        expect(response.status).toBe(200);
    });
    
    test('GET /api/profile/email-exists/{email}', async () => {
        const response = await fetch(`${fetchUrl}/email-exists/Test Email`, { method: 'GET' });
        expect(response).toBe(true);
        expect(response.status).toBe(200);
    });


    test('PUT /api/profile/{id}', async () => {
        const updatedProfile: IProfile = {
            id: TEST_ID,
            fullName: "Test Profile",
            role: "Test Role",
            dateOfBirth: new Date().toISOString().slice(0, 10),
            email: "Test Email",
            training: [],
            activity: [],
            memberSince: new Date().toISOString().slice(0, 10),
            department: "Test Department",
            bio: "Test Bio",
            phoneNumber: "Test Phone Number",
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updatedProfile) 
        });
        expect(response.status).toBe(204);
        
        // has been updated?!
        const newobj = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET' });
        const newobjjson = await newobj.json().then((data: IProfile) => data);
        expect(newobjjson.bio).toBe("Test Bio");
        expect(newobjjson.phoneNumber).toBe("Test Phone Number");
    });

    test('DELETE /api/profile/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});

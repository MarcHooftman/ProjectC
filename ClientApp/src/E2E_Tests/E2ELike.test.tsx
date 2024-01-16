import ILike from "../interfaces/ILike";
import { getApiUrl } from "../utils/getApiUrl";

const TEST_ID = 123456;

describe('Like API endpoints', () => {
    const fetchUrl = getApiUrl() + "/like";

    test('POST /api/like', async () => {
        const like: ILike = {
            id: 123456,
            forumPostId: 1,
            profileID: 1,
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(like) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/like', async () => {
        const response = await fetch(fetchUrl, { method: 'GET' });
        expect(response.status).toBe(200);
        // Add more assertions based on your API response
    });

    test('GET /api/like/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET' });
        expect(response.status).toBe(200);
        // Add more assertions based on your API response
    });


    test('PUT /api/like/{id}', async () => {
        const updatedLike: ILike = {
            id: TEST_ID,
            forumPostId: 1,
            profileID: 1,
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updatedLike) 
        });
        expect(response.status).toBe(204);
        // Add more assertions based on your API response
    });

    test('DELETE /api/like/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});

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

const Tagname = "Test Tag 1";

describe('Tag API endpoints', () => {
    const fetchUrl = getApiUrl() + "/tag";

    test('POST /api/tag', async () => {
        const tag: ITag = {
            name: Tagname,
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/tag', async () => {
        const response = await fetch(fetchUrl, { method: 'GET' });
        expect(response.status).toBe(200);
    });

    test('GET /api/tag/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${Tagname}`, { method: 'GET' });
        expect(response.status).toBe(200);
    });


    test('PUT /api/tag/{id}', async () => {
        const updatedTag: ITag = {
            name: "Updated "+Tagname,
        };
        const response = await fetch(`${fetchUrl}/${"Updated "+Tagname}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updatedTag) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/tag/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${"Updated "+Tagname}`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});

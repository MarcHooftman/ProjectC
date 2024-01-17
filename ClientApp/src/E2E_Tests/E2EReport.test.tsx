/* 

TODO:
test /api/report GET
test /api/report/{id} GET
test /api/report POST
test /api/report/{id} PUT
test /api/report/{id} DELETE

*/

import IReport from "../interfaces/IReport";
import { getApiUrl } from "../utils/getApiUrl";

const TEST_ID = 123456;

describe('Report API endpoints', () => {
    const fetchUrl = getApiUrl() + "/report";

    test('POST /api/report', async () => {
        const report: IReport = {
            id: TEST_ID,
            forumPostID: 1,
            profileID: 1,
            spam: true,
            inappropriate: false,
            notWorkRelated: false,
            other: true,
            elaboration: "Test elaboration"
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(report) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/report', async () => {
        const response = await fetch(fetchUrl, { method: 'GET' });
        expect(response.status).toBe(200);
    });

    test('GET /api/report/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET' });
        expect(response.status).toBe(200);
    });


    test('PUT /api/report/{id}', async () => {
        const updatedReport: IReport = {
            id: TEST_ID,
            forumPostID: 1,
            profileID: 1,
            spam: true,
            inappropriate: true,
            notWorkRelated: false,
            other: false,
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updatedReport) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/report/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE' });
        expect(response.status).toBe(204);
    });
});

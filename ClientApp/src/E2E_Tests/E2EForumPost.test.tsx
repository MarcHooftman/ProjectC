/* 

TODO:
test /api/forumpost GET
test /api/forumpost/{id} GET
test /api/forumpost/by-profile/{profileID} GET
test /api/forumpost/popular GET
test /api/forumpost POST
test /api/forumpost/{id} PUT
test /api/forumpost/{id} DELETE

*/

import IForumPost from "../interfaces/IForumPost";
import { getApiUrl } from "../utils/getApiUrl";
import { createMockProfile, deleteAllMockInstances } from "./utils";

const TEST_ID = 123456;

describe('Forum API endpoints', () => {
    const fetchUrl = getApiUrl() + "/forumpost";

    let testProfileId = -1;

    beforeAll(async () => {
        const CREATED_PROFILE_ID = await createMockProfile();
        testProfileId = CREATED_PROFILE_ID;
    });

    afterAll(async () => {
        await deleteAllMockInstances({
            profileId: testProfileId,
        });
    });

    test('POST /api/forumpost', async () => {
        const forum: IForumPost = {
            id: TEST_ID,
            title: "Test Forum",
            content: "Test Content",
            tags: [],
            profileID: testProfileId,
            time: new Date().toISOString(),
            forumPostID: null,
            comments: [],
            likes: [],
            reports: [],
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(forum) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/forumpost', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/forumpost/popular', async () => {
        const response = await fetch(`${fetchUrl}/popular`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/forumpost/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/forumpost/by-profile/{profileID}', async () => {
        const response = await fetch(`${fetchUrl}/by-profile/${testProfileId}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('PUT /api/forumpost/{id}', async () => {
        const updatedForum: IForumPost = {
            id: TEST_ID,
            title: "Updated Test Forum",
            content: "Updated Test Content",
            tags: [],
            profileID: testProfileId,
            time: new Date().toISOString(),
            forumPostID: null,
            comments: [],
            likes: [],
            reports: [],
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            }, 
            body: JSON.stringify(updatedForum) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/forumpost/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" }});
        expect(response.status).toBe(204);
    });
});

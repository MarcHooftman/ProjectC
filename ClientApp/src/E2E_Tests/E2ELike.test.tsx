import ILike from "../interfaces/ILike";
import { getApiUrl } from "../utils/getApiUrl";
import { createMockForumPost, createMockProfile, deleteAllMockInstances } from "./utils";

const TEST_ID = 123456;
//jest.setTimeout(20000); // 20 seconds

describe('Like API endpoints', () => {
    const fetchUrl = getApiUrl() + "/like";

    let testPostId = -1;
    let testProfileId = -1;

    beforeAll(async () => {
        const CREATED_PROFILE_ID = await createMockProfile();
        const CREATED_POST_ID = await createMockForumPost();
        testPostId = CREATED_POST_ID;
        testProfileId = CREATED_PROFILE_ID;
    });

    afterAll(async () => {
        await deleteAllMockInstances({
            profileId: testProfileId,
            postId: testPostId,
        });
    });

    test('POST /api/like', async () => {
        const like: ILike = {
            id: 123456,
            forumPostId: testPostId,
            profileID: testProfileId,
        };
        const response = await fetch(fetchUrl, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            },
            body: JSON.stringify(like) 
        });
        expect(response.status).toBe(201);
    });

    test('GET /api/like', async () => {
        const response = await fetch(fetchUrl, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });

    test('GET /api/like/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'GET', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(200);
    });


    test('PUT /api/like/{id}', async () => {
        const updatedLike: ILike = {
            id: TEST_ID,
            forumPostId: testPostId,
            profileID: testProfileId,
        };
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "1",
            }, 
            body: JSON.stringify(updatedLike) 
        });
        expect(response.status).toBe(204);
    });

    test('DELETE /api/like/{id}', async () => {
        const response = await fetch(`${fetchUrl}/${TEST_ID}`, { method: 'DELETE', headers: { "ngrok-skip-browser-warning": "1" } });
        expect(response.status).toBe(204);
    });
});

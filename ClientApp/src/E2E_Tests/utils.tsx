import IActivity from "../interfaces/IActivity";
import IAdmin from "../interfaces/IAdmin";
import IForumPost from "../interfaces/IForumPost";
import ILike from "../interfaces/ILike";
import IProfile from "../interfaces/IProfile";
import ITag from "../interfaces/ITag";
import ITempUser from "../interfaces/ITempUser";
import ITraining from "../interfaces/ITraining";
import { getApiUrl } from "../utils/getApiUrl";

let CREATED_ACTIVITY_ID = 0;
let CREATED_ADMIN_ID = 0;
let CREATED_TEMP_ID = 0;
let CREATED_TAG_ID = "invalid";
let CREATED_TRAINING_ID = 0;
let CREATED_PROFILE_ID = 0;
let CREATED_POST_ID = 0;
let CREATED_LIKE_ID = 0;
let CREATED_REPORT_ID = 0;

export function generateRandomString(length: number = 30): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

export async function createAllMockInstances() {
    await createMockProfile();
    await createMockAdmin();
    await createMockActivity();
    await createMockTempUser();
    await createMockTag();
    await createMockTraining();
    await createMockForumPost();
    await createMockLike();
    await createMockReport();


    return {
        CREATED_ACTIVITY_ID,
        CREATED_ADMIN_ID,
        CREATED_TEMP_ID,
        CREATED_TAG_ID,
        CREATED_TRAINING_ID,
        CREATED_PROFILE_ID,
        CREATED_POST_ID,
        CREATED_LIKE_ID,
        CREATED_REPORT_ID
    };
}

export async function deleteAllMockInstances({
    activityId = CREATED_ACTIVITY_ID,
    adminId = CREATED_ADMIN_ID,
    tempId = CREATED_TEMP_ID,
    tagId = CREATED_TAG_ID,
    trainingId = CREATED_TRAINING_ID,
    profileId = CREATED_PROFILE_ID,
    postId = CREATED_POST_ID,
    likeId = CREATED_LIKE_ID,
    reportId = CREATED_REPORT_ID,
}: {
    activityId?: number,
    adminId?: number,
    tempId?: number,
    tagId?: string,
    trainingId?: number,
    profileId?: number,
    postId?: number,
    likeId?: number,
    reportId?: number,
}) {
    if (activityId !== 0) {
        await deleteMockActivity(activityId);
    }
    if (likeId !== 0) {
        await deleteMockLike(likeId);
    }
    if (reportId !== 0) {
        await deleteMockReport(reportId);
    }
    if (adminId !== 0) {
        await deleteMockAdmin(adminId);
    }
    if (tempId !== 0) {
        await deleteMockTempUser(tempId);
    }
    if (tagId !== "invalid") {
        await deleteMockTag(tagId);
    }
    if (trainingId !== 0) {
        await deleteMockTraining(trainingId);
    }
    if (profileId !== 0) {
        await deleteMockProfile(profileId);
    }
    if (postId !== 0) {
        await deleteMockForumPost(postId);
    }
}

type bodyType = 
      IAdmin 
    | IActivity 
    | ITempUser 
    | ITag 
    | ITraining 
    | IProfile 
    | IForumPost
    | ILike;

async function POST(endpoint: string, body: bodyType, fieldName: string = "id") {
    const response = await fetch(`${getApiUrl()}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "1",
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data[fieldName];
}

async function DELETE(endpoint: string, id: number|string) {
    await fetch(`${getApiUrl()}/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "1",
        },
    })
}

export async function createMockActivity() {
    const activity: IActivity = {
        title: "Test Activity",
        description: "Test Description",
        location: "Test Location",
        time: new Date().toISOString(), // Convert to UTC DateTime
    }
    CREATED_ACTIVITY_ID = await POST("activity", activity);
    return CREATED_ACTIVITY_ID;
}

export async function deleteMockActivity(id: number) {
    await DELETE("activity", id);
}

export async function createMockAdmin() {
    const admin: IAdmin = {
        level: 123,
        email: generateRandomString() + "@admin.com",
        password: "admin",
    }
    CREATED_ADMIN_ID = await POST("admin", admin);
    return CREATED_ADMIN_ID;
}

export async function deleteMockAdmin(id: number) {
    await DELETE("admin", id);
}


export async function createMockTempUser() {
    const tempUser: ITempUser = {
        email: generateRandomString() + "@tempuser.com",
        expirationDate: new Date().toISOString().slice(0, 10),
        verificationCode: "123456",
    }
    CREATED_TEMP_ID = await POST("tempuser", tempUser);
    return CREATED_TEMP_ID;
}

export async function deleteMockTempUser(id: number) {
    await DELETE("tempuser", id);
}

export async function createMockTag() {
    const tag: ITag = {
        name: generateRandomString() + "-tag",
    }
    CREATED_TAG_ID = await POST("tag", tag, "name");
    return CREATED_TAG_ID;
}

export async function deleteMockTag(id: string) {
    await DELETE("tag", id);
}

export async function createMockTraining() {
    const training: ITraining = {
        title: "Test Training",
        description: "Test Description",
        tags: [],
    }
    CREATED_TRAINING_ID = await POST("training", training);
    return CREATED_TRAINING_ID;
}

export async function deleteMockTraining(id: number) {
    await DELETE("training", id);
}

export async function createMockProfile() {
    const profile: IProfile = {
        fullName: "John Doe",
        role: "User",
        email: generateRandomString() + "@profile.com",
        activity: [],
        training: [],
        activity: [],	
        memberSince: new Date().toISOString().slice(0, 10),
        department: "IT",
    };
    CREATED_PROFILE_ID = await POST("profile", profile);
    return CREATED_PROFILE_ID;
}

export async function deleteMockProfile(id: number) {
    await DELETE("profile", id);
}

export async function createMockForumPost() {
    const forumPost: IForumPost = {
        title: "Test Forum Post",
        content: "Test Content",
        tags: [],
        profileID: CREATED_PROFILE_ID,
        time: new Date().toISOString(),
        forumPostID: null,
        comments: [],
        likes: [],
        reports: [],
    };
    CREATED_POST_ID = await POST("forumpost", forumPost);
    return CREATED_POST_ID;
}

export async function deleteMockForumPost(id: number) {
    await DELETE("forumpost", id);
}

export async function createMockLike() {
    const like = {
        forumPostId: CREATED_POST_ID,
        profileID: CREATED_PROFILE_ID,
    };
    CREATED_LIKE_ID = await POST("like", like);
    return CREATED_LIKE_ID;
}

export async function deleteMockLike(id: number) {
    await DELETE("like", id);
}

export async function createMockReport() {
    const report = {
        forumPostId: CREATED_POST_ID,
        profileID: CREATED_PROFILE_ID,
    };
    CREATED_REPORT_ID = await POST("report", report);
    return CREATED_REPORT_ID;
}

export async function deleteMockReport(id: number) {
    await DELETE("report", id);
}
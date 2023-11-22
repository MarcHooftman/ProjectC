import IProfile from "../Profile/IProfile";

export default interface IForumPost {
    id: number;
    title: string;
    content: string;
    tags: { id: number; name: string; }[];
    profile: IProfile;
    time: string;
    parentID: number;
    comments: IForumPost[];
    likes: IProfile[];
    reports: IProfile[];
}
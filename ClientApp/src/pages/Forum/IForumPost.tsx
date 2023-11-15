import IProfile from "../Profile/IProfile";

export default interface IForumPost {
    id: number;
    title: string;
    content: string;
    tags: string[];
    profile: IProfile;
    time: string;
    comments: IForumPost[];
    likes: IProfile[];
    reports: IProfile[];
}
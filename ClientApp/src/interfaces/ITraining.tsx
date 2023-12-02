import IMedia from "./IMedia";
import IProfile from "./IProfile";

export default interface ITraining {
    ID: number
    title: string;
    description: string;
    media: IMedia
    tags: { id: number; name: string; }[];
    profile: IProfile[];
}
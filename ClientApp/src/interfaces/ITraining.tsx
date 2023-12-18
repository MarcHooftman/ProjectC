import IMedia from "./IMedia";

export default interface ITraining {
    id?: number
    title: string;
    description: string;
    media?: IMedia
    tags: { id?: number; name: string; }[];
    // profile: IProfile[];
}
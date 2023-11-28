import IProfile from "./IProfile";

export default interface ITraining {
    ID: number
    title: string;
    description: string;
    url: string;
    tags: { id: number; name: string; }[];
    watchedBy: IProfile[];
}
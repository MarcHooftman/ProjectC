import IProfile from "../Profile/IProfile";

export default interface ITraining {
    ID: number
    title: string;
    description: string;
    url: string;
    tags: string[];
    watchedBy: IProfile[];
}
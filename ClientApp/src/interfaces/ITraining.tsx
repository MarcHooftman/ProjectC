// import IMedia from "./IMedia";

import ITag from "./ITag";

export default interface ITraining {
    id?: number
    title: string;
    description: string;
    url?: string
    tags: ITag[];
    // profile: IProfile[];
}
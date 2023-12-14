import IProfile from "./IProfile";

export default interface IActivity {
    id?: number;
    time: string;
    location: string;
    title: string;
    description: string;
    profiles?: IProfile[];
}
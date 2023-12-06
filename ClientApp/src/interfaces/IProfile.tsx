// import { Media } from "reactstrap";
import ITraining from "./ITraining";

export default interface IProfile {
    id?: number;
    fullName: string;
    role: string;
    dateOfBirth?: string;
    email: string;
    // ProfilePicture: Media;
    training: ITraining[];
    memberSince: string;
    phoneNumber?: string | null;
    bio?: string;
    department: string;
    userPrincipalName?: string;
}

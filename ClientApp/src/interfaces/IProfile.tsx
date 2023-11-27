// import { Media } from "reactstrap";

export default interface IProfile {
    id?: number;
    fullName: string;
    role: string;
    dateOfBirth: string;
    email: string;
    memberSince: string;
    phoneNumber: string | null;
    bio: string;
    department: string;
    user: {
        id: number;
        email: string;
    }
    // ProfilePicture: Media;
}
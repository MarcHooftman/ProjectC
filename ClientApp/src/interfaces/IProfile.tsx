// import { Media } from "reactstrap";

export default interface IProfile {
    ID?: number;
    FullName: string;
    Role: string;
    DateOfBirth: string;
    Email: string;
    MemberSince: string;
    PhoneNumber: string | null;
    Bio: string;
    Department: string;
    user: {
        id: number;
        email: string;
    }
    // ProfilePicture: Media;
}
// import { Media } from "reactstrap";
import ITraining from "./ITraining";


export default interface IProfile {
  id?: number;
  fullName: string;
  role: string;
  dateOfBirth: string;
  email: string;
  memberSince: string;
  phoneNumber: string | null;
  lastLogin: string | null;
  bio: string;
  department: string;
  user: {
    id: number;
    email: string;
  };
  // ProfilePicture: Media;
  training: ITraining[];
}

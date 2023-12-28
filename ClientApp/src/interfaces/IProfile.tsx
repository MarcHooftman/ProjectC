// import { Media } from "reactstrap";
import IActivity from "./IActivity";
import ITraining from "./ITraining";

export default interface IProfile {
  id?: number;
  fullName: string;
  role: string;
  dateOfBirth?: string;
  email: string;
  // ProfilePicture: Media;
  training: ITraining[];
  activity: IActivity[];
  memberSince: string;
  phoneNumber?: string | null;
  bio?: string;
  department: string;
  userPrincipalName?: string;
}

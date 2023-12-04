// import { Media } from "reactstrap";
import ITraining from "./ITraining";
import IUser from "./IUser";

export default interface IProfile {
  id?: number;
  fullName: string;
  role?: string;
  dateOfBirth?: string;
  email: string;
  // ProfilePicture: Media;
  training?: ITraining[];
  memberSince: string;
  phoneNumber?: string;
  bio?: string;
  department?: string;
  user: IUser;
}

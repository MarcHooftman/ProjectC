import ILike from "./ILike";
import IProfile from "./IProfile";
import IReport from "./IReport";
import ITag from "./ITag";

export default interface IForumPost {
  id?: number;
  title: string;
  content: string;
  tags: ITag[];
  profileID: number;
  profile?: IProfile;
  time: string;
  forumPostID: number | null;
  comments: IForumPost[];
  likes: ILike[];
  reports: IReport[];
}

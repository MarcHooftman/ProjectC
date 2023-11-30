import ILike from "./ILike";
import IProfile from "./IProfile";

export default interface IForumPost {
  id?: number;
  title: string;
  content: string;
  tags: { id: number; name: string }[];
  profileID: number;
  profile?: IProfile;
  time: string;
  forumPostID: number;
  comments: IForumPost[];
  likes: ILike[];
  reports: IProfile[];
}

import ForumPostCard from "./ForumPostCard";
import Layout from "../../components/Layout";
import FilterDropdown from "./FilterDropdown";
import { useSearchParams } from "react-router-dom";

import "./Forum.scss";
import IForumPost from "./IForumPost";

const tempForumPost: IForumPost = {
  id: 123,
  title: 'This is a test post',
  content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.',
  tags: ['tag1', 'tag2', 'tag3'],
  time: "11-11-2011",
  profile: {
    id: 123,
    fullName: "frank nepmans",
    role: "string",
    dateOfBirth: "string",
    email: "string",
    memberSince: "string",
    phoneNumber: "string",
    bio: "string",
    department: "string"
  },
  comments: [],
  likes: [],
  reports: []
}

const Forum = () => {
  const [searchParams,] = useSearchParams()
  const filter = searchParams.get('filter')
  return (
    <Layout>
      <span className="forum-header d-flex justify-content-between align-items-center">
        <h1 className="my-5">Antes Forum</h1>
        <FilterDropdown />
      </span>
      <ForumPostCard post={tempForumPost} />
      <ForumPostCard post={tempForumPost} />
      <ForumPostCard post={tempForumPost} />
      <ForumPostCard post={tempForumPost} />
      <ForumPostCard post={tempForumPost} />
    </Layout>
  );
};

export default Forum;

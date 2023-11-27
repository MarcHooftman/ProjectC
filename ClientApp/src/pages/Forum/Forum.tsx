import ForumPostCard from "./ForumPostCard";
import Layout from "../../components/Layout";
import FilterDropdown from "./FilterDropdown";
import { useSearchParams } from "react-router-dom";

import "./Forum.scss";
import IForumPost from "../../interfaces/IForumPost";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

// const tempForumPost: IForumPost = {
//   id: 123,
//   title: 'This is a test post',
//   content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptates repudiandae sapiente nemo tempora! Quibusdam quas molestiae non nesciunt ad quisquam excepturi reiciendis in? Enim possimus debitis dignissimos quidem asperiores.',
//   tags: ['tag1', 'tag2', 'tag3'],
//   time: "11-11-2011",
//   profile: {
//     id: 123,
//     fullName: "frank nepmans",
//     role: "string",
//     dateOfBirth: "string",
//     email: "string",
//     memberSince: "string",
//     phoneNumber: "string",
//     bio: "string",
//     department: "string"
//   },
//   comments: [],
//   likes: [],
//   reports: []
// }

const Forum = () => {
  const [forumPosts, setForumPosts] = useState<IForumPost[]>([])
  const [searchParams,] = useSearchParams()
  const filter = searchParams.get('filter')

  let { loading, data, error } = useFetch("https://localhost:7185/api/forumpost")

  useEffect(() => {
    if (data) {
      let typedData = data as IForumPost[];
      if (filter) {
        typedData = typedData.filter(post => post.tags.some(tag => tag.name.toLowerCase().includes(filter.toLowerCase())))
      }

      const sortedData = typedData.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

      setForumPosts(sortedData);
    }
  }, [filter, data]);


  return (
    <Layout>
      <span className="forum-header d-flex justify-content-between align-items-center">
        <h1 className="my-5 blue-text">Antes Forum</h1>
        <FilterDropdown />
      </span>
      {forumPosts.length > 0 ? forumPosts.map(forumPost => <ForumPostCard key={forumPost.id} post={forumPost} />) : <h4 className="blue-text opacity-75">Er zijn hier nog geen posts...</h4>}
    </Layout>
  );
};

export default Forum;

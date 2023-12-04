import ForumPostCard from "./ForumPostCard";
import Layout from "../../components/Layout";
import FilterDropdown from "./FilterDropdown";
import { useSearchParams } from "react-router-dom";

import "./Forum.scss";
import IForumPost from "../../interfaces/IForumPost";
import { useEffect, useState } from "react";
import { sortByDate, filterOnlyParent, filterByTag } from "./utils";

const Forum = () => {
  const [forumPosts, setForumPosts] = useState<IForumPost[]>([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  useEffect(() => {
    fetch("https://localhost:7185/api/forumpost")
      .then((response) => response.json())
      .then((data) => setForumPosts(data));
  }, [filter]);

  const filterPosts = (posts: IForumPost[]) => {
    posts = filter ? filterByTag(posts, filter) : posts;
    return sortByDate(filterOnlyParent(posts));
  };

  return (
    <Layout>
      <span className="forum-header d-flex justify-content-between align-items-center">
        <h1 className="my-5 blue-text">Antes Forum</h1>
        <FilterDropdown />
      </span>
      {filterPosts(forumPosts).length > 0 ? (
        filterPosts(forumPosts).map((forumPost) => (
          <ForumPostCard key={forumPost.id} post={forumPost} />
        ))
      ) : (
        <h4 className="blue-text opacity-75">Er zijn hier nog geen posts...</h4>
      )}
    </Layout>
  );
};

export default Forum;

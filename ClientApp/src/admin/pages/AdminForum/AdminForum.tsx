import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { useEffect, useState } from "react";
import IForumPost from "../../../interfaces/IForumPost";
import AdminForumPostCard from "./AdminForumPostCard";
import { filterOnlyParent } from "../../../utils/sortPosts";
import "./AdminForum.scss";

const AdminForum = () => {
  const [posts, setPosts] = useState<IForumPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IForumPost[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forumpost`)
      .then((response) => response.json())
      .then((data) => setPosts(data as IForumPost[]));
  }, []);

  useEffect(() => {
    setFilteredPosts(filterOnlyParent(posts));
  }, [posts]);

  return (
    <AdminLayout>
      <h1 className="my-5 blue-text">Forum</h1>

      {filteredPosts.map((post) => (
        <AdminForumPostCard key={post.id} post={post} />
      ))}
    </AdminLayout>
  );
};

export default AdminForum;

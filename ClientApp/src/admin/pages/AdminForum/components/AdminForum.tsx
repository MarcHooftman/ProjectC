import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import { useEffect, useState } from "react";
import IForumPost from "../../../../interfaces/IForumPost";
import AdminForumPostCard from "./AdminForumPostCard";
import { filterOnlyParent } from "../../../../utils/sortPosts";
import "./AdminForum.scss";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../../../utils/isAdmin";
import { getApiUrl } from "../../../../utils/getApiUrl";

const AdminForum = () => {
  const navigate = useNavigate();
  const admin = isAdmin();
  useEffect(() => {
    //console.log(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/login/admin");
    }
  }, [admin]);
  const [posts, setPosts] = useState<IForumPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IForumPost[]>([]);

  const refreshPosts = () => {
    fetch(`${getApiUrl()}/forumpost`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data as IForumPost[]));
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(filterOnlyParent(posts));
  }, [posts]);

  return (
    <AdminLayout role="admin-forum-page">
      <h1 className="my-5 blue-text">Forum</h1>

      {filteredPosts.map((post) => (
        <AdminForumPostCard key={post.id} post={post} onDelete={refreshPosts} />
      ))}
    </AdminLayout>
  );
};

export default AdminForum;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import PersonalInfoCard from "./PersonalInfoCard";
import UserDataCard from "./UserDataCard";
import "./Profile.scss";

import IProfile from "./IProfile";
import { isLoggedIn } from "../../utils/isLoggedIn";
import useFetch from "../../hooks/useFetch";
import { Button } from "react-bootstrap";
import IForumPost from "../Forum/IForumPost";
import ProfilePostCard from "./ProfilePostCard";

const Profile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login")
    }
  }, [])

  const { loading: profileLoading, data: profileData } = useFetch<IProfile>(`https://localhost:7185/api/profile/by-user/${localStorage.getItem("user")}`)

  const { loading: postsLoading, data: postsData } = useFetch<IForumPost[]>(`https://localhost:7185/api/forumpost/by-profile/${profileData?.id}`)

  useEffect(() => {
    // fetch api for profile pic
    setProfilePicUrl(require("../../assets/profile.png"))
  }, [])


  return (
    <Layout>
      <h1 className="blue-text my-5">Jouw profiel</h1>
      <div className="d-flex gap-5">
        <PersonalInfoCard pfp={profilePicUrl} profile={profileData} />
        <UserDataCard posts={postsData || []} />
      </div>
      <div className="d-flex justify-content-between">
        <Button href="/edit_profile" className="mt-3">Profiel bewerken</Button>
        <Button href="/logout" className="mt-3">Uitloggen</Button>
      </div>
      <h2 className="my-5 blue-text">Jouw posts</h2>
      {Array.isArray(postsData) && postsData?.map((post) => <ProfilePostCard post={post} />)}
    </Layout>
  );
};

export default Profile;

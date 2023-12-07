import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import PersonalInfoCard from "./PersonalInfoCard";
import UserDataCard from "./UserDataCard";
import { loginRequest } from "../../authConfig";
import "./Profile.scss";

import IProfile from "../../interfaces/IProfile";
import useFetch from "../../hooks/useFetch";
import { Button } from "react-bootstrap";
import IForumPost from "../../interfaces/IForumPost";
import ProfilePostCard from "./ProfilePostCard";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import useGraphData from "../../hooks/useGraphData";
import { filterOnlyParent } from "../../utils/sortPosts";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const loggedIn = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  if (!loggedIn) {
    handleLogin();
  }

  const { graphData } = useGraphData();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    if (graphData) {
      fetch(
        `${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`
      )
        .then((response) => response.json())
        .then((data) => setProfile(data as IProfile));
    }
  }, [graphData]);

  const [posts, setPosts] = useState<IForumPost[]>();
  useEffect(() => {
    if (profile) {
      fetch(
        `${process.env.REACT_APP_API_URL}/forumpost/by-profile/${profile.id}`
      )
        .then((response) => response.json())
        .then((data) => setPosts(data as IForumPost[]));
    }
  }, [profile]);

  return (
    <Layout>
      <h1 className="blue-text my-5">Jouw profiel</h1>
      <div className="d-flex gap-5">
        <PersonalInfoCard profile={profile} />
        <UserDataCard posts={posts || []} />
      </div>
      <div className="d-flex justify-content-between">
        <Button
          onClick={() => {
            navigate("/edit_profile");
          }}
          className="mt-3"
        >
          Profiel bewerken
        </Button>
        <Button onClick={handleLogout} className="mt-3">
          Uitloggen
        </Button>
      </div>

      {Array.isArray(posts) && filterOnlyParent(posts).length > 0 && (
        <>
          <h2 className="my-5 blue-text">Jouw posts</h2>
          {filterOnlyParent(posts)?.map((post) => (
            <ProfilePostCard post={post} />
          ))}
        </>
      )}
    </Layout>
  );
};

export default Profile;

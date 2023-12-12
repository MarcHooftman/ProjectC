import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import PersonalInfoCard from "./PersonalInfoCard";
import UserDataCard from "./UserDataCard";
import "./Profile.scss";

import IProfile from "../../interfaces/IProfile";
import { Button } from "react-bootstrap";
import IForumPost from "../../interfaces/IForumPost";
import ProfilePostCard from "./ProfilePostCard";
import { useIsAuthenticated } from "@azure/msal-react";
import useGraphData from "../../hooks/useGraphData";
import { filterOnlyParent } from "../../utils/sortPosts";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const Profile = () => {
  const loggedIn = useIsAuthenticated();
  const isTemporaryUser = localStorage.getItem("temporaryUser") !== null;
  const navigate = useNavigate();
  const logout = useLogout()

  useEffect(() => {
    if (!loggedIn && !isTemporaryUser) {
      navigate("/login")
    }
  }, [loggedIn, isTemporaryUser])

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
      {isTemporaryUser
        ? <p className="blue-text">{"Als tijdelijke gebruiker heb je nog geen profiel :("}</p>
        : <div className="d-flex gap-5">
          <PersonalInfoCard profile={profile} />
          <UserDataCard posts={posts || []} />
        </div>
      }

      <div className="d-flex justify-content-between">
        {!isTemporaryUser &&
          <Button
            onClick={() => {
              navigate("/edit_profile");
            }}
            className="mt-3"
          >
            Profiel bewerken
          </Button>
        }

        <Button onClick={() => logout()} className="mt-3">
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

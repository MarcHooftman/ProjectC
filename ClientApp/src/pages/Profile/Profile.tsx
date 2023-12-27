import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import PersonalInfoCard from "./PersonalInfoCard";
import UserDataCard from "./UserDataCard";
import "./Profile.scss";

import IProfile from "../../interfaces/IProfile";
import { Button, Col, Row } from "react-bootstrap";
import IForumPost from "../../interfaces/IForumPost";
import ProfilePostCard from "./ProfilePostCard";
import { useIsAuthenticated } from "@azure/msal-react";
import useGraphData from "../../hooks/useGraphData";
import { filterOnlyParent } from "../../utils/sortPosts";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { getApiUrl } from "../../utils/getApiUrl";

const Profile = () => {
  const loggedIn = useIsAuthenticated();
  const isTemporaryUser = localStorage.getItem("temporaryUser") !== null;
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    if (!loggedIn && !isTemporaryUser) {
      navigate("/login");
    }
  }, [loggedIn, isTemporaryUser]);

  const { graphData } = useGraphData();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    if (graphData) {
      fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`, {
        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      })
        .then((response) => response.json())
        .then((data) => setProfile(data as IProfile));
    }
  }, [graphData]);

  const [posts, setPosts] = useState<IForumPost[]>();
  useEffect(() => {
    if (profile) {
      fetch(`${getApiUrl()}/forumpost/by-profile/${profile.id}`, {
        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      })
        .then((response) => response.json())
        .then((data) => setPosts(data as IForumPost[]));
    }
  }, [profile]);

  return (
    <Layout>
      <h1 className="blue-text my-5 fw-bolder">Jouw profiel</h1>
      {isTemporaryUser ? (
        <p className="blue-text">
          {"Als tijdelijke gebruiker heb je nog geen profiel :("}
        </p>
      ) : (
        <Row className="d-flex gap-5 mx-0">
          <Col as={PersonalInfoCard} profile={profile} />
          <Col as={UserDataCard} posts={posts || []} />
        </Row>
      )}

      <Row className="mx-0 justify-content-between">
        {!isTemporaryUser && (
          <Col
            as={Button}
            onClick={() => {
              navigate("/edit_profile");
            }}
            className="mt-3 profile-button fw-bold"
          >
            Profiel bewerken
          </Col>
        )}

        <Col
          as={Button}
          onClick={() => logout()}
          className="mt-3 profile-button fw-bold"
        >
          Uitloggen
        </Col>
      </Row>

      {Array.isArray(posts) && filterOnlyParent(posts).length > 0 && (
        <>
          <h2 className="my-5 blue-text fw-bold">Jouw posts</h2>
          {filterOnlyParent(posts)?.map((post) => (
            <ProfilePostCard post={post} />
          ))}
        </>
      )}
    </Layout>
  );
};

export default Profile;

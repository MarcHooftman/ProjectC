import { useParams } from "react-router-dom";
import Layout from "../../../../components/Layout";
import PersonalInfoCard from "../PersonalInfoCard";
import UserDataCard from "../UserDataCard";
import ProfilePostCard from "../ProfilePostCard";
import IProfile from "../../../../interfaces/IProfile";
import IForumPost from "../../../../interfaces/IForumPost";
import { useEffect, useState } from "react";
import { getApiUrl } from "../../../../utils/getApiUrl";
import { Col, Row } from "react-bootstrap";

const ProfileByID = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    fetch(`${getApiUrl()}/profile/${id}`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data as IProfile));
  }, [id]);

  const [posts, setPosts] = useState<IForumPost[]>();
  useEffect(() => {
    fetch(`${getApiUrl()}/forumpost/by-profile/${id}`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data as IForumPost[]));
  }, [id]);

  function sortByDate(array: IForumPost[]) {
    return array.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );
  }

  function filterOnlyParent(array: IForumPost[]) {
    return array.filter((post) => post.forumPostID == undefined);
  }

  const filterPosts = (posts?: IForumPost[] | null) => {
    if (!posts) return null;
    return sortByDate(filterOnlyParent(posts));
  };

  return (
    <Layout role="profile-by-id-page">
      <h1 className="blue-text my-5 fw-bolder">{profile?.fullName}</h1>
      <Row className="d-flex gap-5 mx-0 mb-5">
        <Col as={PersonalInfoCard} profile={profile} />
        <Col as={UserDataCard} posts={posts || []} />
      </Row>

      {Array.isArray(filterPosts(posts)) && (
        <>
          <h2 className="blue-text fw-bold">Posts van {profile?.fullName}</h2>
          {filterPosts(posts)?.map((post) => (
            <ProfilePostCard post={post} />
          ))}
        </>
      )}
    </Layout>
  );
};

export default ProfileByID;

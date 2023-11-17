import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import PersonalInfoCard from "./PersonalInfoCard";
import UserDataCard from "./UserDataCard";
import "./Profile.scss";

import IProfile from "./IProfile";
import { isLoggedIn } from "../../utils/isLoggedIn";
import useFetch from "../../hooks/useFetch";
import { Button, Col, Row } from "react-bootstrap";

const Profile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState<string>("");
  const [profile, setProfile] = useState<IProfile>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login")
    }
  }, [])

  const { loading, data, } = useFetch<IProfile>(`https://localhost:7185/api/profile/by-user/${localStorage.getItem("user")}`)

  useEffect(() => {
    console.log(data)
    if (data) {
      setProfile(data);
    }
  }, [loading])

  useEffect(() => {
    // fetch api for profile pic
    setProfilePicUrl(require("../../assets/profile.png"))
  }, [])

  return (
    <Layout>
      <h1 className="blue-text my-5">Jouw profiel</h1>
      <Row className="d-flex gap-5">
        <Col><PersonalInfoCard pfp={profilePicUrl} profile={profile} /></Col>
        <Col><UserDataCard profileID={profile?.id || -1} /></Col>
      </Row>
      <Row className="">
        <Col><Button href="/edit_profile" className="mt-3">Profiel bewerken</Button></Col>
        <Col><Button href="/logout" className="mt-3">Uitloggen</Button></Col>
      </Row>
    </Layout>
  );
};

export default Profile;

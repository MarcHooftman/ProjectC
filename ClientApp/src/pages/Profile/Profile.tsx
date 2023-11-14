import { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import PersonalInfoCard from "./PersonalInfoCard";
import UserDataCard from "./UserDataCard";
import "./Profile.scss";

import IProfile from "./IProfile";
import IUserData from "./IUserData";

const Profile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState<string>("");
  const [profile, setProfile] = useState<IProfile>();
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    // fetch api for profile pic
    setProfilePicUrl(require("../../assets/profile.png"))
  }, [])

  useEffect(() => {
    // fetch api for profile
    setProfile({
      name: "Voornaam Achternaam",
      role: "Functie",
      dateOfBirth: "01-01-2001",
      email: "nep@gmail.com",
      memberSince: "05-10-2023",
      phone: "06 12 34 56 78"
    })
  }, [])

  useEffect(() => {
    // fetch api for user data
    setUserData({
      postsPlaced: 0,
      commentsPlaced: 0,
      helpfulComments: 0,
      totalLikes: 0,
    })
  }, [])

  return (
    <Layout>
      <h1 className="blue-title my-5">Jouw profiel</h1>
      <div className="d-flex gap-5">
        <PersonalInfoCard pfp={profilePicUrl} profile={profile} />
        <UserDataCard userData={userData} />
      </div>
    </Layout>
  );
};

export default Profile;

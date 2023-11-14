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
      fullName: "Voornaam Achternaam",
      role: "Functie",
      dateOfBirth: "01-01-2001",
      email: "nep@anteszorg.com",
      memberSince: "05-10-2023",
      // phoneNumber is optional
      phoneNumber: '',
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quod eum cumque aspernatur? Fuga est earum eos laudantium minus eligendi tempore ullam, sequi sint ab unde? Labore, provident porro. Suscipit in soluta numquam dolores maiores id, culpa sequi exercitationem nihil consequatur inventore blanditiis aliquam iste labore expedita eveniet optio velit eligendi odit dolor vero error voluptas?",
      department: "HR",
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
    <Layout dark={false}>
      <h1 className="blue-title my-5">Jouw profiel</h1>
      <div className="d-flex gap-5">
        <PersonalInfoCard pfp={profilePicUrl} profile={profile} />
        <UserDataCard userData={userData} />
      </div>
      <a href="/edit_profile" className="btn btn-primary mt-3">Update Profiel</a>
    </Layout>
  );
};

export default Profile;

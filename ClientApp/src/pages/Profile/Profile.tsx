import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { callMsGraph, callMsGraphPhoto } from "../../graph";

const Profile = () => {
  const loggedIn = useIsAuthenticated();
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch(e => {
      console.log(e);
    });
  }

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }

  if (!loggedIn) {
    handleLogin()
  }

  const [graphData, setGraphData] = useState<IGraphData | null>(null);
  const [photo, setPhoto] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    }).then((response) => {
      callMsGraph(response.accessToken).then(response => setGraphData(response));
      callMsGraphPhoto(response.accessToken).then(response => setPhoto(response));
    });
  }


  useEffect(() => {
    if (loggedIn) {
      RequestProfileData()
      console.log(graphData)
      console.log(photo)
    }

  }, [loggedIn])

  const { loading: profileLoading, data: profileData } = useFetch(`https://localhost:7185/api/profile/by-email/${graphData?.userPrincipalName}`)
  const profile = profileData as IProfile | null;

  const { loading: postsLoading, data: postsData } = useFetch(`https://localhost:7185/api/forumpost/by-profile/${profile?.id}`)
  const posts = postsData as IForumPost[] | null;


  return (
    <Layout>
      <h1 className="blue-text my-5">Jouw profiel</h1>
      <div className="d-flex gap-5">
        <PersonalInfoCard profile={profile} graphData={graphData} />
        <UserDataCard posts={postsData || []} />
      </div>
      <div className="d-flex justify-content-between">
        <Button href="/edit_profile" className="mt-3">Profiel bewerken</Button>
        <Button onClick={handleLogout} className="mt-3">Uitloggen</Button>
      </div>

      {Array.isArray(posts) && posts.length > 0 &&
        <>
          <h2 className="my-5 blue-text">Jouw posts</h2>
          {posts?.map((post) => <ProfilePostCard post={post} />)}
        </>
      }
    </Layout>
  );
};

export default Profile;

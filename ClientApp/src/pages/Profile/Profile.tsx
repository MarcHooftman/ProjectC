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

    const { graphData } = useGraphData();

    const { data: profileData } = useFetch(`https://localhost:7185/api/profile/by-email/${graphData?.userPrincipalName}`)
    const profile = profileData as IProfile | null;

    const { data: postsData } = useFetch(`https://localhost:7185/api/forumpost/by-profile/${profile?.id}`)
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

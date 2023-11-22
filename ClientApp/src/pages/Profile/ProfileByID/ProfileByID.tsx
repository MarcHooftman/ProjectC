import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import PersonalInfoCard from '../PersonalInfoCard';
import UserDataCard from '../UserDataCard';
import ProfilePostCard from '../ProfilePostCard';
import IProfile from '../IProfile';
import IForumPost from '../../Forum/IForumPost';
import { isLoggedIn } from '../../../utils/isLoggedIn';

const ProfileByID = () => {
    const { id } = useParams();
    const [profilePicUrl, setProfilePicUrl] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login")
        }
    }, [])

    const { loading: profileLoading, data: profileData } = useFetch(`https://localhost:7185/api/profile/by-user/${id}`)
    const { loading: postsLoading, data: postsData } = useFetch(`https://localhost:7185/api/forumpost/by-profile/${id}`)
    const profile = profileData as IProfile | null;
    const posts = postsData as IForumPost[] | null;

    useEffect(() => {
        // fetch api for profile pic
        setProfilePicUrl(require("../../../assets/profile.png"))
    }, [])


    return (
        <Layout>
            <h1 className="blue-text my-5">{profile?.fullName}</h1>
            <div className="d-flex gap-5 mb-5">
                <PersonalInfoCard pfp={profilePicUrl} profile={profile} />
                <UserDataCard posts={postsData || []} />
            </div>
            {Array.isArray(posts) && posts?.map((post) => <ProfilePostCard post={post} />)}
        </Layout>
    )
}

export default ProfileByID
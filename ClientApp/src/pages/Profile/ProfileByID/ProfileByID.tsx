import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import PersonalInfoCard from '../PersonalInfoCard';
import UserDataCard from '../UserDataCard';
import { Button } from 'reactstrap';
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

    const { loading: profileLoading, data: profileData } = useFetch<IProfile>(`https://localhost:7185/api/profile/by-user/${id}`)
    const { loading: postsLoading, data: postsData } = useFetch<IForumPost[]>(`https://localhost:7185/api/forumpost/by-profile/${id}`)

    useEffect(() => {
        // fetch api for profile pic
        setProfilePicUrl(require("../../../assets/profile.png"))
    }, [])


    return (
        <Layout>
            <h1 className="blue-text my-5">{profileData?.fullName}</h1>
            <div className="d-flex gap-5 mb-5">
                <PersonalInfoCard pfp={profilePicUrl} profile={profileData} />
                <UserDataCard posts={postsData || []} />
            </div>
            {Array.isArray(postsData) && postsData?.map((post) => <ProfilePostCard post={post} />)}
        </Layout>
    )
}

export default ProfileByID
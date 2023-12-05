import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Layout from '../../../components/Layout';
import PersonalInfoCard from '../PersonalInfoCard';
import UserDataCard from '../UserDataCard';
import ProfilePostCard from '../ProfilePostCard';
import IProfile from '../../../interfaces/IProfile';
import IForumPost from '../../../interfaces/IForumPost';
import useGraphData from '../../../hooks/useGraphData';
import { useEffect, useState } from 'react';
import PersonalInfoCardSkeleton from '../PersonalInfoCardSkeleton';

const ProfileByID = () => {
    const { id } = useParams();

    const [profile, setProfile] = useState<IProfile>();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/profile/${id}`)
            .then((response) => response.json())
            .then((data) => setProfile(data as IProfile));
    }, [id])

    const [posts, setPosts] = useState<IForumPost[]>();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/forumpost/by-profile/${id}`)
            .then((response) => response.json())
            .then((data) => setPosts(data as IForumPost[]));
    }, [id])


    const { loading, graphData } = useGraphData(profile?.userPrincipalName || "");


    function sortByDate(array: IForumPost[]) {
        return array.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    }

    function filterOnlyParent(array: IForumPost[]) {
        return array.filter((post) => post.forumPostID == undefined);
    }

    const filterPosts = (posts?: IForumPost[] | null) => {
        if (!posts) return null;
        return sortByDate(filterOnlyParent(posts));
    }

    return (
        <Layout>
            <h1 className="blue-text my-5">{profile?.fullName}</h1>
            <div className="d-flex gap-5 mb-5">
                {loading || !graphData ? <PersonalInfoCardSkeleton></PersonalInfoCardSkeleton> : <PersonalInfoCard graphData={graphData} profile={profile} />}
                <UserDataCard posts={posts || []} />
            </div>
            {Array.isArray(filterPosts(posts)) && filterPosts(posts)?.map((post) => <ProfilePostCard post={post} />)}
        </Layout>
    )
}

export default ProfileByID
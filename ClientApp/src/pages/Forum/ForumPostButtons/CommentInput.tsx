import React, { useEffect, useState } from 'react'
import IForumPost from '../../../interfaces/IForumPost';
import { Button } from 'react-bootstrap';
import useGraphData from '../../../hooks/useGraphData';
import IProfile from '../../../interfaces/IProfile';

interface Props {
    postId: number;
    ref: React.MutableRefObject<any>;
}

const CommentInput = ({ postId, ref }: Props) => {
    const [comment, setComment] = useState<string>();

    const { graphData } = useGraphData();

    const [profile, setProfile] = useState<IProfile>();
    useEffect(() => {
        if (graphData) {
            fetch(`${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`)
                .then((response) => response.json())
                .then((data) => setProfile(data as IProfile));
        }
    }, [graphData]);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (postId && profile?.id) {
            const commentObject: IForumPost = {
                title: "",
                content: comment || "",
                tags: [],
                profileID: profile.id,
                time: new Date().toISOString(),
                forumPostID: postId,
                comments: [],
                likes: [],
                reports: [],
            };

            fetch(`${process.env.REACT_APP_API_URL}/forumpost`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(commentObject),
            });
            //setSubmittedComment(comment);
        }
    };
    return (
        <form onSubmit={handleCommentSubmit}>
            <input
                ref={ref}
                className="position-relative box mb-3"
                onChange={handleCommentChange}
            />
            <Button type="submit">Plaats</Button>
        </form>
    )
}

export default CommentInput
import { useEffect, useState } from "react";
import IForumPost from "../../interfaces/IForumPost";
import { Link } from "react-router-dom";
import "./PostComment.scss";
import { formatDate } from "../../utils/formatDate";
import LikeIcon from "../../assets/like.svg";
import LikeFillIcon from "../../assets/like-fill.svg";
import CommentIcon from "../../assets/comment.svg";
import ReportIcon from "../../assets/report.svg";
import useGraphData from "../../hooks/useGraphData";
import useFetch from "../../hooks/useFetch";
import IProfile from "../../interfaces/IProfile";
import ILike from "../../interfaces/ILike";

const profilePicture = require("../../assets/profile.png");

interface Props {
    comment: IForumPost;
}

const PostComment = ({ comment }: Props) => {
    const [liked, setLiked] = useState(false);
    const [initialize, setInitialize] = useState<boolean>(true);

    const { graphData } = useGraphData();
    const { data } = useFetch(
        `https://localhost:7185/api/profile/by-email/${graphData?.mail}`
    );

    useEffect(() => {
        if (comment?.likes && comment?.likes.length > 0 && initialize) {
            comment?.likes.forEach((like) => {
                if (like.profileID === (data as IProfile)?.id) {
                    setLiked(true);
                    setInitialize(false);
                }
            });
        }
    });

    const handleLike = () => {
        setLiked(!liked);

        if (!liked) {
            const like = {
                ForumPostID: comment?.id,
                ProfileID: (data as IProfile).id,
            };

            fetch("https://localhost:7185/api/like", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(like),
            });
        } else {
            const findLike = (likeArray: ILike[]) =>
                likeArray.find((like) => like.profileID === data.id);
            fetch(`https://localhost:7185/api/forumpost/${comment?.id}`)
                .then((response) => response.json())
                .then((data) =>
                    fetch(`https://localhost:7185/api/like/${findLike(data.likes)?.id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                );
        }
    };

    const handleComment = () => {
        console.log("comment");
    };

    const handleReport = () => {
        console.log("report");
    };
    return (
        <div className="border-secondary ms-2 border-start ps-3">
            <div className=" pb-2">
                <div className="d-flex align-items-center gap-3">
                    <Link
                        to="/profile"
                        className="d-flex flex-row align-items-center gap-2 text-decoration-none blue-text"
                    >
                        <img
                            src={profilePicture}
                            style={{ height: "25px", width: "25px" }}
                        ></img>
                        <strong>{comment.profile?.fullName}</strong>
                    </Link>
                    <p className="text-dark opacity-50 mb-0">
                        {formatDate(comment.time)}
                    </p>
                    <div className="d-flex gap-2">
                        <img
                            src={liked ? LikeFillIcon : LikeIcon}
                            className="comment-action-icon"
                            onClick={handleLike}
                        />
                        <img
                            src={CommentIcon}
                            className="comment-action-icon"
                            onClick={handleComment}
                        />
                        <img
                            src={ReportIcon}
                            className="comment-action-icon"
                            onClick={handleReport}
                        />
                    </div>
                </div>
                <p style={{ marginLeft: "35px", marginBottom: "0px" }}>
                    {comment.content}
                </p>
            </div>
            {comment?.comments && comment?.comments.length > 0 && (
                <div className="comments-container">
                    {comment?.comments.map((comment) => (
                        <PostComment key={comment.id} comment={comment}></PostComment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostComment;

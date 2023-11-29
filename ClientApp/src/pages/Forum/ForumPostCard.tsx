import { useEffect, useRef, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../interfaces/IForumPost";
import PostComment from "./PostComment";
import LikeIcon from "../../assets/like.svg";
import LikeFillIcon from "../../assets/like-fill.svg";
import CommentIcon from "../../assets/comment.svg";
import ReportIcon from "../../assets/report.svg";
import useGraphData from "../../hooks/useGraphData";
import useFetch from "../../hooks/useFetch";
import IProfile from "../../interfaces/IProfile";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require('../../assets/down-arrow.png');
const profilePicture = require("../../assets/profile.png");


interface Props {
    post?: IForumPost;
}

const ForumPostCard = ({ post }: Props) => {
    const [collapse, setCollapse] = useState<boolean>(true);
    const [liked, setLiked] = useState(false);
    const [localPost, setLocalPost] = useState<IForumPost | undefined>(post);

    const { graphData } = useGraphData();
    const { data } = useFetch(`https://localhost:7185/api/profile/by-email/${graphData?.mail}`);

    console.log(localPost)

    useEffect(() => {
        if (localPost?.likes && localPost?.likes.length > 0) {
            localPost?.likes.forEach(like => {
                if (like.profileID === (data as IProfile)?.id) {
                    setLiked(true);
                }
            })
        }

    })

    const RefreshPost = () => {
        fetch(`https://localhost:7185/api/forumpost/${localPost?.id}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.traceId) {
                    if (json.status && json.title) {
                        console.log(`Error: ${json.status} - ${json.title}, traceId: ${json.traceId}`);
                    }
                    console.log("Error: Unknown error");
                } else {
                    setLocalPost(json);
                }
            })
            .catch((error) => console.log(error))
    }

    const handleLike = () => {

        setLiked(!liked);

        if (!liked) {
            const like = {
                ForumPostID: localPost?.id,
                ProfileID: (data as IProfile).id,
            }

            fetch("https://localhost:7185/api/like", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(like),
            })
        } else {
            const like = localPost?.likes.find(like => like.profileID === data.id);
            fetch(`https://localhost:7185/api/like/${like?.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
        }

        RefreshPost();
    }

    const handleComment = () => {
        console.log("comment")

    }

    const handleReport = () => {
        console.log("report")

    }

    let formattedDate = "";

    if (localPost?.time !== undefined) {
        formattedDate = new Date(localPost.time).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }

    return (
        <Card as="details" className="my-3 shadow-lg">
            <Card.Header as="summary" className="d-flex align-items-center" onClick={() => setCollapse(!collapse)}>
                <Link to="/profile">
                    <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
                </Link>
                <Row className="w-100 align-items-center">
                    <Col lg={3} className="ps-4"><h2 className="fs-5 m-0">
                        <strong>{localPost?.profile?.fullName}</strong>
                    </h2>
                        <h3 className="fs-6 m-0 opacity-50 text-dark">
                            lid sinds {localPost?.profile?.memberSince}
                        </h3>
                    </Col>
                    <Col lg={6} className="ps-4">
                        <h4>{localPost?.title}</h4>
                    </Col>

                    <Col lg={2} className="ps-5">
                        <span className="opacity-50 text-dark">{formattedDate}</span>
                    </Col>
                    <Col lg={1} className="ps-5">
                        <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                {localPost?.content}
                <span className="d-flex gap-2 mt-2">
                    {localPost?.tags && Array.isArray(localPost?.tags) && localPost?.tags.map(tag => <Link to={`/forum?filter=${tag}`}><Badge className="badge-color" text="light" pill={true}>{tag.name}</Badge></Link>)}
                </span>
            </Card.Body>
            <Card.Footer>
                <div className="mb-3 d-flex gap-4">
                    <img src={liked ? LikeFillIcon : LikeIcon} className="action-icon" onClick={handleLike} />
                    <img src={CommentIcon} className="action-icon" onClick={handleComment} />
                    <img src={ReportIcon} className="action-icon" onClick={handleReport} />
                </div>

                {localPost?.comments && localPost?.comments.length > 0
                    ? localPost?.comments.map(comment => <PostComment key={comment.id} comment={comment}></PostComment>)
                    : <span className="opacity-50 text-dark">No comments</span>
                }

            </Card.Footer>
        </Card>
    )
}

export default ForumPostCard;
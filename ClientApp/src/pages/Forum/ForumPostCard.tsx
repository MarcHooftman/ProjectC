import { useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "./IForumPost";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require('../../assets/down-arrow.png');
const profilePicture = require("../../assets/profile.png");

interface Props {
    post?: IForumPost;
}

const ForumPostCard = ({ post }: Props) => {
    const [collapse, setCollapse] = useState<boolean>(true);

    return (
        <Card as="details" className="my-3 shadow-lg">
            <Card.Header as="summary" className="d-flex justify-content-between align-items-center" onClick={() => setCollapse(!collapse)}>
                <Link to="/profile">
                    <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
                </Link>
                <div className="d-flex justify-content-between align-items-center flex-grow-1 mx-4">
                    <div className="">
                        <h2 className="fs-5 m-0">
                            <strong>{post?.profile.fullName}</strong>
                        </h2>
                        <h3 className="fs-6 m-0 opacity-50 text-dark">
                            lid sinds {post?.profile.memberSince}
                        </h3>
                    </div>
                    <span className="d-flex gap-2">
                        {post?.tags.map(tag => <Link to={`/forum?filter=${tag}`}><Badge className="badge-color" text="light" pill={true}>{tag}</Badge></Link>)}
                    </span>
                    <span className="opacity-50 text-dark">{post?.time}</span>
                </div>
                <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
            </Card.Header>
            <p className='card-body'>
                {post?.content}
            </p>
        </Card>
    )
}

export default ForumPostCard;
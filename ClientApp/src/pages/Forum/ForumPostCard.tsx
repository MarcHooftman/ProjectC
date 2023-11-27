import { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../interfaces/IForumPost";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require('../../assets/down-arrow.png');
const profilePicture = require("../../assets/profile.png");

interface Props {
    post?: IForumPost;
}

const ForumPostCard = ({ post }: Props) => {
    const [collapse, setCollapse] = useState<boolean>(true);

    let formattedDate = "";

    if (post?.time !== undefined) {
        formattedDate = new Date(post.time).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }

    console.log(post)

    return (
        <Card as="details" className="my-3 shadow-lg">
            <Card.Header as="summary" className="d-flex align-items-center" onClick={() => setCollapse(!collapse)}>
                <Link to="/profile">
                    <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
                </Link>
                <Row className="w-100 align-items-center">
                    <Col lg={3} className="ps-4"><h2 className="fs-5 m-0">
                        <strong>{post?.profile?.fullName}</strong>
                    </h2>
                        <h3 className="fs-6 m-0 opacity-50 text-dark">
                            lid sinds {post?.profile?.memberSince}
                        </h3>
                    </Col>
                    <Col lg={6} className="ps-4">
                        <h4>{post?.title}</h4>
                    </Col>

                    <Col lg={2} className="ps-5">
                        <span className="opacity-50 text-dark">{formattedDate}</span>
                    </Col>
                    <Col lg={1} className="ps-5">
                        <img className="arrow-icon" src={collapse ? upArrow : downArrow} />
                    </Col>
                </Row>
            </Card.Header>
            <p className='card-body'>
                {post?.content}
            </p>
            <Card.Footer>
                <span className="d-flex gap-2">
                    {Array.isArray(post?.tags) && post?.tags.map(tag => <Link to={`/forum?filter=${tag}`}><Badge className="badge-color" text="light" pill={true}>{tag.name}</Badge></Link>)}
                </span>
            </Card.Footer>
        </Card>
    )
}

export default ForumPostCard;
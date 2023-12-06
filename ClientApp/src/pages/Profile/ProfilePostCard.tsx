import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../interfaces/IForumPost";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require('../../assets/down-arrow.png');

interface Props {
    post?: IForumPost;
}

const ProfilePostCard = ({ post }: Props) => {
    const [collapse, setCollapse] = useState<boolean>(true);

    let formattedDate = "";

    if (post?.time !== undefined) {
        formattedDate = new Date(post.time).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }

    return (
        <Card as="details" className="my-3 shadow-lg">
            <Card.Header as="summary" className="d-flex align-items-center" onClick={() => setCollapse(!collapse)}>
                <Row className="w-100 align-items-center">
                    <Col lg={9} className="ps-4">
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
            <Card.Body as="p">
                {post?.content}
            </Card.Body>
            {Array.isArray(post?.tags) && (post?.tags.length || -1) > 0 &&
                <Card.Footer>
                    <span className="d-flex gap-2">
                        {post?.tags.map(tag => <Link to={`/forum?filter=${tag}`}><Badge className="badge-color" text="light" pill={true}>{tag.name}</Badge></Link>)}
                    </span>
                </Card.Footer>
            }

        </Card>
    )
}

export default ProfilePostCard;
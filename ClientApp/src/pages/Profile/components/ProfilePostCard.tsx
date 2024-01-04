import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../../interfaces/IForumPost";
import arrowUp from "../../../assets/arrow-up.svg";
import arrowDown from "../../../assets/arrow-down.svg";

interface Props {
  post?: IForumPost;
}

const ProfilePostCard = ({ post }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  let formattedDate = "";

  if (post?.time !== undefined) {
    formattedDate = new Date(post.time).toLocaleString("nl-NL", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <Card
      as="details"
      className="my-3 shadow-lg bg-antes-primary"
      role="profile-post-card"
    >
      <Card.Header
        as="summary"
        className="d-flex align-items-center"
        onClick={() => setCollapse(!collapse)}
      >
        <Row className="w-100 d-flex align-items-center profile-post-card-header-row mx-0">
          <Col className="w-100 post-title px-0 pt-2">
            <h4>{post?.title}</h4>
          </Col>

          <Col className="w-100 d-flex align-items-center gap-2 post-details">
            <span className="antes-secondary">{formattedDate}</span>
            <img className="arrow-icon" src={collapse ? arrowUp : arrowDown} />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body as="p" className="fs-default">
        {post?.content}
      </Card.Body>
      {Array.isArray(post?.tags) && (post?.tags.length || -1) > 0 && (
        <Card.Footer>
          <span className="d-flex gap-2 mb-2">
            {post?.tags.map((tag) => (
              <Link to={`/forum?filter=${tag}`}>
                <Badge
                  className="bg-antes-secondary fw-bold fs-6"
                  text="light"
                  pill={true}
                >
                  {tag.name}
                </Badge>
              </Link>
            ))}
          </span>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ProfilePostCard;

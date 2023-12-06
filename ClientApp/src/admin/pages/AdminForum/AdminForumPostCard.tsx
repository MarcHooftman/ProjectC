import { Link } from "react-router-dom";
import IForumPost from "../../../interfaces/IForumPost";
import {
  Badge,
  Card,
  Col,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { formatDateTime } from "../../../utils/formatDate";
import AdminPostComment from "./AdminPostComment";
import ProfileIcon from "../../../assets/profile.png";
import StatIcon from "../../../assets/stats.svg";

interface Props {
  post: IForumPost;
}
const AdminForumPostCard = ({ post }: Props) => {
  const [showComments, setShowComments] = useState(false);

  let formattedDate = "";
  if (post?.time !== undefined) {
    formattedDate = formatDateTime(post.time);
  }

  const getCommentCount = (post: IForumPost) => {
    let count = 0;
    if (post.comments !== undefined) {
      count += post.comments.length;
      post.comments.forEach((comment) => {
        count += getCommentCount(comment);
      });
    }
    return count;
  };

  return (
    <Card className="my-3 shadow-lg">
      <Card.Header className="d-flex align-items-center">
        <Row className="w-100 align-items-center">
          <Col lg={3} className="ps-4 d-flex align-items-center gap-3">
            <Link to="/profile" className="text-decoration-none blue-text">
              <Card.Img src={ProfileIcon} className="poster-pfp"></Card.Img>
            </Link>
            <div>
              <Link to="/profile" className="text-decoration-none blue-text">
                <h2 className="fs-5 m-0">
                  <strong>{post?.profile?.fullName}</strong>
                </h2>
              </Link>
              <Link to="/profile" className="text-decoration-none blue-text">
                <h3 className="fs-6 m-0 opacity-50 text-dark">
                  lid sinds {post?.profile?.memberSince}
                </h3>
              </Link>
            </div>
          </Col>
          <Col lg={6} className="ps-4">
            <h4>{post?.title}</h4>
          </Col>

          <Col lg={2} className="ps-5">
            <span className="opacity-50 text-dark">{formattedDate}</span>
          </Col>

          <Col lg={1} className="d-flex justify-content-end">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Popover className="p-2 d-flex flex-column">
                  <span>
                    <strong>Reports: </strong> {post?.reports?.length}
                  </span>
                  <span>
                    <strong>Likes: </strong> {post?.likes?.length}
                  </span>
                  <span>
                    <strong>Comments: </strong> {getCommentCount(post)}
                  </span>
                </Popover>
              }
            >
              <img src={StatIcon} className="stat-icon" />
            </OverlayTrigger>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {post?.content}
        <span className="d-flex gap-2 mt-2">
          {post?.tags &&
            Array.isArray(post?.tags) &&
            post?.tags.map((tag) => (
              <Badge className="badge-color" text="light" pill={true}>
                {tag.name}
              </Badge>
            ))}
        </span>
      </Card.Body>
      <Card.Footer>
        {post?.comments && post?.comments.length > 0 ? (
          showComments ? (
            <>
              <div className="comments-container py-2">
                {post?.comments.map((comment) => (
                  <AdminPostComment key={comment.id} comment={comment} />
                ))}
              </div>
              <u
                className="text-dark opacity-50 hover-pointer"
                onClick={() => setShowComments(false)}
              >
                Hide comments
              </u>
            </>
          ) : (
            <u
              className="text-dark opacity-50 hover-pointer"
              onClick={() => setShowComments(true)}
            >
              Show comments
            </u>
          )
        ) : (
          <span className="opacity-50 text-dark">No comments</span>
        )}
      </Card.Footer>
    </Card>
  );
};

export default AdminForumPostCard;

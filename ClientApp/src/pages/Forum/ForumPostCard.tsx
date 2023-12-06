import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../interfaces/IForumPost";
import PostComment from "./PostComment";
import { formatDateTime } from "../../utils/formatDate";
import ForumPostButtons from "./ForumPostButtons/ForumPostButtons";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const profilePicture = require("../../assets/profile.png");

interface Props {
  post: IForumPost;
}

const ForumPostCard = ({ post }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [_post, setPost] = useState<IForumPost>(post);

  const fetchPost = () => {
    fetch(`${process.env.REACT_APP_API_URL}/forumpost/${post.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data as IForumPost));
  };

  let formattedDate = "";
  if (post?.time !== undefined) {
    formattedDate = formatDateTime(post.time);
  }

  return (
    <Card as="details" className="my-3 shadow-lg">
      <Card.Header
        as="summary"
        className="d-flex align-items-center"
        onClick={() => setCollapse(!collapse)}
      >
        <Link to={`/profile/${post.profileID}`}>
          <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
        </Link>
        <Row className="w-100 align-items-center">
          <Col lg={3} className="ps-4">
            <Link to={`/profile/${post.profileID}`} className="text-decoration-none blue-text">
              <h2 className="fs-5 m-0">
                <strong>{post?.profile?.fullName}</strong>
              </h2>
              <h3 className="fs-6 m-0 opacity-50 text-dark">
                lid sinds {post?.profile?.memberSince}
              </h3>
            </Link>
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
      <Card.Body>
        {post?.content}
        <span className="d-flex gap-2 mt-2">
          {post?.tags &&
            Array.isArray(post?.tags) &&
            post?.tags.map((tag) => (
              <Link to={`/forum?filter=${tag.name}`}>
                <Badge className="badge-color" text="light" pill={true}>
                  {tag.name}
                </Badge>
              </Link>
            ))}
        </span>
      </Card.Body>
      <Card.Footer>
        {_post?.id && (
          <ForumPostButtons refresh={fetchPost} postId={_post.id} />
        )}
        {_post?.comments && _post?.comments.length > 0 ? (
          <div className="comments-container pb-2">
            {_post?.comments.map((comment) => (
              <PostComment
                onClick={fetchPost}
                key={comment.id}
                comment={comment}
              ></PostComment>
            ))}
          </div>
        ) : (
          <span className="opacity-50 text-dark">No comments</span>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ForumPostCard;

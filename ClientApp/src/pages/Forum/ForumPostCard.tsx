import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../interfaces/IForumPost";
import PostComment from "./PostComment";
import { formatDateTime } from "../../utils/formatDate";
import ForumPostButtons from "./ForumPostButtons/ForumPostButtons";
import { getApiUrl } from "../../utils/getApiUrl";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const profilePicture = require("../../assets/profile-icon.svg");

interface Props {
  post: IForumPost;
}

const ForumPostCard = ({ post }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [_post, setPost] = useState<IForumPost>(post);

  const fetchPost = () => {
    fetch(`${getApiUrl()}/forumpost/${post.id}`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setPost(data as IForumPost));
  };

  let formattedDate = "";
  if (post?.time !== undefined) {
    formattedDate = formatDateTime(post.time);
  }

  return (
    <Card as="details" className="my-3 shadow-lg forum-post-card">
      <Card.Header
        as="summary"
        className="d-flex align-items-center w-100"
        onClick={() => setCollapse(!collapse)}
      >
        <Row className="d-flex justify-content-between w-100 align-items-center header-row mx-0">
          <Col className="d-flex align-items-center profile-section">
            <Link to={`/ profile / ${post.profileID}`}>
              <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
            </Link>

            <Link
              to={`/ profile / ${post.profileID}`}
              className="text-decoration-none blue-text profile-section-info"
            >
              <h2 className="fs-5 m-0">
                <strong>{post?.profile?.fullName}</strong>
              </h2>
              <h3 className="fs-6 m-0 opacity-50 text-dark">
                lid sinds {post?.profile?.memberSince}
              </h3>
            </Link>
          </Col>
          <Col className="d-flex justify-content-between align-items-center info-section px-0">
            <h4>{post?.title}</h4>
            <div className="d-flex justify-content-between align-items-center gap-3 time-and-arrow">
              <div className="opacity-50 text-dark">{formattedDate}</div>
              <img
                className="arrow-icon"
                src={collapse ? upArrow : downArrow}
              />
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {post?.content}
        <span className="d-flex gap-2 mt-2">
          {post?.tags &&
            Array.isArray(post?.tags) &&
            post?.tags.map((tag) => (
              <Link to={`/ forum ? filter = ${tag.name}`} key={tag.id}>
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

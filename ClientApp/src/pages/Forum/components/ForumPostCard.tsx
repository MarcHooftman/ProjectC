import { useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IForumPost from "../../../interfaces/IForumPost";
import PostComment from "./PostComment";
import { formatDateTime } from "../../../utils/formatDate";
import ForumPostButtons from "./ForumPostButtons/ForumPostButtons";
import { getApiUrl } from "../../../utils/getApiUrl";
import profilePicture from "../../../assets/profile-icon.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import arrowDown from "../../../assets/arrow-down.svg";

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
    <Card
      as="details"
      className="my-4 shadow-lg forum-post-card bg-antes-primary"
      role="forum-post-card"
    >
      <Card.Header
        as="summary"
        className="d-flex align-items-center w-100"
        onClick={() => setCollapse(!collapse)}
      >
        <Row className="d-flex justify-content-between w-100 align-items-center header-row mx-0">
          <Col className="d-flex align-items-center profile-section">
            <Link to={`/profile/${post.profileID}`}>
              <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
            </Link>

            <Link
              to={`/profile/${post.profileID}`}
              className="text-decoration-none profile-section-info"
            >
              <h2 className="fs-4 m-0 text-light fw-bold">
                {post?.profile?.fullName}
              </h2>
              <h3 className="fs-6 m-0 antes-secondary">
                lid sinds {post?.profile?.memberSince}
              </h3>
            </Link>
          </Col>
          <Col className="d-flex justify-content-between align-items-center info-section px-0">
            <h3 className="fw-bold">{post?.title}</h3>
            <div className="d-flex justify-content-between align-items-center gap-3 time-and-arrow">
              <div className="antes-secondary">{formattedDate}</div>
              <img
                className="arrow-icon"
                src={collapse ? arrowUp : arrowDown}
              />
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <p className="p-0 fs-default">{post?.content}</p>
        <span className="d-flex gap-2 mt-2">
          {post?.tags &&
            Array.isArray(post?.tags) &&
            post?.tags.map((tag) => (
              <Link to={`/forum?filter=${tag.name}`} key={tag.name}>
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
          <span className="antes-secondary">Nog geen reacties</span>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ForumPostCard;

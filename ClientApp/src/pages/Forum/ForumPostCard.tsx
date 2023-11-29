import { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Overlay,
  Popover,
  Row,
} from "react-bootstrap";
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
import ILike from "../../interfaces/ILike";
import { Tooltip } from "react-bootstrap";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const profilePicture = require("../../assets/profile.png");

interface Props {
  post?: IForumPost;
}

const ForumPostCard = ({ post }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [liked, setLiked] = useState(false);
  const [initialize, setInitialize] = useState<boolean>(true);

  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const { graphData } = useGraphData();
  const { data } = useFetch(
    `https://localhost:7185/api/profile/by-email/${graphData?.mail}`
  );

  //console.log(post)

  useEffect(() => {
    if (post?.likes && post?.likes.length > 0 && initialize) {
      post?.likes.forEach((like) => {
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
        ForumPostID: post?.id,
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
      fetch(`https://localhost:7185/api/forumpost/${post?.id}`)
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

  const handleReport = () => {
    console.log("report");
  };

  const [comment, setComment] = useState<string>();
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post && post.id) {
      const commentObject: IForumPost = {
        title: "",
        content: comment || "",
        tags: [],
        profile: data as IProfile,
        time: new Date().toISOString(),
        forumPostID: post.id,
        comments: [],
        likes: [],
        reports: [],
      };

      fetch("https://localhost:7185/api/forumpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObject),
      });

      fetch(`https://localhost:7185/api/forumpost/${post.id}`)
        .then((response) => response.json())
        .then((data) => (post = data as IForumPost));
    }
  };

  useEffect(() => {
    if (show) {
      (ref.current as HTMLTextAreaElement | null)?.focus();
    }
  }, [show]);

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
    <Card as="details" className="my-3 shadow-lg">
      <Card.Header
        as="summary"
        className="d-flex align-items-center"
        onClick={() => setCollapse(!collapse)}
      >
        <Link to="/profile">
          <Card.Img src={profilePicture} className="poster-pfp"></Card.Img>
        </Link>
        <Row className="w-100 align-items-center">
          <Col lg={3} className="ps-4">
            <h2 className="fs-5 m-0">
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
      <Card.Body>
        {post?.content}
        <span className="d-flex gap-2 mt-2">
          {post?.tags &&
            Array.isArray(post?.tags) &&
            post?.tags.map((tag) => (
              <Link to={`/forum?filter=${tag}`}>
                <Badge className="badge-color" text="light" pill={true}>
                  {tag.name}
                </Badge>
              </Link>
            ))}
        </span>
      </Card.Body>
      <Card.Footer>
        <div className="mb-3 d-flex gap-4">
          <img
            src={liked ? LikeFillIcon : LikeIcon}
            className="action-icon"
            onClick={handleLike}
          />
          <img
            src={CommentIcon}
            className="action-icon"
            onClick={() => setShow(!show)}
          />
          <img
            src={ReportIcon}
            className="action-icon"
            onClick={handleReport}
          />
        </div>
        <form onSubmit={handleCommentSubmit}>
          <input
            ref={ref}
            className="position-relative box mb-3"
            style={show ? { display: "block" } : { display: "none" }}
            onChange={handleCommentChange}
          />
          <Button type="submit">Plaats</Button>
        </form>

        {post?.comments && post?.comments.length > 0 ? (
          post?.comments.map((comment) => (
            <PostComment key={comment.id} comment={comment}></PostComment>
          ))
        ) : (
          <span className="opacity-50 text-dark">No comments</span>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ForumPostCard;

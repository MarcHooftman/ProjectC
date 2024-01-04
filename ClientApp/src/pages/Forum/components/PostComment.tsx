import { useEffect, useRef, useState } from "react";
import IForumPost from "../../../interfaces/IForumPost";
import { Link } from "react-router-dom";
import "./PostComment.scss";
import { formatDate } from "../../../utils/formatDate";
import { useGraphData } from "../../../hooks/useGraphData";
import IProfile from "../../../interfaces/IProfile";
import LikeButton from "./ForumPostButtons/LikeButton";
import CommentButton from "./ForumPostButtons/CommentButton";
import ReportButton from "./ForumPostButtons/ReportButton";
import { Badge, Button } from "react-bootstrap";
import { getApiUrl } from "../../../utils/getApiUrl";

import profilePicture from "../../../assets/profile-icon.svg";

interface Props {
  comment: IForumPost;
  onClick?: () => void;
}

const PostComment = ({ onClick = () => {}, comment }: Props) => {
  const ref = useRef<any>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleCommentClick = () => {
    setShow(!show);
    onClick();
  };

  useEffect(() => {
    const input = ref?.current as HTMLInputElement;
    if (show && input) {
      if (input.parentElement) {
        input.parentElement.hidden = false;
      } else {
        input.hidden = false;
      }

      input.focus();
    } else if (input) {
      if (input.parentElement) {
        input.parentElement.hidden = true;
      } else {
        input.hidden = true;
      }
    }
  }, [show]);

  const { graphData } = useGraphData();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    //console.log(graphData?.mail);
    if (graphData) {
      fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`, {
        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      })
        .then((response) => response.json())
        .then((data) => setProfile(data as IProfile));
    }
  }, [graphData]);

  const [commentContent, setCommentContent] = useState<string>();
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profile?.id && comment.id) {
      const commentObject: IForumPost = {
        title: "",
        content: commentContent || "",
        tags: [],
        profileID: profile.id,
        time: new Date().toISOString(),
        forumPostID: comment.id,
        comments: [],
        likes: [],
        reports: [],
      };

      fetch(`${getApiUrl()}/forumpost`, {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObject),
      }).then(() => onClick());
      setCommentContent("");
      setShow(false);
    }
  };

  return (
    <div
      className="border-antes-secondary ms-2 border-start ps-3 pb-0"
      role="post-comment"
    >
      <div className="pb-2">
        <div className="d-flex align-items-center gap-3">
          <Link
            to={`/profile/${comment.profileID}`}
            className="d-flex flex-row align-items-center gap-2 text-decoration-none text-light fw-bold"
          >
            <img
              src={profilePicture}
              style={{ height: "25px", width: "25px" }}
            ></img>
            {comment.profile?.fullName}
          </Link>
          <p className="antes-secondary mb-0">{formatDate(comment.time)}</p>
          {comment?.id && profile?.id && (
            <div className="d-flex gap-2">
              <LikeButton
                postId={comment.id}
                profileId={profile.id}
                onClick={onClick}
              />
              <CommentButton inputRef={ref} onClick={handleCommentClick} />
              <ReportButton
                postId={comment.id}
                profileId={profile.id}
                onClick={onClick}
              />
            </div>
          )}
        </div>
        <p style={{ marginLeft: "35px", marginBottom: "0px" }}>
          {comment.content}
          <span className="d-flex gap-2">
            {comment?.tags &&
              Array.isArray(comment?.tags) &&
              comment?.tags.map((tag) => (
                <Link to={`/forum?filter=${tag.name}`} key={tag.name}>
                  <Badge
                    className="bg-antes-secondary fw-bold"
                    text="light"
                    pill={true}
                  >
                    {tag.name}
                  </Badge>
                </Link>
              ))}
          </span>
        </p>

        <form
          onSubmit={handleCommentSubmit}
          className=" border-secondary ms-2 border-start ps-3"
        >
          <input
            ref={ref}
            className="position-relative box mb-3"
            value={commentContent}
            onChange={handleCommentChange}
          />
          <Button type="submit">Plaats</Button>
        </form>
      </div>
      {comment?.comments && comment?.comments.length > 0 && (
        <div className="comments-container pb-2">
          {comment?.comments.map((comment) => (
            <PostComment
              onClick={onClick}
              key={comment.id}
              comment={comment}
            ></PostComment>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostComment;

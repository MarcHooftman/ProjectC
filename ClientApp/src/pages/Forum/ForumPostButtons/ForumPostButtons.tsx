import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import IProfile from "../../../interfaces/IProfile";
import useGraphData from "../../../hooks/useGraphData";
import IForumPost from "../../../interfaces/IForumPost";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import ReportButton from "./ReportButton";

interface Props {
  postId: number;
  onClick?: () => void;
}

const ForumPostButtons = ({ postId, onClick = () => {} }: Props) => {
  const ref = useRef<any>(null);
  const [show, setShow] = useState(false);

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
    if (graphData) {
      fetch(`https://localhost:7185/api/profile/by-email/${graphData?.mail}`)
        .then((response) => response.json())
        .then((data) => setProfile(data as IProfile));
    }
  }, [graphData]);

  const [comment, setComment] = useState<string>();
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profile?.id) {
      const commentObject: IForumPost = {
        title: "",
        content: comment || "",
        tags: [],
        profileID: profile.id,
        time: new Date().toISOString(),
        forumPostID: postId,
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
      }).then(() => onClick());
      setComment("");
      setShow(false);
    }
  };

  return (
    <>
      <div className="mb-3 d-flex gap-4">
        <LikeButton postId={postId} onClick={onClick} />
        <CommentButton inputRef={ref} onClick={handleCommentClick} />
        <ReportButton onClick={onClick} />
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          ref={ref}
          className="position-relative box mb-3"
          value={comment}
          onChange={handleCommentChange}
        />
        <Button type="submit">Plaats</Button>
      </form>
    </>
  );
};

export default ForumPostButtons;

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
  refresh?: () => void;
}

const ForumPostButtons = ({ postId, refresh = () => { } }: Props) => {
  const ref = useRef<any>(null);
  const [show, setShow] = useState(false);

  const handleCommentClick = () => {
    setShow(!show);
    refresh();
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
      fetch(`${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`)
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

      fetch(`${process.env.REACT_APP_API_URL}/forumpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObject),
      }).then(() => refresh());
      setComment("");
      setShow(false);
    }
  };

  return (
    <>
      {profile?.id &&
        <div className="mb-3 d-flex gap-4">
          <LikeButton postId={postId} profileId={profile.id} onClick={refresh} />
          <CommentButton inputRef={ref} onClick={handleCommentClick} />
          <ReportButton postId={postId} profileId={profile.id} onSubmit={refresh} />
        </div>
      }

      <form onSubmit={handleCommentSubmit}>
        <input
          ref={ref}
          className="position-relative box mb-3 me-2"
          value={comment}
          onChange={handleCommentChange}
        />
        <Button size="sm" type="submit">Plaats</Button>

      </form>
    </>
  );
};

export default ForumPostButtons;

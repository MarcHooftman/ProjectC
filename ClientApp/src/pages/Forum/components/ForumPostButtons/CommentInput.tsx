import React, { forwardRef, useEffect, useState } from "react";
import IForumPost from "../../../../interfaces/IForumPost";
import { Button } from "react-bootstrap";
import { useGraphData } from "../../../../hooks/useGraphData";
import IProfile from "../../../../interfaces/IProfile";
import { getApiUrl } from "../../../../utils/getApiUrl";

interface Props {
  postId: number;
}

const CommentInput = forwardRef<HTMLInputElement, Props>(({ postId }, ref) => {
  const [comment, setComment] = useState<string>();
  const { graphData } = useGraphData();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
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

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postId && profile?.id) {
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

      fetch(`${getApiUrl()}/forumpost`, {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObject),
      });
    }
  };
  return (
    <form onSubmit={handleCommentSubmit} role="comment-input">
      <input
        ref={ref}
        className="position-relative box mb-3"
        onChange={handleCommentChange}
      />
      <Button type="submit">Plaats</Button>
    </form>
  );
});

export default CommentInput;

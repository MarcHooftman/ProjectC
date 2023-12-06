import { useEffect, useState } from "react";
import LikeIcon from "../../../assets/like.svg";
import LikeFillIcon from "../../../assets/like-fill.svg";
import { deleteLike, postLike } from "../utils";
import IForumPost from "../../../interfaces/IForumPost";

interface Props {
  postId: number;
  profileId: number;
  onClick?: () => void;
}

const LikeButton = ({ postId, profileId, onClick = () => { } }: Props) => {
  const [_liked, setLiked] = useState<boolean>();
  const [likeCount, setLikeCount] = useState<number>(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forumpost/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        const post = data as IForumPost;
        setLiked(post.likes.some((like) => like.profileID == profileId));
        setLikeCount(post.likes.length);
      });
  }, [postId, profileId]);

  const handleClick = () => {
    setLiked(!_liked);
    handleLike();
    onClick();
  };

  const addOrDeleteLike = () => {
    if (profileId) {
      if (!_liked) {
        setLikeCount(likeCount + 1);
        postLike(postId, profileId);
      } else {
        setLikeCount(likeCount - 1);
        deleteLike(postId, profileId);
      }
    }
  };

  const handleLike = () => {
    addOrDeleteLike();
  };

  return (
    <span className="d-flex align-items-center gap-2">
      {likeCount}
      <img
        src={_liked ? LikeFillIcon : LikeIcon}
        className="action-icon"
        onClick={handleClick}
      />
    </span>
  );
};

export default LikeButton;

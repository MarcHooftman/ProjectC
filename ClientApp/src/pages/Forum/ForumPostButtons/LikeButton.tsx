import { useEffect, useState } from "react";
import LikeIcon from "../../../assets/like.svg";
import LikeFillIcon from "../../../assets/like-fill.svg";
import { deleteLike, postLike } from "../utils";
import useGraphData from "../../../hooks/useGraphData";
import IProfile from "../../../interfaces/IProfile";
import IForumPost from "../../../interfaces/IForumPost";

interface Props {
  postId: number;
  onClick?: () => void;
}

const LikeButton = ({ postId, onClick = () => {} }: Props) => {
  const [_liked, setLiked] = useState<boolean>();
  const [likeCount, setLikeCount] = useState<number>(0);
  //console.log(_liked);

  const { graphData } = useGraphData();

  const [profile, setProfile] = useState<IProfile>();
  useEffect(() => {
    if (graphData) {
      fetch(`https://localhost:7185/api/profile/by-email/${graphData?.mail}`)
        .then((response) => response.json())
        .then((data) => setProfile(data as IProfile));
    }
  }, [graphData]);

  useEffect(() => {
    fetch(`https://localhost:7185/api/forumpost/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        const post = data as IForumPost;
        setLiked(post.likes.some((like) => like.profileID == profile?.id));
        setLikeCount(post.likes.length);
      });
  }, [postId, profile]);

  const handleClick = () => {
    setLiked(!_liked);
    handleLike();
    onClick();
  };

  const addOrDeleteLike = () => {
    if (profile?.id) {
      if (!_liked) {
        setLikeCount(likeCount + 1);
        postLike(postId, profile.id);
      } else {
        setLikeCount(likeCount - 1);
        deleteLike(postId, profile.id);
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

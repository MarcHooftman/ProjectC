import CommentIcon from "../../../../assets/comment.svg";

interface Props {
  inputRef?: React.MutableRefObject<any>;
  onClick?: () => void;
}

const CommentButton = ({ onClick = () => {} }: Props) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <img
      src={CommentIcon}
      className="action-icon"
      onClick={handleClick}
      role="comment-button"
    />
  );
};

export default CommentButton;

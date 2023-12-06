import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import IForumPost from "../../../interfaces/IForumPost";
import { formatDate } from "../../../utils/formatDate";
import ProfileIcon from "../../../assets/profile.png";

interface Props {
  comment: IForumPost;
}

const AdminPostComment = ({ comment }: Props) => {
  return (
    <div className="border-secondary ms-2 border-start ps-3 pb-0">
      <div className="pb-2">
        <div className="d-flex align-items-center gap-3">
          <Link
            to="/profile"
            className="d-flex flex-row align-items-center gap-2 text-decoration-none blue-text"
          >
            <img
              src={ProfileIcon}
              style={{ height: "25px", width: "25px" }}
            ></img>
            <strong>{comment.profile?.fullName}</strong>
          </Link>
          <p className="text-dark opacity-50 mb-0">
            {formatDate(comment.time)}
          </p>
        </div>
        <p style={{ marginLeft: "35px", marginBottom: "0px" }}>
          {comment.content}
          <span className="d-flex gap-2">
            {comment?.tags &&
              Array.isArray(comment?.tags) &&
              comment?.tags.map((tag) => (
                <Badge className="badge-color" text="light" pill={true}>
                  {tag.name}
                </Badge>
              ))}
          </span>
        </p>
      </div>
      {comment?.comments && comment?.comments.length > 0 && (
        <div className="comments-container pb-2">
          {comment?.comments.map((comment) => (
            <AdminPostComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPostComment;

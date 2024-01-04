import { Link } from "react-router-dom";
import { Badge, Button, Modal } from "react-bootstrap";
import IForumPost from "../../../../interfaces/IForumPost";
import { formatDate } from "../../../../utils/formatDate";
import ProfileIcon from "../../../../assets/profile-icon.svg";
import { useState } from "react";
import TrashIcon from "../../../../assets/trash.svg";
import { getApiUrl } from "../../../../utils/getApiUrl";

interface Props {
  comment: IForumPost;
  onDelete: () => void;
}

const AdminPostComment = ({ comment, onDelete = () => {} }: Props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleTrashClick = () => {
    setShowConfirm(true);
  };

  const deleteComment = async () => {
    setShowConfirm(false);
    try {
      const response = await fetch(`${getApiUrl()}/forumpost/${comment.id}`, {
        method: "DELETE",

        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      // Refresh the comments list or handle the deletion in some other way
    } catch (error) {
      console.error(error);
    }
    onDelete();
  };
  return (
    <>
      <Modal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this comment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteComment}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="border-secondary ms-2 border-start ps-3 pb-0"
        role="admin-post-comment"
      >
        <div className="pb-2">
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/profile"
              className="d-flex flex-row align-items-center gap-2 text-decoration-none text-light"
            >
              <img
                src={ProfileIcon}
                style={{ height: "25px", width: "25px" }}
              ></img>
              <strong>{comment.profile?.fullName}</strong>
            </Link>
            <p className="antes-secondary mb-0">{formatDate(comment.time)}</p>
            <img
              src={TrashIcon}
              className="trash-icon-small hover-pointer"
              onClick={handleTrashClick}
            />
          </div>
          <p style={{ marginLeft: "35px", marginBottom: "0px" }}>
            {comment.content}
            <span className="d-flex gap-2">
              {comment?.tags &&
                Array.isArray(comment?.tags) &&
                comment?.tags.map((tag) => (
                  <Badge
                    className="bg-antes-secondary mt-2"
                    text="light"
                    pill={true}
                  >
                    {tag.name}
                  </Badge>
                ))}
            </span>
          </p>
        </div>
        {comment?.comments && comment?.comments.length > 0 && (
          <div className="comments-container pb-2">
            {comment?.comments.map((comment) => (
              <AdminPostComment
                key={comment.id}
                comment={comment}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPostComment;

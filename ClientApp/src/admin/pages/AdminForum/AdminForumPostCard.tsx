import { Link } from "react-router-dom";
import IForumPost from "../../../interfaces/IForumPost";
import {
  Badge,
  Button,
  Card,
  Col,
  Modal,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { formatDateTime } from "../../../utils/formatDate";
import AdminPostComment from "./AdminPostComment";
import ProfileIcon from "../../../assets/profile.png";
import StatIcon from "../../../assets/stats.svg";
import TrashIcon from "../../../assets/trash.svg";
import RedExclamMark from "../../../assets/exclam-mark.svg";
import { getApiUrl } from "../../../utils/getApiUrl";

interface Props {
  post: IForumPost;
  onDelete: () => void;
  className?: string;
}
const AdminForumPostCard = ({
  post,
  onDelete = () => { },
  className = "",
}: Props) => {
  const [showComments, setShowComments] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  let formattedDate = "";
  if (post?.time !== undefined) {
    formattedDate = formatDateTime(post.time);
  }

  const getCommentCount = (post: IForumPost) => {
    let count = 0;
    if (post.comments !== undefined) {
      count += post.comments.length;
      post.comments.forEach((comment) => {
        count += getCommentCount(comment);
      });
    }
    return count;
  };

  const handleTrashClick = () => {
    setShowConfirm(true);
  };

  const deletePost = async () => {
    setShowConfirm(false);
    try {
      const response = await fetch(
        `${getApiUrl()}/forumpost/${post.id}`,
        {

          headers: {
            "ngrok-skip-browser-warning": "1",
          },

          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      // Refresh the posts list or handle the deletion in some other way
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
          <Modal.Title>Verwijderen bevestigen</Modal.Title>
        </Modal.Header>
        <Modal.Body>Weet je zeker dat je deze post wil verwijderen?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Annuleren
          </Button>
          <Button variant="danger" onClick={deletePost}>
            Verwijderen
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className={className.concat(" my-3 shadow-lg")}>
        <Card.Header className="d-flex align-items-center">
          <Row className="w-100 align-items-center">
            <Col lg={3} className="ps-4 d-flex align-items-center gap-3">
              <Link to={`/ admin / users ? filter = ${post?.profile?.email}`} className="text-decoration-none blue-text">
                <Card.Img src={ProfileIcon} className="poster-pfp"></Card.Img>
              </Link>
              <div>
                <Link to={`/ admin / users ? filter = ${post?.profile?.email}`} className="text-decoration-none blue-text">
                  <h2 className="fs-5 m-0">
                    <strong>{post?.profile?.fullName}</strong>
                  </h2>
                </Link>
                <Link to={`/ admin / users ? filter = ${post?.profile?.email}`} className="text-decoration-none blue-text">
                  <h3 className="fs-6 m-0 opacity-50 text-dark">
                    lid sinds {post?.profile?.memberSince}
                  </h3>
                </Link>
              </div>
            </Col>
            <Col lg={5} className="ps-4">
              <h4>{post?.title}</h4>
            </Col>

            <Col lg={2} className="ps-5">
              <span className="opacity-50 text-dark">{formattedDate}</span>
            </Col>

            <Col lg={1} className="d-flex justify-content-end">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Popover className="p-2 d-flex flex-column blue-text">
                    <span>
                      <strong>Reports: </strong> {post?.reports?.length}
                    </span>
                    <span>
                      <strong>Likes: </strong> {post?.likes?.length}
                    </span>
                    <span>
                      <strong>Comments: </strong> {getCommentCount(post)}
                    </span>
                  </Popover>
                }
              >
                <span>
                  <img src={StatIcon} className="stat-icon" />
                  {post?.reports?.length > 10 && (
                    <img src={RedExclamMark} className="exclam-icon"></img>
                  )}
                </span>
              </OverlayTrigger>
            </Col>
            <Col lg={1} className="d-flex justify-content-end">
              <img
                src={TrashIcon}
                className="trash-icon hover-pointer"
                onClick={handleTrashClick}
              />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {post?.content}
          <span className="d-flex gap-2 mt-2">
            {post?.tags &&
              Array.isArray(post?.tags) &&
              post?.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  className="badge-color"
                  text="light"
                  pill={true}
                >
                  {tag.name}
                </Badge>
              ))}
          </span>
        </Card.Body>
        <Card.Footer>
          {post?.comments && post?.comments.length > 0 ? (
            showComments ? (
              <>
                <div className="comments-container py-2">
                  {post?.comments.map((comment) => (
                    <AdminPostComment
                      key={comment.id}
                      comment={comment}
                      onDelete={onDelete}
                    />
                  ))}
                </div>
                <u
                  className="text-dark opacity-50 hover-pointer"
                  onClick={() => setShowComments(false)}
                >
                  Reacties verbergen
                </u>
              </>
            ) : (
              <u
                className="text-dark opacity-50 hover-pointer"
                onClick={() => setShowComments(true)}
              >
                Reacties weergeven
              </u>
            )
          ) : (
            <span className="opacity-50 text-dark">Geen reacties</span>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default AdminForumPostCard;

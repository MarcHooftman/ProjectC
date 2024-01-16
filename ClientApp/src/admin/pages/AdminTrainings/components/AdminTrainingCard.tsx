import { useEffect, useState } from "react";
import { Badge, Button, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ITraining from "../../../../interfaces/ITraining";
import { getApiUrl } from "../../../../utils/getApiUrl";

interface Props {
  Training: ITraining;
  onDelete: () => void;
}

const AdminTrainingCard = ({
  Training: Training,
  onDelete = () => {},
}: Props) => {
  const [showModal, setShowModal] = useState<boolean>();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [views, setViews] = useState<number>(0);
  const navigate = useNavigate();

  const getViews = () => {
    fetch(`${getApiUrl()}/trainingprofile`)
      .then((response) => response.json())
      .then((data) => {
        setViews(data.filter((i: any) => i.trainingID === Training.id).length);
      });
  };

  const deleteTraining = async () => {
    setShowConfirm(false);
    try {
      const response = await fetch(`${getApiUrl()}/training/${Training.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete training");
      }

      // Refresh the training list or handle the deletion in some other way
    } catch (error) {
      console.error(error);
    }
    onDelete();
  };

  useEffect(() => {
    getViews();
  });

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        centered={true}
        dialogClassName="modalvideo"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-2 blue-text">
            {Training?.title}
            <p style={{ margin: "0px" }} className="fs-5 blue-text">
              {Training?.description}
            </p>
            <p style={{ fontSize: "15px", margin: "0px" }}>Views: {views}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title={Training?.title}
            className="video"
            src={Training?.url}
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setShowConfirm(true);
              setShowModal(false);
            }}
          >
            Verwijderen
          </Button>
          <Button
            onClick={() => navigate(`/admin/trainings/edit/${Training.id}`)}
          >
            Bewerken
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this training?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowConfirm(false);
              setShowModal(true);
            }}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTraining}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="hover-pointer h-100 shadow-lg bg-antes-primary"
        onClick={() => setShowModal(!showModal)}
        role="admin-training-card"
      >
        <Card.Header>
          <Card.Title role="training-title">
            <strong>{Training?.title}</strong>
          </Card.Title>
          <div className="d-flex Category gap-2 pb-2 ">
            {Training?.tags.map((i, index) => (
              <Badge
                key={index}
                className="badge-color"
                text="light"
                bg=""
                pill={true}
              >
                {i.name}
              </Badge>
            ))}
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text role="training-description">
            {Training?.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdminTrainingCard;

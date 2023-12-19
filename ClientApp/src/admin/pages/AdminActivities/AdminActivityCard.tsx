import { useState } from "react";
import IActivity from "../../../interfaces/IActivity";
import { Button, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { getApiUrl } from "../../../utils/getApiUrl";

interface Props {
  activity: IActivity;
  onDelete: () => void;
}

const AdminActivityCard = ({ activity, onDelete = () => { } }: Props) => {
  const [showModal, setShowModal] = useState<boolean>();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const navigate = useNavigate();

  const [showAttendeesModal, setShowAttendeesModal] = useState<boolean>(false);

  let formattedDate = "";

  if (activity?.time !== undefined) {
    formattedDate = new Date(activity.time).toLocaleString("nl-NL", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  const deleteActivity = async () => {
    setShowConfirm(false);
    try {
      const response = await fetch(
        `${getApiUrl()}/activity/${activity.id}`,
        {
          method: "DELETE",

          headers: {
            "ngrok-skip-browser-warning": "1",
          }

        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete activity");
      }

      // Refresh the activities list or handle the deletion in some other way
    } catch (error) {
      console.error(error);
    }
    onDelete();
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        centered={true}
        dialogClassName="activity-modal"
      >
        <Modal.Header closeButton>
          <div className="d-flex flex-column">
            <Modal.Title className="fs-2 blue-text">
              {activity?.title}
            </Modal.Title>
            <p className="fs-5 blue-text mb-0">{formattedDate}</p>
            <p className="fs-6 blue-text mb-0 text-dark opacity-50">
              {activity?.location}
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>{activity?.description}</Modal.Body>
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
            variant="warning"
            onClick={() => navigate(`/ admin / activities / edit / ${activity.id}`)}
          >
            Bewerken
          </Button>
          <Button
            onClick={() => {
              setShowModal(false);
              setShowAttendeesModal(true);
            }}
          >
            Deelnemers
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
        <Modal.Body>Are you sure you want to delete this activity?</Modal.Body>
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
          <Button variant="danger" onClick={deleteActivity}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Deelnemers modal */}
      <Modal
        show={showAttendeesModal}
        onHide={() => setShowAttendeesModal(false)}
        centered={true}
      // style={{ maxWidth: "800px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{activity.title} Deelnemers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activity?.profiles?.length ?? 0 > 0 ? (
            <Table striped={true} borderless={true} responsive={true}>
              <thead>
                <tr>
                  <th className="blue-text">Naam</th>
                  <th className="blue-text">Email</th>
                  <th className="blue-text">Afdeling</th>
                </tr>
              </thead>
              <tbody>
                {activity?.profiles?.map((profile, index) => (
                  <tr key={index}>
                    <td className="blue-text">{profile.fullName}</td>
                    <td className="blue-text">{profile.email}</td>
                    <td className="blue-text">{profile.department}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Nog niemand heeft deelgenomen aan deze activiteit.</p>
          )}
        </Modal.Body>
      </Modal>
      <Card
        className="hover-pointer h-100 shadow-lg"
        onClick={() => setShowModal(!showModal)}
      >
        <Card.Header>
          <Card.Title>
            <strong>{activity?.title}</strong>
          </Card.Title>
          <Card.Subtitle>{formattedDate}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{activity?.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-dark opacity-50">
          {activity?.location}
        </Card.Footer>
      </Card>
    </>
  );
};

export default AdminActivityCard;

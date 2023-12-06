import { useState } from "react";
import IActivity from "../../../interfaces/IActivity";
import { Card, Modal } from "react-bootstrap";

interface Props {
  activity: IActivity;
}

const AdminActivityCard = ({ activity }: Props) => {
  const [showModal, setModalstate] = useState<boolean>();

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

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setModalstate(false);
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
      </Modal>
      <Card
        className="hover-pointer h-100 shadow-lg"
        onClick={() => setModalstate(!showModal)}
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

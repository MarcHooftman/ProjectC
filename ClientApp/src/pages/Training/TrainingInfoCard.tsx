import { useState } from "react";
import ITraining from "../../interfaces/ITraining";
import { Modal, Card, Badge } from "react-bootstrap";
import "./Training.scss";

const checkmark = require("../../assets/checkmark.png");

interface Props {
  Training?: ITraining;
  Completed: boolean;
}

const TrainingInfoCard = ({ Training, Completed }: Props) => {
  const [showModal, setModelstate] = useState<boolean>();
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setModelstate(false);
        }}
        centered={true}
        dialogClassName="modalvideo"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-2 blue-text">
            {Training?.title}
            <p className="fs-5 blue-text">{Training?.description}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe className="video" src={Training?.media.url} allowFullScreen />
        </Modal.Body>
      </Modal>
      <Card
        className="training-card hover-pointer shadow-lg"
        onClick={() => {
          setModelstate(true);
        }}
      >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h4>{Training?.title}</h4>
            {Completed === true ? (
              <img style={{ height: "30px" }} src={checkmark} alt="" />
            ) : null}
          </Card.Title>
          <div className="d-flex Category gap-2 pb-2 ">
            {Training?.tags.map((i) => (
              <Badge
                key={i.id}
                className="badge-color"
                text="light"
                bg=""
                pill={true}
              >
                {i.name}
              </Badge>
            ))}
          </div>
          <Card.Text>{Training?.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TrainingInfoCard;

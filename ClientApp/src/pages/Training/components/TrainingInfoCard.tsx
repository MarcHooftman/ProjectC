import { useState, useEffect } from "react";
import useTrainingMark from "../../../hooks/useTrainingMark";
import ITraining from "../../../interfaces/ITraining";
import IProfile from "../../../interfaces/IProfile";
import { Modal, Card, Badge, Form } from "react-bootstrap";
import "./Training.scss";
const checkmark = require("../../../assets/checkmark.png");

interface Props {
  Training?: ITraining;
  profile?: IProfile;
}

const TrainingInfoCard = ({ Training, profile }: Props) => {
  const [showModal, setModelstate] = useState<boolean>();
  const [CompletedValue, setCompletedValue] = useState<boolean>(false);
  const { setTrainingState } = useTrainingMark();

  useEffect(() => {
    setCompletedValue(
      profile?.training?.some((t) => t.id === Training?.id) || false
    );
  }, [profile?.training, Training?.id]);

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
            <Form.Switch
              id="custom-switch"
              label="Voltooid"
              style={{ fontSize: "20px" }}
              onChange={() => {
                setTrainingState(!CompletedValue, Training as ITraining);
                setCompletedValue(!CompletedValue);
              }}
              checked={CompletedValue}
            ></Form.Switch>
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
      </Modal>
      <Card
        className="training-card hover-pointer shadow-lg bg-antes-primary"
        onClick={() => {
          setModelstate(true);
        }}
        role="training-info-card"
      >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bolder">{Training?.title}</h3>
            {CompletedValue == true ? (
              <img style={{ height: "30px" }} src={checkmark} alt="" />
            ) : null}
          </Card.Title>
          <div className="d-flex Category gap-2 pb-2 ">
            {Training?.tags.map((i, index) => (
              <Badge
                key={index}
                className="bg-antes-secondary fs-6 fw-bolder"
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

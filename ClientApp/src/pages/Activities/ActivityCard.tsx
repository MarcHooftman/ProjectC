import IActivity from "../../interfaces/IActivity";
import IProfile from "../../interfaces/IProfile";
import { useEffect, useState } from "react";
import { Card, Modal, Form } from "react-bootstrap";
import { formatDateTimeLong } from "../../utils/formatDate";
import useActivityMark from "../../hooks/useActivityMark";

const userIcon = require("../../assets/person-4.png");

interface Props {
  currentProfile?: IProfile;
  activity?: IActivity;
  className?: string;
}

const ActivityCard = ({ activity, currentProfile, className = "" }: Props) => {
  const [showModal, setModalstate] = useState<boolean>();
  const { setActivityState } = useActivityMark(); // Use the useActivityMark hook
  const [AttendingActivity, setAttendingActivity] = useState<boolean>(false);

  useEffect(() => {
    if (currentProfile) {
      // Check if the current profile is in the activity's profiles
      setAttendingActivity(
        activity?.profiles?.some((p) => p.id === currentProfile.id) || false
      );
    }
  }, [currentProfile, activity?.profiles]);

  // Handle switch change
  const handleSwitchChange = () => {
    const newAttendingState = !AttendingActivity;
    setAttendingActivity(newAttendingState);
    setActivityState(newAttendingState, activity as IActivity);

    if (newAttendingState) {
      // If the user is now attending the activity, add their profile to the activity's profiles
      activity?.profiles?.push(currentProfile as IProfile);
    } else {
      // If the user is no longer attending the activity, remove their profile from the activity's profiles
      const index = activity?.profiles?.findIndex(
        (p) => p.id === currentProfile?.id
      );
      if (index !== undefined && index !== -1) {
        activity?.profiles?.splice(index, 1);
      }
    }
  };

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
            <p className="fs-5 blue-text mb-0">
              {formatDateTimeLong(activity?.time || "0001-01-01")}
            </p>
            <p className="fs-6 blue-text mb-0 text-dark opacity-50">
              {activity?.location}
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>{activity?.description}</Modal.Body>
        <Modal.Footer className="modal-footer">
          <p className="attendeesNumber">
            <img src={userIcon} alt="User Icon" className="userIcon-img" />
            {activity?.profiles?.length || 0}{" "}
            {activity?.profiles?.length === 1 ? "deelnemer" : "deelnemers"}
          </p>
          <Form.Switch
            id="customSwitch"
            label="Deelnemen"
            onChange={handleSwitchChange}
            checked={AttendingActivity}
          ></Form.Switch>
        </Modal.Footer>
      </Modal>
      <Card
        className={className.concat(
          " ",
          "hover-pointer h-100 bg-antes-primary p-2"
        )}
        onClick={() => setModalstate(!showModal)}
      >
        <Card.Header>
          <Card.Title as="h3" className="fw-bolder">
            {activity?.title}
          </Card.Title>
          <Card.Subtitle className="antes-secondary">
            {formatDateTimeLong(activity?.time || "0001-01-01")}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text className="fs-5">{activity?.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="antes-secondary fw-bold">
          {activity?.location}
        </Card.Footer>
      </Card>
    </>
  );
};

export default ActivityCard;

import IActivity from "../../../interfaces/IActivity";
import IProfile from "../../../interfaces/IProfile";
import { useEffect, useState } from "react";
import { Card, Modal, Form } from "react-bootstrap";
import { formatDateTimeLong } from "../../../utils/formatDate";
import useActivityMark from "../../../hooks/useActivityMark";
import { getApiUrl } from "../../../utils/getApiUrl";
import userIcon from "../../../assets/person-4.png";

interface Props {
  currentProfile?: IProfile;
  activity?: IActivity;
  className?: string;
}

const ActivityCard = ({ activity, currentProfile, className = "" }: Props) => {
  const [showModal, setModalstate] = useState<boolean>();
  const { setActivityState } = useActivityMark(); // Use the useActivityMark hook
  const [AttendingActivity, setAttendingActivity] = useState<boolean>(false);
  const [attendingCount, setAttendingCount] = useState<number>();

  useEffect(() => {
    fetch(`${getApiUrl()}/profileactivity/${activity?.id}`)
      .then((response) => response.json())
      .then((data) => {
        setAttendingCount(data);
      });
  });

  useEffect(() => {
    if (currentProfile) {
      // Check if the activity is in the profile
      setAttendingActivity(
        currentProfile.activity?.some((a) => a.id == activity?.id) || false
      );
    }
  }, [currentProfile]);

  // Handle switch change
  const handleSwitchChange = () => {
    const newAttendingState = !AttendingActivity;
    setAttendingActivity(newAttendingState);
    setActivityState(newAttendingState, activity as IActivity);

    if (newAttendingState) {
      // If the user is now attending the activity, add the activity to the profile
      currentProfile?.activity.push(activity as IActivity);
    } else {
      // If the user is no longer attending the activity, remove the activity from the profile
      const index = currentProfile?.activity?.findIndex(
        (a) => a.id === activity?.id
      );
      if (index !== undefined && index !== -1) {
        currentProfile?.activity?.splice(index, 1);
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
            {attendingCount || 0}{" "}
            {attendingCount === 1 ? "deelnemer" : "deelnemers"}
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

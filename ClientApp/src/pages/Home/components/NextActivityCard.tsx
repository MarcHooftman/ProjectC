import { useEffect, useState } from "react";
import IActivity from "../../../interfaces/IActivity";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getApiUrl } from "../../../utils/getApiUrl";
import clockIcon from "../../../assets/clock.svg";

const NextActivityCard = () => {
  const [activity, setActivity] = useState<IActivity>();

  useEffect(() => {
    fetch(`${getApiUrl()}/activity/first`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setActivity(data as IActivity));
  }, []);

  let formattedDate = activity?.time;

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
      {activity == undefined ? (
        <h5 className="">Geen activiteiten ingepland</h5>
      ) : (
        <Card
          as={Link}
          to="/activities"
          className="shadow-lg text-decoration-none flex-grow-1 bg-antes-primary"
          role="next-activity-card"
        >
          <Card.Header className="d-flex align-items-center gap-3">
            <Card.Img src={clockIcon} className="clock-icon" />
            <div>
              <h2 className="fs-4 m-0 fw-bolder">{activity?.title}</h2>
              <h3 className="fs-6 m-0 antes-secondary">{formattedDate}</h3>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="fs-default mobile-truncate">
              {activity?.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text className="antes-secondary fw-bold">
              {activity?.location}
            </Card.Text>
          </Card.Footer>
        </Card>
      )}
    </>

    //</Link>
  );
};

export default NextActivityCard;

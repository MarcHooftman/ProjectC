import { useEffect, useState } from "react";
import IActivity from "../../interfaces/IActivity";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getApiUrl } from "../../utils/getApiUrl";

const clockIcon = require("../../assets/clock-icon.png");

const NextActivityCard = () => {
  const [activity, setActivity] = useState<IActivity>();


  useEffect(() => {
    fetch(`${getApiUrl()}/activity/first`,
      {
        headers: {
          "ngrok-skip-browser-warning": "1",
        }
      },)
      .then((response) => {
        console.log(response);
        return response.json()
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
    //<Link to="/activities" className="text-decoration-none">
    <>
      {activity == undefined
        ? <h5 className="text-dark opacity-50">Geen activiteiten ingepland</h5>
        : <Card as={Link} to="/activities" className="shadow-lg text-decoration-none flex-grow-1">
          <Card.Header className="d-flex align-items-center gap-3">
            <Card.Img src={clockIcon} className="clock-icon" />
            <div>
              <h2 className="fs-5 m-0">
                <strong>{activity?.title}</strong>
              </h2>
              <h3 className="fs-6 m-0 opacity-50 text-dark">{formattedDate}</h3>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>{activity?.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text className="text-dark opacity-50">
              {activity?.location}
            </Card.Text>
          </Card.Footer>
        </Card>
      }
    </>

    //</Link>
  );
};

export default NextActivityCard;

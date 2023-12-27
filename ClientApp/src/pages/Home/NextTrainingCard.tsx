import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ITraining from "../../interfaces/ITraining";
import { useEffect, useState } from "react";
import IProfile from "../../interfaces/IProfile";
import { getApiUrl } from "../../utils/getApiUrl";

interface Props {
  graphData?: IGraphData | null;
}

const NextTrainingCard = ({ graphData }: Props) => {
  const [profile, setProfile] = useState<IProfile>();
  const [training, setTraining] = useState<ITraining>();

  const getNextTraining = (array: ITraining[]) => {
    return array.filter((t) => !profile?.training?.includes(t))[0];
  };

  useEffect(() => {
    fetch(`${getApiUrl()}/training`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setTraining(getNextTraining(data)));
  }, [profile]);
  useEffect(() => {
    if (graphData?.mail) {
      fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`, {
        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      })
        .then((response) => response.json())
        .then((data) => setProfile(data));
    }
  }, [graphData]);

  return (
    <Card
      as={Link}
      to="/training"
      className="shadow-lg text-decoration-none bg-antes-primary"
    >
      <Card.Header className="d-flex align-items-center justify-content-between py-3">
        <Card.Title className="mb-0">{training?.title}</Card.Title>
        <div className="d-flex gap-2">
          {training?.tags.map((tag, index) => (
            <Link to={`/training?filter=${tag.name}`} key={index}>
              <Badge
                className="bg-antes-secondary fs-6"
                text="light"
                pill={true}
              >
                {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{training?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NextTrainingCard;

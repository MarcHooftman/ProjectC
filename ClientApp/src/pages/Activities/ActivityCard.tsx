import { Link } from "react-router-dom";
import IActivity from "./IActivity";
import { Card } from "react-bootstrap";


interface Props {
  activity?: IActivity;
  className?: string;
  footer?: string;
  fontSize?: number;
}

const ActivityCard = ({ activity, className = "" }: Props) => {
  return (
    <Link to={`/activities/${activity?.id}`} className="text-decoration-none">
      <Card className={className}>
        <Card.Header>
          <Card.Title><strong>{activity?.title}</strong></Card.Title>
          <Card.Subtitle>{activity?.time}</Card.Subtitle>
          <Card.Text>{activity?.location}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>{activity?.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ActivityCard;

import { Link } from "react-router-dom";
import IActivity from "./IActivity";
import { Card } from "react-bootstrap";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const clockIcon = require("../../assets/clock-icon.png");

interface Props {
  activity?: IActivity;
  className?: string;
  footer?: string;
  fontSize?: number;
}

const ActivityCard = ({ activity, className = "" }: Props) => {


  return (
    <Link to={`/activity/${activity?.id}`} className="text-decoration-none">
      <Card className={className}>
        <Card.Header>
          <Card.Title><strong>{activity?.name}</strong></Card.Title>
          <Card.Subtitle>{activity?.time}</Card.Subtitle>
          <Card.Text>{activity?.location}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>{activity?.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
    // <details
    //   id="details"
    //   className={"card shadow activity-card px-3".concat(" ", className)}
    // >
    //   <summary
    //     className="d-flex justify-content-between align-items-center p-2"
    //     onClick={() => {
    //       setCollapse(!collapse);
    //     }}
    //   >
    //     <div className="d-flex align-items-center gap-3">
    //       <img className="clock-icon" src={clockIcon} />
    //       <div className="date-place-info">
    //         <h3
    //           className={"text-nowrap date-time".concat(
    //             " ",
    //             getFontsizeClassName(fontSize)
    //           )}
    //         >
    //           <strong>{activity?.datetime}</strong>
    //         </h3>
    //         <h4
    //           className={"text-nowrap place-info".concat(
    //             " ",
    //             getFontsizeClassName(fontSize + 2)
    //           )}
    //         >
    //           {activity?.location}
    //         </h4>
    //       </div>
    //     </div>
    //     <h2
    //       className={"text-nowrap activity-name".concat(
    //         " ",
    //         getFontsizeClassName(fontSize)
    //       )}
    //     >
    //       <strong>{activity?.name}</strong>
    //     </h2>
    //     <img className="arrow-icon" src={collapse ? downArrow : upArrow} />
    //   </summary>
    //   <p>{activity?.description}</p>
    // </details>
  );
};

export default ActivityCard;

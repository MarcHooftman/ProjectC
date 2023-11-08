import { useState } from "react";
import IActivity from "./IActivity";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const clockIcon = require("../../assets/clock-icon.png");

interface Props {
  activity?: IActivity;
  className?: string;
  footer?: string;
  fontSize?: number;
}

const ActivityCard = ({ activity, className = "", fontSize = 4 }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  function getFontsizeClassName(size: number) {
    return `fs-${size}`;
  }

  return (
    <details
      id="details"
      className={"card activity-card px-3".concat(" ", className)}
    >
      <summary
        className="d-flex justify-content-between align-items-center p-2"
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <img className="clock-icon" src={clockIcon} />
          <div className="date-place-info">
            <h3
              className={"text-nowrap date-time".concat(
                " ",
                getFontsizeClassName(fontSize)
              )}
            >
              <strong>{activity?.datetime}</strong>
            </h3>
            <h4
              className={"text-nowrap place-info".concat(
                " ",
                getFontsizeClassName(fontSize + 2)
              )}
            >
              {activity?.location}
            </h4>
          </div>
        </div>
        <h2
          className={"teaxt-nowrap activity-name".concat(
            " ",
            getFontsizeClassName(fontSize)
          )}
        >
          <strong>{activity?.name}</strong>
        </h2>
        <img className="arrow-icon" src={collapse ? downArrow : upArrow} />
      </summary>
      <p>{activity?.description}</p>
    </details>
  );
};

export default ActivityCard;

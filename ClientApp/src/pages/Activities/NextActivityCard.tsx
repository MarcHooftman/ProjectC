import { useEffect, useState } from "react";
import IActivity from "./IActivity";

const upArrow = require("../../assets/up-arrow.png");
const downArrow = require("../../assets/down-arrow.png");
const clockIcon = require("../../assets/clock-icon.png");

interface Props {
  activity?: IActivity;
  className?: string;
  footer?: string;
  disabled?: boolean;
  fontSize?: number;
}

const NextActivityCard = ({
  activity,
  footer = "",
  className = "",
  disabled = false,
  fontSize = 4,
}: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  function getFontsizeClassName(size: number) {
    return `fs-${size}`;
  }

  useEffect(() => {
    let details = document.getElementById("details") as HTMLDetailsElement;
    if (details && disabled) {
      details.addEventListener("click", function (e) {
        e.preventDefault();
      });
      details.open = true;
      details.ariaDisabled = "true";
    } else if (details) details.open = !collapse;
  }, []);

  return (
    <details id="details" className={"card".concat(" ", className)}>
      <summary
        className="d-flex justify-content-between align-items-center py-2 px-3"
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <img className="next-clock-icon" src={clockIcon} />
          <div>
            <h3
              className={"text-nowrap".concat(
                " ",
                getFontsizeClassName(fontSize)
              )}
            >
              <strong>{activity?.datetime}</strong>
            </h3>
            <h4
              className={"text-nowrap".concat(
                " ",
                getFontsizeClassName(fontSize + 2)
              )}
            >
              {activity?.location}
            </h4>
          </div>
        </div>
        <h2
          className={"text-nowrap".concat(
            " ",
            getFontsizeClassName(fontSize - 1)
          )}
        >
          <strong>{activity?.name}</strong>
        </h2>
        {disabled ? (
          <></>
        ) : (
          <img
            className="next-arrow-icon"
            src={collapse ? upArrow : downArrow}
          />
        )}
      </summary>
      <p className="px-3">{activity?.description}</p>
      {footer.length > 0 ? (
        <div className="card-footer">
          <small className="text-body-secondary">{footer}</small>
        </div>
      ) : (
        <h1></h1>
      )}
    </details>
  );
};

export default NextActivityCard;

import "./ActivityExample.scss";

const clockIcon = require("../assets/clock-icon.png");

interface Props {
  text?: string;
  className?: string;
  footer?: string;
}

const ActivityExample = ({ text, footer = "", className = "" }: Props) => {
  return (
    <div className={"example-activity".concat(" " + className)}>
      <div className="example-activity-header">
        <img className="clock-icon" src={clockIcon} />
        <div className="date-place-info">
          <h3 className="date-time">
            <strong>2 Okt. 18:00</strong>
          </h3>
          <h4 className="place-info">Kalverstraat 33b</h4>
        </div>
        <h2 className="activity-name">
          <strong>Activiteit naam</strong>
        </h2>
      </div>

      <p className="px-2">
        {text == undefined
          ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
        doloremque dicta dolores nulla suscipit quibusdam magni itaque
        blanditiis labore, iusto recusandae rerum delectus provident alias
        assumenda commodi ab quisquam!`
          : text}
      </p>
      {footer.length > 0 ? (
        <div className="card-footer">
          <small className="text-body-secondary">{footer}</small>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default ActivityExample;

import { Container, List } from "reactstrap";
import "./Card.scss";
import { Context } from "react";

interface Props {
  title: string;
  children?: any;
  contextlist?: string[];
  footer?: string;
  className?: string;
}

const HomeInfoBox = ({
  title,
  children,
  contextlist,
  className = "",
  footer = "",
}: Props) => {
  return (
    <div className={"card mb-3".concat(" " + className)}>
      <div className="card-body">
        <h1 className="card-title text-center">{title}</h1>
        <ul className="list-group">
          {contextlist?.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
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

export default HomeInfoBox;

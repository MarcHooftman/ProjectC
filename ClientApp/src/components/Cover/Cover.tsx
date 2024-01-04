import React from "react";
import { Container } from "react-bootstrap";
import "./Cover.scss";

interface Props {
  src: string;
  children: React.ReactNode;
  className?: string;
}

const Cover: React.FC<Props> = ({ src, children, className = "" }) => {
  return (
    <div
      className={"position-relative cover-container".concat(" ", className)}
      role="cover"
    >
      <img
        src={src}
        alt="cover"
        className="cover min-vw-100 object-fit-cover"
      />
      <Container className="text-center position-absolute top-50 start-50 translate-middle">
        {children}
      </Container>
    </div>
  );
};

export default Cover;

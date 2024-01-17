import { Card } from "react-bootstrap";
import homeCover from "../../assets/home-cover.jpg";
import "./CoverCard.scss";

const CoverCard = () => {
  return (
    <Card
      className="mt-5 d-flex flex-row justify-content-between align-items-center cover-card pe-5 shadow-lg"
      role="cover-card"
    >
      <img
        src={homeCover}
        alt="cover"
        className="object-fit-cover me-5"
        role="cover-image"
      />
      <h2 className="antes-red fw-bold text-center" role="cover-greeting">
        Welkom bij de onboarding app van Antes
      </h2>
    </Card>
  );
};

export default CoverCard;

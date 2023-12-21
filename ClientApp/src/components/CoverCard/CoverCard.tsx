import { Card } from "react-bootstrap";
import homeCover from "../../assets/home-cover.jpg";
import "./CoverCard.scss";

const CoverCard = () => {
  return (
    <Card className="my-5 d-flex flex-row justify-content-between align-items-center cover-card bg-light pe-5 shadow-lg">
      <img src={homeCover} alt="cover" className="object-fit-cover me-5" />
      <h2
        className="antes-red fw-bold text-center"
        style={{ color: "#A2102C" }}
      >
        Welkom bij de onboarding app van Antes
      </h2>
    </Card>
  );
};

export default CoverCard;

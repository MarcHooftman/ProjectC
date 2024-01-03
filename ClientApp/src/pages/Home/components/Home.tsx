import Layout from "../../../components/Layout";
import "./Home.scss";
import NextActivityCard from "./NextActivityCard";
import { Col, Row } from "reactstrap";
import PopPostCard from "./PopPostCard";
import NextTrainingCard from "./NextTrainingCard";
import Tutorial from "./Tutorial/Tutorial";
import { useEffect, useState } from "react";
import { useGraphData } from "../../../hooks/useGraphData";
import { createProfile } from "../utils";
import AboutParagraph from "../../../components/AboutParagraph/AboutParagraph";
import CustomAuthenticatedTemplate from "../../../components/AuthTemplates/CustomAuthenticatedTemplate";
import { getApiUrl } from "../../../utils/getApiUrl";
import CoverCard from "../../../components/CoverCard/CoverCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  const [profileCreated, setProfileCreated] = useState<boolean>(false);
  const { graphData } = useGraphData();

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  useEffect(() => {
    if (graphData && !profileCreated) {
      setTimeout(
        () =>
          fetch(`${getApiUrl()}/profile/email-exists/${graphData?.mail}`, {
            headers: {
              "ngrok-skip-browser-warning": "1",
            },
          })
            .then((response) => response.json())
            .then((emailExists) => {
              if (emailExists) {
                setShowTutorial(false);
              } else {
                setProfileCreated(true);
                createProfile(graphData).then(() => setShowTutorial(true));
              }
            }),
        250
      );
    }
  }, [graphData]);

  return (
    <Layout role="home-page">
      <CoverCard />
      <CustomAuthenticatedTemplate>
        <Tutorial show={showTutorial} onHide={closeTutorial} />
        <Row className="mx-0 gap-5 mt-5">
          <Col className="d-flex flex-column px-0 mb-4 home-col">
            <h3 className="blue-text fw-bold">Populair op dit moment</h3>
            <PopPostCard />
          </Col>
          <Col className="d-flex flex-column px-0 mb-4 home-col">
            <h3 className="blue-text fw-bold">Eerstvolgende activiteit</h3>
            <NextActivityCard />
          </Col>
        </Row>
        <Row className="mx-0 mt-3">
          <Col className="px-0 mb-4 home-col">
            <h3 className="blue-text fw-bold">Volgende training</h3>
            <NextTrainingCard graphData={graphData} />
          </Col>
        </Row>
      </CustomAuthenticatedTemplate>
      <h2 className="mt-5 mb-4 blue-text fw-bold">Wie wij zijn</h2>
      <AboutParagraph />
      <Button onClick={() => navigate("/about")} className="fw-bold">
        Lees verder
      </Button>
    </Layout>
  );
};

export default Home;

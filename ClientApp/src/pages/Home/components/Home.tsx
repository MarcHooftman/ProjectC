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
import CustomUnauthenticatedTemplate from "../../../components/AuthTemplates/CustomUnauthenticatedTemplate";

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
        <Row className="mx-0 mt-5 home-row">
          <Col className="d-flex flex-column px-0 home-col">
            <h3 className="blue-text fw-bold">Populair op dit moment</h3>
            <PopPostCard />
          </Col>
          <Col className="d-flex flex-column px-0 home-col">
            <h3 className="blue-text fw-bold">Eerstvolgende activiteit</h3>
            <NextActivityCard />
          </Col>
        </Row>
        <Row className="mx-0 mt-4">
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
      <CustomUnauthenticatedTemplate>
        <h2 className="mt-5 mb-4 blue-text fw-bold">Ontdek meer</h2>
        <p className="blue-text fs-default">
          Wil je meer zien van deze website? Door in te loggen kun je toegang
          krijgen tot:
          <ul className="ps-4">
            <li>Het Antes forum</li>
            <li>De geplande activiteiten</li>
            <li>De GGZ Ecadamy trainingen</li>
            <li>Jouw Antes profiel</li>
          </ul>
        </p>
        <Button onClick={() => navigate("/login")} className="fw-bold">
          Inloggen
        </Button>
      </CustomUnauthenticatedTemplate>
    </Layout>
  );
};

export default Home;

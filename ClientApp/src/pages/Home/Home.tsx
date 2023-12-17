import Layout from "../../components/Layout";
import "./Home.scss";
import NextActivityCard from "./NextActivityCard";
import { Col, Row } from "reactstrap";
import PopPostCard from "./PopPostCard";
import NextTrainingCard from "./NextTrainingCard";
import homeCover from "../../assets/home-cover.jpg";
import Cover from "../../components/Cover/Cover";
import Tutorial from "./Tutorial/Tutorial";
import { useEffect, useState } from "react";
import useGraphData from "../../hooks/useGraphData";
import { createProfile } from "./utils";
import AboutParagraph from "../../components/AboutParagraph";
import CustomAuthenticatedTemplate from "../../components/AuthTemplates/CustomAuthenticatedTemplate";

//const homeCover = require("../../assets/images/home-cover.jpg");

const Home = () => {
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
          fetch(
            `${process.env.REACT_APP_API_URL}/profile/email-exists/${graphData?.mail}`
          )
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
    <Layout
      cover={
        <Cover src={homeCover} className="mb-5">
          <h1 className="py-5 text-white">
            Welkom bij de Onboarding-App van Antes
          </h1>
        </Cover>
      }
    >
      <CustomAuthenticatedTemplate>
        <Tutorial show={showTutorial} onHide={closeTutorial} />
        <Row className="mb-5">
          <Col className="d-flex flex-column">
            <h3 className="blue-text">Populair op dit moment</h3>
            <PopPostCard />
          </Col>
          <Col className="d-flex flex-column">
            <h3 className="blue-text">Eerstvolgende activiteit</h3>
            <NextActivityCard />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h3 className="blue-text">Volgende training</h3>
            <NextTrainingCard graphData={graphData} />
          </Col>
        </Row>
      </CustomAuthenticatedTemplate>
      <h2 className="my-4 blue-text">Over ons</h2>
      <AboutParagraph />
    </Layout>
  );
};

export default Home;

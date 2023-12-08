import Layout from "../../components/Layout";
import "./Home.scss";
import NextActivityCard from "./NextActivityCard";
import { Col, Row } from "reactstrap";
import PopPostCard from "./PopPostCard";
import NextTrainingCard from "./NextTrainingCard";
import homeCover from "../../assets/home-cover.jpg";
import Cover from "../../components/Cover/Cover";
import { AuthenticatedTemplate } from "@azure/msal-react";
import Tutorial from "./Tutorial/Tutorial";
import { useEffect, useState } from "react";
import useGraphData from "../../hooks/useGraphData";
import { createProfile } from "./utils";
import AboutParagraph from "../../components/AboutParagraph";
import { getNgrokTunnels } from "../../utils/ngrokUtils";

//const homeCover = require("../../assets/images/home-cover.jpg");

const Home = () => {
  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  const { graphData } = useGraphData();
  console.log(graphData)

  const closeTutorial = () => {
    setShowTutorial(false);
  };

  useEffect(() => {
    if (graphData) {
      setTimeout(
        () =>
          fetch(
            `${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`
          ).then((response) => {
            if (response.status === 200) {
              setShowTutorial(false);
            } else {
              createProfile(graphData).then(() => setShowTutorial(true));
            }
          }),
        250
      );
    }
  }, [graphData]);

  const tunnels = getNgrokTunnels();
  console.log(tunnels)

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
      <AuthenticatedTemplate>
        <Tutorial show={showTutorial} onHide={closeTutorial} />
        <Row>
          <Col className="mb-5">
            <h3 className="blue-text">Populair op dit moment</h3>
            <PopPostCard />
          </Col>
          <Col className="mb-5">
            <h3 className="blue-text">Eerstvolgende activiteit</h3>
            <NextActivityCard />
          </Col>
        </Row>
        <Row>
          <Col className="home-box mb-5">
            <h3 className="blue-text">Volgende training</h3>
            <NextTrainingCard />
          </Col>
        </Row>
      </AuthenticatedTemplate>
      <h2 className="my-4 blue-text">Over ons</h2>
      <AboutParagraph />
    </Layout>
  );
};

export default Home;

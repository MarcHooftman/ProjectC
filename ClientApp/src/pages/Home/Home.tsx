//import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
// import HomeInfoBox from "../../components/HomeInfoBox";
// import { Button } from "reactstrap";
// import { useState } from "react";
//import ActivityExample from "../components/ActivityExample";

import "./Home.scss";
import NextActivityCard from "./NextActivityCard";
import { Col, Row } from "reactstrap";
import PopPostCard from "./PopPostCard";
import NextTrainingCard from "./NextTrainingCard";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-left py-5 blue-text">
        Welkom bij de Onboarding-App van Antes
      </h1>
      <Row>
        <Col className="home-box mb-5">
          <h3 className="blue-text">Populair op dit moment</h3>
          <PopPostCard />
        </Col>
        <Col className="home-box mb-5">
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
    </Layout>
  );
};

export default Home;


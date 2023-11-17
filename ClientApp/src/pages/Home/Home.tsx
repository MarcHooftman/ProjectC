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
import homeCover from "../../assets/home-cover.jpg";
import Cover from "../../components/Cover/Cover";
import { isLoggedIn } from "../../utils/isLoggedIn";


//const homeCover = require("../../assets/images/home-cover.jpg");

const Home = () => {
  return (
    <Layout cover={
      <Cover src={homeCover} className="mb-5">
        <h1 className="py-5 text-white">
          Welkom bij de Onboarding-App van Antes
        </h1>
      </Cover>
    }>
      {isLoggedIn() &&
        <>
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
        </>
      }

    </Layout>
  );
};

export default Home;


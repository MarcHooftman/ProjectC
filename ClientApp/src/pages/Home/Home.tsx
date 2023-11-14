//import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
// import HomeInfoBox from "../../components/HomeInfoBox";
// import { Button } from "reactstrap";
// import { useState } from "react";
//import ActivityExample from "../components/ActivityExample";

import "./Home.scss";
import NextActivityCard from "../Activities/NextActivityCard";
import { Col, Row } from "reactstrap";
import PopPostCard from "./PopPostCard";
import NextTrainingCard from "./NextTrainingCard";

const tempNextActivity = {
  datetime: "morgen 13:45",
  location: "nepstraat 123a, rotterdam",
  name: "activiteit naam",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
doloremque dicta dolores nulla suscipit quibusdam magni itaque
blanditiis labore, iusto recusandae rerum delectus provident alias
assumenda commodi ab quisquam! Nobis recusandae quos cupiditate
culpa maxime, incidunt possimus dolorem eveniet reprehenderit
deleniti ab quisquam asperiores magni ipsum tenetur nam repellendus
eligendi perferendis magnam? Ab officia ad soluta distinctio aperiam
maxime! Deserunt exercitationem libero maxime quaerat nobis eaque
nemo tempore dolor, numquam et minus qui delectus sapiente
voluptates laudantium! Quidem suscipit, a natus tenetur voluptatem
impedit nam dolore obcaecati minima cumque?`,
};

const Home = () => {
  return (
    <Layout>
      <h1 className="text-left py-5 blue-title">
        Welkom bij de Onboarding-App van Antes
      </h1>
      <Row>
        <Col className="mb-5">
          <h3 className="blue-title">Populair op dit moment</h3>
          <PopPostCard />
        </Col>
        <Col className="mb-5">
          <h3 className="blue-title">Eerstvolgende activiteit</h3>
          <NextActivityCard
            activity={tempNextActivity}
            disabled={true}
            footer="Updated 10 min ago"
            fontSize={4}
          />
        </Col>
        <Col className="mb-5">
          <h3 className="blue-title">Volgende training</h3>
          <NextTrainingCard />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;


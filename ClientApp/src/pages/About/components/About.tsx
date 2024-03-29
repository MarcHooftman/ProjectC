import { Card, Col, Row } from "react-bootstrap";
import AboutParagraph from "../../../components/AboutParagraph/AboutParagraph";
import Layout from "../../../components/Layout";

import "./About.scss";
import AntesMap from "./AntesMap";
import GeneralInfoCard from "./GeneralInfoCard";

const About = () => {
  return (
    <Layout role="about-page">
      <h1 className="blue-text mt-5 mb-4">Wie zijn wij</h1>
      <AboutParagraph />
      <Row className="gap-4 mx-0">
        <Col className="my-4 px-0">
          <GeneralInfoCard />
        </Col>
        <Col className="my-4 px-0">
          <Card className="h-100 unknown-card shadow bg-antes-primary"></Card>
        </Col>
      </Row>
      <AntesMap />
    </Layout>
  );
};

export default About;

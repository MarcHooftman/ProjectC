import AboutParagraph from "../../components/AboutParagraph";
import Layout from "../../components/Layout";

import "./About.scss";
import AntesMap from "./AntesMap";
import GeneralInfoCard from "./GeneralInfoCard";

const About = () => {
  return (
    <Layout>
      <h1 className="blue-text mt-5 mb-4">Over Antes</h1>
      <AboutParagraph />
      <div className="d-flex gap-4">
        <GeneralInfoCard />
        <div className="card p-4 my-5 unknown-card shadow"></div>
      </div>
      <AntesMap />
    </Layout>
  );
};

export default About;

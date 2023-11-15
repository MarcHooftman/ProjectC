import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import IActivity from "./IActivity";
import ActivityCard from "./ActivityCard";
import { Col, Row } from "reactstrap";

const tempActivity = {
  id: 1, time: "25-12-2023", location: "kalverstraat 33b, amsterdam", name: "kerstviering", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque
doloremque dicta dolores nulla suscipit quibusdam magni itaque
blanditiis labore, iusto recusandae rerum delectus provident alias
assumenda commodi ab quisquam!`}

const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>();

  useEffect(() => {
    // api call for activities
    setActivities(Array(8).fill(tempActivity)) // temp array
  }, [])

  return (
    <Layout>
      <h1 className="my-5 blue-text">Activiteiten</h1>
      <Row xl="2" xs="1">
        {activities?.map((item) => <Col><ActivityCard activity={item} className="my-3 shadow-lg" /></Col>)}
      </Row>
    </Layout>
  );
};

export default Activities;

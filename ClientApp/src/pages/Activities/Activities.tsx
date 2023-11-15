import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import IActivity from "./IActivity";
import ActivityCard from "./ActivityCard";
import { Col, Row } from "reactstrap";
import useFetch from "../../hooks/useFetch";


const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>();

  const { loading, data, error } = useFetch("https://localhost:7185/api/activity/");

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data]);


  // useEffect(() => {
  //   // api call for activities

  //   fetch('https://localhost:7185/api/activity/', {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => setActivities(data))
  //     .catch(error => { throw new Error(error) });
  // }, [])

  return (
    <Layout>
      <h1 className="my-5 blue-text">Activiteiten</h1>
      <Row xl="2" xs="1">
        {activities?.map((item) => <Col key={item.id}><ActivityCard activity={item} className="my-3 shadow-lg" /></Col>)}
      </Row>
    </Layout>
  );
};

export default Activities;

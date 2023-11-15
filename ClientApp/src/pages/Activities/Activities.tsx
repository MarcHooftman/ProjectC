import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import IActivity from "./IActivity";
import ActivityCard from "./ActivityCard";
import { Col, Row } from "reactstrap";
import useFetch from "../../hooks/useFetch";


const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>();

  const { loading, data, error } = useFetch<IActivity>("https://localhost:7185/api/activity/");

  useEffect(() => {
    if (data) {
      const now = new Date();
      const filteredActivities = data.filter(activity => new Date(activity.time) > now);
      const sortedActivities = filteredActivities.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
      setActivities(sortedActivities);
    }
  }, [data]);

  return (
    <Layout>
      <h1 className="mt-5 blue-text">Activiteiten</h1>
      {activities?.length == undefined || activities?.length > 0 ? <Row xl="2" xs="1">
        {activities?.map((item) => <Col key={item.id} className="my-3"><ActivityCard activity={item} className="my-3 shadow-lg" /></Col>)}
      </Row> : <h4 className="blue-text opacity-75">Er zijn momenteel nog geen activiteiten bekend</h4>}

    </Layout>
  );
};

export default Activities;

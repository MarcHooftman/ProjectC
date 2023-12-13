import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import IActivity from "../../interfaces/IActivity";
import ActivityCard from "./ActivityCard";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import AcitivitySkeleton from "./AcitivitySkeleton";


const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>();
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const { loading, data } = useFetch(
    `${process.env.REACT_APP_API_URL}/activity/`
  );

  useEffect(() => {
    if (data) {
      //const now = new Date();
      //const filteredActivities = data.filter(activity => new Date(activity.time) > now);
      const filteredActivities = data as IActivity[];
      const sortedActivities = filteredActivities.sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
      );
      setActivities(sortedActivities);
    }
  }, [data]);

  const filteredActivities = selectedMonth
  ? activities?.filter(activity => new Date(activity.time).getMonth().toString() === selectedMonth)
  : activities;


  return (
    <Layout>
      <h1 className="mt-5 blue-text">Activiteiten</h1>
      <FormGroup>
        <Input
          type="select"
          name="select"
          id="monthSelect"
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Alle activiteiten</option>
          <option value="0">Januari</option>
          <option value="1">Februari</option>
          <option value="2">Maart</option>
          <option value="3">April</option>
          <option value="4">Mei</option>
          <option value="5">Juni</option>
          <option value="6">Juli</option>
          <option value="7">Augustus</option>
          <option value="8">September</option>
          <option value="9">Oktober</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </Input>
      </FormGroup>
      {filteredActivities?.length == undefined || filteredActivities?.length > 0 ? (
        <Row xl="2" xs="1">
          {loading
            ? <>
              <Col className="my-3"><AcitivitySkeleton /></Col>
              <Col className="my-3"><AcitivitySkeleton /></Col>
            </>
            : filteredActivities?.map((item) => (
              <Col key={item.id} className="my-3">
                <ActivityCard activity={item} className="my-3 shadow-lg" />
              </Col>
            ))}
        </Row>
      ) : (
        <h4 className="blue-text opacity-75">
          Er zijn momenteel nog geen activiteiten bekend
        </h4>
      )}
    </Layout>
  );
};

export default Activities;

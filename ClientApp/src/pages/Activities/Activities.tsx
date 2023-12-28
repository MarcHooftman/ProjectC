import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import IActivity from "../../interfaces/IActivity";
import ActivityCard from "./ActivityCard";
import { Col, Row, FormGroup, Input } from "reactstrap";
import ActivityCalendar from "./ActivityCalendar/ActivityCalendar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getApiUrl } from "../../utils/getApiUrl";
import CustomAuthenticatedTemplate from "../../components/AuthTemplates/CustomAuthenticatedTemplate";
import CustomUnauthenticatedTemplate from "../../components/AuthTemplates/CustomUnauthenticatedTemplate";
import { Button } from "react-bootstrap";
import useGraphData from "../../hooks/useGraphData";
import IProfile from "../../interfaces/IProfile";

const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  //const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const month = searchParams.get("month");
  const navigate = useNavigate();
  const { graphData } = useGraphData();
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
    if (graphData) {
      fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`, {
        headers: {
          "ngrok-skip-browser-warning": "1",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const profileData = data as IProfile;
          setProfile(profileData);
        });
    }
  }, [graphData]);

  const sortActivities = (array: IActivity[]) => {
    return array.sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
    );
  };

  const futureOnlyActivities = (array: IActivity[]): IActivity[] => {
    return array.filter((activity) => new Date(activity.time) >= new Date());
  };

  const filterByMonth = () => {
    const filtered = month
      ? activities?.filter(
          (activity) => new Date(activity.time).getMonth().toString() === month
        )
      : activities;
    setFilteredActivities(sortActivities(filtered));
  };

  const filterByDate = () => {
    const filtered = date
      ? activities?.filter(
          (activity) =>
            activity.time &&
            new Date(activity.time).toLocaleDateString() === date
        )
      : activities;
    setFilteredActivities(sortActivities(filtered));
  };

  useEffect(() => {
    fetch(`${getApiUrl()}/activity`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, [date, month]);

  useEffect(() => {
    if (date) {
      filterByDate();
    } else if (month) {
      filterByMonth();
    } else {
      setFilteredActivities(sortActivities(futureOnlyActivities(activities)));
    }
  }, [date, month, activities]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (month === "" || month === undefined) {
      navigate("/activities");
      return;
    }

    navigate(`/activities?month=${e.target.value}`);
  };

  const removeFilter = () => {
    navigate("/activities");
  };

  return (
    <Layout>
      <h1 className="my-5 blue-text fw-bolder">Activiteiten</h1>
      <CustomAuthenticatedTemplate>
        <ActivityCalendar activities={activities} />
        <span className="d-flex align-items-center justify-content-between mt-5 mb-4">
          <h2 className="blue-text fw-bolder">Activiteiten</h2>
          <FormGroup noMargin>
            <Input
              type="select"
              value={month || ""}
              name="select"
              id="monthSelect"
              onChange={handleMonthChange}
              className="bg-antes-secondary text-light fw-bold month-select hover-pointer"
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
        </span>

        <div className="d-flex flex-column gap-1 mb-4">
          {date && (
            <p className="text-muted mb-0">Zoekresultaat voor '{date}':</p>
          )}
          {month && (
            <p className="text-muted mb-0">Zoekresultaat voor '{month}':</p>
          )}
          {(!!date || !!month) && (
            <u
              className="text-muted hover-pointer"
              onClick={() => removeFilter()}
            >
              filter wissen
            </u>
          )}
        </div>
        {filteredActivities?.length == undefined ||
        filteredActivities?.length > 0 ? (
          <Row xl="2" xs="1" className="mx-0">
            {filteredActivities?.map((item) => (
              <Col key={item.id} className="mb-3 px-0 px-2">
                <ActivityCard
                  activity={item}
                  currentProfile={profile}
                  className="mb-3 shadow-lg"
                />
              </Col>
            ))}
          </Row>
        ) : (
          <h4 className="blue-text opacity-75">
            Er zijn momenteel nog geen activiteiten bekend
          </h4>
        )}
      </CustomAuthenticatedTemplate>
      <CustomUnauthenticatedTemplate>
        <h3 className="blue-text">Log in om deze pagina te bekijken</h3>
        <Button href="/login" className="fw-bold">
          Inloggen
        </Button>
      </CustomUnauthenticatedTemplate>
    </Layout>
  );
};

export default Activities;

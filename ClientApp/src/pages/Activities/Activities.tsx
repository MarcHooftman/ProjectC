import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Activities.scss";
import IActivity from "../../interfaces/IActivity";
import ActivityCard from "./ActivityCard";
import { Col, Row, FormGroup, Input } from "reactstrap";
import ActivityCalendar from "./ActivityCalendar/ActivityCalendar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getApiUrl } from "../../utils/getApiUrl";

const Activities = () => {

    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<string>("");
    const [filteredActivities, setFilteredActivities] = useState<IActivity[]>([]);
    const [searchParams] = useSearchParams();
    const date = searchParams.get("date");
    const navigate = useNavigate();

    const sortActivities = (array: IActivity[]) => {
        return array.sort(
            (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
        );
    }

    const filterByMonth = () => {
        const filtered = selectedMonth
            ? activities?.filter(activity => new Date(activity.time).getMonth().toString() === selectedMonth)
            : activities;
        setFilteredActivities(sortActivities(filtered));
    }

    const filterByDate = () => {
        const filtered = date
            ? activities?.filter(activity => activity.time && new Date(activity.time).toLocaleDateString() === date)
            : activities
        setFilteredActivities(sortActivities(filtered));
    }

    useEffect(() => {
        fetch(`${getApiUrl()}/activity`,
            {
                headers: {
                    "ngrok-skip-browser-warning": "1",
                }
            },)
            .then((response) => response.json())
            .then((data) => setActivities(data));
    }, [date, selectedMonth])

    useEffect(() => {
        if (date) {
            setSelectedMonth("");
            filterByDate();
        }
        else if (selectedMonth) {
            filterByMonth();
        }
        else {
            setFilteredActivities(activities);
        }
    }, [date, selectedMonth, activities])

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSelectedMonth(e.target.value);
        navigate("/activities")
    }

    return (
        <Layout>
            <h1 className="my-5 blue-text">Activiteiten</h1>
            <ActivityCalendar activities={activities} />
            <span className="d-flex align-items-center justify-content-between mt-5 mb-4">
                <h2 className="blue-text">Activiteiten</h2>
                <FormGroup noMargin>
                    <Input
                        type="select"
                        value={selectedMonth}
                        name="select"
                        id="monthSelect"
                        onChange={handleMonthChange}
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

            {date && <p className="text-muted">Zoekresultaat voor '{date}':</p>}
            {selectedMonth && <p className="text-muted">Zoekresultaat voor '{selectedMonth}':</p>}
            {filteredActivities?.length == undefined || filteredActivities?.length > 0 ? (
                <Row xl="2" xs="1">
                    {filteredActivities?.map((item) => (
                        <Col key={item.id} className="mb-3">
                            <ActivityCard activity={item} className="mb-3 shadow-lg" />
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

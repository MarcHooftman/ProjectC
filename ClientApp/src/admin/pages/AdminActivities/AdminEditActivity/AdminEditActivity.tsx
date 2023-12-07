import { Button, Card } from "react-bootstrap";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import IActivity from "../../../../interfaces/IActivity";

const AdminEditActivity = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState<IActivity>();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/activity/${id}`)
            .then((response) => response.json())
            .then((data) => {
                const activity = data as IActivity;
                setActivity(activity);
                setTitle(activity.title);
                setDescription(activity.description);
                setDate(new Date(activity.time).toISOString().split("T")[0]);
                setTime(new Date(activity.time).toISOString().split("T")[1].slice(0, 5));
                setLocation(activity.location);
            })
            .catch((error) => console.error("Error:", error));
    }, [id]);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value);
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const newActivity: IActivity = {
            ...activity,
            title: title,
            description: description,
            location: location,
            time: new Date(`${date}T${time}`).toISOString(),
        };

        fetch(`${process.env.REACT_APP_API_URL}/activity/${newActivity.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newActivity),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((text) => {
                        throw new Error(
                            `Request failed with status ${response.status}: ${text}`
                        );
                    });
                }
                // response is empty if succesful
                return response.text();
            })
            .then((_) => navigate("/admin/activities"))
            .catch((error) => console.error("Error:", error));
    };

    const maxLength = 300;
    const charsLeft = maxLength - description.length;
    //console.log(activity);

    return (
        <AdminLayout centered={true}>
            <h1 className="blue-text my-5">Activiteit toevoegen</h1>
            <Card className="w-50 shadow-lg">
                <Card.Body>
                    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                        <div className="d-flex flex-column">
                            <label htmlFor="activity-title">Titel</label>
                            <input
                                id="activity-title"
                                type="text"
                                placeholder="Titel van de activiteit"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="activity-description">Beschrijving</label>
                            <textarea
                                id="activity-description"
                                className="form-control"
                                style={{ height: "120px" }}
                                value={description}
                                onChange={handleDescriptionChange}
                                maxLength={maxLength}
                                placeholder="Beschrijving van de activiteit"
                            />
                            {charsLeft} characters left
                        </div>

                        <div className="d-flex gap-2">
                            <div className="d-flex flex-column">
                                <label htmlFor="activity-date">Datum</label>
                                <input
                                    id="activity-date"
                                    type="date"
                                    value={date}
                                    onChange={handleDateChange}
                                />
                            </div>
                            <div className="d-flex flex-column">
                                <label htmlFor="activity-time">Tijd</label>
                                <input
                                    id="activity-time"
                                    type="time"
                                    value={time}
                                    onChange={handleTimeChange}
                                />
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="activity-location">Locatie</label>
                            <input
                                id="activity-location"
                                type="text"
                                placeholder="Locatie van de activiteit"
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </div>

                        <Button type="submit">Activiteit toevoegen</Button>
                    </form>
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};

export default AdminEditActivity;

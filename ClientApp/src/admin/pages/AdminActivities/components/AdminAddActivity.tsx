import { Button, Card } from "react-bootstrap";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import { getApiUrl } from "../../../../utils/getApiUrl";

const AdminAddActivity = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

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

    const activity = {
      Title: title,
      Description: description,
      Location: location,
      Time: new Date(`${date}T${time}`).toISOString(),
    };

    fetch(`${getApiUrl()}/activity`, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `Request failed with status ${response.status}: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((_) => navigate("/admin/activities"))
      .catch((error) => console.error("Error:", error));
  };

  const maxLength = 300;
  const charsLeft = maxLength - description.length;

  return (
    <AdminLayout centered={true} role="admin-add-activity-page">
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
                role="title-input"
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
                role="description-input"
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
                  role="date-input"
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="activity-time">Tijd</label>
                <input
                  id="activity-time"
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  role="time-input"
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
                role="location-input"
              />
            </div>

            <Button type="submit" role="submit-button">Activiteit toevoegen</Button>
          </form>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default AdminAddActivity;

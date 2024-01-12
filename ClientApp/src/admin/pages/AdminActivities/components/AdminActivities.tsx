import { useEffect, useState } from "react";
import IActivity from "../../../../interfaces/IActivity";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import AdminActivityCard from "./AdminActivityCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../../../utils/isAdmin";
import { getApiUrl } from "../../../../utils/getApiUrl";

const AdminActivities = () => {
  const navigate = useNavigate();
  const admin = isAdmin();
  useEffect(() => {
    //console.log(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/login/admin");
    }
  }, [admin]);

  const [activities, setActivities] = useState<IActivity[]>([]);

  const refreshActivities = () => {
    fetch(`${getApiUrl()}/activity`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setActivities(data as IActivity[]));
  };

  useEffect(() => {
    refreshActivities();
  }, []);

  return (
    <AdminLayout role="admin-activities-page">
      <h1 className="my-5 blue-text">Activiteiten</h1>

      <Button href="/admin/activities/add" className="fw-bold">
        Activiteit toevoegen
      </Button>

      <div className="d-flex flex-column gap-3 mt-4">
        {activities.map((activity) => (
          <AdminActivityCard
            key={activity.id}
            onDelete={refreshActivities}
            activity={activity}
          />
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminActivities;

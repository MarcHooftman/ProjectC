import { useEffect, useState } from "react";
import IActivity from "../../../interfaces/IActivity";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import AdminActivityCard from "./AdminActivityCard";
import { Button } from "react-bootstrap";

const AdminActivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const refreshActivities = () => {
    fetch(`${process.env.REACT_APP_API_URL}/activity`)
      .then((response) => response.json())
      .then((data) => setActivities(data as IActivity[]));
  };

  useEffect(() => {
    refreshActivities();
  }, []);

  return (
    <AdminLayout>
      <h1 className="my-5 blue-text">Activiteiten</h1>

      <Button href="/admin/activities/add">Activiteit toevoegen</Button>

      <div className="d-flex flex-column gap-3 mt-4">
        {activities.map((activity) => (
          <AdminActivityCard key={activity.id} onDelete={refreshActivities} activity={activity} />
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminActivities;

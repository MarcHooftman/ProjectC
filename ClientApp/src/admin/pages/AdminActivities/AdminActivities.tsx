import React, { useEffect, useState } from "react";
import IActivity from "../../../interfaces/IActivity";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import AdminActivityCard from "./AdminActivityCard";

const AdminActivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/activity`)
      .then((response) => response.json())
      .then((data) => setActivities(data as IActivity[]));
  }, []);
  return (
    <AdminLayout>
      <h1 className="my-5 blue-text">Activiteiten</h1>

      <div className="d-flex flex-column gap-3">
        {activities.map((activity) => (
          <AdminActivityCard activity={activity} />
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminActivities;

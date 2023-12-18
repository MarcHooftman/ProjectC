import { Button } from "reactstrap"
import AdminLayout from "../../components/AdminLayout/AdminLayout"
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../../utils/isAdmin";
import { useEffect, useState } from "react";
import ITraining from "../../../interfaces/ITraining";
import AdminTrainingCard from "./AdminTrainingCard";

const AdminTrainings = () => {
    const navigate = useNavigate();
    const admin = isAdmin();
    useEffect(() => {
        console.log(localStorage.getItem("admin"));
        if (!admin) {
        navigate("/login/admin");
        }
    }, [admin]);

    const [trainings, setTrainings] = useState<ITraining[]>([]);

    const refreshTrainings = () => {
        fetch(`${process.env.REACT_APP_API_URL}/training`)
        .then((response) => response.json())
        .then((data) => setTrainings(data as ITraining[]));
    };

    useEffect(() => {
        refreshTrainings();
    }, []);
    
    
    return (
        <AdminLayout>
            <h1 className="my-5 blue-text">Trainingen</h1>
            <Button href="/admin/trainings/add">Training toevoegen</Button>
            <div className="d-flex flex-column gap-3 mt-4">
                {trainings.map((training) => (
                <AdminTrainingCard
                    key={training.id}
                    onDelete={refreshTrainings}
                    Training={training}
                />
                ))}
            </div>
        </AdminLayout>
    )
}

export default AdminTrainings
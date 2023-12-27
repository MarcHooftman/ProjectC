import { Button } from "react-bootstrap"
import AdminLayout from "../../components/AdminLayout/AdminLayout"
import { useNavigate, useSearchParams } from "react-router-dom";
import { isAdmin } from "../../../utils/isAdmin";
import { useEffect, useState } from "react";
import ITraining from "../../../interfaces/ITraining";
import AdminTrainingCard from "./AdminTrainingCard";
import { getApiUrl } from "../../../utils/getApiUrl";
import FilterDropdown from "../../../components/FilterDropdown";
import { filterData } from "../../../utils/sortTraining";

const AdminTrainings = () => {
    const [trainings, setTrainings] = useState<ITraining[]>([]);
    const [searchParams] = useSearchParams()
    const filter = searchParams.get('filter') || ""
    const navigate = useNavigate();
    const admin = isAdmin();
    useEffect(() => {
        console.log(localStorage.getItem("admin"));
        if (!admin) {
        navigate("/login/admin");
        }
    }, [admin]);


    const refreshTrainings = () => {
        fetch(`${getApiUrl()}/training`)
        .then((response) => response.json())
        .then((data) => setTrainings(data as ITraining[]));
    };

    useEffect(() => {
        refreshTrainings();
    }, [filter]);
    
    return (
        <AdminLayout>
            <span className="d-flex align-items-center justify-content-between">
            <h1 className="my-5 blue-text">Trainingen</h1>
            <FilterDropdown page={"admin/trainings"}/>
            </span>
            <Button  href="/admin/trainings/add">Training toevoegen</Button>
            <div className="d-flex flex-column gap-3 mt-4">
                {filterData(trainings, filter).map((training) => (
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
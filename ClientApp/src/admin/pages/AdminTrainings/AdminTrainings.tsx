import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../../utils/isAdmin";
import { useEffect } from "react";

const AdminTrainings = () => {
  const navigate = useNavigate();
  const admin = isAdmin();
  useEffect(() => {
    console.log(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/login/admin");
    }
  }, [admin]);
  return <div>AdminTrainings</div>;
};

export default AdminTrainings;

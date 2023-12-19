import { useEffect, useState } from "react";
import IProfile from "../../../interfaces/IProfile";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

import FilterDropdown from "../../../components/FilterDropdown";
import { useNavigate, useSearchParams } from "react-router-dom";
import IAdmin from "../../../interfaces/IAdmin";
import ITempUser from "../../../interfaces/ITempUser";
import EmployeeTable from "./Tables/EmployeeTable";
import AdminTable from "./Tables/AdminTable";
import TempTable from "./Tables/TempTable";
import { Button } from "react-bootstrap";
import { isAdmin } from "../../../utils/isAdmin";
import { getApiUrl } from "../../../utils/getApiUrl";

const AdminUsers = () => {
  const navigate = useNavigate();
  const admin = isAdmin();
  useEffect(() => {
    console.log(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/login/admin");
    }
  }, [admin]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [tempUsers, setTempUsers] = useState<ITempUser[]>([]);

  const fetchEmployees = () => {
    fetch(`${getApiUrl()}/profile`,
      {
        headers: {
          "ngrok-skip-browser-warning": "1",
        }
      },)
      .then((response) => response.json())
      .then((data) => {
        if (filter) {
          data = filterEmployees(data);
        }
        setProfiles(data as IProfile[]);
      });
  };

  const fetchAdmins = () => {
    fetch(`${getApiUrl()}/admin`,
      {
        headers: {
          "ngrok-skip-browser-warning": "1",
        }
      },)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (filter) {
          data = filterAdmins(data);
        }
        setAdmins(data as IAdmin[]);
      });
  };

  const fetchTempUsers = () => {
    fetch(`${getApiUrl()}/tempuser`,
      {
        headers: {
          "ngrok-skip-browser-warning": "1",
        }
      },)
      .then((response) => response.json())
      .then((data) => {
        if (filter) {
          data = filterTemps(data);
        }
        setTempUsers(data as ITempUser[]);
      });
  };

  function filterData(array: any[]) {
    if (!filter) return array;
    return array.filter((item) => {
      let values = Object.values(item);
      values = values.filter((v) => v !== null);
      return values.some((value) =>
        `${value}`.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }

  function filterAdmins(array: IAdmin[]) {
    if (filter && !["Tijdelijk", "Personeel", "Beheerders"].includes(filter)) {
      array = array.map((admin) => {
        admin.password = "";
        return admin;
      });
      return filterData(array);
    }
    return array;
  }

  function filterTemps(array: ITempUser[]) {
    if (filter && !["Tijdelijk", "Personeel", "Beheerders"].includes(filter)) {
      array = array.map((temp) => {
        temp.verificationCode = "";
        return temp;
      });
      return filterData(array);
    }
    return array;
  }

  function filterEmployees(array: IProfile[]) {
    if (filter && !["Tijdelijk", "Personeel", "Beheerders"].includes(filter)) {
      array = array.map((profile) => {
        profile.bio = "";
        return profile;
      });
      return filterData(array);
    }
    return array;
  }

  useEffect(() => {
    switch (filter) {
      case "Beheerders":
        fetchAdmins();
        setProfiles([]);
        setTempUsers([]);
        break;
      case "Tijdelijk":
        fetchTempUsers();
        setAdmins([]);
        setProfiles([]);
        break;
      case "Personeel":
        fetchEmployees();
        setAdmins([]);
        setTempUsers([]);
        break;
      default:
        fetchEmployees();
        fetchAdmins();
        fetchTempUsers();
        break;
    }
  }, [filter]);

  const removeFilter = () => {
    navigate("/admin/users");
  };

  return (
    <AdminLayout>
      <span className="forum-header d-flex justify-content-between align-items-center my-5">
        <h1 className="blue-text">Gebruikers</h1>
        <FilterDropdown
          page="admin/users"
          options={["Beheerders", "Tijdelijk", "Personeel"]}
        />
      </span>

      <div className="my-4">
        {filter && (
          <p className="blue-text m-0">
            Zoekresultaat voor <em>'{filter}'</em>:
          </p>
        )}
        {filter && (
          <u
            className="text-muted hover-pointer"
            onClick={() => removeFilter()}
          >
            filter wissen
          </u>
        )}
      </div>

      <div className="d-flex flex-column gap-4">
        {profiles.length > 0 && (
          <div>
            <h4 className="blue-text">Personeel</h4>
            <EmployeeTable profiles={profiles} filter={filter || ""} />
          </div>
        )}
        {admins.length > 0 && (
          <div>
            <span className="d-flex align-items-center justify-content-between">
              <h4 className="blue-text">Beheerders</h4>
              <Button
                onClick={() => navigate("create/admin")}
                size="sm"
                className="mb-2"
              >
                Beheerder toevoegen
              </Button>
            </span>
            <AdminTable admins={admins} filter={filter || ""} />
          </div>
        )}
        {tempUsers.length > 0 && (
          <div>
            <span className="d-flex align-items-center justify-content-between">
              <h4 className="blue-text">Tijdelijke gebruikers</h4>
              <Button
                onClick={() => navigate("create/temp")}
                size="sm"
                className="mb-2"
              >
                Tijdelijke gebruiker toevoegen
              </Button>
            </span>
            <TempTable tempUsers={tempUsers} filter={filter || ""} />
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;

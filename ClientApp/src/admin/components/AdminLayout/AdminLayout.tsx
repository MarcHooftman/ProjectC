import { Container } from "reactstrap";
import AdminNavMenu from "../AdminNavMenu/AdminNavMenu";

interface Props {
  children?: any;
  centered?: boolean;
  cover?: React.ReactNode;
  role?: string;
}

const AdminLayout = ({
  children,
  cover,
  centered = false,
  role = "",
}: Props) => {
  return (
    <div className="bg-color pb-5" role="admin-layout">
      <AdminNavMenu />
      {cover || <></>}
      <Container
        tag="main"
        className={centered ? " d-flex flex-column align-items-center" : ""}
        role={role}
      >
        {children}
      </Container>
    </div>
  );
};

export default AdminLayout;

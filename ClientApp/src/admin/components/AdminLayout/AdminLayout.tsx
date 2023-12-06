import { Container } from "reactstrap";
import AdminNavMenu from "../AdminNavMenu/AdminNavMenu";

interface Props {
  children?: any;
  centered?: boolean;
  cover?: React.ReactNode;
}

const AdminLayout = ({ children, cover, centered = false }: Props) => {
  return (
    <>
      <div className="bg-color pb-5">
        <AdminNavMenu />
        {cover || <></>}
        <Container
          tag="main"
          className={centered ? " d-flex flex-column align-items-center" : ""}
        >
          {children}
        </Container>
      </div>
    </>
  );
};

export default AdminLayout;

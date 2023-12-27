import { Card, Col, Row } from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./AdminDashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin } from "../../../utils/isAdmin";
import { useEffect } from "react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const admin = isAdmin();
  useEffect(() => {
    console.log(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/login/admin");
    }
  }, [admin]);
  return (
    <AdminLayout centered={true}>
      <h1 className="my-5 blue-text">Admin dashboard</h1>
      <Row className="d-flex justify-content-center">
        <Col
          xs={4}
          as={Link}
          to="/admin/forum"
          className="py-3 text-decoration-none"
        >
          <Card className="c shadow-lg p-3 bg-antes-primary">
            <Card.Body>
              <Card.Title className="mb-5" as="h2">
                Forum beheren
              </Card.Title>
              <h5>Posts bekijken</h5>
              <h5>Posts verwijderen</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={4}
          as={Link}
          to="/admin/activities"
          className="py-3 text-decoration-none"
        >
          <Card className="c shadow-lg p-3 bg-antes-primary">
            <Card.Body>
              <Card.Title className="mb-5" as="h2">
                Activiteiten beheren
              </Card.Title>
              <h5>Activiteiten bekijken</h5>
              <h5>Activiteiten toevoegen</h5>
              <h5>Activiteiten verwijderen</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={4}
          as={Link}
          to="/admin/trainings"
          className="py-3 text-decoration-none"
        >
          <Card className="c shadow-lg p-3 bg-antes-primary">
            <Card.Body>
              <Card.Title className="mb-5" as="h2">
                Trainingen beheren
              </Card.Title>
              <h5>Trainingen bekijken</h5>
              <h5>Trainingen toevoegen</h5>
              <h5>Trainingen verwijderen</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={4}
          as={Link}
          to="/admin/reports"
          className="py-3 text-decoration-none"
        >
          <Card className="c shadow-lg p-3 bg-antes-primary">
            <Card.Body>
              <Card.Title className="mb-5" as="h2">
                Reports beheren
              </Card.Title>
              <h5>Reports bekijken</h5>
              <h5>Reports toevoegen</h5>
              <h5>Reports verwijderen</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={4}
          as={Link}
          to="/admin/users"
          className="py-3 text-decoration-none"
        >
          <Card className="c shadow-lg p-3 bg-antes-primary">
            <Card.Body>
              <Card.Title className="mb-5" as="h2">
                Gebruikers beheren
              </Card.Title>
              <h5>Gebruikers bekijken</h5>
              <h5>Tijdelijke gebruiker toevoegen</h5>
              <h5>Admin toevoegen</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={4}
          as={Link}
          to="/"
          className="py-3 text-decoration-none"
          onClick={() => {
            localStorage.removeItem("admin");
          }}
        >
          <Card className="c shadow-lg p-3 bg-antes-primary">
            <Card.Body>
              <Card.Title className="mb-5" as="h2">
                Home pagina
              </Card.Title>
              <h5>Uitloggen als admin</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default AdminDashboard;

import { Button, Card, Form } from "react-bootstrap";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import { useState } from "react";
import IAdmin from "../../../../interfaces/IAdmin";
import { useNavigate } from "react-router-dom";

const AdminAddAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const admin: IAdmin = {
      email: email,
      password: "",
    };
    fetch(`${process.env.REACT_APP_API_URL}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    }).then(() => {
      navigate("/admin/users");
    });
  };

  return (
    <AdminLayout centered={true}>
      <h1 className="my-5 blue-text">Beheerder rechten geven</h1>
      <Card className="shadow-lg">
        <Card.Body className="p-4">
          <Form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center">
              <Form.Label>Email adres</Form.Label>
              <Form.Control
                type="email"
                placeholder="voorbeeld@antes.nl"
                className="text-center"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="admin-warning"
              />
              <Form.Text className="text-danger text-wrap text-center">
                Let op! Deze rechten bieden toegang tot het admin dashboard.
                <br></br>
                Alleen beheerders met hogere niveau's kunnen rechten intrekken.
              </Form.Text>
            </div>
            <Button type="submit">Versturen</Button>
          </Form>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default AdminAddAdmin;

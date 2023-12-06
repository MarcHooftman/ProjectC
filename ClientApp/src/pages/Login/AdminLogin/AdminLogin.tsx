import { Button, Card, Form } from "react-bootstrap";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [authComplete, setAuthComplete] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (authComplete) {
      navigate("/admin");
    }
  }, [authComplete]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        setAuthComplete(true);
      }
    });
  };

  return (
    <Layout centered={true}>
      <h1 className="my-5 blue-text">Inloggen als beheerder</h1>
      <Card className="shadow-lg">
        <Card.Body>
          <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>E-mailadres</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mailadres"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Wachtwoord</Form.Label>
              <Form.Control
                type="password"
                placeholder="Wachtwoord"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit">Inloggen</Button>
          </Form>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default AdminLogin;

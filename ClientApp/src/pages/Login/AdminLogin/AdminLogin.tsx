import { Button, Card, Form } from "react-bootstrap";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [authComplete, setAuthComplete] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (authComplete) {
      localStorage.setItem("admin", email || "invalid");
      navigate("/admin");
    }
  }, [authComplete]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setFeedback("");
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/auth/admin`, {
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
      } else {
        setFeedback("E-mailadres of wachtwoord is onjuist.");
      }
    });
  };

  return (
    <Layout centered={true}>
      <h1 className="my-5 blue-text">Inloggen als beheerder</h1>
      <Card className="shadow-lg w-25">
        <Card.Body>
          <Form
            className="d-flex flex-column align-items-center gap-3"
            onSubmit={handleSubmit}
          >
            <Form.Group className="d-flex flex-column align-items-center w-100">
              <Form.Label htmlFor="admin-email">E-mailadres</Form.Label>
              <Form.Control
                id="admin-email"
                type="email"
                placeholder="E-mailadres"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-center w-100">
              <Form.Label htmlFor="admin-password">Wachtwoord</Form.Label>
              <Form.Control
                id="admin-password"
                type="password"
                placeholder="Wachtwoord"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-center gap-2 w-100">
              <Form.Control.Feedback
                as="p"
                type="invalid"
                className="d-flex justify-content-center m-0"
              >
                {feedback}
              </Form.Control.Feedback>
              <Button type="submit" className="w-50">
                Inloggen
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default AdminLogin;

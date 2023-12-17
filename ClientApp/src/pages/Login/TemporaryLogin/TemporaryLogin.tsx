import { Button, Card, Form } from "react-bootstrap";
import Layout from "../../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
import "./TemporaryLogin.scss";

const TemporaryLogin = () => {
  const [email, setEmail] = useState<string>();
  const [code, setCode] = useState<string>();
  const [authComplete, setAuthComplete] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (authComplete) {
      navigate("/");
    }
  }, [authComplete]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setFeedback([]);
    event.preventDefault();
    const tempUser = {
      email: email,
      verificationCode: code,
    };
    console.log(tempUser);
    fetch(`${process.env.REACT_APP_API_URL}/auth/temp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempUser),
    }).then((response) => {
      if (response.ok) {
        localStorage.setItem("temporaryUser", JSON.stringify(tempUser));
        setAuthComplete(true);
      } else {
        setFeedback([
          "E-mailadres of wachtwoord is onjuist.",
          "Mogelijk is de verificatiecode verlopen.",
        ]);
      }
    });
  };

  return (
    <Layout centered={true}>
      <h1 className="my-5 blue-text">Inloggen met verificatie code</h1>
      <Card className="shadow-lg w-25">
        <Card.Body>
          <Form
            className="d-flex flex-column align-items-center gap-3"
            onSubmit={handleSubmit}
          >
            <Form.Group className="d-flex flex-column align-items-center w-100">
              <Form.Label htmlFor="temp-email">E-mailadres</Form.Label>
              <Form.Control
                id="temp-email"
                type="email"
                placeholder="E-mailadres"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-center w-100">
              <Form.Label>Verificatie code</Form.Label>
              <VerificationInput
                onChange={(value) => setCode(value)}
                // enable custom classnames for styling (https://www.npmjs.com/package/react-verification-input)
                classNames={{
                  container: "verification-input-container",
                  character: "verification-input-character",
                }}
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-center gap-2 w-100">
              <Form.Control.Feedback
                as="p"
                type="invalid"
                className="d-flex flex-column justify-content-center text-center m-0"
              >
                {feedback.map((line, index) => (
                  <small key={index}>{line}</small>
                ))}
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

export default TemporaryLogin;

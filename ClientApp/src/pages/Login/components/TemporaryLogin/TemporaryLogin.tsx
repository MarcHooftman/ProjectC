import { Button, Card, Form } from "react-bootstrap";
import Layout from "../../../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
import "./TemporaryLogin.scss";
import { getApiUrl } from "../../../../utils/getApiUrl";
import loginPicture from "../../../../assets/Zorgboulevard.jpg";

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
    fetch(`${getApiUrl()}/auth/temp`, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "1",
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
    <Layout centered={true} role="temp-login-page">
      <h1 className="my-5 blue-text text-center fw-bolder">
        Inloggen met verificatie code
      </h1>
      <Card className="shadow-lg d-flex flex-row login-card">
        <img src={loginPicture} className="object-fit-cover login-picture" />
        <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center">
          <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <Form.Group className="d-flex flex-column align-items-start w-100">
              <Form.Label htmlFor="temp-email" className="antes-secondary">
                E-mailadres
              </Form.Label>
              <Form.Control
                id="temp-email"
                type="email"
                placeholder="E-mailadres"
                onChange={(e) => setEmail(e.target.value)}
                role="email-input"
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-start w-100" role="code-input">
              <Form.Label className="antes-secondary">
                Verificatie code
              </Form.Label>
              <VerificationInput
                onChange={(value) => setCode(value)}
                // enable custom classnames for styling (https://www.npmjs.com/package/react-verification-input)
                classNames={{
                  container: "verification-input-container",
                  character: "verification-input-character",
                }}
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-start gap-2 w-100">
              <Form.Control.Feedback
                as="p"
                type="invalid"
                className="d-flex flex-column justify-content-center text-center m-0"
              >
                {feedback.map((line, index) => (
                  <small key={index}>{line}</small>
                ))}
              </Form.Control.Feedback>
              <Button type="submit" className="w-50" role="submit-button">
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

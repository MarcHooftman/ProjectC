import { Card } from "react-bootstrap";
import Layout from "../../../components/Layout";
import "./Login.scss";
import { MicrosoftSignInButton } from "./Buttons/MicrosoftSignInButton";
import AdminSignInButton from "./Buttons/AdminSignInButton";
import TemporarySignInButton from "./Buttons/TemporarySignInButton";
import loginPicture from "../../../assets/Zorgboulevard.jpg";

const Login = () => {
  return (
    <Layout centered={true} role="login-page">
      <h1 className="my-5 blue-text fw-bolder">Inloggen</h1>
      <Card className="shadow-lg d-flex flex-row login-card">
        <img src={loginPicture} className="object-fit-cover login-picture" />
        <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center">
          <MicrosoftSignInButton />
          <div className="d-flex flex-column mt-4 gap-1">
            <div>
              <h6 className="antes-secondary">Andere inlog-opties</h6>
              <TemporarySignInButton />
            </div>
            <AdminSignInButton />
          </div>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Login;

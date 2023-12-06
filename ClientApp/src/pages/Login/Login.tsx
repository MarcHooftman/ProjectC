import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./Login.scss";
import { MicrosoftSignInButton } from "./Buttons/MicrosoftSignInButton";
import AdminSignInButton from "./Buttons/AdminSignInButton";
import TemporarySignInButton from "./Buttons/TemporarySignInButton";

const Login = () => {

  return (
    <Layout centered={true}>
      <h1 className="my-5 blue-text">Inloggen</h1>
      <Card className="shadow-lg">
        <Card.Body className="p-4">
          <MicrosoftSignInButton />
        </Card.Body>
        <Card.Footer className="p-4 d-flex flex-column gap-1">
          <h6 className="text-dark opacity-50">Andere inlog-opties</h6>
          <TemporarySignInButton />
          <AdminSignInButton />
        </Card.Footer>
      </Card>
    </Layout>
  )
};

export default Login;

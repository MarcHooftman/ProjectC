import Layout from "../../components/Layout";
import { useState } from "react";

import "./Registration.scss";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    //console.log({ email, password });
    fetch("https://localhost:7185/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    navigate(`/create-profile/${email}`);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="my-5 blue-text">Registreren</h1>
            <Card className="shadow-lg">
              <Card.Body className="">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  {/* Email Input */}
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Voer uw email in"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password Input */}
                  <div className="form-group mb-3 mt-3">
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Voer uw wachtwoord in"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* Sign In Button */}
                  <button type="submit" className="btn btn-primary">
                    Registreer
                  </button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;

import Layout from "../../components/Layout";
import { useState } from "react";

import "./Registration.scss";

const Registration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    //console.log({ email, password });
    fetch("https://localhost:7185/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="my-5 blue-text">Registreren</h1>
            <div className="card shadow-lg">
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  {/* Email Input */}
                  <div className="form-group mb-3">
                    {" "}
                    {/* evt mt-3 */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;

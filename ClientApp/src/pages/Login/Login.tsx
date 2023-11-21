import Layout from "../../components/Layout";
import { useState } from "react";

import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/isLoggedIn";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const checkLogin = () => {
    fetch(`https://localhost:7185/api/user/by-email/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data?.password === password) {
          localStorage.setItem("user", data.id);
          navigate("/");
        } else {
          console.log("failed...");
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="my-5 blue-text">Inloggen</h1>
            <div className="card shadow-lg">
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkLogin();
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
                    Log in
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

export default Login;

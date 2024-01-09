import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../components/Login";

describe("LoginPage", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Login />
      </Router>
    );

    const login = getByRole("login-page");
    expect(login).toBeInTheDocument();
  });
});

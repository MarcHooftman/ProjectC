import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "../components/AdminLogin/AdminLogin";

describe("AdminLogin", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminLogin />
      </Router>
    );

    const adminLogin = getByRole("admin-login-page");
    expect(adminLogin).toBeInTheDocument();
  });
});

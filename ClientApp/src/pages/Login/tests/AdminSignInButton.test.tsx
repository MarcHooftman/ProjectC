import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminSignInButton from "../components/Buttons/AdminSignInButton";

describe("AdminSignInButton", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminSignInButton />
      </Router>
    );

    const button = getByRole("admin-signin-button");
    expect(button).toBeInTheDocument();
  });
});

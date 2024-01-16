import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../components/Login";

describe("LoginPage", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <Login />
      </Router>
    );
    getByRole = renderResult.getByRole;
  })

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the login-page", () => {
    const login = getByRole("login-page");
    expect(login).toBeInTheDocument();
  });

  it("displays the temp-signin-button", () => {   
    const tempSignInButton = getByRole("temp-signin-button");
    expect(tempSignInButton).toBeInTheDocument();
  });

  it("displays the admin-signin-button", () => {   
    const adminSignInButton = getByRole("admin-signin-button");
    expect(adminSignInButton).toBeInTheDocument();
  });

  it("displays the microsoft-signin-button", () => {   
    const microsoftSignInButton = getByRole("microsoft-signin-button");
    expect(microsoftSignInButton).toBeInTheDocument();
  });
});

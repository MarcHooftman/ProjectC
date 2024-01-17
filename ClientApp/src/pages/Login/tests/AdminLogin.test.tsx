import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "../components/AdminLogin/AdminLogin";

describe("AdminLogin", () => {
  let getByRole: (text: string) => HTMLElement;
  let getElementById: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminLogin />
      </Router>
    );
    getByRole = renderResult.getByRole;
    getElementById = renderResult.getByTestId;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-login-page", () => {
    const adminLogin = getByRole("admin-login-page");
    expect(adminLogin).toBeInTheDocument();
  });

  it("displays an email input", () => {
    const emailInput = getByRole("email-input");
    expect(emailInput).toBeInTheDocument();
  });

  it("displays a password input", () => {
    const passwordInput = getByRole("password-input");
    expect(passwordInput).toBeInTheDocument();
  });

  it("displays a submit button", () => {
    const submitButton = getByRole("submit-button");
    expect(submitButton).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TemporaryLogin from "../components/TemporaryLogin/TemporaryLogin";

describe("TemporaryLogin", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <TemporaryLogin />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });


  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the temp-login-page", () => {
    const page = getByRole("temp-login-page");
    expect(page).toBeInTheDocument();
  });

  it("displays an email input", () => {
    const emailInput = getByRole("email-input");
    expect(emailInput).toBeInTheDocument();
  });

  it("displays a code input", () => {
    const passwordInput = getByRole("code-input");
    expect(passwordInput).toBeInTheDocument();
  });

  it("displays a submit button", () => {
    const submitButton = getByRole("submit-button");
    expect(submitButton).toBeInTheDocument();
  });
});

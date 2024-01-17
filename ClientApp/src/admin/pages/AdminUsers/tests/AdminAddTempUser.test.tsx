import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddTempUser from "../components/Add/AdminAddTempUser";

describe("AdminAddTempUser", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <AdminAddTempUser />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the admin-add-temp-page", () => {
    const page = getByRole("admin-add-temp-page");
    expect(page).toBeInTheDocument();
  });

  it("renders the email-input", () => {
    const input = getByRole("email-input");
    expect(input).toBeInTheDocument();
  });

  it("renders the expiry-input", () => {
    const input = getByRole("expiry-input");
    expect(input).toBeInTheDocument();
  });

  it("renders the submit-button", () => {
    const button = getByRole("submit-button");
    expect(button).toBeInTheDocument();
  });
});

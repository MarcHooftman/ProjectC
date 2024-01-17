import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddAdmin from "../components/Add/AdminAddAdmin";

describe("AdminAddAdmin", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <AdminAddAdmin />
      </Router>
    );
    getByRole = component.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the admin-add-admin-page", () => {
    const page = getByRole("admin-add-admin-page");
    expect(page).toBeInTheDocument();
  });

  it("renders the email-input", () => {
    const input = getByRole("email-input");
    expect(input).toBeInTheDocument();
  });

  it("renders the warning", () => {
    const warning = getByRole("warning");
    expect(warning).toBeInTheDocument();
  });

  it("renders the submit-button", () => {
    const button = getByRole("submit-button");
    expect(button).toBeInTheDocument();
  });
});

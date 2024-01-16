import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

describe("AdminDashboard", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <AdminDashboard />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the admin-dashboard-page", () => {
    const page = getByRole("admin-dashboard-page");
    expect(page).toBeInTheDocument();
  });

  it("renders the forum-card", () => {
    const card = getByRole("forum-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the activity-card", () => {
    const card = getByRole("activity-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the training-card", () => {
    const card = getByRole("training-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the user-card", () => {
    const card = getByRole("user-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the report-card", () => {
    const card = getByRole("report-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the logout-card", () => {
    const card = getByRole("logout-card");
    expect(card).toBeInTheDocument();
  });
});

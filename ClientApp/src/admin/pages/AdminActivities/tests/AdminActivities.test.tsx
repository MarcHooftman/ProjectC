import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminActivities from "../components/AdminActivities";

describe("AdminActivities", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminActivities />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-activities-page", () => {
    const page = getByRole("admin-activities-page");
    expect(page).toBeInTheDocument();
  });

  it("displays the add-activity-button", () => {
    const button = getByRole("add-activity-button");
    expect(button).toBeInTheDocument();
  });
});

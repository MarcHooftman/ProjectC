import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminTrainings from "../components/AdminTrainings";

describe("AdminTrainings", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminTrainings />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-trainings-page", () => {
    const page = getByRole("admin-trainings-page");
    expect(page).toBeInTheDocument();
  });

  it("displays the filter-dropdown", () => {
    const dropdown = getByRole("filter-dropdown");
    expect(dropdown).toBeInTheDocument();
  });
});

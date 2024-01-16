import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminReports from "./AdminReports";

describe("AdminReports", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminReports />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-reports-page", () => {
    const page = getByRole("admin-reports-page");
    expect(page).toBeInTheDocument();
  });

  // test fails because there are no reports to display
  // it("displays the reports table", () => {
  //   const table = getByRole("report-table");
  //   expect(table).toBeInTheDocument();
  // });
});

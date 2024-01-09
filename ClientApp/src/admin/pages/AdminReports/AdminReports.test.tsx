import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminReports from "./AdminReports";

describe("AdminReports", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminReports />
      </Router>
    );

    const page = getByRole("admin-reports-page");
    expect(page).toBeInTheDocument();
  });
});

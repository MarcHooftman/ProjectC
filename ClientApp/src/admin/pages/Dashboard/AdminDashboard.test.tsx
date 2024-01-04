import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

describe("AdminDashboard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminDashboard />
      </Router>
    );

    const page = getByRole("admin-dashboard-page");
    expect(page).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddActivity from "../components/AdminAddActivity";

describe("AdminAddActivity", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminAddActivity />
      </Router>
    );

    const page = getByRole("admin-add-activity-page");
    expect(page).toBeInTheDocument();
  });
});

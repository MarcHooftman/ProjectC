import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminEditActivity from "../components/AdminEditActivity";

describe("AdminEditActivity", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminEditActivity />
      </Router>
    );

    const page = getByRole("admin-edit-activity-page");
    expect(page).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminActivities from "../components/AdminActivities";

describe("AdminActivities", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminActivities />
      </Router>
    );

    const page = getByRole("admin-activities-page");
    expect(page).toBeInTheDocument();
  });
});

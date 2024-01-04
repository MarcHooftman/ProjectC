import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminUsers from "../components/AdminUsers";

describe("AdminTrainingCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminUsers />
      </Router>
    );

    const page = getByRole("admin-users-page");
    expect(page).toBeInTheDocument();
  });
});

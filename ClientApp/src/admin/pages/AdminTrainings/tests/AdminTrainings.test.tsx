import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminTrainings from "../components/AdminTrainings";

describe("AdminTrainings", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminTrainings />
      </Router>
    );

    const page = getByRole("admin-trainings-page");
    expect(page).toBeInTheDocument();
  });
});

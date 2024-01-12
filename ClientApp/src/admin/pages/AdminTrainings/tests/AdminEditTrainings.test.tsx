import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminEditTrainings from "../components/AdminEditTrainings";

describe("AdminEditTraining", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminEditTrainings />
      </Router>
    );

    const page = getByRole("admin-edit-training-page");
    expect(page).toBeInTheDocument();
  });
});

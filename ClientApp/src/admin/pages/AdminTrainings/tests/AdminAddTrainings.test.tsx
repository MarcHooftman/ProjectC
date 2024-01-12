import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddTrainings from "../components/AdminAddTrainings";

describe("AdminAddTraining", () => {
  it("renders without crashing", async () => {
    const { getByRole } = render(
      <Router>
        <AdminAddTrainings />
      </Router>
    );
    const page = getByRole("admin-add-training-page");
    expect(page).toBeInTheDocument();
    ;
  });
});

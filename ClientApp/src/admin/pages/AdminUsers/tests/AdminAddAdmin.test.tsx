import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddAdmin from "../components/Add/AdminAddAdmin";

describe("AdminAddAdmin", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminAddAdmin />
      </Router>
    );

    const page = getByRole("admin-add-admin-page");
    expect(page).toBeInTheDocument();
  });
});

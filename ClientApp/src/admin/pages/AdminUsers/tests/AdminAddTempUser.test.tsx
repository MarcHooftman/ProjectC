import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddTempUser from "../components/Add/AdminAddTempUser";

describe("AdminAddTempUser", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminAddTempUser />
      </Router>
    );

    const page = getByRole("admin-add-temp-page");
    expect(page).toBeInTheDocument();
  });
});

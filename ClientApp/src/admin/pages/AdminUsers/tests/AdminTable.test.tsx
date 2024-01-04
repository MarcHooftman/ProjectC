import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminTable from "../components/Tables/AdminTable";

describe("AdminTable", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminTable admins={[]} />
      </Router>
    );

    const component = getByRole("admin-table");
    expect(component).toBeInTheDocument();
  });
});

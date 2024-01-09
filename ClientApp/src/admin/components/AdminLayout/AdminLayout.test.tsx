import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLayout from "./AdminLayout";

describe("AdminLayout", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminLayout />
      </Router>
    );

    const component = getByRole("admin-layout");
    expect(component).toBeInTheDocument();
  });
});

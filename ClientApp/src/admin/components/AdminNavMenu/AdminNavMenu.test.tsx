import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminNavMenu from "./AdminNavMenu";

describe("AdminNavMenu", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminNavMenu />
      </Router>
    );

    const component = getByRole("admin-navmenu");
    expect(component).toBeInTheDocument();
  });
});

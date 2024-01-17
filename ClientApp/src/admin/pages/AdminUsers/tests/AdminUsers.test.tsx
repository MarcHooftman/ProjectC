import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminUsers from "../components/AdminUsers";

describe("AdminUsers", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <AdminUsers />
      </Router>
    );
    getByRole = component.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the admin-users-page", () => {
    const component = getByRole("admin-users-page");
    expect(component).toBeInTheDocument();
  });

  it("renders the page-title", () => {
    const component = getByRole("page-title");
    expect(component).toBeInTheDocument();
  });

  it("renders the filter-dropdown", () => {
    const component = getByRole("filter-dropdown");
    expect(component).toBeInTheDocument();
  });
});

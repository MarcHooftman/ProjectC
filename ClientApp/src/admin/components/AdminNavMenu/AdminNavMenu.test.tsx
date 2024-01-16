import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminNavMenu from "./AdminNavMenu";

describe("AdminNavMenu", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminNavMenu />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-navmenu", () => {
    const component = getByRole("admin-navmenu");
    expect(component).toBeInTheDocument();
  });

  it("displays the nav-brand", () => {
    const component = getByRole("nav-brand");
    expect(component).toBeInTheDocument();
  });

  it("displays the nav", () => {
    const component = getByRole("nav");
    expect(component).toBeInTheDocument();
  });

  it("displays the dropdown", () => {
    const component = getByRole("dropdown");
    expect(component).toBeInTheDocument();
  });

  it("displays the dropdown-toggle", () => {
    const component = getByRole("dropdown-toggle");
    expect(component).toBeInTheDocument();
  });
});

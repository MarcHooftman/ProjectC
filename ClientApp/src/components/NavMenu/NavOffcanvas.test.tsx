import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavOffcanvas from "./NavOffcanvas";

describe("NavOffcanvas", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <NavOffcanvas show={true} />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a nav-offcanvas", () => {
    const component = getByRole("nav-offcanvas");
    expect(component).toBeInTheDocument();
  });

  it("renders a nav-offcanvas-toggle", () => {
    const component = getByRole("offcanvas-toggle");
    expect(component).toBeInTheDocument();
  });

  it("renders a nav-offcanvas-toggle-off", () => {
    const component = getByRole("offcanvas-toggle-off");
    expect(component).toBeInTheDocument();
  });

  it("renders a nav-offcanvas-title", () => {
    const component = getByRole("offcanvas-title");
    expect(component).toBeInTheDocument();
  });

  it("renders a nav-offcanvas-nav", () => {
    const component = getByRole("nav-offcanvas-nav");
    expect(component).toBeInTheDocument();
  });
});

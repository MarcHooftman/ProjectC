import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./NavMenu";

describe("NavMenu", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <NavMenu />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a navmenu", () => {
    const component = getByRole("navmenu");
    expect(component).toBeInTheDocument();
  });

  it("renders a nav-brand", () => {
    const component = getByRole("nav-brand");
    expect(component).toBeInTheDocument();
  });

  it("renders a profile-icon", () => {
    const component = getByRole("profile-icon");
    expect(component).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavDropdown from "./NavDropDown";

describe("NavDropdown", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <NavDropdown />
      </Router>
    );

    const component = getByRole("nav-dropdown");
    expect(component).toBeInTheDocument();
  });
});

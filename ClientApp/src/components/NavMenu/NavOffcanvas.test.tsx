import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavOffcanvas from "./NavOffcanvas";

describe("NavOffcanvas", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <NavOffcanvas show={true} />
      </Router>
    );

    const component = getByRole("nav-offcanvas");
    expect(component).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./NavMenu";

describe("NavMenu", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <NavMenu />
      </Router>
    );

    const component = getByRole("navmenu");
    expect(component).toBeInTheDocument();
  });
});

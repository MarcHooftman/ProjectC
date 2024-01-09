import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";

describe("FilterDropdown", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <FilterDropdown page="/" />
      </Router>
    );

    const component = getByRole("filter-dropdown");
    expect(component).toBeInTheDocument();
  });
});

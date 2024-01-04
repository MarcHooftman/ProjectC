import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CoverCard from "./CoverCard";

describe("CoverCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <CoverCard />
      </Router>
    );

    const component = getByRole("cover-card");
    expect(component).toBeInTheDocument();
  });
});

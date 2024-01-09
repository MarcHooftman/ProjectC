import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";

describe("NextActivityCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Home />
      </Router>
    );

    const home = getByRole("home-page");
    expect(home).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import About from "../components/About";
import { BrowserRouter as Router } from "react-router-dom";

describe("About", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <About />
      </Router>
    );

    // Check if the map iframe is displayed
    const about = getByRole("about-page");
    expect(about).toBeInTheDocument();
  });
});

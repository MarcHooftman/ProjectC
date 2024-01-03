import { render } from "@testing-library/react";
import Activities from "../components/Activities";
import { BrowserRouter as Router } from "react-router-dom";

describe("Activities", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <Router>
        <Activities />
      </Router>
    );

    // Check if the main heading is displayed
    const mainHeading = getByText("Activiteiten");
    expect(mainHeading).toBeInTheDocument();
  });
});

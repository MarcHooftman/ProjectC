import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Tutorial from "../components/Tutorial/Tutorial";

describe("Tutorial", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Tutorial show={true} onHide={() => {}} />
      </Router>
    );

    const tutorial = getByRole("tutorial-modal");
    expect(tutorial).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Training from "../components/Training";

describe("Training", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Training />
      </Router>
    );

    const page = getByRole("training-page");
    expect(page).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Training from "../components/Training";

describe("Training", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <Training />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the training-page", () => {
    const page = getByRole("training-page");
    expect(page).toBeInTheDocument();
  });
});

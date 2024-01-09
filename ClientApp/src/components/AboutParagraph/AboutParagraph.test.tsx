import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AboutParagraph from "./AboutParagraph";

describe("AboutParagraph", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AboutParagraph />
      </Router>
    );

    const component = getByRole("about-paragraph");
    expect(component).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Footer />
      </Router>
    );

    const component = getByRole("footer");
    expect(component).toBeInTheDocument();
  });
});

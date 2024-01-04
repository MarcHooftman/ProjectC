import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Layout />
      </Router>
    );

    const component = getByRole("layout");
    expect(component).toBeInTheDocument();
  });
});

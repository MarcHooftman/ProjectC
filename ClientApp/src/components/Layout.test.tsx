import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

describe("Layout", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <Layout role="container" />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the layout", () => {
    const component = getByRole("layout");
    expect(component).toBeInTheDocument();
  });

  it("displays the container", () => {  
    const container = getByRole("container");
    expect(container).toBeInTheDocument();
  });
});

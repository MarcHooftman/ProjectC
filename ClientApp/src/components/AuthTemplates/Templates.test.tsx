import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomAuthenticatedTemplate from "./CustomAuthenticatedTemplate";
import CustomUnauthenticatedTemplate from "./CustomUnauthenticatedTemplate";

describe("CustomAuthenticatedTemplate", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <CustomAuthenticatedTemplate />
      </Router>
    );

    const component = getByRole("auth-template");
    expect(component).toBeInTheDocument();
  });
});

describe("CustomUnauthenticatedTemplate", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <CustomUnauthenticatedTemplate />
      </Router>
    );

    const component = getByRole("unauth-template");
    expect(component).toBeInTheDocument();
  });
});

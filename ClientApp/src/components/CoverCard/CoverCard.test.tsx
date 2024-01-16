import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CoverCard from "./CoverCard";

describe("CoverCard", () => {
  let getByRole: (role: string) => HTMLElement;

  beforeEach(() => {
    const component = render(
      <Router>
        <CoverCard />
      </Router>
    );
    getByRole = component.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a cover-card", () => {
    const component = getByRole("cover-card");
    expect(component).toBeInTheDocument();
  });

  it("renders a cover-image", () => {
    const component = getByRole("cover-image");
    expect(component).toBeInTheDocument();
  });

  it("renders a cover-greeting", () => {
    const component = getByRole("cover-greeting");
    expect(component).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import About from "../components/About";
import { BrowserRouter as Router } from "react-router-dom";

describe("About", () => {
  let getByRole: (text: string) => HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <Router>
        <About />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the about-page", () => {
    const about = getByRole("about-page");
    expect(about).toBeInTheDocument();
  });

  it("displays the general-info-card", () => {
    const generalInfoCard = getByRole("general-info-card");
    expect(generalInfoCard).toBeInTheDocument();
  });

  it("displays the map-frame", () => {
    const mapFrame = getByRole("map-frame");
    expect(mapFrame).toBeInTheDocument();
  });
});
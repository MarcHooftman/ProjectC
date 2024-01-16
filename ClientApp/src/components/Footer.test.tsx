import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

describe("Footer", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <Footer />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the footer", () => {
    const component = getByRole("footer");
    expect(component).toBeInTheDocument();
  });

  it("displays the footer-links", () => {
    const links = getByRole("footer-links");
    expect(links).toBeInTheDocument();
  });

  it("displays the social-links", () => {
    const socialLinks = getByRole("social-links");
    expect(socialLinks).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TextInputWithCounter from "./TextInputWithCounter";

describe("TextInputWithCounter", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <TextInputWithCounter />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the text-input-counter", () => {
    const component = getByRole("text-input-counter");
    expect(component).toBeInTheDocument();
  });

  it("renders the text-input", () => {
    const component = getByRole("text-input");
    expect(component).toBeInTheDocument();
  });

  it("renders the chars-left", () => {
    const component = getByRole("chars-left");
    expect(component).toBeInTheDocument();
  });
});

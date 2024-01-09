import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TextInputWithCounter from "./TextInputWithCounter";

describe("TextInputWithCounter", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <TextInputWithCounter />
      </Router>
    );

    const component = getByRole("text-input-counter");
    expect(component).toBeInTheDocument();
  });
});

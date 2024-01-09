import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Cover from "./Cover";

describe("Cover", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Cover src="">
          <></>
        </Cover>
      </Router>
    );

    const component = getByRole("cover");
    expect(component).toBeInTheDocument();
  });
});

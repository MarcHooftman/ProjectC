import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <NotFound />
      </Router>
    );

    const page = getByRole("not-found-page");
    expect(page).toBeInTheDocument();
  });
});

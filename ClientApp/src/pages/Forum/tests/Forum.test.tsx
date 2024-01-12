import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Forum from "../components/Forum";

describe("Forum", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Forum />
      </Router>
    );

    const forum = getByRole("forum-page");
    expect(forum).toBeInTheDocument();
  });
});

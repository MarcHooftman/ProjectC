import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Forum from "../components/Forum";

describe("Forum", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    localStorage.setItem("temporaryUser", "test");
    const renderResult = render(
      <Router>
        <Forum />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the forum-page", () => {
    const forum = getByRole("forum-page");
    expect(forum).toBeInTheDocument();
  });

  it("displays the post-button", () => {
    const post = getByRole("post-button");
    expect(post).toBeInTheDocument();
  });

  it("displays the filter-dropdown", () => {
    const filter = getByRole("filter-dropdown");
    expect(filter).toBeInTheDocument();
  });
});

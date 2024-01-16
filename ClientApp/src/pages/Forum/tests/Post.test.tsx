import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../components/Post/Post";

describe("Post", () => {  
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <Post />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the post-page", () => {
    const post = getByRole("post-page");
    expect(post).toBeInTheDocument();
  });

  // it("displays the tags", () => {
  //   const tagRow = getByRole("tag-row");
  //   const tagInput = getByRole("tag-input");
  //   expect(tagRow).toBeInTheDocument();
  //   expect(tagInput).toBeInTheDocument();
  // })
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../components/Post/Post";

describe("Post", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Post />
      </Router>
    );

    const post = getByRole("post-page");
    expect(post).toBeInTheDocument();
  });
});

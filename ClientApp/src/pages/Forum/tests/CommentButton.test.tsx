import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CommentButton from "../components/ForumPostButtons/CommentButton";

describe("CommentButton", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <CommentButton />
      </Router>
    );

    const commentButton = getByRole("comment-button");
    expect(commentButton).toBeInTheDocument();
  });
});

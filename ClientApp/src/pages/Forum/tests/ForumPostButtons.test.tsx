import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ForumPostButtons from "../components/ForumPostButtons/ForumPostButtons";

describe("ForumPostButtons", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <ForumPostButtons postId={1} />
      </Router>
    );

    const commentInput = document.getElementById("comment-input");
    if (commentInput) {
      commentInput.hidden = false;
      if (commentInput.parentElement) {
        commentInput.parentElement.hidden = false;
      }
    }
    const forumPostButtons = getByRole("comment-input");
    expect(forumPostButtons).toBeInTheDocument();
  });
});

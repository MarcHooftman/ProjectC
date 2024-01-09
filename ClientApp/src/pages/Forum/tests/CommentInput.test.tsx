import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CommentInput from "../components/ForumPostButtons/CommentInput";
import React from "react";

const ref = React.createRef();

describe("CommentInput", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <CommentInput
          postId={1}
          ref={ref as React.RefObject<HTMLInputElement>}
        />
      </Router>
    );

    const commentInput = getByRole("comment-input");
    expect(commentInput).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PostComment from "../components/PostComment";

const comment = {
  id: 1,
  title: "string",
  content: "string",
  tags: [],
  profileID: 1,
  time: "string",
  forumPostID: 1,
  comments: [],
  likes: [],
  reports: [],
};

describe("PostComment", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <PostComment comment={comment} />
      </Router>
    );

    const postComment = getByRole("post-comment");
    expect(postComment).toBeInTheDocument();
  });
});

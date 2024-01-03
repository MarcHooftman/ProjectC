import { render } from "@testing-library/react";
import ForumPostCard from "../components/ForumPostCard";
import { BrowserRouter as Router } from "react-router-dom";

const post = {
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

describe("ForumPostCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <ForumPostCard post={post} />
      </Router>
    );

    const forumPostCard = getByRole("forum-post-card");
    expect(forumPostCard).toBeInTheDocument();
  });
});

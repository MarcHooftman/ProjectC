import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminForumPostCard from "../components/AdminForumPostCard";
import IForumPost from "../../../../interfaces/IForumPost";

describe("AdminForumPostCard", () => {
  it("renders without crashing", () => {
    const forumPost: IForumPost = {
      id: 1,
      title: "Test Post",
      content: "This is a test post",
      tags: [],
      profileID: 1,
      time: "2022-01-01",
      forumPostID: null,
      comments: [],
      likes: [],
      reports: [],
    };

    const { getByRole } = render(
      <Router>
        <AdminForumPostCard post={forumPost} onDelete={() => {}} />
      </Router>
    );

    const component = getByRole("admin-forum-post-card");
    expect(component).toBeInTheDocument();
  });
});

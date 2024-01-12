import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import IForumPost from "../../../../interfaces/IForumPost";
import AdminPostComment from "../components/AdminPostComment";

describe("AdminForum", () => {
  it("renders without crashing", () => {
    const comment: IForumPost = {
      id: 1,
      title: "Test Comment",
      content: "This is a test comment",
      tags: [],
      profileID: 1,
      time: "2022-01-01",
      forumPostID: 1,
      comments: [],
      likes: [],
      reports: [],
    };

    const { getByRole } = render(
      <Router>
        <AdminPostComment comment={comment} onDelete={() => {}} />
      </Router>
    );

    const component = getByRole("admin-post-comment");
    expect(component).toBeInTheDocument();
  });
});

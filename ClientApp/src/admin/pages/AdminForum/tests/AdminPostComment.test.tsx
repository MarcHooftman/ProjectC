import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import IForumPost from "../../../../interfaces/IForumPost";
import AdminPostComment from "../components/AdminPostComment";

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

describe("AdminPostComment", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminPostComment comment={comment} onDelete={() => {}} />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-post-comment", () => {
    const component = getByRole("admin-post-comment");
    expect(component).toBeInTheDocument();
  });

  it("displays the profile picture", () => {
    const component = getByRole("profile-picture");
    expect(component).toBeInTheDocument();
  });

  it("displays the comment date", () => {
    const component = getByRole("comment-date");
    expect(component).toBeInTheDocument();
  });

  it("displays the trash icon", () => {
    const component = getByRole("trash-icon");
    expect(component).toBeInTheDocument();
  });

  it("displays the comment content", () => {
    const component = getByRole("comment-content");
    expect(component).toBeInTheDocument();
  });
});

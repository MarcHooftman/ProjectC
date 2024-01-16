import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminForumPostCard from "../components/AdminForumPostCard";
import IForumPost from "../../../../interfaces/IForumPost";


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


describe("AdminForumPostCard", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminForumPostCard post={forumPost} onDelete={() => {}} />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-forum-post-card", () => {
    const component = getByRole("admin-forum-post-card");
    expect(component).toBeInTheDocument();
  });

  it("displays the post-title", () => {
    const title = getByRole("post-title");
    expect(title).toBeInTheDocument();
  });

  it("displays the post-content", () => {
    const content = getByRole("post-content");
    expect(content).toBeInTheDocument();
  });

  it("displays the post-date", () => {
    const date = getByRole("post-date");
    expect(date).toBeInTheDocument();
  });

  it( "displays the post-comments", () => {
    const comments = getByRole("post-comments");
    expect(comments).toBeInTheDocument();
  });

  it( "displays the profile-name", () => {
    const name = getByRole("profile-name");
    expect(name).toBeInTheDocument();
  });

  it( "displays the profile-picture", () => {
    const image = getByRole("profile-picture");
    expect(image).toBeInTheDocument();
  });

  it( "displays the profile-member-since", () => {
    const memberSince = getByRole("profile-member-since");
    expect(memberSince).toBeInTheDocument();
  });

  it("displays the stat-icon", () => {
    const icon = getByRole("stat-icon");
    expect(icon).toBeInTheDocument();
  });

  it("displays the trash-icon", () => {
    const icon = getByRole("trash-icon");
    expect(icon).toBeInTheDocument();
  });

});

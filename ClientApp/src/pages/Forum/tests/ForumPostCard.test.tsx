import { render } from "@testing-library/react";
import ForumPostCard from "../components/ForumPostCard";
import { BrowserRouter as Router } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { MsalReactTester } from "msal-react-tester";
import { ReactElement, ReactNode } from "react";

const post = {
  id: 1,
  title: "string",
  content: "string",
  tags: [],
  profileID: 1,
  time: "string",
  forumPostID: 1,
  comments: [{
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
  }],
  likes: [],
  reports: [],
};

describe("ForumPostCard", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
        <Router>
          <ForumPostCard post={post} collapsed={false} />
        </Router>
    );
    getByRole = renderResult.getByRole;
  });
  

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the forum-post-card", () => {
    const forumPostCard = getByRole("forum-post-card");
    expect(forumPostCard).toBeInTheDocument();
  });

  // it("displays the comment-button", () => {
  //   const commentButton = getByRole("comment-button");
  //   expect(commentButton).toBeInTheDocument();
  // });

  // it("displays the like-button", () => {
  //   const likeButton = getByRole("like-button");
  //   expect(likeButton).toBeInTheDocument();
  // });

  // it("displays the report-button", () => {
  //   const reportButton = getByRole("report-button");
  //   expect(reportButton).toBeInTheDocument();
  // });

  it("displays the post-comment", () => {
    const postComment = getByRole("post-comment");
    expect(postComment).toBeInTheDocument();
  });

  // it("displays the comment-input", () => {
  // const commentInput = document.getElementById("comment-input");
  // if (commentInput) {
  //   commentInput.hidden = false;
  //   if (commentInput.parentElement) {
  //     commentInput.parentElement.hidden = false;
  //   }
  // }
  //   const commentInput = getByRole("comment-input");
  //   expect(commentInput).toBeInTheDocument();
  // });
});

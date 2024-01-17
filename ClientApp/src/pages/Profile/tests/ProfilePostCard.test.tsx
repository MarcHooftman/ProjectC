import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfilePostCard from "../components/ProfilePostCard";

describe("ProfilePostCard", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <ProfilePostCard />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the profile-post-card", () => {
    const card = getByRole("profile-post-card");
    expect(card).toBeInTheDocument();
  });

  it("displays the post-title", () => {
    const title = getByRole("post-title");
    expect(title).toBeInTheDocument();
  });

  it("displays the post-date", () => {
    const date = getByRole("post-date");
    expect(date).toBeInTheDocument();
  });

  it("displays the post-content", () => {
    const content = getByRole("post-content");
    expect(content).toBeInTheDocument();
  });
});

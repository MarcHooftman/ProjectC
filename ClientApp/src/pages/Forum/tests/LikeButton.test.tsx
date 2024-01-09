import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LikeButton from "../components/ForumPostButtons/LikeButton";

describe("LikeButton", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <LikeButton postId={1} profileId={1} />
      </Router>
    );

    const likeButton = getByRole("like-button");
    expect(likeButton).toBeInTheDocument();
  });
});

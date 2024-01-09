import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfilePostCard from "../components/ProfilePostCard";

describe("ProfilePostCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <ProfilePostCard />
      </Router>
    );

    const card = getByRole("profile-post-card");
    expect(card).toBeInTheDocument();
  });
});

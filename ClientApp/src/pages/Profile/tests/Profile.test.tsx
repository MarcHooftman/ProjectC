import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "../components/Profile";

describe("EditProfile", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <Profile />
      </Router>
    );

    const page = getByRole("profile-page");
    expect(page).toBeInTheDocument();
  });
});

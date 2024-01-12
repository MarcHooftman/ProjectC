import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfileByID from "../components/ProfileByID/ProfileByID";

describe("ProfileByID", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <ProfileByID />
      </Router>
    );

    const page = getByRole("profile-by-id-page");
    expect(page).toBeInTheDocument();
  });
});

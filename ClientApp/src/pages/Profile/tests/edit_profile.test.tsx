import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EditProfile from "../components/Edit_Profile/edit_profile";

describe("EditProfile", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <EditProfile />
      </Router>
    );

    const page = getByRole("edit-profile-page");
    expect(page).toBeInTheDocument();
  });
});

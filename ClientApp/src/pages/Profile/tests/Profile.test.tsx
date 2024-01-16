import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "../components/Profile";

describe("EditProfile", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <Profile />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the profile-page", () => {
    const page = getByRole("profile-page");
    expect(page).toBeInTheDocument();
  });

  it("displays the personal-info-card", () => {
    const personalInfoCard = getByRole("personal-info-card");
    expect(personalInfoCard).toBeInTheDocument();
  });

  it("displays the user-data-card", () => {
    const userDataCard = getByRole("user-data-card");
    expect(userDataCard).toBeInTheDocument();
  });

  // it("displays the edit-profile-button", () => {
  //   const editProfileButton = getByRole("edit-profile-button");
  //   expect(editProfileButton).toBeInTheDocument();
  // });

  // it("displays the logout-button", () => {
  //   const logoutButton = getByRole("logout-button");
  //   expect(logoutButton).toBeInTheDocument();
  // });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EditProfile from "../components/Edit_Profile/edit_profile";

describe("EditProfile", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <EditProfile />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the edit-profile-page", () => {
    const page = getByRole("edit-profile-page");
    expect(page).toBeInTheDocument();
  });

  it("displays an role input", () => {
    const roleInput = getByRole("role-input");
    expect(roleInput).toBeInTheDocument();
  });

  it("displays a phone input", () => {
    const phoneInput = getByRole("phone-input");
    expect(phoneInput).toBeInTheDocument();
  });

  it("displays a bio input", () => {
    const bioInput = getByRole("bio-input");
    expect(bioInput).toBeInTheDocument();
  });


  it("displays a submit button", () => {
    const submitButton = getByRole("submit-button");
    expect(submitButton).toBeInTheDocument();
  });
});

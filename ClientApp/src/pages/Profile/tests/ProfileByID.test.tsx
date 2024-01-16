import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import ProfileByID from "../components/ProfileByID/ProfileByID";

describe("ProfileByID", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
          <ProfileByID />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the profile-by-id-page", () => {
    const page = getByRole("profile-by-id-page");
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
});

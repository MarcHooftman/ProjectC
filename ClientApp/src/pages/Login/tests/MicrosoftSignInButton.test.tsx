import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MicrosoftSignInButton } from "../components/Buttons/MicrosoftSignInButton";

describe("MicrosoftSignInButton", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <MicrosoftSignInButton />
      </Router>
    );

    const button = getByRole("microsoft-signin-button");
    expect(button).toBeInTheDocument();
  });
});

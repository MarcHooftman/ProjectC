import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TemporarySignInButton from "../components/Buttons/TemporarySignInButton";

describe("TemporarySignInButton", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <TemporarySignInButton />
      </Router>
    );

    const button = getByRole("temp-signin-button");
    expect(button).toBeInTheDocument();
  });
});

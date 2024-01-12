import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TemporaryLogin from "../components/TemporaryLogin/TemporaryLogin";

describe("TemporaryLogin", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <TemporaryLogin />
      </Router>
    );

    const page = getByRole("temp-login-page");
    expect(page).toBeInTheDocument();
  });
});

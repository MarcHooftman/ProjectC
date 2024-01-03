import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UserDataCard from "../components/UserDataCard";

describe("UserDataCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <UserDataCard posts={[]} />
      </Router>
    );

    const card = getByRole("user-data-card");
    expect(card).toBeInTheDocument();
  });
});

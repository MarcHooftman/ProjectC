import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalInfoCardSkeleton from "../components/PersonalInfoCardSkeleton";

describe("EditProfile", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <PersonalInfoCardSkeleton />
      </Router>
    );

    const card = getByRole("personal-info-card-skeleton");
    expect(card).toBeInTheDocument();
  });
});

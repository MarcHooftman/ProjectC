import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalInfoCard from "../components/PersonalInfoCard";

describe("PersonalInfoCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <PersonalInfoCard />
      </Router>
    );

    const card = getByRole("personal-info-card");
    expect(card).toBeInTheDocument();
  });
});

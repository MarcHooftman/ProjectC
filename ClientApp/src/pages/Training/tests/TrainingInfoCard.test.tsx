import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TrainingInfoCard from "../components/TrainingInfoCard";

describe("TrainingInfoCard", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <TrainingInfoCard />
      </Router>
    );

    const card = getByRole("training-info-card");
    expect(card).toBeInTheDocument();
  });
});

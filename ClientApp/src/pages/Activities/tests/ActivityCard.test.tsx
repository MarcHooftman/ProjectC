import { render } from "@testing-library/react";
import ActivityCard from "../components/ActivityCard";
import { BrowserRouter as Router } from "react-router-dom";

describe("ActivityCard", () => {
  it("renders without crashing", () => {
    const activity = {
      id: 1,
      title: "Test Activity",
      time: new Date().toISOString(),
      location: "Test Location",
      description: "Test Description",
    };

    const { getByText } = render(
      <Router>
        <ActivityCard activity={activity} />
      </Router>
    );

    // Check if the card is displayed
    const cardTitle = getByText("Test Activity");
    expect(cardTitle).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import ActivityCalendar from "../components/ActivityCalendar/ActivityCalendar";
import { BrowserRouter as Router } from "react-router-dom";

describe("ActivityCalendar", () => {
  it("renders without crashing", () => {
    const activities = [
      {
        id: 1,
        title: "Test Activity",
        time: new Date().toISOString(),
        location: "Test Location",
        description: "Test Description",
      },
    ];

    const { getByRole } = render(
      <Router>
        <ActivityCalendar activities={activities} />
      </Router>
    );

    // Check if the calendar is displayed
    const calendar = getByRole("calendar-card");
    expect(calendar).toBeInTheDocument();
  });
});

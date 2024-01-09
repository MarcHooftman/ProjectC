import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminActivityCard from "../components/AdminActivityCard";
import IActivity from "../../../../interfaces/IActivity";

describe("AdminActivityCard", () => {
  it("renders without crashing", () => {
    const activity: IActivity = {
      time: "12:00 PM",
      location: "New York",
      title: "Activity Title",
      description: "Activity Description",
    };

    const { getByRole } = render(
      <Router>
        <AdminActivityCard activity={activity} onDelete={() => {}} />
      </Router>
    );

    const page = getByRole("admin-activity-card");
    expect(page).toBeInTheDocument();
  });
});

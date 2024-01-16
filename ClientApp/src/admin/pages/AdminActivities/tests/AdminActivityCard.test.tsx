import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminActivityCard from "../components/AdminActivityCard";
import IActivity from "../../../../interfaces/IActivity";

const activity: IActivity = {
    time: "12:00 PM",
    location: "New York",
    title: "Activity Title",
    description: "Activity Description",
};

describe("AdminActivityCard", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminActivityCard activity={activity} onDelete={() => {}} />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-activity-card", () => {
    const page = getByRole("admin-activity-card");
    expect(page).toBeInTheDocument();
  });

  it("displays the activity-title", () => {
    const title = getByRole("activity-title");
    expect(title).toBeInTheDocument();
  });

  it("displays the activity-description", () => {
    const description = getByRole("activity-description");
    expect(description).toBeInTheDocument();
  });

  it("displays the activity-location", () => {
    const location = getByRole("activity-location");
    expect(location).toBeInTheDocument();
  });

  it("displays the activity-date", () => {
    const date = getByRole("activity-date");
    expect(date).toBeInTheDocument();
  });
});

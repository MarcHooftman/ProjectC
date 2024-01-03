import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NextActivityCard from "../components/NextActivityCard";
import IActivity from "../../../interfaces/IActivity";
import { act } from "react-dom/test-utils";

describe("NextActivityCard", () => {
  it("renders without crashing", async () => {
    const mockActivity: IActivity = {
      title: "",
      description: "",
      location: "",
      time: "",
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockActivity),
      })
    );

    const { findByRole } = render(
      <Router>
        <NextActivityCard />
      </Router>
    );

    await waitFor(async () => {
      const nextActivityCard = await findByRole("next-activity-card");
      expect(nextActivityCard).toBeInTheDocument();
    });
  });
});

import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NextTrainingCard from "../components/NextTrainingCard";
import { act } from "react-dom/test-utils";

describe("NextTrainingCard", () => {
  it("renders without crashing", async () => {
    const mockTrainings = [
      {
        title: "",
        description: "",
        url: "",
        tags: [],
      },
    ];

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockTrainings),
      })
    );

    const { findByRole } = render(
      <Router>
        <NextTrainingCard />
      </Router>
    );
    await waitFor(async () => {
      const nextTrainingCard = await findByRole("next-training-card");
      expect(nextTrainingCard).toBeInTheDocument();
    });
  });
});

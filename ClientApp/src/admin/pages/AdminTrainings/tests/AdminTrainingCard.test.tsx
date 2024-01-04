import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminTrainingCard from "../components/AdminTrainingCard";
import ITraining from "../../../../interfaces/ITraining";

describe("AdminTrainingCard", () => {
  it("renders without crashing", () => {
    const mockTraining: ITraining = {
      title: "Mock Training",
      description: "This is a mock training",
      tags: [],
    };

    const { getByRole } = render(
      <Router>
        <AdminTrainingCard Training={mockTraining} onDelete={() => {}} />
      </Router>
    );

    const component = getByRole("admin-training-card");
    expect(component).toBeInTheDocument();
  });
});

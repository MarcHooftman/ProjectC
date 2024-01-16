import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminTrainingCard from "../components/AdminTrainingCard";
import ITraining from "../../../../interfaces/ITraining";

const mockTraining: ITraining = {
  title: "Mock Training",
  description: "This is a mock training",
  tags: [],
};

describe("AdminTrainingCard", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <AdminTrainingCard Training={mockTraining} onDelete={() => {}} />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the admin-training-card", () => {
    const component = getByRole("admin-training-card");
    expect(component).toBeInTheDocument();
  });

  it("renders the training-title", () => {
    const component = getByRole("training-title");
    expect(component).toBeInTheDocument();
  });

  it("renders the training-description", () => {
    const component = getByRole("training-description");
    expect(component).toBeInTheDocument();
  });
});

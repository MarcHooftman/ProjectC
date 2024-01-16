import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminEditTrainings from "../components/AdminEditTrainings";

describe("AdminEditTraining", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminEditTrainings />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-edit-training-page", () => {
    const page = getByRole("admin-edit-training-page");
    expect(page).toBeInTheDocument();
  });

  it("displays the title input", () => {
    const input = getByRole("title-input");
    expect(input).toBeInTheDocument();
  });

  it("displays the description input", () => {
    const input = getByRole("text-input-counter");
    expect(input).toBeInTheDocument();
  });

  it("displays the url input", () => {
    const input = getByRole("url-input");
    expect(input).toBeInTheDocument();
  });

  it("displays the tag input", () => {
    const input = getByRole("tag-input");
    expect(input).toBeInTheDocument();
  });

  it("displays the submit button", () => {
    const button = getByRole("submit-button");
    expect(button).toBeInTheDocument();
  });
});

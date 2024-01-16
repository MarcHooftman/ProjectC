import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddTrainings from "../components/AdminAddTrainings";

describe("AdminAddTraining", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminAddTrainings />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-add-training-page", () => {
    const page = getByRole("admin-add-training-page");
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

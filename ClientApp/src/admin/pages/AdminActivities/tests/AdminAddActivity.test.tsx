import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminAddActivity from "../components/AdminAddActivity";

describe("AdminAddActivity", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminAddActivity />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-add-activity-page", () => {
    const page = getByRole("admin-add-activity-page");
    expect(page).toBeInTheDocument();
  });

  it("displays the title-input", () => {
    const title = getByRole("title-input");
    expect(title).toBeInTheDocument();
  });

  it("displays the description-input", () => {
    const description = getByRole("description-input");
    expect(description).toBeInTheDocument();
  });

  it("displays the location-input", () => {
    const location = getByRole("location-input");
    expect(location).toBeInTheDocument();
  });

  it("displays the date-input", () => {
    const date = getByRole("date-input");
    expect(date).toBeInTheDocument();
  });

  it("displays the time-input", () => {
    const time = getByRole("time-input");
    expect(time).toBeInTheDocument();
  });

  it("displays the submit-button", () => {
    const button = getByRole("submit-button");
    expect(button).toBeInTheDocument();
  });
});

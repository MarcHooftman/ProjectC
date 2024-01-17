import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLayout from "./AdminLayout";

describe("AdminLayout", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    const renderResult = render(
      <Router>
        <AdminLayout role="container" />
      </Router>
    );
    getByRole = renderResult.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-layout", () => {
    const component = getByRole("admin-layout");
    expect(component).toBeInTheDocument();
  });

  it("displays the container", () => {
    const component = getByRole("container");
    expect(component).toBeInTheDocument();
  });
});

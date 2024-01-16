import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";
import { act } from "react-dom/test-utils";

describe("FilterDropdown", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(async () => {
    await act(async () => {
      const component = render(
        <Router>
          <FilterDropdown page="/" show={true} />
        </Router>
      );
      getByRole = component.getByRole;
    });
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders the filter-dropdown", async () => {
    await waitFor(() => {
      const component = getByRole("filter-dropdown");
      expect(component).toBeInTheDocument();
    });
  });

  it("renders the dropdown-toggle", async () => {
    await waitFor(() => {
      const component = getByRole("dropdown-toggle");
      expect(component).toBeInTheDocument();
    });
  });

  it("renders the dropdown-search", async () => {
    await waitFor(() => {
      const component = getByRole("dropdown-search");
      expect(component).toBeInTheDocument();
    });
  });

  it("renders the dropdown-search-submit", async () => {
    await waitFor(() => {
      const component = getByRole("dropdown-search-submit");
      expect(component).toBeInTheDocument();
    });
  });

  it("renders the remove-filter-option", async () => {
    await waitFor(() => {
      const component = getByRole("remove-filter-option");
      expect(component).toBeInTheDocument();
    });
  });
});

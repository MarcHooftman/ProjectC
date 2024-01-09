import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EmployeeTable from "../components/Tables/EmployeeTable";

describe("EmployeeTable", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <EmployeeTable profiles={[]} />
      </Router>
    );

    const component = getByRole("employee-table");
    expect(component).toBeInTheDocument();
  });
});

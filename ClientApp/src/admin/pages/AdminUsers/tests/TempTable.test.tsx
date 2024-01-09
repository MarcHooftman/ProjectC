import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TempTable from "../components/Tables/TempTable";

describe("TempTable", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <TempTable tempUsers={[]} />
      </Router>
    );

    const component = getByRole("temp-table");
    expect(component).toBeInTheDocument();
  });
});

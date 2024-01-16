import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TempTable from "../components/Tables/TempTable";

const tempUser = {
  id: 1,
  email: "ajefoabfbajocnaefneanfaknp@test.net", // long email for test purposes
  expirationDate: "2022-12-31",
  verificationCode: "123456",
};

describe("TempTable", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <TempTable tempUsers={[tempUser]} />
      </Router>
    );
    getByRole = component.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a temp-table", () => {
    const component = getByRole("temp-table");
    expect(component).toBeInTheDocument();
  });

  it("table contains the temp user", () => {
    const component = getByRole("temp-table");
    expect(component).toHaveTextContent(tempUser.email);
  });
});

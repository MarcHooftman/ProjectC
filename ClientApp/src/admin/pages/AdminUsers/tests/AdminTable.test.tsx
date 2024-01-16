import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminTable from "../components/Tables/AdminTable";
import IAdmin from "../../../../interfaces/IAdmin";

const admin: IAdmin = {
  id: 1,
  level: 1,
  email: "anaefoueoeauofeonaeof@test.net", // long email for testing purposes
  password: "string",
};

describe("AdminTable", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <AdminTable admins={[admin]} />
      </Router>
    );
    getByRole = component.getByRole;
  });
  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a admin-table", () => {
    const component = getByRole("admin-table");
    expect(component).toBeInTheDocument();
  });

  it("table contains the admin", () => {
    const component = getByRole("admin-table");
    expect(component).toHaveTextContent(admin.email);
  });
});

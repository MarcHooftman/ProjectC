import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EmployeeTable from "../components/Tables/EmployeeTable";

const profile = {
  id: 1,
  fullName: "faekheeanjamcsbajojbecobac", // impossible name for testing
  role: "Developer",
  dateOfBirth: "1990-01-01",
  email: "john.doe@example.com",
  training: [],
  activity: [],
  memberSince: "2021-01-01",
  phoneNumber: "+1234567890",
  bio: "Lorem ipsum dolor sit amet",
  department: "Engineering",
  userPrincipalName: "john.doe@example.com",
};

describe("EmployeeTable", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    const component = render(
      <Router>
        <EmployeeTable profiles={[profile]} />
      </Router>
    );
    getByRole = component.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a employee-table", () => {
    const component = getByRole("employee-table");
    expect(component).toBeInTheDocument();
  });

  it("table contains the profile", () => {
    const component = getByRole("employee-table");
    expect(component).toHaveTextContent(profile.fullName);
  });
});

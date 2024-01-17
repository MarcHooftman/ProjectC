import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminReports from "./AdminReports";
import IReport from "../../../interfaces/IReport";

const mockReport: IReport = {
  id: undefined,
  forumPostID: 0,
  profileID: 0,
  spam: false,
  inappropriate: false,
  notWorkRelated: false,
  other: false,
  elaboration: "",
};

describe("AdminReports", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
      // localStorage.setItem("admin", "1")
      // global.fetch = jest.fn().mockImplementation(() =>
      //   Promise.resolve({
      //     json: () => Promise.resolve([mockReport]),
      //   })
      // );
      
      const renderResult = render(
        <Router>
          <AdminReports />
        </Router>
      );
      getByRole = renderResult.getByRole;
    
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the admin-reports-page", () => {
    const page = getByRole("admin-reports-page");
    expect(page).toBeInTheDocument();
  });

  // gives warning for some reason?
  // it("displays the reports table", async () => {
  //   await waitFor(() => {
  //     const table = getByRole("report-table");
  //     expect(table).toBeInTheDocument();
  //   });
  // });
});

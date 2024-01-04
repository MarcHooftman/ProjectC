import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminForum from "../components/AdminForum";

describe("AdminForum", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <AdminForum />
      </Router>
    );

    const page = getByRole("admin-forum-page");
    expect(page).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ReportButton from "../components/ForumPostButtons/ReportButton";

describe("ReportButton", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Router>
        <ReportButton postId={1} profileId={1} />
      </Router>
    );

    const reportButton = getByRole("report-button");
    expect(reportButton).toBeInTheDocument();
  });
});

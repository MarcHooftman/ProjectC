import { render } from "@testing-library/react";
import Activities from "../components/Activities";
import { BrowserRouter as Router } from "react-router-dom";
import { MsalReactTester } from "msal-react-tester";
import { MsalProvider } from "@azure/msal-react";
import { ReactNode } from "react";

describe("Activities", () => {
  let getByRole: (text: string) => HTMLElement;
  beforeEach(() => {
    localStorage.setItem("temporaryUser", "test");
    const renderResult = render(
        <Router>
          <Activities />
        </Router>
    );
    getByRole = renderResult.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("displays the activities-page", () => {
    //msalReactTester.isLogged();
    const activities = getByRole("activities-page");
    expect(activities).toBeInTheDocument();
  });

  it("displays the calendar-card", () => {
    //msalReactTester.isLogged();
    const calendarCard = getByRole("calendar-card");
    expect(calendarCard).toBeInTheDocument();
  });

  it("displays the month-select-form", () => {
    //msalReactTester.isLogged();
    const monthSelectForm = getByRole("month-select-form");
    expect(monthSelectForm).toBeInTheDocument();
  });
});

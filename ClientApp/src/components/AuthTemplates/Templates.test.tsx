import { render } from "@testing-library/react";
import CustomAuthenticatedTemplate from "./CustomAuthenticatedTemplate";
import CustomUnauthenticatedTemplate from "./CustomUnauthenticatedTemplate";

describe("CustomAuthenticatedTemplate", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    localStorage.setItem("temporaryUser", "test");
    const component = render(
      <CustomAuthenticatedTemplate>
        <div role="child" />
      </CustomAuthenticatedTemplate>
    );
    getByRole = component.getByRole;
  });

  afterEach(() => {
    localStorage.removeItem("temporaryUser");
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a auth-template", () => {
    const component = getByRole("auth-template");
    expect(component).toBeInTheDocument();
  });

  it("renders a child", () => {
    const component = getByRole("child");
    expect(component).toBeInTheDocument();
  });
});

describe("CustomUnauthenticatedTemplate", () => {
  let getByRole: (role: string) => HTMLElement;
  beforeEach(() => {
    localStorage.removeItem("temporaryUser"); // just in case
    const component = render(
      <CustomUnauthenticatedTemplate>
        <div role="child" />
      </CustomUnauthenticatedTemplate>
    );
    getByRole = component.getByRole;
  });

  it("renders without crashing", () => {
    expect(getByRole).toBeDefined();
  });

  it("renders a unauth-template", () => {
    const component = getByRole("unauth-template");
    expect(component).toBeInTheDocument();
  });

  // it("renders a child", () => {
  //   const component = getByRole("child");
  //   expect(component).toBeInTheDocument();
  // });
});

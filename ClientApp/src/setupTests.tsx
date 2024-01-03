jest.mock("@azure/msal-react", () => ({
  AuthenticatedTemplate: jest
    .fn()
    .mockImplementation(({ children }) => children),
  UnauthenticatedTemplate: jest
    .fn()
    .mockImplementation(({ children }) => children),
  useIsAuthenticated: jest.fn().mockReturnValue(true),
}));

jest.mock("@azure/msal-browser", () => ({
  PublicClientApplication: jest.fn().mockImplementation(() => ({
    getAllAccounts: jest.fn().mockReturnValue([]),
    handleRedirectPromise: jest.fn().mockResolvedValue(null),
    loginRedirect: jest.fn(),
    acquireTokenSilent: jest.fn(),
    acquireTokenRedirect: jest.fn(),
  })),
}));

import "@testing-library/jest-dom";

window.scrollTo = jest.fn();

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

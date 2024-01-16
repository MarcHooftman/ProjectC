jest.mock("@azure/msal-react", () => ({
  AuthenticatedTemplate: jest
    .fn()
    .mockImplementation(({ children }) => <>{children}</>),
  UnauthenticatedTemplate: jest
    .fn()
    .mockImplementation(({ children }) => <>{children}</>),
  useIsAuthenticated: jest.fn().mockReturnValue(true),
  MsalProvider: jest.fn().mockImplementation(({ children }) => <>{children}</>),
}));

jest.mock("@azure/msal-browser", () => ({
  LogLevel: { Error: 0 },
  InteractionType: { Redirect: 0, Popup: 1, Silent: 2 },
  InteractionStatus: { Startup: 0, Redirect: 1, Popup: 2, Silent: 3 },
  BrowserCacheLocation: { SessionStorage: 0, LocalStorage: 1 },
  PublicClientApplication: jest.fn().mockImplementation(() => ({
    getAllAccounts: jest.fn().mockReturnValue([]),
    handleRedirectPromise: jest.fn().mockResolvedValue(null),
    loginRedirect: jest.fn(),
    acquireTokenSilent: jest.fn(),
    acquireTokenRedirect: jest.fn(),
    acquireTokenPopup: jest.fn(),
    logout: jest.fn(),
  })),
  Logger: jest.fn().mockImplementation(() => ({
    loggerCallback: jest.fn(),
    piiLoggingEnabled: false,
    logLevel: { Error: 0 },
    correlationId: 'mock_test',
  })),
  AccountInfo: jest.fn(),
  AuthenticationResult: jest.fn(),
  Configuration: jest.fn(),
  EndSessionRequest: jest.fn(),
  RedirectRequest: jest.fn(),
  SilentRequest: jest.fn(),
  PopupRequest: jest.fn(),
  EventMessage: jest.fn(),
  EventType: jest.fn(),
  EventError: jest.fn(),
  EventPayload: jest.fn(),
  EventCallbackFunction: jest.fn(),
}));


import "@testing-library/jest-dom";
//import 'msal-react-tester';



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

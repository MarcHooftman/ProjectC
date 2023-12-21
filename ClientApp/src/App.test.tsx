jest.mock("@azure/msal-react", () => ({
  AuthenticatedTemplate: jest
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

import { createRoot } from "react-dom/client";
import App from "./App";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

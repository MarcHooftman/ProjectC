import { PublicClientApplication, LogLevel } from "@azure/msal-browser";
import { callMsGraph } from "../graph";
import { loginRequest } from "../authConfig";
import { useIsAuthenticated } from "@azure/msal-react";

const allowedRedirectURIs = [
  "https://antesonboarding.vercel.app/",
  "https://marc-hooftman.ddns.net/",
  "https://192.168.178.80:44463/",
  "https://localhost:44463/",
];

function createMsalConfig() {
  const currentUri = window.location.href;
  const currentBaseUri =
    allowedRedirectURIs.find((uri) => currentUri.startsWith(uri)) || "";

  const msalConfig = {
    auth: {
      clientId: "fd5759c0-0d95-4c39-92e1-a83537f78e73",
      authority: "https://login.microsoftonline.com/organizations",
      redirectUri: currentBaseUri,
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      loggerOptions: {
        loggerCallback: (level: any, message: any, containsPii: any) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              return;
          }
        },
      },
    },
  };
  return msalConfig;
}

export let msalInstance = new PublicClientApplication(createMsalConfig());

async function getGraphData() {
  // if (!useIsAuthenticated()) {
  //   return null;
  // }

  const accounts = msalInstance.getAllAccounts();

  const graphData = await msalInstance
    .acquireTokenSilent({
      ...loginRequest,
      account: accounts[0],
    })
    .then((response) => {
      const result = callMsGraph(response.accessToken).then((response) => {
        return response;
      });
      return result;
    });

  return graphData;
}

export { createMsalConfig, getGraphData };

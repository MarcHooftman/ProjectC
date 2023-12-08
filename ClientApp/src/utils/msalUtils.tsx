import { PublicClientApplication, LogLevel } from "@azure/msal-browser";
import { callMsGraph } from "../graph";
import { loginRequest } from "../authConfig";

function createMsalConfig(redirectUri: string = "") {
    const currentUri = window.location.href;
    const uri = currentUri.includes("ngrok") ? "https://8437-2a02-a212-92c8-8400-243e-df73-abaa-1a08.ngrok-free.app" : "https://localhost:44463";

    const msalConfig = {
        auth: {
            clientId: "fd5759c0-0d95-4c39-92e1-a83537f78e73",
            authority: "https://login.microsoftonline.com/organizations",
            redirectUri: `${uri}/${redirectUri}`
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
                }
            }
        },
    };
    return msalConfig;
}

export const msalInstance = new PublicClientApplication(createMsalConfig());


async function getGraphData() {
    const accounts = msalInstance.getAllAccounts();

    const graphData = await msalInstance
        .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        })
        .then((response) => {
            const result = callMsGraph(response.accessToken).then((response) => {
                return response;
            })
            return result;
        })

    return graphData;
}

export { createMsalConfig, getGraphData };

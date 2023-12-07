import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { loginRequest } from "../authConfig";
import { callMsGraph, callMsGraphPhoto, callMsGraphUser } from "../graph";

const useGraphData = (userPrincipalName?: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { instance, accounts } = useMsal();

  const [graphData, setGraphData] = useState<IGraphData | null>(null);
  const [graphDataPhoto, setGraphDataPhoto] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        console.log('Token:', response.accessToken); // Add this line
        if (userPrincipalName) {
          callMsGraphUser(response.accessToken, userPrincipalName).then(
            (response) => setGraphData(response)
          ).catch((error) => console.error('Error in callMsGraphUser:', error));;
        } else {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          ).catch((error) => console.error('Error in callMsGraph:', error));;
        }
        //callMsGraphPhoto(response.accessToken).then(response => setGraphDataPhoto(response));
      })
      .catch((error) => console.error('Error in acquireTokenSilent:', error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    RequestProfileData();
  }, [userPrincipalName]); // Add any other dependencies here

  return { loading, graphData, graphDataPhoto };
};

export default useGraphData;

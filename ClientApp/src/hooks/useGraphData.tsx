import { useState, useEffect } from "react";
import { getGraphData } from "../utils/msalUtils";
import { useIsAuthenticated } from "@azure/msal-react";

const useGraphData = (userPrincipalName?: string) => {
  const [graphData, setGraphData] = useState<IGraphData>();
  const isAuthenticated = useIsAuthenticated();

  async function fetchData() {
    const data = await getGraphData().then(response => { return response as IGraphData });
    setGraphData(data);
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [userPrincipalName]); // fetchData will be called when the component mounts and when userPrincipalName changes

  return { graphData };
};

export default useGraphData;
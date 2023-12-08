import { useState, useEffect } from "react";
import { getGraphData } from "../utils/msalUtils";
import { useIsAuthenticated } from "@azure/msal-react";

const useGraphData = () => {
  const [graphData, setGraphData] = useState<IGraphData>();
  const isAuthenticated = useIsAuthenticated();

  async function fetchData() {
    const data = await getGraphData().then(response => { return response as IGraphData });
    setGraphData(data as IGraphData);
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchData()
    }
  }, [isAuthenticated]);

  return { graphData };
};

export default useGraphData;
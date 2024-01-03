import { useState, useEffect } from "react";
import { getGraphData } from "../utils/msalUtils";
import { useIsAuthenticated } from "@azure/msal-react";
import useLogin from "./useLogin";
import IGraphData from "../interfaces/IGraphData";

const useGraphData = () => {
  const [graphData, setGraphData] = useState<IGraphData>();
  const isAuthenticated = useIsAuthenticated();
  const login = useLogin();

  async function fetchData() {
    try {
      const data = await getGraphData().then((response) => {
        return response as IGraphData;
      });
      setGraphData(data as IGraphData);
    } catch {
      login();
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return { graphData };
};

export { useGraphData };

import { createContext } from "react";
import IGraphData from "../interfaces/IGraphData";

interface IGraphDataContext {
  graphData: IGraphData;
  setGraphData: (data: IGraphData) => void;
}

const graphDataContext = createContext<IGraphDataContext>({
  graphData: {
    displayName: "",
    givenName: "",
    id: "",
    jobTitle: "",
    mail: "",
    mobilePhone: "",
    officeLocation: "",
    preferredLanguage: "",
    surname: "",
    userPrincipalName: "",
  },
  setGraphData: (_: IGraphData) => {},
});

export default graphDataContext;

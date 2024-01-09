import IGraphData from "../../interfaces/IGraphData";
import IProfile from "../../interfaces/IProfile";
import { getApiUrl } from "../../utils/getApiUrl";

export async function createProfile(graphData: IGraphData) {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const profile: IProfile = {
    fullName: graphData?.givenName + " " + graphData?.surname || "",
    role: graphData?.jobTitle || "",
    memberSince: formattedDate,
    department: graphData?.officeLocation || "",
    email: graphData?.mail || "",
    training: [],
    userPrincipalName: graphData?.userPrincipalName || "",
  };
  return await fetch(`${getApiUrl()}/profile`, {
    method: "POST",
    headers: {
      "ngrok-skip-browser-warning": "1",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  }).then((response) => {
    if (!response.ok) {
      console.error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
      return response.text().then((text) => {
        console.error(text);
        throw new Error(`Server responded with ${response.status}`);
      });
    }
    return response.json();
  });
}

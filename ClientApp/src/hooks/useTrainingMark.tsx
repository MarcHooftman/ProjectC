import { useState, useEffect } from "react";
import ITraining from "../interfaces/ITraining";
import { useGraphData } from "./useGraphData";
import IProfile from "../interfaces/IProfile";
import { getApiUrl } from "../utils/getApiUrl";

const useTrainingMark = () => {
  const [profile, setProfile] = useState<IProfile>();
  const { graphData } = useGraphData();
  useEffect(() => {
    if (graphData?.mail === undefined) return;
    fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`, {
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data as IProfile));
  }, [graphData]);

  const setTrainingState = (value: boolean, Training: ITraining) => {
    if (value === true) {
      fetch(`${getApiUrl()}/trainingprofile/`, {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profileId: profile?.id,
          trainingId: Training.id,
        }),
      });
    } else {
      fetch(`${getApiUrl()}/trainingprofile/${profile?.id}/${Training.id}`, {
        method: "DELETE",
        headers: {
          "ngrok-skip-browser-warning": "1",
          "Content-Type": "application/json",
        },
      });
    }
  };

  return { setTrainingState };
};
export default useTrainingMark;

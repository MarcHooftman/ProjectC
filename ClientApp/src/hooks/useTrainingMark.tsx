import { useState, useEffect } from "react";
import ITraining from "../interfaces/ITraining";
import useGraphData from "./useGraphData";
import IProfile from "../interfaces/IProfile";

const useTrainingMark = () => {
    const [profile, setProfile] = useState<IProfile>();
    const { graphData } = useGraphData();
    useEffect(() => {
        if (graphData?.mail === undefined) return;
        fetch(`${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`)
            .then((response) => response.json())
            .then((data) => setProfile(data as IProfile));
    }, [graphData]);
    
    const setTrainingState = (value: boolean, Training: ITraining) =>
    {
        if(value === true)
        {
            fetch(`${process.env.REACT_APP_API_URL}/trainingprofile/`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({profileId: profile?.id, trainingId: Training.id})});
        }
        else
        {
            fetch(`${process.env.REACT_APP_API_URL}/trainingprofile/${profile?.id}/${Training.id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }});
        }
        
    }

    return { setTrainingState };
    
  };
export default useTrainingMark;
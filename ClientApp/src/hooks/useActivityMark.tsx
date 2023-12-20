import { useState, useEffect } from "react";
import IActivity from "../interfaces/IActivity";
import useGraphData from "./useGraphData";
import IProfile from "../interfaces/IProfile";
import { getApiUrl } from "../utils/getApiUrl";

const useActivityMark = () => {
    const [profile, setProfile] = useState<IProfile>();
    const { graphData } = useGraphData();

    useEffect(() => {
        if (graphData?.mail === undefined) return;

        fetch(`${getApiUrl()}/profile/by-email/${graphData?.mail}`,
            {
                headers: {
                    "ngrok-skip-browser-warning": "1",
                }
            },)
            .then((response) => response.json())
            .then((data) => setProfile(data as IProfile));
    }, [graphData]);

    const setActivityState = (value: boolean, activity: IActivity) => {
        if (value === true) {
            fetch(`${getApiUrl()}/profileactivity/`, {
                method: "POST",
                headers: {
                    "ngrok-skip-browser-warning": "1",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    profileId: profile?.id,
                    activityId: activity.id,
                }),
            });
        } else {
            fetch(
                `${getApiUrl()}/profileactivity/${profile?.id}/${activity.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "ngrok-skip-browser-warning": "1",
                        "Content-Type": "application/json",
                    },
                }
            );
        }
    };


    return { setActivityState };
};

export default useActivityMark;
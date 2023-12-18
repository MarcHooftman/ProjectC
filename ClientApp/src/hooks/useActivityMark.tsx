import { useState, useEffect } from "react";
import IActivity from "../interfaces/IActivity";
import useGraphData from "./useGraphData";
import IProfile from "../interfaces/IProfile";

const useActivityMark = () => {
    const [profile, setProfile] = useState<IProfile>();
    const { graphData } = useGraphData();

    useEffect(() => {
        if (graphData?.mail === undefined) return;

        fetch(`${process.env.REACT_APP_API_URL}/profile/by-email/${graphData?.mail}`)
            .then((response) => response.json())
            .then((data) => setProfile(data as IProfile));
    }, [graphData]);

    const setActivityState = (value: boolean, activity: IActivity) => {
        if (value === true) {
            fetch(`${process.env.REACT_APP_API_URL}/profileactivity/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    profileId: profile?.id,
                    activityId: activity.id,
                }),
            });
        } else {
            fetch(
                `${process.env.REACT_APP_API_URL}/profileactivity/${profile?.id}/${activity.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }
    };

    return { setActivityState };
};

export default useActivityMark;
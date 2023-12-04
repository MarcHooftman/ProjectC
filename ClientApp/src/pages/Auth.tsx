import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGraphData from "../hooks/useGraphData";
import IProfile from "../interfaces/IProfile";

const Auth = () => {
  const [profileExists, setProfileExists] = useState<boolean>(false);
  const { graphData } = useGraphData();
  console.log("auth");

  const createProfile = () => {
    const profile: IProfile = {
      fullName: graphData?.displayName || "",
      role: graphData?.jobTitle || "",
      email: graphData?.mail || "",
      memberSince: new Date().toISOString(),
      department: graphData?.officeLocation || "",
      user: {
        email: graphData?.mail || "",
      },
    };
    fetch("https://localhost:7185/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((response) => {
      console.log(response.json());
      if (response.status === 200) {
        setProfileExists(true);
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://localhost:7185/api/profile/by-email/${graphData?.mail}`
    ).then((response) => {
      if (response.status === 200) {
        setProfileExists(true);
      } else {
        createProfile();
      }
    });
  }, []);

  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 500);
  //   }, [profileExists]);

  return <div>redirecting...</div>;
};

export default Auth;

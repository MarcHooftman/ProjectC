import { useNavigate } from "react-router-dom";
import { msalInstance } from "../utils/msalUtils";
import { useIsAuthenticated } from "@azure/msal-react";

const useLogout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const isTemporaryUser = localStorage.getItem("temporaryUser") !== undefined;

  const logout = async (redirectUri: string = "/") => {
    if (isTemporaryUser) {
      localStorage.removeItem("temporaryUser");
    }
    if (isAuthenticated) {
      try {
        await msalInstance.logoutPopup({
          postLogoutRedirectUri: "/",
        });
      } catch (error) {
        console.log(error);
      }
    }
    setTimeout(() => navigate(redirectUri), 250);
  };

  return logout;
};

export default useLogout;

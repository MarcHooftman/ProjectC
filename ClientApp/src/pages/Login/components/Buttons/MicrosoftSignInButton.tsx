import { useIsAuthenticated } from "@azure/msal-react";
import MicrosoftLogo from "../../../../assets/microsoft-logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useLogin from "../../../../hooks/useLogin";

export const MicrosoftSignInButton = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  const login = useLogin();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <div>
      <h6 className="antes-secondary">Inloggen met werk account</h6>
      <button
        className="sign-in-button"
        role="microsoft-signin-button"
        onClick={() => login()}
      >
        <img src={MicrosoftLogo} className="microsoft-logo" />
        Inloggen met Microsoft
      </button>
    </div>
  );
};

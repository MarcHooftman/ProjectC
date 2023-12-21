import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";
import MicrosoftLogo from "../../../assets/microsoft-logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useLogin from "../../../hooks/useLogin";


/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const MicrosoftSignInButton = () => {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();

    const login = useLogin()

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    })

    return (
        <div>
            <h6 className="antes-secondary">Inloggen met werk account</h6>
            <button className="sign-in-button" onClick={() => login()}>
                <img src={MicrosoftLogo} className="microsoft-logo" />
                Inloggen met Microsoft
            </button>
        </div>
    )
}
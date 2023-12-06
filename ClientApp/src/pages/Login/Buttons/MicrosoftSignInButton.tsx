import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";
import MicrosoftLogo from "../../../assets/microsoft-logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const MicrosoftSignInButton = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    })

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch((e) => {
            console.log(e);
        });
    };

    return (
        <div>
            <h6 className="text-dark opacity-50">Inloggen met werk account</h6>
            <button className="sign-in-button" onClick={handleLogin}>
                <img src={MicrosoftLogo} className="microsoft-logo" />
                Inloggen met Microsoft
            </button>
        </div>
    )
}
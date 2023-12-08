import { useNavigate } from "react-router-dom";
import { msalInstance } from "../utils/msalUtils";
import { loginRequest } from "../authConfig";

const useLogin = () => {
    const navigate = useNavigate()

    const login = async (redirectUri: string = "/") => {
        try {
            await msalInstance.loginRedirect(loginRequest);
            // Redirect to the given URI
            setTimeout(() => navigate(redirectUri), 250);
        } catch (error) {
            console.log(error);
        }
    };

    return login;
};

export default useLogin;